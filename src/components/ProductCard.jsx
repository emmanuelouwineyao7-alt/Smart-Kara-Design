import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';

export default function ProductCard({ product, onProductClick }) {
  const whatsappNumber = "22879800487";

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Bonjour SMART KARA DESIGN, je souhaite commander le produit "${product.title}" (${product.price.toLocaleString('fr-FR')} FCFA).`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-[#0B111E] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1.5 transition-all duration-300 border border-white/10 relative">
      
      {/* Badge optionnel */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
          {product.badge}
        </span>
      )}

      {/* Image du produit avec overlay au survol */}
      <div 
        className="relative h-48 sm:h-52 w-full bg-[#1E293B] overflow-hidden cursor-pointer group/img"
        onClick={() => onProductClick && onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-108 group-hover/img:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" /> Voir détails
          </span>
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            {product.category}
          </span>
          <h3 
            onClick={() => onProductClick && onProductClick(product)}
            className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-emerald-400 transition cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-1 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Footer de la carte: Prix & Bouton WhatsApp */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <span className="font-extrabold text-emerald-400 text-sm sm:text-base block">
              {product.price.toLocaleString('fr-FR')} {product.currency || 'FCFA'}
            </span>
            {product.leadTime && (
              <span className="text-[10px] text-gray-400 block font-medium">
                Délai: {product.leadTime}
              </span>
            )}
          </div>

          {/* Bouton WhatsApp avec design vert dégradé et lueur */}
          <button
            onClick={handleWhatsAppOrder}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white flex items-center gap-1.5 transition-all duration-300 shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/40 hover:scale-[1.04] active:scale-[0.96] text-xs font-bold shrink-0 cursor-pointer border border-white/10"
            title="Commander via WhatsApp"
            aria-label={`Commander ${product.title} via WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
            <span>Commander</span>
          </button>
        </div>
      </div>

    </div>
  );
}
