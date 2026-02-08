import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-150 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1761593366036-2abd6aba236e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG11c2V1bSUyMGhpc3RvcmljYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzAzNjYzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Museu das Forças Armadas
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-8">
          Preservando a história, honrando o sacrifício e celebrando a coragem
          dos nossos heróis militares.
        </p>
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
