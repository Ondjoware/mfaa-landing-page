import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "A História das Medalhas Militares Brasileiras",
    image:
      "https://images.unsplash.com/photo-1651002488760-b9640c8cc819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG1lZGFscyUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc3MDM2NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Conheça as principais condecorações militares brasileiras e seus significados históricos, desde o Império até os dias atuais.",
    date: "15 de Janeiro, 2026",
  },
  {
    id: 2,
    title: "Armamento Histórico em Exposição",
    image:
      "https://images.unsplash.com/photo-1583330588510-3c6130f5d1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHdlYXBvbnMlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc3MDM2NjMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Uma coleção única de armamentos que contam a evolução tecnológica militar brasileira ao longo dos séculos.",
    date: "3 de Fevereiro, 2026",
  },
  {
    id: 3,
    title: "O Papel da Marinha na História do Brasil",
    image:
      "https://images.unsplash.com/photo-1761586944585-7269a5d16b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZhbCUyMHNoaXAlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzAzNjYzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Desde a defesa do território até operações internacionais, explore o papel fundamental da Marinha Brasileira.",
    date: "28 de Janeiro, 2026",
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Artigos em Destaque
          </h2>
          <p className="text-neutral-600 text-lg">
            Descubra histórias fascinantes sobre nosso patrimonio militar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-neutral-500 mb-3">
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-4">{article.description}</p>
                <button
                  type="button"
                  className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-1"
                >
                  Ler mais
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
