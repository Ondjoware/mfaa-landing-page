import { Suspense } from "react";
import GalleryFiltersSkeleton from "@/components/gallery/gallery-filters-skeleton";
import GalleryFiltersWrapper from "@/components/gallery/gallery-filters-wrapper";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryList from "@/components/gallery/gallery-list";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHeader />
      <Suspense fallback={<GalleryFiltersSkeleton />}>
        <GalleryFiltersWrapper />
      </Suspense>
      <GalleryList />
    </main>
  );
}
