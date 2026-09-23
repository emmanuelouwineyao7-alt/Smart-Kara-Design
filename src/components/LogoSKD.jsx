import React from 'react';

export default function LogoSKD({ size = 'md', className = '' }) {
  // Height mapping according to size requested
  const heightClass = 
    size === '2xl' ? 'h-24 sm:h-28' :
    size === 'xl' ? 'h-16 sm:h-20 lg:h-24' :
    size === 'lg' ? 'h-14 sm:h-18' : 
    size === 'sm' ? 'h-8 sm:h-9' : 
    'h-10 sm:h-12';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="SMART KARA DESIGN"
        className={`${heightClass} w-auto max-w-full object-contain drop-shadow-[0_4px_20px_rgba(0,102,255,0.2)] transition-transform duration-300 hover:scale-102`}
        loading="eager"
      />
    </div>
  );
}
