const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_BASE_URL) {
  throw new Error("Missing environment variable: STRAPI_BASE_URL");
}

if (!STRAPI_API_TOKEN) {
  throw new Error("Missing environment variable: STRAPI_API_TOKEN");
}

export const strapiConfig = {
  apiBaseUrl: `${STRAPI_BASE_URL}/api`,
  token: STRAPI_API_TOKEN,
  baseUrl: STRAPI_BASE_URL,
} as const;
