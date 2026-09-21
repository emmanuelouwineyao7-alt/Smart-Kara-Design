import React from 'react';
import { Gift, Home, Sparkles, Layers, Box } from 'lucide-react';

export default function ServicesBar({ onSelectFilter }) {
  const services = [
    {
      id: "objets-personnalises",
      title: "Objets personnalisés",
      icon: Gift,
    },
    {
      id: "decoration",
      title: "Décoration moderne",
      icon: Home,
    },
    {
      id: "gravure-laser",
      title: "Gravure laser",
      icon: Sparkles,
    },
    {
      id: "enseignes-signaletique",
      title: "Enseignes",
      icon: Layers,
    },
    {
      id: "impression-3d",
      title: "Accessoires imprimés en 3D",
      icon: Box,
    },
  ];

  return (
    <div className="bg-[#050A10] border-y border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-blue-500/20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastOnMobile = index === 4;
            return (
              <button
                key={service.id}
                onClick={() => onSelectFilter && onSelectFilter(service.id)}
                className={`flex flex-col items-center justify-center gap-2.5 py-3 px-2 group hover:bg-white/5 transition duration-200 text-center ${
                  isLastOnMobile ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center text-white group-hover:text-blue-400 group-hover:scale-110 transition duration-200">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-xs font-semibold text-white group-hover:text-blue-300 transition leading-tight">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
