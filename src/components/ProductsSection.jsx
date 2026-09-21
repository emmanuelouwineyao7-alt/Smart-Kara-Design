import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

export default function ProductsSection({ onProductClick, onAddToCart }) {
  return (
    <section id="nos-produits" className="py-14 sm:py-20 bg-[#050A10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Nos produits phares
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1.5 font-normal">
              Des créations qui allient utilité, esthétique et personnalisation.
            </p>
          </div>

          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 font-medium text-xs transition-all self-start sm:self-auto hover:bg-white/5"
          >
            Voir tous les produits
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {PRODUCTS.slice(0, 5).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
