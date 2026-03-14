import { strapiConfig } from "./config";
import type { QueryParams } from "./types/common";

type FetchOptions = {
  revalidate?: number | false;
  tags?: string[];
};

/**
 * Builds a query string from the given QueryParams.
 *
 * The function takes care of converting the QueryParams object into a
 * query string that can be used with the Strapi API.
 *
 * @param {QueryParams} params - The QueryParams object to build the
 * query string from.
 *
 * @returns {string} The query string.
 */
function buildQueryString(params: QueryParams): string {
  const query = new URLSearchParams();

  if (params.page) query.set("pagination[page]", String(params.page));
  if (params.pageSize)
    query.set("pagination[pageSize]", String(params.pageSize));

  if (params.sort) {
    const sorts = Array.isArray(params.sort) ? params.sort : [params.sort];
    for (let i = 0; i < sorts.length; i++) {
      query.set(`sort[${i}]`, sorts[i]);
    }
  }

  if (params.populate) {
    const populates = Array.isArray(params.populate)
      ? params.populate
      : [params.populate];
    for (let i = 0; i < populates.length; i++) {
      query.set(`populate[${i}]`, populates[i]);
    }
  }

  if (params.filters) {
    for (const [key, value] of Object.entries(params.filters)) {
      query.set(`filters[${key}]`, String(value));
    }
  }

  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

/**
 * Makes a GET request to the Strapi API.
 *
 * This function makes a GET request to the Strapi API with the given path,
 * query parameters and fetch options.
 *
 * @param {string} path - The path of the Strapi API endpoint to call.
 * @param {QueryParams} [params] - The QueryParams object to build the query
 * string from. Defaults to an empty object.
 * @param {FetchOptions} [options] - The FetchOptions object to set the
 * revalidate and tags options for the Next.js API. Defaults to an empty
 * object.
 *
 * @returns {Promise<T>} The parsed response as a Promise of type T.
 *
 * @throws {StrapiError} If the response is not OK.
 */
export async function strapiGet<T>(
  path: string,
  params: QueryParams = {},
  options: FetchOptions = {},
): Promise<T> {
  const url = `${strapiConfig.apiBaseUrl}${path}${buildQueryString(params)}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${strapiConfig.token}`,
      "Content-Type": "application/json",
    },
    next: {
      revalidate: options.revalidate ?? 3600,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    throw new StrapiError(response.status, response.statusText, url);
  }

  return response.json() as Promise<T>;
}

export class StrapiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public url: string,
  ) {
    super(`Strapi request failed [${status}] ${statusText} — ${url}`);
    this.name = "StrapiError";
  }
}
