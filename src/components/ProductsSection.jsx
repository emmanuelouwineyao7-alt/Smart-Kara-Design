import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

export default function ProductsSection({ onProductClick, onViewAll }) {
  return (
    <section id="nos-produits" className="py-14 sm:py-20 bg-[#050A10] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec fond sombre */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs tracking-wider uppercase mb-2">
              <span className="w-6 h-0.5 bg-[#0066FF]"></span>
              <span>Nos Produits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Nos produits phares
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1.5 font-normal">
              Des créations qui allient utilité, esthétique et personnalisation.
            </p>
          </div>

          <a
            href="#produits"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-gray-200 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] font-semibold text-xs transition-all self-start sm:self-auto shadow-sm cursor-pointer"
          >
            Voir tous les produits
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grille des 5 produits phares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {PRODUCTS.slice(0, 5).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
