import { useState } from "react";
import { Link } from "wouter";
import { blogArticles } from "@/data/blogArticles";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogArticles.map((article) => article.category)));

  const filteredArticles = selectedCategory
    ? blogArticles.filter((article) => article.category === selectedCategory)
    : blogArticles;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-[#E8E3DC] pt-24">
        <div className="container py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[#C9A68A] hover:text-[#B89475] font-medium">
              <ArrowLeft className="w-4 h-4" />
              Voltar à Página Principal
            </a>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F8F6F2] via-[#FAF7F3] to-[#F8F6F2]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#3D3D3D] leading-tight">
              Blog de <span className="italic">Cuidados com a Pele</span>
            </h1>
            <p className="text-lg md:text-xl text-[#3D3D3D]/70 leading-relaxed">
              Dicas, artigos educativos e informações sobre estética, cuidados com a pele e bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-8 bg-background border-b border-[#E8E3DC]">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === null
                  ? "bg-[#C9A68A] text-white"
                  : "bg-[#F8F6F2] text-[#3D3D3D] hover:bg-[#E8E3DC]"
              }`}
            >
              Todos os Artigos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-[#C9A68A] text-white"
                    : "bg-[#F8F6F2] text-[#3D3D3D] hover:bg-[#E8E3DC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <div className="group cursor-pointer h-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Imagem */}
                    <div className="relative overflow-hidden h-48 bg-[#F8F6F2]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-[#C9A68A] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-[#3D3D3D] mb-3 group-hover:text-[#C9A68A] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-[#3D3D3D]/70 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-xs text-[#3D3D3D]/60 mt-auto pt-4 border-t border-[#E8E3DC]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString("pt-BR")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} min
                        </div>
                      </div>

                      {/* Autor */}
                      <div className="mt-4 pt-4 border-t border-[#E8E3DC]">
                        <p className="text-xs text-[#C9A68A] font-medium">{article.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#3D3D3D]/70 text-lg">Nenhum artigo encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F8F6F2] via-[#FAF7F3] to-[#F8F6F2]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#3D3D3D]">
              Tem Dúvidas Sobre Sua Pele?
            </h2>
            <p className="text-lg text-[#3D3D3D]/70 mb-8">
              Agende uma consulta com a Dra. Laíse para uma avaliação personalizada e recomendações específicas para sua pele.
            </p>
            <a
              href="https://wa.link/wqqbun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#C9A68A] text-white rounded-full font-medium hover:bg-[#B89475] transition-colors"
            >
              Agende sua Avaliação
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
