import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiZap } from 'react-icons/fi';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-3 h-8 bg-[#9d00ff] shadow-[0_0_12px_#9d00ff]" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
              // CAREER_TIMELINE
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
              CHRONOLOGICAL_LOGS // PROFESSIONAL_EXPERIENCE
            </p>
          </div>
        </div>

        {/* Vertical Timeline Track Container */}
        <div className="relative border-l-2 border-[#00fff2]/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Sphere Glow */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0d0d14] border-2 border-[#00fff2] group-hover:border-[#ff00e5] group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_#00fff2]">
                <span className="w-2 h-2 rounded-full bg-[#00fff2] group-hover:bg-[#ff00e5] transition-colors" />
              </div>

              {/* Date Badge Left Side on Desktop */}
              <div className="md:absolute md:-left-44 md:top-1.5 mb-2 md:mb-0 font-mono text-xs text-[#00fff2] font-semibold tracking-wider">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00fff2]/10 border border-[#00fff2]/40 cyber-clip-badge">
                  <FiCalendar /> {exp.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 border border-slate-800 bg-[#0d0d14]/90 group-hover:border-[#00fff2]/60 transition-all duration-300 cyber-clip-corner shadow-lg">
                
                {/* Role Title & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#00fff2] transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-[#ff00e5] font-semibold tracking-wider block sm:inline">
                      @{exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <FiMapPin className="text-[#00fff2]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-sm font-space text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    KEY_ACHIEVEMENTS //
                  </span>
                  {exp.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="flex items-start gap-2 text-xs font-space text-slate-300">
                      <FiZap className="text-[#00fff2] mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {exp.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
