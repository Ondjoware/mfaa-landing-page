"use client";
import { Grid3x3, LayoutList, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "Todas" },
  { id: "vehicles", name: "Veículos" },
  { id: "aircraft", name: "Aeronaves" },
  { id: "naval", name: "Naval" },
  { id: "uniforms", name: "Uniformes" },
  { id: "medals", name: "Condecorações" },
  { id: "weapons", name: "Armamento" },
  { id: "ceremonies", name: "Cerimonias" },
];

export default function GalleryFilters() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="bg-white border-b border-neutral-200 sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar na galeria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-white text-neutral-900 shadow"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Grid3x3 className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-white text-neutral-900 shadow"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <LayoutList className="size-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-yellow-500 text-neutral-900 font-semibold"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
