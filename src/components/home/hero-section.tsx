import { strapiConfig } from "@/lib/strapi/config";
import { getHeroSectionData } from "@/lib/strapi/services/museum-info";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function HeroSectionSkeleton() {
  return (
    <section className="relative h-150 overflow-hidden bg-neutral-800 animate-pulse">
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="h-16 md:h-24 w-2/3 bg-neutral-700 rounded-lg mb-6" />
        <div className="h-7 w-1/2 bg-neutral-700 rounded-lg mb-3" />
        <div className="h-7 w-2/5 bg-neutral-700 rounded-lg mb-8" />
        <div className="flex flex-wrap gap-4">
          <div className="h-14 w-44 bg-neutral-700 rounded-lg" />
          <div className="h-14 w-36 bg-neutral-700 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default async function HeroSection() {
  const { data: heroSection } = await getHeroSectionData();

  return (
    <section className="relative h-150 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${strapiConfig.baseUrl}${heroSection.backgroundImage.url})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {heroSection.title}
        </h1>
        {heroSection.subtitle && (
          <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-8">
            {heroSection.subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/agendar-visita"
            className="bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2"
          >
            Agendar Visita
            <ChevronRight className="size-5" />
          </Link>
          <Link
            href="/galeria"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors backdrop-blur-sm"
          >
            Ver Galeria
          </Link>
        </div>
      </div>
    </section>
  );
}
