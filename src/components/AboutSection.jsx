import React from 'react';
import FeatureItem from './FeatureItem';
import { Award, Clock, Headphones, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Qualité professionnelle",
      description: "Finitions soignées"
    },
    {
      icon: Clock,
      title: "Respect des délais",
      description: "Production organisée"
    },
    {
      icon: Headphones,
      title: "Service client à l'écoute",
      description: "Accompagnement personnalisé"
    },
    {
      icon: Sparkles,
      title: "Personnalisation sur mesure",
      description: "Votre idée, notre savoir-faire"
    }
  ];

  return (
    <section id="a-propos" className="bg-[#050A10] border-t border-white/10">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* GAUCHE : Photo de la machine laser avec slogan manuscrit */}
          <div className="lg:col-span-6 xl:col-span-5 relative overflow-hidden bg-black min-h-[340px] lg:min-h-[480px] group">
            <img
              src="/images/laser-engraving-machine.jpg"
              alt="Machine de découpe et gravure laser de précision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              loading="lazy"
            />
            
            {/* Vignette sombre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

            {/* Texte manuscrit décoratif */}
            <div className="absolute top-10 right-8 z-20 transform -rotate-12 pointer-events-none select-none text-right">
              <p className="font-script text-2xl sm:text-3xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] leading-snug">
                La précision <br />
                du laser au service <br />
                de vos idées
              </p>
            </div>
          </div>

          {/* DROITE : Fond blanc avec présentation et 4 piliers */}
          <div className="lg:col-span-6 xl:col-span-7 bg-white text-gray-900 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-6 h-0.5 bg-[#0066FF]"></span>
                <span>Pourquoi nous choisir ?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Plus qu'un service, <br />
                une <span className="text-[#0066FF]">expérience créative</span>
              </h2>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              Chez SMART KARA DESIGN, chaque objet est une histoire. Nous mettons notre savoir-faire, notre créativité et notre passion à votre service pour réaliser vos idées avec précision et élégance.
            </p>

            {/* 4 Avantages avec FeatureItem */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
              {features.map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
