import { Calendar } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Visite o Museu</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Venha conhecer pessoalmente as histórias e artefatos que moldaram
          nossa nação. Agende sua visita hoje mesmo!
        </p>
        <Link
          href="/agendar-visita"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold px-8 py-4 rounded-lg transition-colors"
        >
          <Calendar className="size-5" />
          Agendar Visita Agora
        </Link>
      </div>
    </section>
  );
}
