import React from 'react';
import { X, ArrowRight, MessageCircle, Sun, Moon } from 'lucide-react';

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenStudio,
  theme = 'dark',
  onToggleTheme
}) {
  const whatsappNumber = "22879800487";

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    onClose();
    const text = encodeURIComponent("Bonjour SMART KARA DESIGN, je souhaite passer une commande ou poser des questions sur vos créations.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-down Menu Container */}
      <div className="relative bg-[#050A10] border-b border-white/10 px-6 pt-6 pb-8 shadow-2xl space-y-5 animate-slideDown">
        
        {/* Top Header of Mobile Menu */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            Menu de navigation
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const isItemActive = link.isProducts
              ? currentPage === 'products'
              : link.isGallery
              ? currentPage === 'gallery'
              : (currentPage === 'home' && activeSection === link.id);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  onClose();
                  if (link.isStudio) {
                    e.preventDefault();
                    onOpenStudio && onOpenStudio();
                  } else if (link.isProducts) {
                    e.preventDefault();
                    onNavigate && onNavigate('products');
                  } else if (link.isGallery) {
                    e.preventDefault();
                    onNavigate && onNavigate('gallery');
                  } else {
                    if (currentPage !== 'home' && onNavigate) {
                      e.preventDefault();
                      onNavigate('home', link.id);
                    }
                  }
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isItemActive
                    ? 'text-emerald-400 bg-emerald-500/10 font-bold border-l-4 border-emerald-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}
        </nav>

        {/* Theme Switch & Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={() => {
              onToggleTheme && onToggleTheme();
            }}
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-semibold text-sm flex items-center justify-between transition-all cursor-pointer border border-white/10"
          >
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
              <span>{theme === 'dark' ? 'Passer au Thème Lumineux' : 'Passer au Thème Sombre'}</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300">
              {theme === 'dark' ? 'Sombre' : 'Lumineux'}
            </span>
          </button>

          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white font-bold text-sm text-center shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>Commander sur WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
