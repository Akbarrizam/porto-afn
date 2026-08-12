import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiRadio, FiCpu } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">

            {/* Status Cyber Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#00fff2]/40 bg-[#00fff2]/10 text-[#00fff2] font-mono text-xs cyber-clip-badge shadow-[0_0_15px_rgba(0,255,242,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-ping" />
              <FiRadio className="text-[#00fff2] animate-pulse" />
              <span className="font-semibold tracking-wider uppercase">
                STATUS: AVAILABLE FOR HIRE & FREELANCE
              </span>
            </motion.div>

            {/* Glitch Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-orbitron font-extrabold text-white tracking-tight leading-none">
                <span className="block text-glow-cyan">ARFAN SAFUT PRANOTO</span>
              </h1>
            </motion.div>

            {/* Dynamic Role Typing Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xl sm:text-2xl md:text-3xl text-slate-200 flex items-center gap-2 h-10"
            >
              <span className="text-[#ff00e5] font-bold">&gt;&gt;</span>
              <span className="text-[#00fff2] font-semibold tracking-wide border-b-2 border-[#00fff2] pb-0.5">
                {displayText}
              </span>
              <span className="w-3 h-6 bg-[#ff00e5] inline-block animate-pulse" />
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 font-space text-base md:text-lg max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>



            {/* Micro HUD Telemetry Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 font-mono text-xs text-slate-400"
            >
              <div>
                <span className="text-slate-500 block text-[10px]">CORE ARCHITECTURE</span>
                <span className="text-[#00fff2] font-semibold">REACT 19 + VITE</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">LOCATION COORDINATES</span>
                <span className="text-[#ff00e5] font-semibold">Trenggalek [UTC+7]</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-500 block text-[10px]">SYSTEM CLEARANCE</span>
                <span className="text-[#39ff14] font-semibold">LEVEL 5 AUTHORIZED</span>
              </div>
            </motion.div>
          </div>

          {/* Right Cyber Graphic HUD Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 relative flex items-center justify-center"
          >
            {/* Spinning Cyber Ring Graphics */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Cyan Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#00fff2]/50 animate-[spin_20s_linear_infinite]" />
              {/* Middle Magenta Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#ff00e5]/40 animate-[spin_15s_linear_infinite_reverse]" />
              {/* Inner Purple Ring */}
              <div className="absolute inset-10 rounded-full border border-dotted border-[#9d00ff]/60 animate-[spin_10s_linear_infinite]" />

              {/* Center Core HUD Shield */}
              <div className="relative z-10 w-44 h-44 bg-[#0d0d14]/95 border border-[#00fff2]/60 rounded-full flex flex-col items-center justify-center p-3 shadow-[0_0_40px_rgba(0,255,242,0.4)] text-center font-mono overflow-hidden group">
                <img src="/logo.png" alt="Arfan Dev Cyber Emblem" className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(0,255,242,0.6)] group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[10px] text-[#39ff14] font-semibold tracking-wider">
                  CYBER_CORE // ONLINE
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
