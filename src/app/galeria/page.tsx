import GalleryFilters from "@/components/gallery/gallery-filters";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryList from "@/components/gallery/gallery-list";
import { getCategories } from "@/lib/strapi/services/category";

export  default async function GalleryPage() {
  const {data: categories} = await getCategories();
  return (
    <main>
      <GalleryHeader />
      <GalleryFilters categories={categories} />
      <GalleryList />
    </main>
  );
}
