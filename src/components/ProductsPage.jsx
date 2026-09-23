import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from './ProductCard';
import { Search, ArrowLeft, Sparkles, MessageCircle, SlidersHorizontal, Package } from 'lucide-react';

export default function ProductsPage({ onBackToHome, onSelectProduct, onOpenStudio }) {
  const whatsappNumber = "22879800487";
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'title'

  // Filter products by category & search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        product.categoryId === selectedCategory ||
        product.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return a.id - b.id; // default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleGeneralWhatsAppOrder = () => {
    const text = encodeURIComponent("Bonjour SMART KARA DESIGN, je souhaite des renseignements sur vos produits ou passer une commande.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050A10] text-white pb-20 animate-fadeIn">
      
      {/* 1. Header Banner de la Page Produits (Section de Présentation sur Fond Blanc) */}
      <section className="relative pt-10 pb-12 bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb / Bouton Retour */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition border border-gray-200 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp: 79 80 04 87</span>
            </a>
          </div>

          {/* Titre & Description de présentation */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5" /> Catalogue Officiel SKD
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Toutes nos <span className="text-[#0066FF]">Créations & Produits</span>
            </h1>
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
              Explorez nos supports en bois noble, gravures laser de précision, accessoires en acrylique et objets sur-mesure confectionnés à Kara.
            </p>
          </div>

          {/* Barre de Recherche & Filtres rapides sur fond clair */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit, matériau (ex: Iroko, Acrylique)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-gray-900 text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:bg-white transition shadow-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-900"
                >
                  Effacer
                </button>
              )}
            </div>

            {/* Selecteur de tri */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#0066FF] cursor-pointer appearance-none pr-8 shadow-sm"
              >
                <option value="featured">Tri: Populaire</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
                <option value="title">Nom (A-Z)</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Menu Filtres par Catégorie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
            }`}
          >
            Tous les produits ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter(
              (p) => p.categoryId === cat.id || p.category.toLowerCase().includes(cat.id.toLowerCase())
            ).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0066FF] text-white font-bold shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                {cat.title}
                {count > 0 && (
                  <span className="text-[10px] opacity-70 bg-black/20 px-1.5 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Grille des Produits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* En-tête des résultats */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            Affichage de <strong className="text-white font-bold">{filteredProducts.length}</strong> produit(s)
          </p>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-blue-400 hover:underline font-semibold"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Grille */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#0F172A]/50 rounded-3xl border border-white/10 max-w-xl mx-auto p-8">
            <Package className="w-12 h-12 text-gray-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">Aucun produit ne correspond à votre recherche</h3>
            <p className="text-xs text-gray-400">
              Essayez de modifier votre mot-clé ou réinitialisez les filtres pour découvrir tout notre catalogue.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#0066FF] hover:bg-blue-600 text-white rounded-full text-xs font-bold shadow-lg"
            >
              Voir tous les produits
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onSelectProduct}
              />
            ))}
          </div>
        )}

      </section>

      {/* 4. Banner CTA : Commande sur-mesure / WhatsApp (Fond Blanc) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 text-gray-900 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Besoin d'une création sur-mesure ?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
              Vous avez un projet spécial ou une idée unique ?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nous fabriquons des trophées, cadeaux d'entreprise et décorations personnalisées selon vos dimensions et vos envies. Contactez-nous directement sur WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={handleGeneralWhatsAppOrder}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#25D366]/30 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white text-white" />
              <span>Commander sur WhatsApp</span>
            </button>

            {onOpenStudio && (
              <button
                onClick={onOpenStudio}
                className="px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#0066FF]" />
                Ouvrir le Studio 3D
              </button>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
