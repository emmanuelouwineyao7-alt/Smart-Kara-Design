/* ==========================================================================
   SMART KARA DESIGN (SKD) — Main JavaScript Module
   Conception, fabrication & personnalisation d'objets (Lomé, Togo)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Initial State & Data
  // --------------------------------------------------------------------------
  const state = {
    cart: [
      {
        id: 1,
        title: "Support téléphone en bois",
        subtitle: "Avec gravure personnalisée",
        price: 5000,
        quantity: 1,
        customText: "Brandon",
        material: "Bois massif d'Iroko",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      }
    ],
    customizer: {
      productType: 'support-tel',
      material: 'bois-iroko',
      customText: 'Brandon',
      font: 'font-sans',
      width: 15,
      height: 8,
      thickness: 1.5,
      calculatedPrice: 5000
    }
  };

  const productBases = {
    'support-tel': { name: 'Support Téléphone', basePrice: 4000 },
    'porte-lunettes': { name: 'Porte-lunettes', basePrice: 5000 },
    'plaque-acrylique': { name: 'Plaque Acrylique Gravée', basePrice: 4500 },
    'porte-cartes': { name: 'Porte-cartes de Visite', basePrice: 3500 },
    'organiseur-bureau': { name: 'Organiseur Bureau & Stylos', basePrice: 7000 },
  };

  const materialMultipliers = {
    'bois-iroko': { name: 'Bois Massif Noble (Acajou / Chêne)', mult: 1.2, color: '#8B4513' },
    'contrepaque': { name: 'Contreplaqué de Bouleau 5mm', mult: 1.0, color: '#D2B48C' },
    'plexiglas-transp': { name: 'Plexiglas Acrylique Translucide', mult: 1.3, color: '#E0F7FA' },
    'plexiglas-noir': { name: 'Plexiglas Acrylique Noir Néon', mult: 1.4, color: '#1A1A1A' },
  };

  // --------------------------------------------------------------------------
  // 2. DOM Elements
  // --------------------------------------------------------------------------
  const cartBadge = document.getElementById('cart-badge');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalFCFA = document.getElementById('cart-total-fcfa');
  const cartTotalEUR = document.getElementById('cart-total-eur');
  const whatsappBtn = document.getElementById('btn-whatsapp-checkout');

  const studioModal = document.getElementById('studio-modal');
  const quoteModal = document.getElementById('quote-modal');
  const searchModal = document.getElementById('search-modal');
  const productDetailModal = document.getElementById('product-detail-modal');

  const studioTextInput = document.getElementById('studio-text-input');
  const studioPreviewText = document.getElementById('studio-preview-text');
  const studioPriceDisplay = document.getElementById('studio-price-display');

  // --------------------------------------------------------------------------
  // 3. Cart Functions
  // --------------------------------------------------------------------------
  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;

    const totalFCFA = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalEUR = (totalFCFA / 655.957).toFixed(2);

    if (cartTotalFCFA) cartTotalFCFA.textContent = `${totalFCFA.toLocaleString('fr-FR')} FCFA`;
    if (cartTotalEUR) cartTotalEUR.textContent = `(~${totalEUR} €)`;

    if (cartItemsContainer) {
      if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div style="padding: 3rem 1rem; text-align: center; color: #9CA3AF;">
            <p>Votre panier est vide</p>
          </div>
        `;
      } else {
        cartItemsContainer.innerHTML = state.cart.map(item => `
          <div style="display: flex; gap: 0.75rem; align-items: center; padding: 0.75rem; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 0.75rem;">
            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
              <h4 style="font-size: 0.875rem; font-weight: 700; color: white;">${item.title}</h4>
              <p style="font-size: 0.75rem; color: #9CA3AF;">${item.subtitle}</p>
              ${item.customText ? `<span style="font-size: 0.688rem; background: rgba(37,99,235,0.3); color: #93C5FD; padding: 2px 6px; border-radius: 4px;">Gravé: "${item.customText}"</span>` : ''}
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.25rem;">
                <span style="font-weight: 800; color: #60A5FA; font-size: 0.875rem;">${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</span>
                <span style="font-size: 0.75rem; color: #D1D5DB;">x${item.quantity}</span>
              </div>
            </div>
            <button class="remove-cart-item" data-id="${item.id}" style="color: #EF4444; padding: 4px;">✕</button>
          </div>
        `).join('');

        // Attach removal events
        document.querySelectorAll('.remove-cart-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            state.cart = state.cart.filter(i => i.id != id);
            updateCartUI();
          });
        });
      }
    }
  }

  function addToCart(product) {
    const existing = state.cart.find(i => i.id === product.id && i.customText === product.customText);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    openModal(cartDrawer);
  }

  // --------------------------------------------------------------------------
  // 4. WhatsApp Order Trigger
  // --------------------------------------------------------------------------
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;

      const nameInput = document.getElementById('cart-customer-name')?.value || '';
      const addressInput = document.getElementById('cart-customer-address')?.value || 'Lomé, Togo';

      let text = `*NOUVELLE COMMANDE — SMART KARA DESIGN (SKD)*\n\n`;
      if (nameInput) text += `*Client :* ${nameInput}\n`;
      text += `*Adresse/Lieu :* ${addressInput}\n\n`;
      text += `*PRODUITS COMMANDÉS :*\n`;

      state.cart.forEach((item, index) => {
        text += `${index + 1}. *${item.title}* (x${item.quantity})\n`;
        text += `   - Prix: ${item.price.toLocaleString('fr-FR')} FCFA\n`;
        if (item.customText) text += `   - Gravure : "${item.customText}"\n`;
        text += `\n`;
      });

      const totalFCFA = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      text += `*TOTAL COMMANDE :* ${totalFCFA.toLocaleString('fr-FR')} FCFA\n\n`;
      text += `Merci de me confirmer la disponibilité et le délai de réalisation à Lomé !`;

      window.open(`https://wa.me/22893456789?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 5. Studio Customizer Engine
  // --------------------------------------------------------------------------
  function calculateStudioPrice() {
    const base = productBases[state.customizer.productType] || productBases['support-tel'];
    const mat = materialMultipliers[state.customizer.material] || materialMultipliers['bois-iroko'];
    const surface = (state.customizer.width * state.customizer.height) / 100;
    const price = Math.round((base.basePrice * mat.mult + surface * 120) / 500) * 500;
    state.customizer.calculatedPrice = price;

    if (studioPriceDisplay) {
      studioPriceDisplay.textContent = `${price.toLocaleString('fr-FR')} FCFA`;
    }
  }

  if (studioTextInput) {
    studioTextInput.addEventListener('input', (e) => {
      state.customizer.customText = e.target.value;
      if (studioPreviewText) {
        studioPreviewText.textContent = e.target.value || 'Votre Texte';
      }
    });
  }

  // Add to cart buttons on page
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (card) {
        const title = card.querySelector('.product-title')?.textContent || 'Création SKD';
        const priceText = card.querySelector('.product-price')?.textContent || '5000';
        const price = parseInt(priceText.replace(/\D/g, '')) || 5000;
        const img = card.querySelector('.product-card-img')?.src || '';

        addToCart({
          id: Date.now(),
          title: title,
          subtitle: 'Objet personnalisé SKD',
          price: price,
          customText: 'Brandon',
          image: img
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Modal Helpers
  // --------------------------------------------------------------------------
  function openModal(el) {
    if (el) el.classList.add('active');
  }
  function closeModal(el) {
    if (el) el.classList.remove('active');
  }

  document.querySelectorAll('.open-studio-btn').forEach(b => b.addEventListener('click', () => openModal(studioModal)));
  document.querySelectorAll('.open-cart-btn').forEach(b => b.addEventListener('click', () => openModal(cartDrawer)));
  document.querySelectorAll('.open-quote-btn').forEach(b => b.addEventListener('click', () => openModal(quoteModal)));
  document.querySelectorAll('.open-search-btn').forEach(b => b.addEventListener('click', () => openModal(searchModal)));

  document.querySelectorAll('.close-modal-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      const overlay = e.target.closest('.modal-overlay');
      closeModal(overlay);
    });
  });

  // Init UI
  updateCartUI();
  calculateStudioPrice();

  console.log('SMART KARA DESIGN (SKD) — Application Initialisée.');
});
