/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly UPSTASH_SEARCH_REST_URL?: string;
  readonly UPSTASH_SEARCH_REST_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}