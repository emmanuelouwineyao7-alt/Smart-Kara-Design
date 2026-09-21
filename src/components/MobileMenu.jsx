import React from 'react';
import { X, ArrowRight, MessageCircle } from 'lucide-react';

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenStudio
}) {
  if (!isOpen) return null;

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
            const isItemActive = link.isGallery
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
                    ? 'text-[#0066FF] bg-blue-500/10 font-bold border-l-4 border-[#0066FF]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuote && onOpenQuote();
            }}
            className="w-full py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm text-center shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2"
          >
            Commander / Demander un devis
          </button>

          <a
            href="https://wa.me/22893456789"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 rounded-full border border-white/20 text-gray-200 hover:text-white hover:bg-white/5 font-semibold text-xs text-center transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Échanger sur WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
