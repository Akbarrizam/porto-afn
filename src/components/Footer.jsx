import React from 'react';
import { FiArrowUp, FiTerminal, FiShield, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#07070a] py-10 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Status & Copyright */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 text-white font-orbitron font-bold text-sm">
            <img src="/logo.png" alt="Logo" className="w-5 h-5 rounded-xs border border-[#00fff2]/50 shadow-[0_0_10px_#00fff2]" />
            <span className="text-[#00fff2]">ARFAN SAFUT P</span> // PORTFOLIO_V2.077
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} ARFAN SAFUT P. Built with React 19 + Vite + Tailwind CSS + Framer Motion.
          </p>
        </div>

        {/* Center System Telemetry Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-[11px] text-[#39ff14]">
          <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-ping" />
          <span>ALL_SYSTEMS_OPERATIONAL // 100% UPTIME</span>
        </div>

        {/* Right Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 border border-[#00fff2]/40 bg-[#00fff2]/10 text-[#00fff2] hover:bg-[#00fff2] hover:text-[#0a0a0f] transition-all duration-300 cyber-clip-badge shadow-[0_0_15px_rgba(0,255,242,0.2)]"
        >
          <span>TOP_OF_PAGE</span>
          <FiArrowUp className="text-base" />
        </button>

      </div>
    </footer>
  );
}
