import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiGit, SiGithub, SiVite, SiFigma, SiPostman
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import { techStackData } from '../data/portfolioData';

// Icon Map Resolver
const iconComponents = {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiGit, SiGithub, SiVite, SiFigma, SiPostman, FiCode
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', ...techStackData.map(c => c.category)];

  const filteredData = activeCategory === 'ALL'
    ? techStackData
    : techStackData.filter(c => c.category === activeCategory);

  return (
    <section id="stack" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-8 bg-[#ff00e5] shadow-[0_0_12px_#ff00e5]" />
              <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
                // TECH_STACK & CAPABILITIES
              </h2>
            </div>
            <p className="text-slate-400 font-mono text-xs sm:text-sm">
              TECHNICAL_CLEARANCE // PROFICIENCY_METRICS
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 border transition-all uppercase font-semibold ${
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

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {filteredData.map((categoryGroup, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Header */}
              <h3 className="text-lg font-orbitron font-bold text-white flex items-center gap-3 border-b border-slate-800 pb-2">
                <span className="text-[#00fff2] font-mono text-sm">&gt;</span>
                <span style={{ color: categoryGroup.color }}>{categoryGroup.category}</span>
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.skills.map((skill, skillIdx) => {
                  const IconComp = iconComponents[skill.icon] || SiReact;

                  return (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="relative p-5 border border-slate-800/80 bg-[#0d0d14]/90 hover:border-[#00fff2]/60 transition-all duration-300 cyber-clip-corner group shadow-lg hover:shadow-[0_0_25px_rgba(0,255,242,0.15)]"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div 
                            className="p-2.5 bg-slate-900 border border-slate-800 text-2xl group-hover:scale-110 transition-transform duration-300"
                            style={{ color: categoryGroup.color }}
                          >
                            <IconComp />
                          </div>
                          <div>
                            <h4 className="font-orbitron font-bold text-white text-sm group-hover:text-[#00fff2] transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400">
                              MASTERY: {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs font-space text-slate-400 mb-4 leading-relaxed">
                        {skill.desc}
                      </p>

                      {/* Mastery Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-900 border border-slate-800 overflow-hidden">
                        <div
                          className="h-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${categoryGroup.color} 0%, #00fff2 100%)`,
                            boxShadow: `0 0 10px ${categoryGroup.color}`
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
