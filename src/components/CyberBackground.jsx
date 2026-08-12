import React from 'react';
import { motion } from 'framer-motion';

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0f]">
      {/* Radial Gradient Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00fff2]/10 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#ff00e5]/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-[#9d00ff]/15 rounded-full blur-[150px]" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />

      {/* Moving Horizon Cyber Line Animation */}
      <motion.div
        animate={{
          y: ['0%', '100%']
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear'
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00fff2]/30 to-transparent shadow-[0_0_15px_#00fff2]"
      />

      {/* Scanline Texture Overlay */}
      <div className="absolute inset-0 scanlines opacity-40" />
    </div>
  );
}
