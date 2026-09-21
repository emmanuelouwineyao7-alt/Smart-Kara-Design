import React from 'react';

export default function LogoSKD({ size = 'md', className = '', hideText = false }) {
  const heightClass = size === 'lg' ? 'h-16' : size === 'sm' ? 'h-9' : 'h-12';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="SMART KARA DESIGN"
        className={`${heightClass} w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
}
