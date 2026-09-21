import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTA({ onOpenQuote }) {
  return (
    <section id="contact" className="bg-[#050A10] text-white py-16 sm:py-20 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle blue ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: CTA Headline, Subtitle & Button */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-2">
                Un projet en tête ?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Transformons votre idée <br />
                en <span className="text-[#0066FF]">objet unique.</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Contactez-nous dès maintenant pour un devis gratuit ou un conseil personnalisé.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details Box with Blue Vertical Line */}
          <div className="lg:col-span-5 bg-[#080E1C] border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Blue vertical line on left border */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#0066FF] shadow-[0_0_12px_#0066FF]"></div>

            <h3 className="text-lg font-bold text-white mb-6">
              Coordonnées de l'atelier
            </h3>

            <div className="space-y-5 text-sm text-gray-300">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block uppercase font-semibold">Téléphone / WhatsApp</span>
                  <a href="tel:+22893456789" className="text-white hover:text-[#0066FF] font-semibold transition">
                    +228 93 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block uppercase font-semibold">Email direct</span>
                  <a href="mailto:contact@smartkara-design.com" className="text-white hover:text-[#0066FF] font-semibold transition break-all">
                    contact@smartkara-design.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block uppercase font-semibold">Localisation</span>
                  <span className="text-white font-semibold">
                    Lomé, Togo
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
