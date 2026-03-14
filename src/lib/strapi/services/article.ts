import { strapiGet } from "../client";
import type { ArticleNoContent } from "../types/article";
import type { StrapiListResponse } from "../types/common";

export async function getHomePageArticles() {
  return strapiGet<StrapiListResponse<ArticleNoContent>>(
    "/articles",
    {
      populate: "highlightedImage",
      fields: ["title", "description", "publishedAt"],
    },
    {
      tags: ["article"],
    },
  );
}
