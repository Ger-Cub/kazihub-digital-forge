
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
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoForgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A00FF" />
            <stop offset="100%" stopColor="#FF2DAA" />
          </linearGradient>
        </defs>

        {/* Stylized K */}
        <path
          d="M50 40 L50 140 M50 90 L110 40 M50 90 L110 140"
          stroke="url(#logoForgeGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent circle (innovation touch) */}
        <circle cx="125" cy="90" r="6" fill="#FF2DAA" />
      </svg>
    </div>
  );
};

export default Logo;
