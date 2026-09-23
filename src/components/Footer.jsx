import React from 'react';
import LogoSKD from './LogoSKD';
import { Facebook, Instagram, Video, Youtube } from 'lucide-react';

export default function Footer({ onOpenStudio, onNavigate }) {
  return (
    <footer id="footer" className="bg-[#050A10] border-t border-blue-500/20 py-10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Logo */}
            <a 
              href="#accueil" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home', 'accueil');
                }
              }}
              className="flex items-center cursor-pointer"
            >
              <LogoSKD size="sm" />
            </a>

            <div className="hidden sm:block h-6 w-px bg-blue-500/20"></div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-300">
              <a 
                href="#accueil" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'accueil');
                  }
                }}
                className="hover:text-[#0066FF] transition"
              >
                Accueil
              </a>
              <a 
                href="#a-propos" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'a-propos');
                  }
                }}
                className="hover:text-[#0066FF] transition"
              >
                À propos
              </a>
              <a 
                href="#nos-produits" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'nos-produits');
                  }
                }}
                className="hover:text-[#0066FF] transition"
              >
                Nos produits
              </a>

              <a 
                href="#galerie" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('gallery');
                  }
                }}
                className="hover:text-[#0066FF] transition"
              >
                Galerie
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'contact');
                  }
                }}
                className="hover:text-[#0066FF] transition"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066FF] hover:text-white flex items-center justify-center text-gray-300 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066FF] hover:text-white flex items-center justify-center text-gray-300 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066FF] hover:text-white flex items-center justify-center text-gray-300 transition"
              aria-label="TikTok"
            >
              <Video className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066FF] hover:text-white flex items-center justify-center text-gray-300 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Discreet Blue Horizontal Line */}
        <div className="h-px w-full bg-blue-500/20"></div>

        {/* Bottom Rights Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
          <p>© 2026 SMART KARA DESIGN. Tous droits réservés.</p>
          <p className="font-semibold text-gray-300">
            Conception • Fabrication • Personnalisation
          </p>
        </div>

      </div>
    </footer>
  );
}
