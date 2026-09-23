import React, { useState } from 'react';
import { X, Send, CheckCircle2, FileText, MessageCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Produit personnalisé',
    description: '',
  });
  const whatsappNumber = "22879800487";

  if (!isOpen) return null;

  const projectTypes = [
    "Produit personnalisé",
    "Gravure laser",
    "Enseigne / signalétique",
    "Commande en série",
    "Conception sur mesure"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp text message
    const message = encodeURIComponent(
      `*Demande de Devis / Commande - SMART KARA DESIGN*\n` +
      `• *Nom / Entreprise* : ${formData.name}\n` +
      `• *Téléphone / WhatsApp* : ${formData.phone}\n` +
      `• *Type de projet* : ${formData.projectType}\n` +
      `• *Description* : ${formData.description || 'Non précisé'}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 bg-[#080E1C] border border-emerald-500/30 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#050A10]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">Commander / Demander un devis</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">Demande ouverte sur WhatsApp !</h4>
            <p className="text-sm text-gray-300">
              Votre message a été transféré sur WhatsApp. Notre atelier va vous répondre immédiatement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Nom / entreprise */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Nom / entreprise *
              </label>
              <input
                type="text"
                required
                placeholder="Votre nom ou le nom de votre société"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {/* Téléphone / WhatsApp */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Téléphone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+228 90 00 00 00"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {/* Type de projet */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Type de projet *
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Description du projet */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Description du projet
              </label>
              <textarea
                rows="3"
                placeholder="Détaillez vos besoins (dimensions, matériaux souhaités, quantités, textes ou logos à graver)..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition resize-none"
              ></textarea>
            </div>

            {/* Bouton Envoyer la demande sur WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Envoyer la demande sur WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
