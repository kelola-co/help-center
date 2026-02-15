import type { APIRoute } from "astro";
import { Search } from "@upstash/search";

type Language = "en" | "id" | "th";

type SearchResultDocument = {
  id: string;
  content?: {
    title?: string;
    excerpt?: string;
    body?: string;
  };
  metadata?: {
    lang?: string;
    categoryId?: string;
    categoryTitle?: string;
    url?: string;
  };
};

const SUPPORTED_LANGUAGES: Language[] = ["en", "id", "th"];
const JSON_HEADERS = { "Content-Type": "application/json" };

type RuntimeEnv = Partial<Record<"UPSTASH_SEARCH_REST_URL" | "UPSTASH_SEARCH_REST_TOKEN", string>>;

function getRequiredEnv(
  name: "UPSTASH_SEARCH_REST_URL" | "UPSTASH_SEARCH_REST_TOKEN",
  runtimeEnv?: RuntimeEnv,
): string {
  const value = runtimeEnv?.[name] ?? import.meta.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isLanguage(value: string | null): value is Language {
  return value !== null && SUPPORTED_LANGUAGES.includes(value as Language);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toSearchDocuments(value: unknown): SearchResultDocument[] {
  if (Array.isArray(value)) {
    return value.filter(isRecord) as SearchResultDocument[];
  }

  if (isRecord(value) && Array.isArray(value.documents)) {
    return value.documents.filter(isRecord) as SearchResultDocument[];
  }

  return [];
}

function response(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.trim() ?? "";
  const lang = url.searchParams.get("lang");

  if (!isLanguage(lang)) {
    return response(400, { error: "Invalid language. Use en, id, or th." });
  }

  if (query.length === 0) {
    return response(200, { results: [] });
  }

  try {
    const runtimeEnv = (locals as { runtime?: { env?: RuntimeEnv } }).runtime?.env;
    const client = new Search({
      url: getRequiredEnv("UPSTASH_SEARCH_REST_URL", runtimeEnv),
      token: getRequiredEnv("UPSTASH_SEARCH_REST_TOKEN", runtimeEnv),
    });
    const index = client.index("help-center");
    const searchResponse = await index.search({
      query,
      limit: 10,
      filter: `@metadata.lang = '${lang}'`,
      reranking: true,
    });

    return response(200, { results: toSearchDocuments(searchResponse) });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return response(500, { error: message });
  }
};
