import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={() => onClick && onClick(category)}
      className="group relative h-40 sm:h-44 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Category Image */}
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-3.5 flex flex-col justify-end">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xs sm:text-sm font-bold text-white leading-tight drop-shadow-sm line-clamp-2">
            {category.title}
          </h3>
          <button 
            type="button"
            aria-label={`Voir ${category.title}`}
            className="w-7 h-7 rounded-full bg-[#0066FF] group-hover:bg-blue-500 text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 shadow-sm"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
