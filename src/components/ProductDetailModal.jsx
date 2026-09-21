import React, { useState } from 'react';
import { X, Sparkles, Clock, ShieldCheck, Ruler, MessageCircle } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenStudio }) {
  const [customInput, setCustomInput] = useState(product?.defaultCustomText || 'Mon Prénom');
  const whatsappNumber = "22879800487";

  if (!isOpen || !product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(`Bonjour SMART KARA DESIGN (Kara), je souhaite commander / demander un devis pour le produit "${product.title}" (${product.price.toLocaleString('fr-FR')} FCFA). Gravure souhaitée: "${customInput}".`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F172A] border border-blue-500/30 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B0F19]">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{product.category}</span>
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
              <p className="text-xs text-blue-400 mt-1 font-semibold">{product.subtitle}</p>

              <div className="mt-4 text-2xl font-extrabold text-blue-400">
                {product.price.toLocaleString('fr-FR')} FCFA
              </div>

              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Matériau: <strong className="text-gray-200">{product.material}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-blue-400" />
                  <span>Dimensions: <strong className="text-gray-200">{product.dimensions}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Délai à Kara: <strong className="text-gray-200">{product.leadTime}</strong></span>
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
                  className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-white" />
                Demander sur WhatsApp
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenStudio();
                }}
                className="w-full py-2.5 rounded-full border border-white/15 text-gray-300 hover:text-white font-medium text-xs transition hover:bg-white/5 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Personnaliser davantage dans le studio
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
