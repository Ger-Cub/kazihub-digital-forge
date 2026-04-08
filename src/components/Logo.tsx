
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`${sizes[size]} relative flex items-center justify-center ${className}`}>
      {/* Structure principale (Conteneur SVG) */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoForgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--cosmic-indigo))" />
            <stop offset="50%" stopColor="hsl(var(--cosmic-violet))" />
            <stop offset="100%" stopColor="hsl(var(--cosmic-pink))" />
          </linearGradient>
        </defs>

        {/* Le K Stylisé Moderne - Minimaliste */}
        <g>
          {/* Barre verticale élégante */}
          <rect
            x="30" y="25" width="8" height="50" rx="4"
            fill="url(#logoForgeGradient)"
          />

          {/* Bras supérieur */}
          <path
            d="M65 25C65 25 45 40 40 45"
            stroke="url(#logoForgeGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Bras inférieur */}
          <path
            d="M40 55C45 60 65 75 65 75"
            stroke="url(#logoForgeGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Cœur central (Le Hub) */}
          <circle
            cx="40" cy="50" r="4"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
