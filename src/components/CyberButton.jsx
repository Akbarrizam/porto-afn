import React from 'react';
import { motion } from 'framer-motion';

export default function CyberButton({
  children,
  onClick,
  variant = 'cyan', // 'cyan' | 'magenta' | 'purple' | 'green'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = '',
  type = 'button',
  href
}) {
  // Theme color maps
  const colorStyles = {
    cyan: 'border-[#00fff2]/60 text-[#00fff2] hover:bg-[#00fff2]/10 hover:border-[#00fff2] hover:shadow-[0_0_25px_rgba(0,255,242,0.6)]',
    magenta: 'border-[#ff00e5]/60 text-[#ff00e5] hover:bg-[#ff00e5]/10 hover:border-[#ff00e5] hover:shadow-[0_0_25px_rgba(255,0,229,0.6)]',
    purple: 'border-[#9d00ff]/60 text-[#9d00ff] hover:bg-[#9d00ff]/10 hover:border-[#9d00ff] hover:shadow-[0_0_25px_rgba(157,0,255,0.6)]',
    green: 'border-[#39ff14]/60 text-[#39ff14] hover:bg-[#39ff14]/10 hover:border-[#39ff14] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base'
  };

  const Content = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider border bg-[#0d0d14]/90 transition-all duration-300 cyber-clip-button cursor-pointer ${colorStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {/* Corner Bracket Accents */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-current opacity-70" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-current opacity-70" />

      {Icon && <Icon className="text-lg transition-transform group-hover:rotate-12" />}
      <span>{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {Content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick}>
      {Content}
    </button>
  );
}
