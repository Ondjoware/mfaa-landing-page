import GalleryFilters from "@/components/gallery/gallery-filters";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryList from "@/components/gallery/gallery-list";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHeader />
      <GalleryFilters />
      <GalleryList />
    </main>
  );
}
