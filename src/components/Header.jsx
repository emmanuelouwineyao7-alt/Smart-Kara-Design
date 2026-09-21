import React, { useState } from 'react';
import LogoSKD from './LogoSKD';
import MobileMenu from './MobileMenu';
import { Search, ShoppingCart, Menu } from 'lucide-react';

export default function Header({ 
  onOpenStudio, 
  onOpenQuote, 
  onSearchClick,
  activeSection,
  setActiveSection,
  currentPage = 'home',
  onNavigate,
  cartCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#accueil', id: 'accueil' },
    { name: 'À propos', href: '#a-propos', id: 'a-propos' },
    { name: 'Nos produits', href: '#nos-produits', id: 'nos-produits' },
    { name: 'Personnalisation', href: '#studio-personnalisation', id: 'studio-personnalisation', isStudio: true },
    { name: 'Galerie', href: '#galerie', id: 'galerie', isGallery: true },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (link, e) => {
    if (link.isStudio) {
      e.preventDefault();
      onOpenStudio && onOpenStudio();
      return;
    }

    if (link.isGallery) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('gallery');
      } else {
        window.location.hash = '#galerie';
      }
      return;
    }

    // Normal section
    if (currentPage !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home', link.id);
    } else {
      setActiveSection && setActiveSection(link.id);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#050A10]/95 backdrop-blur-md border-b border-white/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Logo à gauche */}
            <a 
              href="#accueil" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home', 'accueil');
                }
              }}
              className="flex items-center group cursor-pointer"
            >
              <LogoSKD size="md" />
            </a>

            {/* Navigation Desktop centrée */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isItemActive = link.isGallery
                  ? currentPage === 'gallery'
                  : (currentPage === 'home' && activeSection === link.id);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link, e)}
                    className={`text-sm font-medium transition-colors hover:text-[#0066FF] py-1.5 relative ${
                      isItemActive
                        ? 'text-[#0066FF] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0066FF] after:rounded-full'
                        : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Actions à droite : Recherche, Panier, Bouton Commander */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Bouton recherche */}
              <button
                onClick={onSearchClick}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                title="Rechercher"
                aria-label="Rechercher un produit"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Bouton panier avec badge bleu */}
              <button
                onClick={onOpenQuote}
                className="relative p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                title="Panier"
                aria-label="Afficher le panier"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#0066FF] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* Bouton Commander */}
              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md hover:shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Commander
              </button>

              {/* Bouton Hamburger Mobile */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg hover:bg-white/5"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Menu Mobile Slide-Down */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenQuote={onOpenQuote}
        onOpenStudio={onOpenStudio}
      />
    </>
  );
}
