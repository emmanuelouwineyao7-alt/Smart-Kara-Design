import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onProductClick }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100">
      
      {/* Product Image */}
      <div 
        className="relative h-44 sm:h-48 w-full bg-gray-100 overflow-hidden cursor-pointer"
        onClick={() => onProductClick && onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Product Content Body */}
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div>
          <h3 
            onClick={() => onProductClick && onProductClick(product)}
            className="font-bold text-[#0F172A] text-xs sm:text-sm leading-snug group-hover:text-[#0066FF] transition cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>
          <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Card Footer: Price & Circular Cart Button */}
        <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between">
          <span className="font-extrabold text-[#0066FF] text-xs sm:text-sm">
            {product.price.toLocaleString('fr-FR')} {product.currency || 'FCFA'}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart && onAddToCart(product);
            }}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow hover:scale-110 active:scale-95 shrink-0"
            title="Ajouter au panier"
            aria-label={`Ajouter ${product.title} au panier`}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
