import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [currencyToggle, setCurrencyToggle] = useState('FCFA');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('Kara, Togo');
  const whatsappNumber = "22879800487";

  if (!isOpen) return null;

  const totalFCFA = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalEUR = (totalFCFA / 655.957).toFixed(2);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let text = `*NOUVELLE COMMANDE — SMART KARA DESIGN (SKD)*\n\n`;
    if (customerName) text += `*Client :* ${customerName}\n`;
    text += `*Adresse/Lieu :* ${customerAddress}\n\n`;
    text += `*PRODUITS COMMANDÉS :*\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.title}* (x${item.quantity})\n`;
      text += `   - Prix: ${item.price.toLocaleString('fr-FR')} FCFA\n`;
      if (item.customText) text += `   - Gravure : "${item.customText}"\n`;
      if (item.material) text += `   - Matériau : ${item.material}\n`;
      if (item.dimensions) text += `   - Dimensions : ${item.dimensions}\n`;
      text += `\n`;
    });

    text += `*TOTAL COMMANDE :* ${totalFCFA.toLocaleString('fr-FR')} FCFA (~${totalEUR} €)\n\n`;
    text += `Merci de me confirmer la disponibilité et le délai de réalisation !`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-md bg-[#0F172A] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0B0F19]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-lg text-white">Mon Panier SKD</h3>
            <span className="bg-emerald-600/30 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              {cartItems.reduce((sum, i) => sum + i.quantity, 0)} articles
            </span>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-gray-300 font-medium">Votre panier est vide</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Parcourez nos créations ou créez votre objet sur-mesure dans notre studio !
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="p-3.5 rounded-2xl bg-[#1E293B]/70 border border-white/10 flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 truncate">{item.subtitle}</p>
                  
                  {item.customText && (
                    <span className="inline-block mt-1 text-[10px] bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded border border-emerald-700/50">
                      Gravé: "{item.customText}"
                    </span>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-extrabold text-emerald-400 text-xs sm:text-sm">
                      {(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 bg-[#0B0F19] rounded-lg border border-white/10 p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-1.5">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1.5 text-gray-500 hover:text-red-400 transition"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Section */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#0B0F19] space-y-4">
            
            {/* Address Input */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Votre Nom & Prénom"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
              <input
                type="text"
                placeholder="Ville / Quartier (Ex: Lomé, Togo)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Total Row */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Total de la commande</span>
                <span className="text-xs text-gray-500">Livraison à définir avec l'atelier</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-emerald-400 block">
                  {totalFCFA.toLocaleString('fr-FR')} FCFA
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  (~{totalEUR} €)
                </span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-white text-white" />
              <span>Commander sur WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
