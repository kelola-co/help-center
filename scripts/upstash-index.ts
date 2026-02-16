import "dotenv/config";
import matter from "gray-matter";
import { Search } from "@upstash/search";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { categories } from "../src/data/categories";
import { siteConfig } from "../src/utils/seo";

type Language = "en" | "id" | "th";

type DocumentContent = {
  title: string;
  excerpt: string;
  body: string;
};

type DocumentMetadata = {
  lang: Language;
  categoryId: string;
  categoryTitle: string;
  url: string;
};

type SearchDocument = {
  id: string;
  content: DocumentContent;
  metadata: DocumentMetadata;
};

const SUPPORTED_LANGUAGES: Language[] = ["en", "id", "th"];
const BATCH_SIZE = 100;
const MAX_TITLE_LENGTH = 220;
const MAX_EXCERPT_LENGTH = 500;
const MAX_BODY_LENGTH = 2200;

function stripMarkdown(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~]/g, "")
    .replace(/^>\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getCategoryTitleMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const category of categories) {
    map.set(`en:${category.id}`, category.title.en);
    map.set(`id:${category.id}`, category.title.id);
    map.set(`th:${category.id}`, category.title.th);
  }
  return map;
}

async function getMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function toTitle(input: unknown, fallback: string): string {
  return typeof input === "string" && input.trim().length > 0 ? input.trim() : fallback;
}

function truncate(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  }

  const trimmed = input.slice(0, maxLength);
  const safeEnd = trimmed.lastIndexOf(" ");
  if (safeEnd < 0) {
    return `${trimmed}...`;
  }
  return `${trimmed.slice(0, safeEnd)}...`;
}

async function buildDocuments(): Promise<SearchDocument[]> {
  const currentFile = fileURLToPath(import.meta.url);
  const projectRoot = path.resolve(path.dirname(currentFile), "..");
  const contentRoot = path.join(projectRoot, "src", "content");
  const categoryTitleMap = getCategoryTitleMap();
  const documents: SearchDocument[] = [];

  for (const lang of SUPPORTED_LANGUAGES) {
    const localeRoot = path.join(contentRoot, lang);
    const markdownFiles = await getMarkdownFiles(localeRoot);

    for (const filePath of markdownFiles) {
      const relativePath = path.relative(localeRoot, filePath);
      const normalized = relativePath.replaceAll(path.sep, "/");
      const [categoryId, articleFile] = normalized.split("/");
      if (!categoryId || !articleFile) {
        continue;
      }

      const articleId = articleFile.replace(/\.md$/, "");
      const fileContent = await readFile(filePath, "utf8");
      const parsed = matter(fileContent);
      const titleFallback = articleId.split("-").join(" ");
      const title = truncate(toTitle(parsed.data.title, titleFallback), MAX_TITLE_LENGTH);
      const excerpt = truncate(toTitle(parsed.data.excerpt, ""), MAX_EXCERPT_LENGTH);
      const body = truncate(stripMarkdown(parsed.content), MAX_BODY_LENGTH);
      const id = `${lang}/${categoryId}/${articleId}`;
      const categoryTitle = categoryTitleMap.get(`${lang}:${categoryId}`) ?? categoryId;

      documents.push({
        id,
        content: {
          title,
          excerpt,
          body,
        },
        metadata: {
          lang,
          categoryId,
          categoryTitle,
          url: `${siteConfig.url}/${id}`,
        },
      });
    }
  }

  return documents;
}

function getRequiredEnv(name: "UPSTASH_SEARCH_REST_URL" | "UPSTASH_SEARCH_REST_TOKEN"): string {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function main() {
  const url = getRequiredEnv("UPSTASH_SEARCH_REST_URL");
  const token = getRequiredEnv("UPSTASH_SEARCH_REST_TOKEN");
  const client = new Search({ url, token });
  const index = client.index<DocumentContent, DocumentMetadata>("help-center");
  const documents = await buildDocuments();

  if (documents.length === 0) {
    process.stdout.write("No content documents found. Nothing indexed.\n");
    return;
  }

  for (let indexOffset = 0; indexOffset < documents.length; indexOffset += BATCH_SIZE) {
    const batch = documents.slice(indexOffset, indexOffset + BATCH_SIZE);
    await index.upsert(batch);
    process.stdout.write(
      `Upserted ${Math.min(indexOffset + BATCH_SIZE, documents.length)} / ${documents.length} documents\n`,
    );
  }

  process.stdout.write("Search indexing finished successfully.\n");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "Unknown error";
  process.stderr.write(`Indexing failed: ${message}\n`);
  process.exit(1);
});
