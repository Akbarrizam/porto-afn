import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiShield, FiCpu, FiCheckCircle } from 'react-icons/fi';

const bootLogs = [
  "INITIALIZING_NEURAL_KERNEL v2.077...",
  "CONNECTING_TO_QUANTUM_MAINFRAME...",
  "LOADING_CYBERNETIC_MODULES [REACT 19, VITE, TAILWIND]...",
  "ENFORCING_NEON_PROTOCOL [CYAN #00fff2, MAGENTA #ff00e5]...",
  "CALIBRATING_3D_TILT_ENGINES...",
  "VERIFYING_SECURITY_CLEARANCE... GRANTED",
  "SYSTEM_ONLINE // WELCOME_OPERATIVE"
];

export default function BootScreen({ onComplete }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Log progress timer
    const logInterval = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < bootLogs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(logInterval);
          return prev;
        }
      });
    }, 350);

    // Smooth percentage progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return Math.min(100, prev + Math.floor(Math.random() * 15) + 5);
        } else {
          clearInterval(progressInterval);
          return 100;
        }
      });
    }, 150);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && currentLineIndex >= bootLogs.length - 1) {
      const timer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress, currentLineIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-[#e5e5e5] font-mono px-4"
    >
      {/* Background Matrix Grid Subtle */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      
      {/* Glow Center Ambient Blob */}
      <div className="absolute w-[350px] h-[350px] bg-[#00fff2]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative z-10 w-full max-[#0a0a0f] max-w-xl border border-[#00fff2]/30 bg-[#0d0d14]/90 p-6 shadow-[0_0_40px_rgba(0,255,242,0.15)] cyber-clip-corner">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#00fff2]/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <FiTerminal className="text-[#00fff2] animate-pulse" />
            <span className="text-xs tracking-wider text-[#00fff2] font-orbitron font-semibold">
              CYBER_BOOT_SEQUENCE // V2.077
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00fff2] inline-block animate-ping"></span>
          </div>
        </div>

        {/* Terminal Boot Log Content */}
        <div className="h-44 overflow-y-auto space-y-2 text-xs text-slate-300 font-mono scrollbar-none pr-2">
          {bootLogs.slice(0, currentLineIndex + 1).map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2"
            >
              <span className="text-[#ff00e5] font-bold">&gt;</span>
              <span className={idx === currentLineIndex ? "text-[#00fff2] font-semibold" : "text-slate-400"}>
                {log}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Loading Bar & Stats */}
        <div className="mt-6 space-y-2 border-t border-slate-800 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FiCpu className="text-[#ff00e5] animate-spin" /> SYSTEM_LOAD:
            </span>
            <span className="text-[#00fff2] font-orbitron font-bold text-sm">
              {progress}%
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2.5 bg-slate-900 border border-[#00fff2]/40 rounded-none overflow-hidden p-0.5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00fff2] via-[#9d00ff] to-[#ff00e5] shadow-[0_0_12px_#00fff2]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest pt-1">
            <span>CORE: ONLINE</span>
            <span>MEM: 64GB OK</span>
            <span>SECURITY: ENCRYPTED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
