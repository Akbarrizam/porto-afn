import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiTerminal, FiVolume2, FiVolumeX, FiCode } from 'react-icons/fi';
import CyberButton from './CyberButton';
import { playCyberSound } from '../utils/cyberSound';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'STACK', href: '#stack' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'TIMELINE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global click audio listener when sound is enabled
  useEffect(() => {
    if (!soundEnabled) return;

    const handleGlobalClick = (e) => {
      // Play cyber click sound when clicking interactive buttons, links, etc.
      if (e.target.closest('button, a, input, textarea, select')) {
        playCyberSound('click', true);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [soundEnabled]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playCyberSound('toggleOn', true);
    } else {
      playCyberSound('toggleOff', true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#00fff2]/20 py-3 shadow-[0_4px_30px_rgba(0,255,242,0.1)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden border border-[#00fff2]/60 rounded-md bg-[#0d0d14] p-0.5 shadow-[0_0_15px_rgba(0,255,242,0.5)] group-hover:border-[#00fff2] group-hover:shadow-[0_0_25px_rgba(0,255,242,0.8)] transition-all duration-300">
            <img src="/logo.png" alt="Arfan Dev Cyber Logo" className="w-full h-full object-cover rounded-xs" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-white tracking-wider text-base group-hover:text-[#00fff2] transition-colors flex items-center gap-1">
              ARFAN<span className="text-[#ff00e5]">.DEV</span>
            </span>
            <span className="font-mono text-[9px] text-[#00fff2] tracking-widest uppercase">
              // CYBER_CORE_V2.0
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative text-slate-300 hover:text-[#00fff2] transition-colors duration-200 py-1 tracking-widest font-semibold group"
            >
              <span className="text-[#ff00e5] opacity-0 group-hover:opacity-100 transition-opacity">
                &gt;
              </span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00fff2] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00fff2]" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-[#00fff2] hover:border-[#00fff2]/40 transition-all font-mono text-xs flex items-center gap-1.5 cursor-pointer"
            title={soundEnabled ? "Disable Cyber SFX" : "Enable Cyber SFX"}
          >
            {soundEnabled ? (
              <>
                <FiVolume2 className="text-[#00fff2] animate-pulse" />
                <span className="text-[10px] text-[#00fff2] font-bold">SFX: ON</span>
              </>
            ) : (
              <>
                <FiVolumeX />
                <span className="text-[10px]">SFX: OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-2xl text-[#00fff2] border border-[#00fff2]/40 bg-[#0d0d14]"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#00fff2]/30 bg-[#0d0d14]/95 backdrop-blur-xl px-4 pt-4 pb-6 font-mono"
          >
            <div className="flex flex-col gap-4 text-sm">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-[#00fff2] py-2 border-b border-slate-800 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#ff00e5]">&gt;&gt;</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
