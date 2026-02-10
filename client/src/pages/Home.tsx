/* 
  Design Philosophy: Organic Minimalism (Japandi)
  - Hero com background orgânico e texto flutuante
  - Seções com espaçamento generoso e transições suaves
  - Grid quebrado com sobreposições intencionais
  - Animações que imitam fenômenos naturais
*/

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareButton from "@/components/ShareButton";
import { MapPin, Phone, Instagram, Clock, Sparkles, Heart, Shield } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      <ShareButton />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/eRN99thKqrdRt8BxPT8hWZ/sandbox/BjQMlJP28sbaInXSEMbLxZ-img-1_1770666929000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVJOOTl0aEtxcmRSdDhCeFBUOGhXWi9zYW5kYm94L0JqUU1sSlAyOHNiYUluWFNFTWJMeFotaW1nLTFfMTc3MDY2NjkyOTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Eqc7xU96xWJRDA8eK3ing~xRnVHteLFVuhTh7F4fh8tlFsr3nw-pZnCQf8qAQCnUzODxs1Zhh3uJvvVXFZ0vFrwU0xiP4X9gpSXqDArGr9P5MySGDLn3J~cgweLbSmsqKtffpPmWznCpDIMj0X~bmTj5KlqI8yGI6JzGcarwdlbs9vUcGfhZINImtedfEK0OYuaJcaztnt4sGxDlj7mGJdhrpW-nTTnKVzAwuIqUYd2B1uu0SR3SV-Op69ke9bIK-Ct3jIVMarYWrM-sh2X1Rlxcs2whW7CmglXHPoDomoi-J2px2g5~2LYMDdwfqmNNWwXHa~AjYNjknrJSZhN61A__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
        
        <div className={`container relative z-10 text-center px-6 ${isVisible ? "animate-fade-in-blur" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 text-[#3D3D3D] leading-tight">
            Estética com segurança,<br />
            <span className="italic font-normal">naturalidade</span> e resultados reais
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#3D3D3D]/80 mb-10 max-w-3xl mx-auto font-light">
            Tratamentos personalizados que respeitam sua individualidade e realçam sua beleza natural
          </p>
          <a
            href="https://wa.link/wqqbun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block heading-secondary text-base md:text-lg px-10 py-4 bg-[#C9A68A] text-white rounded-full hover:bg-[#B8A693] transition-all duration-700 hover:shadow-2xl hover:scale-105"
          >
            Agende sua avaliação
          </a>
        </div>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#F8F6F2"
            ></path>
          </svg>
        </div>
      </section>

      {/* Flores Decorativas - Pontos Estratégicos */}
      <div className="absolute top-40 left-10 opacity-5 pointer-events-none hidden md:block">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/dfxKVBqLuYAQFLVj.png" alt="" className="w-40 h-40" />
      </div>
      <div className="absolute top-1/3 right-5 opacity-5 pointer-events-none hidden lg:block">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/dfxKVBqLuYAQFLVj.png" alt="" className="w-48 h-48" />
      </div>

      {/* Valores Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A8B5A0]/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-700">
                <Sparkles className="text-[#A8B5A0]" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-[#3D3D3D]">Naturalidade</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Resultados que respeitam suas características únicas, realçando sua beleza de forma harmoniosa e autêntica
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A68A]/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-700">
                <Shield className="text-[#C9A68A]" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-[#3D3D3D]">Segurança</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Protocolos atualizados, equipamentos de qualidade e atuação ética baseada em ciência e responsabilidade
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4C4B0]/30 rounded-full mb-6 group-hover:scale-110 transition-transform duration-700">
                <Heart className="text-[#B8A693]" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-[#3D3D3D]">Cuidado Personalizado</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Atendimento humanizado que prioriza seu bem-estar, autoestima e a saúde da sua pele em cada sessão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flores Decorativas - Sobre */}
      <div className="absolute right-10 top-1/3 opacity-5 pointer-events-none hidden md:block">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/dfxKVBqLuYAQFLVj.png" alt="" className="w-48 h-48" />
      </div>

      {/* Sobre a Dra. Section */}
      <section id="sobre" className="py-20 lg:py-32 bg-[#F8F6F2]">
        <div className="container">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-[#3D3D3D] leading-tight">
                Sobre a <span className="italic">Dra. Laíse</span>
              </h2>
              <div className="space-y-6 text-[#3D3D3D]/80 text-lg leading-relaxed">
                <p>
                  A Dra. Laíse Ferreira Debortoli é Biomédica, formada pelo Centro Universitário UniSalesiano em 2023. Em 2025, concluiu sua pós-graduação em Estética, se especializando em procedimentos estéticos faciais e corporais, sempre com foco em segurança, naturalidade e resultados personalizados.
                </p>
                <p>
                  Com atuação ética, baseada em ciência e atualização constante, a Dra. Laíse oferece tratamentos modernos, respeitando a individualidade de cada paciente e priorizando o bem-estar, a autoestima e a saúde da pele.
                </p>
                <div className="pt-6">
                  <p className="heading-secondary text-xl text-[#C9A68A] mb-2">
                    Dra. Laíse Ferreira Debortoli
                  </p>
                  <p className="text-base text-[#3D3D3D]/60">
                    Biomédica Esteta | CRBM: 58542
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flores Decorativas - Procedimentos */}
      <div className="absolute left-1/4 opacity-5 pointer-events-none hidden md:block">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/dfxKVBqLuYAQFLVj.png" alt="" className="w-44 h-44" />
      </div>

      {/* Procedimentos Section */}
      <section id="procedimentos" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#3D3D3D] font-semibold">
              Nossos <span className="italic">Procedimentos</span>
            </h2>
            <p className="text-lg md:text-xl text-[#3D3D3D]/85 max-w-3xl mx-auto font-medium">
              Tratamentos modernos e personalizados para cuidar da sua pele com segurança e eficácia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Limpeza de Pele",
                description: "Procedimento profundo que remove impurezas, cravos e células mortas, deixando a pele renovada e saudável",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              },
              {
                title: "Tratamentos Faciais",
                description: "Protocolos personalizados para hidratação, rejuvenescimento e tratamento de manchas e acne",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
              },
              {
                title: "Drenagem Linfática",
                description: "Técnica que estimula o sistema linfático, reduzindo inchaços e promovendo bem-estar",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
              },
              {
                title: "Procedimento Estético Injetável para Micro Vasos",
                description: "Procedimentos seguros e precisos para redução de vasinhos e melhora da circulação com resultados naturais",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/eRN99thKqrdRt8BxPT8hWZ/sandbox/NloHedAajjweu1l63KQjQS-img-1_1770675452000_na1fn_c3lyaW5nZS1pbmplY3RhYmxl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVJOOTl0aEtxcmRSdDhCeFBUOGhXWi9zYW5kYm94L05sb0hlZEFhamp3ZXUxbDYzS1FqUVMtaW1nLTFfMTc3MDY3NTQ1MjAwMF9uYTFmbl9jM2x5YVc1blpTMXBibXBsWTNSaFlteGwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sL8-arzMtmIOk-a0et3-4l~EuGBpwMwe~dUVjesQDSTa8VwZJNV0NlXVaykeaGM2gV-xm~hui3638cIuUuAo~V4SobfVozvhHpNs17YgAIMjNrZ-XTbzQtyqkA7xK5wVCTdNWp~Ms3f6J0m~Tqfpdg0C-xkEdaleE7e6qJdiHsUQOWL4kYW9XREnDCEa1gQyNXnowG0Hhhz4hFjnxWkap9FQpa5-VJvIt0RXe2D13yIicNTXKjbyGcSKcrIrDAEnYrvDij~ujwifbD-2~UEfWxu8DMzsyGQhvseSARyWIFaWZx0K4Mcn40HQuX3nKqoS6gL01wb6wTG5RQIrd6Ekgw__"
              },
            ].map((procedimento, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={procedimento.image}
                    alt={procedimento.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/80 via-[#3D3D3D]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/90 via-[#3D3D3D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-2xl mb-2 font-semibold drop-shadow-lg">{procedimento.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                    {procedimento.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Espaço Section */}
      <section id="clinica" className="py-20 lg:py-32 bg-[#F8F6F2]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#3D3D3D]">
              Nosso <span className="italic">Espaço</span>
            </h2>
            <div className="space-y-6 text-[#3D3D3D]/80 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                A Clínica de Estética Dra. Laíse Debortoli foi pensada para oferecer conforto, segurança e uma experiência acolhedora. Aqui você encontra procedimentos estéticos modernos, seguros e personalizados, com foco em resultados naturais, bem-estar e autoestima.
              </p>
              <p>
                Trabalhamos com protocolos atualizados, equipamentos de qualidade e atendimento personalizado e humanizado para garantir a melhor experiência em cada atendimento.
              </p>
              <p className="font-medium text-[#C9A68A]">
                Agende sua avaliação e cuide de você com quem realmente entende do assunto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#3D3D3D]">
              Onde <span className="italic">Estamos</span>
            </h2>
            <p className="text-lg md:text-xl text-[#3D3D3D]/70 max-w-3xl mx-auto">
              Venha nos visitar e conhecer nosso espaço acolhedor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A68A]/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-[#C9A68A]" size={24} />
                </div>
                <div>
                  <h3 className="heading-secondary text-xl mb-2 text-[#3D3D3D]">Endereço</h3>
                  <p className="text-[#3D3D3D]/70 leading-relaxed">
                    R. Bahia, 494 - Jardim São Braz<br />
                    Birigui - SP, 16202-045
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#A8B5A0]/20 rounded-full flex items-center justify-center">
                  <Clock className="text-[#A8B5A0]" size={24} />
                </div>
                <div>
                  <h3 className="heading-secondary text-xl mb-2 text-[#3D3D3D]">Horário de Atendimento</h3>
                  <p className="text-[#3D3D3D]/70 leading-relaxed">
                    Segunda a Sexta: 08:00 - 21:00<br />
                    Sábado: 12:00 - 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                  <Phone className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <h3 className="heading-secondary text-xl mb-2 text-[#3D3D3D]">WhatsApp</h3>
                  <a
                    href="https://wa.link/wqqbun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A68A] hover:text-[#B8A693] transition-colors duration-300"
                  >
                    Clique aqui para agendar
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.8!2d-50.3403!3d-21.2886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9498b0e0e0e0e0e0%3A0x0!2sR.%20Bahia%2C%20494%20-%20Jardim%20S%C3%A3o%20Braz%2C%20Birigui%20-%20SP%2C%2016202-045!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica de Estética Dra. Laíse Debortoli"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 lg:py-32 bg-[#F8F6F2]">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-[#3D3D3D]">
            Agende sua <span className="italic">Avaliação</span>
          </h2>
          <p className="text-lg md:text-xl text-[#3D3D3D]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco pelo WhatsApp e descubra como podemos ajudar você a alcançar seus objetivos estéticos com segurança e naturalidade
          </p>
          <a
            href="https://wa.link/wqqbun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block heading-secondary text-lg px-12 py-5 bg-[#25D366] text-white rounded-full hover:bg-[#20BA5A] transition-all duration-700 hover:shadow-2xl hover:scale-105"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F8F6F2] via-[#FAF7F3] to-[#F8F6F2]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#3D3D3D] leading-tight">
              Dicas e Artigos sobre <span className="italic">Cuidados com a Pele</span>
            </h2>
            <p className="text-lg md:text-xl text-[#3D3D3D]/70 max-w-2xl mx-auto">
              Conheça os melhores cuidados e procedimentos para manter sua pele saudável e radiante
            </p>
          </div>
          <div className="text-center">
            <a
              href="/blog"
              className="inline-block heading-secondary text-base md:text-lg px-10 py-4 bg-[#C9A68A] text-white rounded-full hover:bg-[#B8A693] transition-all duration-700 hover:shadow-2xl hover:scale-105"
            >
              Explorar Blog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D3D3D] text-white py-16 lg:py-24"><div className="container">
          <div className="text-center mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/KrqstCCAswrWGKJs.png"
              alt="Clínica de Estética Dra. Laíse Debortoli"
              className="h-40 w-auto object-contain mx-auto mb-6"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-white/70 text-sm leading-relaxed">
                Estética com segurança, naturalidade e resultados reais
              </p>
            </div>
            <div>
              <h4 className="heading-secondary text-lg mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>R. Bahia, 494 - Jardim São Braz</p>
                <p>Birigui - SP, 16202-045</p>
                <a
                  href="https://wa.link/wqqbun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#C9A68A] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h4 className="heading-secondary text-lg mb-4">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/dralaisedebortoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A68A] transition-colors duration-300"
              >
                <Instagram size={20} />
                @dralaisedebortoli
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/50">
            <p>© 2026 Clínica de Estética Dra. Laíse Debortoli. Todos os direitos reservados.</p>
            <p className="mt-2">CRBM: 58542</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
