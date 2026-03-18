import { getCategories } from "@/lib/strapi/services/category";
import GalleryFilters from "./gallery-filters";

export default async function GalleryFiltersWrapper() {
  const { data: categories } = await getCategories();
  return <GalleryFilters categories={categories} />;
}
