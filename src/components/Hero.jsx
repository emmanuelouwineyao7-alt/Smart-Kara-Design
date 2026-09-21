import React from 'react';
import LogoSKD from './LogoSKD';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#050A10] border-b border-white/10">
      
      {/* Subtle blue ambient glows for depth */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[600px] items-center gap-8 lg:gap-4">
          
          {/* GAUCHE : Identité, Titre, Descriptif et Bouton */}
          <div className="lg:col-span-5 py-12 lg:py-16 space-y-6 z-20">
            
            {/* Logo & Signature */}
            <div className="inline-flex flex-col items-start gap-2">
              <LogoSKD size="lg" />
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-semibold mt-1">
                <span>Conception</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                <span>Fabrication</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                <span>Personnalisation</span>
              </div>
            </div>

            {/* Titre Principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Des idées transformées <br />
              en <span className="text-[#0066FF]">objets uniques</span>
            </h1>

            {/* Paragraphe de présentation */}
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-md">
              Nous concevons et fabriquons des objets personnalisés en bois, acrylique et autres matériaux pour particuliers et entreprises.
            </p>

            {/* Bouton principal avec border-radius élevé */}
            <div className="pt-2">
              <a
                href="#nos-produits"
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Découvrir nos créations
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* DROITE : Composition visuelle avec chevron diagonal et texte manuscrit */}
          <div className="lg:col-span-7 relative h-full flex items-center justify-end py-6 lg:py-0">
            
            {/* Forme graphique bleue en diagonale / Chevron entre les colonnes */}
            <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-30 hidden lg:block pointer-events-none">
              <svg width="60" height="340" viewBox="0 0 60 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 5 10 L 45 170 L 5 330" 
                  stroke="#0066FF" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="drop-shadow-[0_0_15px_#0066FF]"
                />
              </svg>
            </div>

            {/* Texte décoratif manuscrit en haut à droite */}
            <div className="absolute top-4 right-6 sm:right-10 z-30 pointer-events-none transform -rotate-6 select-none">
              <div className="text-right leading-tight space-y-0.5">
                <span className="block font-script text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Qualité
                </span>
                <span className="block font-script text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Créativité
                </span>
                <span className="block font-script text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Personnalisation
                </span>
                <div className="w-16 h-1 bg-[#0066FF] ml-auto rounded-full mt-1 shadow-[0_0_8px_#0066FF]"></div>
              </div>
            </div>

            {/* Conteneur produit géométrique avec forme graphique */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl lg:rounded-l-3xl overflow-hidden shadow-2xl group border border-white/10">
              
              {/* Photo du trio de produits (Support bois B, porte-lunettes, support acrylique Sarah) */}
              <img
                src="/images/hero-three-stands.jpg"
                alt="Créations personnalisées SMART KARA DESIGN"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Halo bleu diagonal léger */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050A10]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

