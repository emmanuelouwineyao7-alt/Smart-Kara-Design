import React from 'react';
import LogoSKD from './LogoSKD';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#050A10] border-b border-white/10">
      
      {/* Halo lumineux ambiant bleu royal et cyan pour une profondeur visuelle premium */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#0066FF]/12 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#00A3FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[620px] items-center gap-8 lg:gap-10 py-10 lg:py-16">
          
          {/* GAUCHE : Logo SKD, Signature, Titre, Descriptif, Bouton & Puces d'excellence */}
          <div className="lg:col-span-5 space-y-7 z-20">
            
            {/* Logo officiel SMART KARA DESIGN sans fond */}
            <div className="inline-flex items-start">
              <img
                src="/images/skd-logo-header.png"
                alt="SMART KARA DESIGN"
                className="h-28 sm:h-32 lg:h-36 w-auto object-contain drop-shadow-[0_8px_25px_rgba(0,102,255,0.4)] hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Titre Principal avec effet dégradé bleu royal */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Des idées transformées <br />
              en <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">objets uniques</span>
            </h1>

            {/* Paragraphe de présentation soigné */}
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-md">
              Découvrez nos supports design, personnalisables et adaptés à tous vos besoins : professionnels, cadeaux, événements et bien plus encore.
            </p>

            {/* Bouton d'action principal et badges rapides */}
            <div className="pt-2 space-y-4">
              <a
                href="#nos-produits"
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Découvrir nos créations</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              {/* Puces de réassurance rapides */}
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium pt-2">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Sur-mesure</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Gravure haute précision</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Qualité Premium</span>
                </div>
              </div>
            </div>

          </div>

          {/* DROITE : Présentation visuelle premium sans la ligne en diagonale */}
          <div className="lg:col-span-7 relative h-full flex items-center justify-end py-4 lg:py-0">
            
            {/* Cadre de la photo des 3 créations avec bordure et halo soignés */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[490px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group border border-white/10 hover:border-[#0066FF]/30 transition-colors duration-500">
              
              {/* Photo du trio de produits (Support bois B, porte-lunettes, support acrylique) */}
              <img
                src="/images/hero-three-stands.jpg"
                alt="Créations personnalisées SMART KARA DESIGN"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Halo dégradé sombre élégant en superposition */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050A10]/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
