import React from 'react';

const LogoSVG = ({ width = 200, height = 200 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dynamic water waves with gradient */}
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0396FF" />
          <stop offset="50%" stopColor="#60BDFF" />
          <stop offset="100%" stopColor="#0396FF" />
        </linearGradient>
        <linearGradient id="jetBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#005B9F" />
          <stop offset="100%" stopColor="#003566" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dynamic waves */}
      <path 
        d="M10,140 C50,120 90,160 130,130 C170,100 210,140 250,120 C280,105 300,120 300,120 L300,180 L10,180 Z" 
        fill="url(#waterGradient)" 
        opacity="0.8"
      />
      <path 
        d="M10,150 C40,140 80,170 120,140 C160,110 200,150 240,130 C270,115 300,130 300,130 L300,180 L10,180 Z" 
        fill="#0396FF" 
        opacity="0.6"
      />
      <path 
        d="M10,160 C40,150 80,180 120,150 C160,120 200,160 240,140 C270,125 300,140 300,140 L300,180 L10,180 Z" 
        fill="#60BDFF" 
        opacity="0.4"
      />

      {/* Water spray effects */}
      <path 
        d="M180,120 C183,115 186,118 188,113 C190,108 187,105 190,100 C193,95 200,103 200,98" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.7"
      />
      <path 
        d="M175,115 C178,110 181,113 183,108 C185,103 182,100 185,95" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.5"
      />

      {/* Jet ski body with reflections */}
      <path 
        d="M80,130 C110,125 150,120 180,128 L155,150 C125,145 95,148 65,152 Z" 
        fill="url(#jetBodyGradient)" 
        filter="url(#dropShadow)"
      />
      
      {/* Jet ski windshield */}
      <path 
        d="M120,130 C135,125 150,122 160,125 L155,110 C150,105 135,110 120,122 Z" 
        fill="#003566" 
        opacity="0.9"
        filter="url(#dropShadow)"
      />
      <path 
        d="M122,128 C135,122 149,120 158,123" 
        stroke="#60BDFF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.8"
      />
      
      {/* Driver silhouette with dynamic pose */}
      <path 
        d="M135,110 C135,105 140,100 145,105 C150,110 148,115 145,115 C140,120 135,115 135,110 Z" 
        fill="#001E40" 
      />
      <path 
        d="M140,115 C140,115 138,108 143,100 C148,95 155,100 155,105 C155,110 150,115 145,116" 
        fill="#001E40" 
      />
      
      {/* Logo text with bold styling */}
      <text 
        x="150" 
        y="85" 
        fontFamily="Arial, sans-serif" 
        fontSize="36" 
        fontWeight="900" 
        fill="white" 
        textAnchor="middle"
        letterSpacing="2"
        filter="url(#dropShadow)"
      >
        JET RENT
      </text>
      
      {/* Dynamic motion lines */}
      <path 
        d="M60,140 L30,145" 
        stroke="white" 
        strokeWidth="2" 
        strokeDasharray="5,3" 
        opacity="0.7"
      />
      <path 
        d="M70,135 L40,140" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeDasharray="4,3" 
        opacity="0.5"
      />
      <path 
        d="M80,130 L50,135" 
        stroke="white" 
        strokeWidth="1" 
        strokeDasharray="3,3" 
        opacity="0.3"
      />
    </svg>
  );
};

export default LogoSVG;
