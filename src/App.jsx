import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesBar from './components/ServicesBar';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import StudioCustomizerModal from './components/StudioCustomizerModal';
import QuoteModal from './components/QuoteModal';
import ProductDetailModal from './components/ProductDetailModal';
import SearchModal from './components/SearchModal';
import { PRODUCTS } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return typeof window !== 'undefined' && window.location.hash === '#galerie' ? 'gallery' : 'home';
  });
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('accueil');
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#galerie') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (currentPage === 'gallery' && window.location.hash !== '#galerie') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    showNotification(`"${product.title}" ajouté au panier !`);
  };

  const navigateTo = (page, sectionId) => {
    setCurrentPage(page);
    if (page === 'gallery') {
      window.location.hash = '#galerie';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.hash === '#galerie') {
        window.history.pushState(null, '', window.location.pathname);
      }
      if (sectionId) {
        setActiveSection(sectionId);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050A10] text-white flex flex-col font-sans selection:bg-[#0066FF] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#080E1C] border border-[#0066FF] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Sticky */}
      <Header
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentPage={currentPage}
        onNavigate={navigateTo}
        cartCount={cartCount}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentPage === 'gallery' ? (
          <GalleryPage
            onBackToHome={() => navigateTo('home', 'accueil')}
            onOpenStudio={() => setIsStudioOpen(true)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreClick={() => navigateTo('home', 'nos-produits')}
            />

            {/* 2. Barre des Services */}
            <ServicesBar
              onSelectFilter={(catId) => {
                const element = document.getElementById('categories');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 3. Section Catégories (fond blanc) */}
            <CategoriesSection
              onSelectCategory={(catId) => {
                const matchedProduct = PRODUCTS.find((p) => p.categoryId === catId);
                if (matchedProduct) {
                  setSelectedProduct(matchedProduct);
                } else {
                  navigateTo('home', 'nos-produits');
                }
              }}
            />

            {/* 4. Section Produits Phares (fond sombre) */}
            <ProductsSection
              onProductClick={(product) => setSelectedProduct(product)}
              onAddToCart={handleAddToCart}
            />

            {/* 5. Section "Pourquoi nous choisir ?" (split-screen) */}
            <AboutSection />

            {/* 6. Section Contact / CTA */}
            <ContactCTA
              onOpenQuote={() => setIsQuoteOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenStudio={() => setIsStudioOpen(true)}
        onNavigate={navigateTo}
      />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <StudioCustomizerModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onOpenStudio={() => setIsStudioOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProductClick={(product) => setSelectedProduct(product)}
      />

    </div>
  );
}
