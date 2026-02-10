import { useState } from "react";
import { Share2, Copy, Check, X } from "lucide-react";
import { toast } from "sonner";

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const siteUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0].split('#')[0] : '';
  const siteTitle = "Clínica de Estética Dra. Laíse Debortoli";
  const siteDescription = "Estética com segurança, naturalidade e resultados reais em Birigui-SP";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      toast.success("Link copiado com sucesso!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar link");
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`${siteTitle} - ${siteDescription}\n${siteUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleTwitterShare = () => {
    const text = encodeURIComponent(siteDescription);
    const url = encodeURIComponent(siteUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleInstagramShare = () => {
    // Instagram não permite compartilhamento direto via URL, então copiamos o link
    handleCopyLink();
    toast.info("Link copiado! Cole no Instagram para compartilhar");
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-[#C9A68A] text-white p-4 rounded-full shadow-2xl hover:bg-[#B89475] transition-all duration-300 hover:scale-110 group"
        aria-label="Compartilhar site"
      >
        <Share2 className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#3D3D3D] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Compartilhar
        </span>
      </button>

      {/* Modal de Compartilhamento */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-blur">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#3D3D3D]/60 hover:text-[#3D3D3D] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Título */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#3D3D3D] mb-2">
                Compartilhar Site
              </h3>
              <p className="text-[#3D3D3D]/70">
                Ajude outras pessoas a conhecer nosso trabalho
              </p>
            </div>

            {/* Opções de Compartilhamento */}
            <div className="space-y-3">
              {/* Copiar Link */}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-[#E8E3DC] transition-all duration-300 group"
              >
                <div className="bg-[#C9A68A] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#3D3D3D]">
                    {copied ? "Link Copiado!" : "Copiar Link"}
                  </p>
                  <p className="text-sm text-[#3D3D3D]/60">
                    Copie o link do site
                  </p>
                </div>
              </button>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppShare}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-[#E8E3DC] transition-all duration-300 group"
              >
                <div className="bg-[#25D366] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#3D3D3D]">WhatsApp</p>
                  <p className="text-sm text-[#3D3D3D]/60">
                    Compartilhe pelo WhatsApp
                  </p>
                </div>
              </button>

              {/* Twitter/X */}
              <button
                onClick={handleTwitterShare}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-[#E8E3DC] transition-all duration-300 group"
              >
                <div className="bg-[#000000] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#3D3D3D]">Twitter (X)</p>
                  <p className="text-sm text-[#3D3D3D]/60">
                    Compartilhe no Twitter
                  </p>
                </div>
              </button>

              {/* Instagram */}
              <button
                onClick={handleInstagramShare}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-[#E8E3DC] transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-[#3D3D3D]">Instagram</p>
                  <p className="text-sm text-[#3D3D3D]/60">
                    Copiar link para o Instagram
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
