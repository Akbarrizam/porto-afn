import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = "", onClick, color = "#00fff2" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotate maps (-0.5 to 0.5 mapped to -15deg to 15deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d"
      }}
      className={`relative group cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Glow Shadow Container */}
      <div 
        className="absolute -inset-0.5 opacity-40 group-hover:opacity-100 blur-md transition-opacity duration-500 rounded-none cyber-clip-corner"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`
        }}
      />

      {/* Main Card Content Layer */}
      <div 
        className="relative z-10 w-full h-full bg-[#0d0d14]/95 border border-slate-800 group-hover:border-[#00fff2]/80 transition-colors duration-300 p-5 cyber-clip-corner overflow-hidden"
        style={{
          transform: "translateZ(20px)"
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
