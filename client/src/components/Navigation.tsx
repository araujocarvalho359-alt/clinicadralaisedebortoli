/* 
  Design Philosophy: Organic Minimalism (Japandi)
  - Navegação translúcida com glassmorphism
  - Logo centralizada no mobile, à esquerda no desktop
  - Links com hover suave e underline animado
*/

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-44">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343725765/KrqstCCAswrWGKJs.png"
                alt="Clínica de Estética Dra. Laíse Debortoli"
                className="h-28 lg:h-40 w-auto object-contain"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection("procedimentos")}
              className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group"
            >
              Procedimentos
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection("clinica")}
              className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group"
            >
              Nosso Espaço
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
            </button>
            <Link href="/blog">
              <a className="heading-secondary text-sm tracking-wider hover:text-[#C9A68A] transition-colors duration-500 relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A68A] group-hover:w-full transition-all duration-500"></span>
              </a>
            </Link>
            <a
              href="https://wa.link/wqqbun"
              target="_blank"
              rel="noopener noreferrer"
              className="heading-secondary text-sm tracking-wider px-6 py-3 bg-[#C9A68A] text-white rounded-full hover:bg-[#B8A693] transition-all duration-500 hover:shadow-lg hover:scale-105"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-[#C9A68A] transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass border-t border-border/30 py-6 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("procedimentos")}
              className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300"
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection("clinica")}
              className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300"
            >
              Nosso Espaço
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300"
            >
              Contato
            </button>
            <Link href="/blog">
              <a className="block w-full text-left heading-secondary text-base py-2 hover:text-[#C9A68A] transition-colors duration-300">
                Blog
              </a>
            </Link>
            <a
              href="https://wa.link/wqqbun"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center heading-secondary text-base py-3 px-6 bg-[#C9A68A] text-white rounded-full hover:bg-[#B8A693] transition-all duration-300"
            >
              Agendar Avaliação
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
