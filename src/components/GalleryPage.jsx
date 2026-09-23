import React, { useState, useMemo } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import GalleryLightbox from './GalleryLightbox';
import { 
  Search, 
  Sparkles, 
  MessageCircle, 
  ArrowLeft, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  FileText,
  SlidersHorizontal,
  X
} from 'lucide-react';

export default function GalleryPage({
  onBackToHome,
  onOpenStudio,
  onOpenQuote
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const whatsappNumber = "22879800487";

  // Filtered items based on category and search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.categoryId === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !q || 
        item.title.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null && filteredItems.length > 0) {
      setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null && filteredItems.length > 0) {
      setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleWhatsAppItem = (item, e) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Bonjour SMART KARA DESIGN, je suis intéressé(e) par la réalisation "${item.title}" vue dans la galerie.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleWhatsAppGeneral = () => {
    const text = encodeURIComponent(
      "Bonjour SMART KARA DESIGN, je souhaite des renseignements sur vos réalisations en galerie et échanger sur un projet personnalisé."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white pt-6 pb-24 animate-fadeIn">
      
      {/* Breadcrumb & Quick Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-[#0066FF] transition group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour à l'accueil</span>
          </button>

          <div className="text-xs text-gray-500 hidden sm:block">
            <span>Accueil</span>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-[#0066FF] font-medium">Galerie de créations</span>
          </div>
        </div>
      </div>

      {/* 1. Section de Présentation Galerie sur Fond Blanc */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-white text-gray-900 border border-gray-200 p-8 sm:p-12 shadow-xl">
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Savoir-Faire & Réalisations d'Atelier
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Galerie de nos <br />
              <span className="text-[#0066FF]">
                Créations & Projets Sur-Mesure
              </span>
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Découvrez la précision de notre atelier à Kara, Togo. Du travail fin du bois noble d’Iroko à la gravure laser sur plexiglas et l'impression 3D, chaque objet est fabriqué avec passion et précision.
            </p>

            {/* Quick atelier badge list sur fond clair */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
              <div className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Atelier à Kara, Togo</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Précision Laser 0.01mm</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bois noble & Acrylique LED</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Pièce unique & Petite série</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Barre de Recherche et Sélection des Catégories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="space-y-4">
          
          {/* Search bar & count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par mot-clé, matière, nom..."
                className="w-full bg-gray-900 border border-white/15 rounded-full pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#0066FF] transition shadow-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0066FF]" />
              <span>
                <strong className="text-white">{filteredItems.length}</strong> réalisation{filteredItems.length > 1 ? 's' : ''} trouvée{filteredItems.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? GALLERY_ITEMS.length 
                : GALLERY_ITEMS.filter(item => item.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-blue-800 text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Grille des Cartes de la Galerie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#111827]/40 rounded-3xl border border-white/5 p-8">
            <SlidersHorizontal className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Aucune réalisation trouvée</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
              Aucun résultat ne correspond à vos filtres ou à votre recherche "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-bold transition shadow-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Container with zoom & badges */}
                <div className="relative h-64 overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>

                  {/* Tag Badge */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-blue-400 text-[11px] font-bold backdrop-blur-md border border-white/10">
                      {item.tag}
                    </span>
                  )}

                  {/* Zoom hint overlay button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#0066FF] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-blue-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Quick specs pill */}
                  <div className="pt-2 border-t border-white/5 space-y-2">
                    <div className="text-[11px] text-gray-400 flex items-center justify-between">
                      <span>Matière :</span>
                      <span className="text-gray-200 font-medium line-clamp-1 max-w-[60%] text-right">{item.material}</span>
                    </div>

                    {item.priceEstimate && (
                      <div className="text-[11px] text-gray-400 flex items-center justify-between">
                        <span>Estimation :</span>
                        <span className="text-[#0066FF] font-bold">{item.priceEstimate}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={(e) => handleWhatsAppItem(item, e)}
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Commander sur WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span>Commander sur WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setActiveLightboxIndex(index)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition border border-white/10 cursor-pointer"
                      title="Voir en grand"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Banner CTA sur Fond Blanc (Section Suivant la Galerie) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 sm:p-12 text-center shadow-xl text-gray-900">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Projet Personnalisé sur-mesure
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Vous avez une idée unique ou une commande spéciale ?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Nous fabriquons à la commande dans notre atelier à Kara : trophées, signalétique d'entreprise, cadeaux d'anniversaire ou décors muraux selon vos croquis et dimensions.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenStudio}
                className="px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Ouvrir le Studio 3D
              </button>

              <button
                onClick={handleWhatsAppGeneral}
                className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Discuter sur WhatsApp
              </button>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gray-600" />
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <GalleryLightbox
          item={activeItem}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onOpenStudio={onOpenStudio}
        />
      )}

    </div>
  );
}
