const filteredItems = [];
const viewMode = "grid";

export default function GalleryList() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-neutral-600">
            Mostrando {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "itens"}
          </p>
        </div>

        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* TODO: Add your grid item here */}
          </div>
        ) : (
          <div className="space-y-4">{/* TODO: Add your list item here */}</div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-600">
              Nenhum item encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
