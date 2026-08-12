import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMaximize2, FiCpu, FiLayers } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';
import ProjectModal from '../components/ProjectModal';
import CyberButton from '../components/CyberButton';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'Web App', 'Fullstack', 'B2B Platform'];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-8 bg-[#00fff2] shadow-[0_0_12px_#00fff2]" />
              <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
                // FEATURED_PROJECTS
              </h2>
            </div>
            <p className="text-slate-400 font-mono text-xs sm:text-sm">
              PRODUCTION_SYSTEMS // DEPLOYED_APPLICATIONS
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 border transition-all uppercase font-semibold ${
                  activeCategory === cat
                    ? 'border-[#00fff2] bg-[#00fff2]/10 text-[#00fff2] shadow-[0_0_15px_rgba(0,255,242,0.3)]'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard
                  color={project.color}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
                    <span 
                      className="px-2 py-0.5 border text-xs font-semibold tracking-wider uppercase cyber-clip-badge"
                      style={{
                        borderColor: `${project.color}60`,
                        color: project.color,
                        backgroundColor: `${project.color}15`
                      }}
                    >
                      {project.badge}
                    </span>
                    <span className="text-slate-400">
                      //{project.category}
                    </span>
                  </div>

                  {/* Image Cover Preview */}
                  <div className="relative w-full h-44 overflow-hidden border border-slate-800 mb-4 group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

                    {/* Quick Expand Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-[#0a0a0f]/60 backdrop-blur-xs">
                      <span className="p-3 border border-[#00fff2] bg-[#00fff2]/20 text-[#00fff2] rounded-full text-xl shadow-[0_0_20px_#00fff2]">
                        <FiMaximize2 />
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-orbitron font-bold text-white mb-2 line-clamp-1 group-hover:text-[#00fff2] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-space text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 font-mono text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-[#00fff2] hover:underline flex items-center gap-1 font-semibold"
                    >
                      INSPECT_SPECS &gt;
                    </button>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-[#ff00e5] transition-colors text-base p-1"
                          title="View Repository"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 bg-[#00fff2]/10 border border-[#00fff2]/40 text-[#00fff2] hover:bg-[#00fff2] hover:text-[#0a0a0f] transition-all text-xs font-mono font-semibold flex items-center gap-1.5"
                          title="Launch Live Demo"
                        >
                          <span>DEMO</span>
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Window Drawer */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
