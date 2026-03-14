import type { StrapiImage } from "./common";

export type Article = {
  title: string;
  description: string;
  highlightedImage: StrapiImage;
  content: unknown;
};

export type ArticleNoContent = Omit<Article, "content">;
