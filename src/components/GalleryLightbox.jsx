import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Clock, Ruler, Layers, Check } from 'lucide-react';

export default function GalleryLightbox({
  item,
  onClose,
  onNext,
  onPrev,
  onOpenStudio
}) {
  const whatsappNumber = "22879800487";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Bonjour SMART KARA DESIGN, j'ai vu votre réalisation "${item.title}" dans la galerie et je souhaite commander un modèle similaire ou obtenir un devis personnalisé.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Lightbox Card */}
      <div className="relative z-10 bg-[#0F172A] border border-white/15 w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/10"
          title="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Visual with Carousel Arrows */}
        <div className="lg:w-7/12 relative bg-black/50 flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-full overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[55vh] lg:max-h-[90vh] transition duration-500"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/10 shadow-lg"
            title="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/10 shadow-lg"
            title="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Tag badge on image */}
          {item.tag && (
            <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-bold tracking-wide shadow-lg border border-blue-400/30 backdrop-blur-md">
              {item.tag}
            </span>
          )}
        </div>

        {/* Right Side: Details & Actions */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[90vh] space-y-6">
          
          <div className="space-y-4">
            <div>
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider block">
                {item.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Specifications Cards */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <div className="bg-[#1E293B]/70 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Matière</div>
                  <div className="text-xs text-white font-semibold line-clamp-1">{item.material}</div>
                </div>
              </div>

              <div className="bg-[#1E293B]/70 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Ruler className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Format</div>
                  <div className="text-xs text-white font-semibold line-clamp-1">{item.dimensions}</div>
                </div>
              </div>

              <div className="bg-[#1E293B]/70 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Délai atelier</div>
                  <div className="text-xs text-white font-semibold">{item.leadTime}</div>
                </div>
              </div>

              <div className="bg-[#1E293B]/70 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Origine</div>
                  <div className="text-xs text-white font-semibold">Atelier Kara, Togo</div>
                </div>
              </div>
            </div>

            {/* Key Features list */}
            {item.features && item.features.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Points forts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Call To Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            {item.priceEstimate && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">À partir de :</span>
                <span className="text-xl font-black text-blue-400">{item.priceEstimate}</span>
              </div>
            )}

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Commander sur WhatsApp
            </button>

            {onOpenStudio && (
              <button
                onClick={() => {
                  onClose();
                  onOpenStudio();
                }}
                className="w-full py-3 rounded-full border border-white/20 hover:border-blue-500/50 text-gray-200 hover:text-white hover:bg-white/5 font-semibold text-xs transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                Personnaliser un modèle dans le Studio
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
