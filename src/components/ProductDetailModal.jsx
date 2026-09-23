import React, { useState } from 'react';
import { X, Sparkles, Clock, ShieldCheck, Ruler, MessageCircle } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenStudio }) {
  const [customInput, setCustomInput] = useState(product?.defaultCustomText || 'Mon Prénom');
  const whatsappNumber = "22879800487";

  if (!isOpen || !product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(`Bonjour SMART KARA DESIGN, je souhaite commander le produit "${product.title}" (${product.price.toLocaleString('fr-FR')} FCFA). Texte/Gravure souhaité: "${customInput}".`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F172A] border border-emerald-500/30 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B0F19]">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{product.category}</span>
          <button onClick={onClose} className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 p-6 gap-6">
          {/* Image */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 h-64 md:h-full bg-slate-900">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-black/80 text-white backdrop-blur-md text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
              Gravure Laser Kara
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{product.title}</h3>
              <p className="text-xs text-emerald-400 mt-1 font-semibold">{product.subtitle}</p>

              <div className="mt-4 text-2xl font-extrabold text-emerald-400">
                {product.price.toLocaleString('fr-FR')} FCFA
              </div>

              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Matériau: <strong className="text-gray-200">{product.material}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-emerald-400" />
                  <span>Dimensions: <strong className="text-gray-200">{product.dimensions}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Délai d'exécution: <strong className="text-gray-200">{product.leadTime}</strong></span>
                </div>
              </div>

              {/* Engraving Input */}
              <div className="mt-4">
                <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Texte à graver (Prénom, Initiales...)
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Entrez votre gravure..."
                  className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Commander sur WhatsApp</span>
              </button>

              {onOpenStudio && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenStudio();
                  }}
                  className="w-full py-2.5 rounded-full border border-white/15 text-gray-300 hover:text-white font-medium text-xs transition hover:bg-white/5 flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Personnaliser davantage dans le studio
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
