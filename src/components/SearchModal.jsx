import React, { useState } from 'react';
import { X, Search, ArrowRight, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function SearchModal({ isOpen, onClose, onProductClick, onAddToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.material.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCategories = CATEGORIES.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-20">
      <div className="relative bg-[#0F172A] border border-blue-500/30 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#0B0F19]">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit, matière (bois, plexiglas...), service..."
            className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none font-medium"
          />
          <button onClick={onClose} className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Quick Category Chips */}
          <div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
              Recherches fréquentes
            </span>
            <div className="flex flex-wrap gap-2">
              {['Support téléphone', 'Porte-lunettes', 'Plexiglas', 'Bois massif', 'Porte-cartes', 'Signalétique'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuery(chip)}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 text-xs text-gray-300 hover:text-white transition"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Products List */}
          <div>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-3">
              Produits ({filteredProducts.length})
            </span>
            
            {filteredProducts.length === 0 ? (
              <p className="text-xs text-gray-400 py-4">Aucun produit ne correspond à votre recherche.</p>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between transition cursor-pointer group"
                  >
                    <div 
                      className="flex items-center gap-3 flex-1"
                      onClick={() => {
                        onClose();
                        onProductClick(product);
                      }}
                    >
                      <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition">{product.title}</h4>
                        <p className="text-xs text-gray-400">{product.subtitle} • {product.price.toLocaleString('fr-FR')} FCFA</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white transition"
                      title="Ajouter au panier"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
