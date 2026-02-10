import { useParams, Link } from "wouter";
import { blogArticles } from "@/data/blogArticles";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Streamdown } from "streamdown";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#3D3D3D] mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <a className="text-[#C9A68A] hover:text-[#B89475] font-medium">Voltar ao blog</a>
          </Link>
        </div>
      </div>
    );
  }

  // Artigos relacionados (mesma categoria)
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-[#E8E3DC]">
        <div className="container py-4">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-[#C9A68A] hover:text-[#B89475] font-medium">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </a>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 bg-[#F8F6F2] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Artigo */}
      <article className="py-16 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#C9A68A] text-white px-4 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-[#3D3D3D]/60 text-sm">
                {new Date(article.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-[#3D3D3D]/70 border-t border-b border-[#E8E3DC] py-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C9A68A]" />
                <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C9A68A]" />
                <span>{article.readTime} minutos de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A68A] font-medium">Por {article.author}</span>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none mb-16">
            <Streamdown>{article.content}</Streamdown>
          </div>

          {/* Autor Bio */}
          <div className="bg-[#F8F6F2] rounded-lg p-8 mb-16 border border-[#E8E3DC]">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#3D3D3D] mb-2">Sobre a Autora</h3>
                <p className="text-[#3D3D3D]/70 mb-4">
                  Dra. Laíse Ferreira Debortoli é Biomédica Esteta com formação em Estética e especialização em procedimentos estéticos faciais. Com atuação ética baseada em ciência e atualização constante, oferece tratamentos modernos com foco em segurança, naturalidade e resultados personalizados.
                </p>
                <p className="text-sm text-[#C9A68A] font-medium">CRBM: 58542</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#F8F6F2] to-[#FAF7F3] rounded-lg p-8 mb-16 border border-[#E8E3DC]">
            <h3 className="text-2xl font-bold text-[#3D3D3D] mb-3">
              Quer saber mais sobre este procedimento?
            </h3>
            <p className="text-[#3D3D3D]/70 mb-6">
              Agende uma consulta com a Dra. Laíse para uma avaliação personalizada e recomendações específicas para sua pele.
            </p>
            <a
              href="https://wa.link/wqqbun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#C9A68A] text-white rounded-full font-medium hover:bg-[#B89475] transition-colors"
            >
              Agende no WhatsApp
            </a>
          </div>

          {/* Artigos Relacionados */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-[#E8E3DC] pt-16">
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-8">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                    <a className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                        <div className="h-40 bg-[#F8F6F2] overflow-hidden">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-[#3D3D3D] text-sm mb-2 line-clamp-2 group-hover:text-[#C9A68A] transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-xs text-[#3D3D3D]/60">
                            {new Date(relatedArticle.date).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.seoDescription,
          image: article.image,
          datePublished: article.date,
          author: {
            "@type": "Person",
            name: article.author,
            url: "https://clinica-dra-laise.manus.space/",
          },
          publisher: {
            "@type": "Organization",
            name: "Clínica de Estética Dra. Laíse Debortoli",
            url: "https://clinica-dra-laise.manus.space/",
          },
        })}
      </script>
    </div>
  );
}
