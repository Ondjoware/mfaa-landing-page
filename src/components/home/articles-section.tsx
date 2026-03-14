import { strapiConfig } from "@/lib/strapi/config";
import { getHomePageArticles } from "@/lib/strapi/services/article";
import { formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default async function ArticlesSection() {
  const { data: articles } = await getHomePageArticles();
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
                <Image
                  width={article.highlightedImage.formats.medium?.width}
                  height={article.highlightedImage.formats.medium?.height}
                  src={
                    `${strapiConfig.baseUrl}${article.highlightedImage.url}` ||
                    ""
                  }
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-neutral-500 mb-3">
                  {formatDate(new Date(article.publishedAt))}
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
