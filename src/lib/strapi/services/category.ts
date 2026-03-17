import { strapiGet } from "../client";
import type { Category } from "../types/category";
import type { StrapiListResponse } from "../types/common";

export async function getCategories() {
  return strapiGet<StrapiListResponse<Category>>(
    "/categories",
    {
      sort: "Name",
    },
    {
      tags: ["category"],
    },
  );
}
