import React from 'react';

export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <div className="w-10 h-10 rounded-full border border-blue-500/20 text-[#0066FF] flex items-center justify-center bg-blue-50/70 shrink-0">
        <Icon className="w-5 h-5 stroke-[1.75]" />
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
          {title}
        </h4>
        {description && (
          <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
