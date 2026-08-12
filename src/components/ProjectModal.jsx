import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCpu, FiStar, FiGitBranch } from 'react-icons/fi';
import CyberButton from './CyberButton';

export default function ProjectModal({ project, onClose }) {
  // Lock both html and body scroll when modal is open to prevent background scrolling
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overscroll-contain">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#0a0a0f]/90 backdrop-blur-md z-10"
      />

      {/* Modal Window Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-20 w-full max-w-3xl max-h-[85vh] overflow-y-auto overscroll-contain border border-[#00fff2]/50 bg-[#0d0d14] p-6 md:p-8 shadow-[0_0_50px_rgba(0,255,242,0.3)] cyber-clip-corner my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#ff00e5] text-2xl transition-colors p-1 z-30"
          title="Close (ESC)"
        >
          <FiX />
        </button>

        {/* Badge & Category */}
        <div className="flex items-center gap-3 mb-2 font-mono text-xs">
          <span className="px-2.5 py-1 bg-[#00fff2]/10 border border-[#00fff2]/40 text-[#00fff2] font-semibold tracking-wider cyber-clip-badge">
            {project.badge}
          </span>
          <span className="text-slate-400 font-mono">
            // {project.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 tracking-wide text-glow-cyan">
          {project.title}
        </h2>

        {/* Project Image Banner */}
        <div className="relative w-full h-56 md:h-72 overflow-hidden border border-slate-800 mb-6 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        </div>

        {/* Description */}
        <p className="text-slate-300 font-space leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Key Specs & Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-3 bg-slate-950/80 border border-slate-800 font-mono text-xs">
          <div className="flex items-center gap-2">
            <FiStar className="text-[#ffe600]" />
            <span className="text-slate-400">Stars:</span>
            <span className="text-white font-bold">{project.stats?.stars || 45}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiGitBranch className="text-[#ff00e5]" />
            <span className="text-slate-400">Forks:</span>
            <span className="text-white font-bold">{project.stats?.forks || 12}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <FiCpu className="text-[#00fff2]" />
            <span className="text-slate-400">Status:</span>
            <span className="text-[#39ff14] font-bold">{project.stats?.systemStatus || "ONLINE"}</span>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
            SYSTEM_DEPENDENCIES //
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
          {project.demoUrl && (
            <CyberButton href={project.demoUrl} icon={FiExternalLink} variant="cyan">
              LAUNCH_DEMO
            </CyberButton>
          )}
          {project.githubUrl && (
            <CyberButton href={project.githubUrl} icon={FiGithub} variant="magenta">
              SOURCE_CODE
            </CyberButton>
          )}
        </div>
      </motion.div>
    </div>
  );
}
