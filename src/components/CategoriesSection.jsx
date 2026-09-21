import React from 'react';
import { CATEGORIES } from '../data/categories';
import CategoryCard from './CategoryCard';
import { ArrowRight } from 'lucide-react';

export default function CategoriesSection({ onSelectCategory }) {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading, description & Button */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div>
              <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-6 h-0.5 bg-[#0066FF]"></span>
                <span>Nos catégories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Une large gamme de produits <br />
                pour <span className="text-[#0066FF]">tous vos besoins</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Supports, décoration, signalétique, cadeaux… Découvrez nos différentes catégories et trouvez le produit qui vous correspond.
            </p>

            <div>
              <a
                href="#nos-produits"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Voir tout le catalogue
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 8 Category Cards in 4x2 Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={(cat) => onSelectCategory && onSelectCategory(cat.id)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
