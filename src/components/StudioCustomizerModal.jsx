import React, { useState } from 'react';
import { X, Sparkles, Layers, Sliders, Type, Check, MessageCircle } from 'lucide-react';

export default function StudioCustomizerModal({ isOpen, onClose }) {
  const [productType, setProductType] = useState('support-tel');
  const [material, setMaterial] = useState('bois-iroko');
  const [customText, setCustomText] = useState('Brandon');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(8);
  const [thickness, setThickness] = useState(1.5);
  const whatsappNumber = "22879800487";

  if (!isOpen) return null;

  const productBases = [
    { id: 'support-tel', name: 'Support Téléphone', basePrice: 3000 },
    { id: 'porte-lunettes', name: 'Porte-lunettes', basePrice: 4500 },
    { id: 'plaque-acrylique', name: 'Plaque Acrylique Gravée', basePrice: 3500 },
    { id: 'porte-cartes', name: 'Porte-cartes de Visite', basePrice: 3000 },
    { id: 'organiseur-bureau', name: 'Organiseur Bureau & Stylos', basePrice: 6500 },
    { id: 'enseigne-bureau', name: 'Plaque de Bureau Nom/Fonction', basePrice: 5000 },
  ];

  const materials = [
    { id: 'bois-iroko', name: 'Bois Massif Noble (Acajou / Chêne)', priceMultiplier: 1.2, color: '#8B4513', texture: 'wood' },
    { id: 'contrepaque', name: 'Contreplaqué de Bouleau 5mm', priceMultiplier: 1.0, color: '#D2B48C', texture: 'plywood' },
    { id: 'plexiglas-transp', name: 'Plexiglas Acrylique Translucide 5mm', priceMultiplier: 1.3, color: '#E0F7FA', texture: 'acrylic' },
    { id: 'plexiglas-noir', name: 'Plexiglas Acrylique Noir Néon 5mm', priceMultiplier: 1.4, color: '#1A1A1A', texture: 'acrylic-dark' },
    { id: 'impression-3d', name: 'Impression 3D (PLA+ / Résine Haute Définition)', priceMultiplier: 1.25, color: '#0066FF', texture: '3d-print' },
    { id: 'pvc-forex', name: 'PVC Forex Blanc Haute Densité', priceMultiplier: 0.9, color: '#F5F5F5', texture: 'pvc' },
  ];

  const fonts = [
    { id: 'font-sans', name: 'Moderne Sans (Ex: Brandon)', class: 'font-sans font-bold' },
    { id: 'font-script', name: 'Élégant Manuscrit (Ex: Sarah Mitchell)', class: 'font-script text-2xl' },
    { id: 'font-mono', name: 'Tech & Géométrique', class: 'font-mono font-extrabold tracking-widest' },
    { id: 'font-serif', name: 'Classique & Prestige', class: 'font-serif font-bold italic' },
  ];

  const selectedBase = productBases.find(b => b.id === productType) || productBases[0];
  const selectedMat = materials.find(m => m.id === material) || materials[0];
  const surfaceArea = (width * height) / 100;
  const calculatedPrice = Math.round((selectedBase.basePrice * selectedMat.priceMultiplier + surfaceArea * 120) / 500) * 500;

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*DEMANDE DE CRÉATION SUR-MESURE — SMART KARA DESIGN (Kara)*\n\n` +
      `*Type d'objet :* ${selectedBase.name}\n` +
      `*Matériau :* ${selectedMat.name}\n` +
      `*Texte à graver :* "${customText}"\n` +
      `*Dimensions :* ${width} x ${height} x ${thickness} cm\n` +
      `*Estimation tarifaire :* ${calculatedPrice.toLocaleString('fr-FR')} FCFA\n\n` +
      `Merci de me confirmer la faisabilité et les modalités de livraison à Kara / au Togo !`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F172A] border border-blue-500/30 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B0F19]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Studio SKD — Personnalisation Live (Kara)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Grid Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 p-6 gap-8 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Config Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Base Object Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" /> 1. Type d'objet
              </label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 font-medium"
              >
                {productBases.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* 2. Material Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-400" /> 2. Matériau & Finition
              </label>
              <div className="space-y-2">
                {materials.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setMaterial(m.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      material === m.id
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                        : 'bg-[#1E293B]/60 border-white/10 text-gray-300 hover:bg-[#1E293B]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: m.color }}></span>
                      {m.name}
                    </span>
                    {material === m.id && <Check className="w-4 h-4 text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Engraving Text */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Type className="w-4 h-4 text-blue-400" /> 3. Texte à graver / Personnaliser
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Ex: Brandon, Sarah Mitchell, Logo..."
                className="w-full bg-[#1E293B] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 font-semibold"
              />
            </div>

            {/* 4. Font Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Style de typographie
              </label>
              <div className="grid grid-cols-2 gap-2">
                {fonts.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFontFamily(f.id)}
                    className={`p-2.5 rounded-xl border text-xs text-center transition ${
                      fontFamily === f.id
                        ? 'bg-blue-600/30 border-blue-500 text-white font-bold'
                        : 'bg-[#1E293B]/60 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Dimensions */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Dimensions (cm)
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Largeur: {width}cm</span>
                  <input
                    type="range" min="8" max="30" value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Hauteur: {height}cm</span>
                  <input
                    type="range" min="5" max="25" value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Épaisseur: {thickness}cm</span>
                  <input
                    type="range" min="0.5" max="3" step="0.5" value={thickness}
                    onChange={(e) => setThickness(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Canvas Preview & WhatsApp Button */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Prévisualisation de la gravure en direct
              </span>

              {/* Dynamic SVG Box Canvas */}
              <div 
                className="w-full h-72 rounded-2xl border border-white/15 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: selectedMat.texture === 'wood' ? '#5C2C16' 
                    : selectedMat.texture === 'plywood' ? '#C29B72' 
                    : selectedMat.texture === 'acrylic-dark' ? '#111827'
                    : selectedMat.texture === 'acrylic' ? '#0F2B48' 
                    : selectedMat.texture === '3d-print' ? '#071830'
                    : '#2A3447',
                  backgroundImage: selectedMat.texture === '3d-print'
                    ? 'radial-gradient(#0066FF 1px, transparent 1px)'
                    : selectedMat.texture.includes('wood') || selectedMat.texture.includes('plywood')
                    ? 'radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)'
                    : 'none',
                  backgroundSize: selectedMat.texture === '3d-print' ? '12px 12px' : 'auto'
                }}
              >
                {/* Simulated Product Plate */}
                <div 
                  className="rounded-xl border border-white/30 shadow-2xl flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 transition duration-500 relative"
                  style={{
                    width: `${Math.min(width * 14, 260)}px`,
                    height: `${Math.min(height * 14, 180)}px`,
                    backgroundColor: selectedMat.color,
                    boxShadow: selectedMat.texture.includes('acrylic') ? '0 0 25px rgba(0, 240, 255, 0.3)' : '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  <span className="absolute top-2 left-2 text-[9px] font-bold text-[#8B4513] opacity-60 uppercase tracking-widest">
                    SKD Laser Kara
                  </span>

                  <div className={`text-gray-900 tracking-wide break-all ${
                    fontFamily === 'font-script' ? 'font-script text-3xl text-[#3D2314]' :
                    fontFamily === 'font-mono' ? 'font-mono text-xl font-bold tracking-widest text-[#2A1508]' :
                    fontFamily === 'font-serif' ? 'font-serif text-2xl font-bold italic text-[#3D2314]' :
                    'font-sans text-2xl font-black text-[#221208]'
                  }`}>
                    {customText || 'Votre Prénom'}
                  </div>

                  <span className="text-[10px] text-gray-700/80 font-medium mt-1">
                    {width} x {height} cm
                  </span>
                </div>

                <div className="absolute top-0 right-1/3 w-0.5 h-full bg-blue-400/40 blur-[1px] animate-pulse pointer-events-none"></div>
                <div className="absolute top-2 right-2 bg-blue-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Rendu Laser 0.01mm
                </div>
              </div>
            </div>

            {/* Price & Direct WhatsApp Action */}
            <div className="bg-[#1E293B] border border-white/10 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Prix estimé sur-mesure</span>
                <span className="text-2xl font-extrabold text-blue-400">
                  {calculatedPrice.toLocaleString('fr-FR')} FCFA
                </span>
                <span className="text-[10px] text-gray-400 block">Atelier SKD Kara, Togo</span>
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f7a6e] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Envoyer sur WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
