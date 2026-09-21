import React from 'react';
import { Diamond, Clock, UserCheck, ShieldCheck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const values = [
    {
      title: "Qualité professionnelle",
      icon: Diamond,
    },
    {
      title: "Respect des délais",
      icon: Clock,
    },
    {
      title: "Service client à l'écoute",
      icon: UserCheck,
    },
    {
      title: "Personnalisation sur mesure",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="a-propos" className="bg-[#070B13] border-t border-white/10">
      <div className="w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* Left Panel: CNC Laser Engraving Machine Photo with Handwritten Overlay */}
          <div className="lg:col-span-4 relative overflow-hidden bg-black min-h-[320px] lg:min-h-[460px] group">
            <img
              src="/images/laser-engraving-machine.jpg"
              alt="Découpe et gravure laser de précision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Handwritten Text Overlay */}
            <div className="absolute top-8 right-6 z-20 transform -rotate-12 pointer-events-none select-none text-right">
              <p className="font-script text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-snug">
                La précision <br />
                du laser au service <br />
                de vos idées
              </p>
            </div>
          </div>

          {/* Center Panel: White Background Card with 4 Values */}
          <div className="lg:col-span-5 bg-white text-gray-900 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-[#0066FF] font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#0066FF]"></span>
                Pourquoi nous choisir ?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-2 leading-tight">
                Plus qu'un service, <br />
                une <span className="text-[#0066FF]">expérience créative</span>
              </h2>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg">
              Chez SMART KARA DESIGN, chaque objet est une histoire. Nous mettons notre savoir-faire, notre créativité et notre passion à votre service pour réaliser vos idées avec précision et élégance.
            </p>

            {/* 4 Value Badges in a row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-gray-100">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-blue-500/20 text-[#0066FF] flex items-center justify-center bg-blue-50/60">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                      {v.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Dark Chevron Contact Section */}
          <div className="lg:col-span-3 bg-[#080E1C] text-white p-8 sm:p-10 flex flex-col justify-center space-y-5 relative overflow-hidden border-l border-white/5">
            {/* Neon Blue Angled Chevron Line */}
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#0066FF] to-transparent shadow-[0_0_15px_#0066FF] hidden lg:block"></div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Un projet en tête ?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                <span 
                  onClick={onOpenQuote}
                  className="text-blue-400 font-semibold underline underline-offset-2 cursor-pointer hover:text-blue-300"
                >
                  Contactez-nous
                </span> dès maintenant pour un devis gratuit ou un conseil personnalisé.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Details List */}
            <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:+22893456789" className="hover:text-white transition">+228 93 45 67 89</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@smartkara-design.com" className="hover:text-white transition break-all">contact@smartkara-design.com</a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Lomé, Togo</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
