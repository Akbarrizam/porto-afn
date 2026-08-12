import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiCpu, FiAward, FiCheckCircle, FiActivity } from 'react-icons/fi';
import TerminalBox from '../components/TerminalBox';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('bio'); // 'bio' | 'config' | 'stats'

  const tabContents = {
    bio: JSON.stringify({
      operative: personalInfo.name,
      alias: personalInfo.handle,
      status: personalInfo.terminalBio.status,
      clearance: personalInfo.terminalBio.clearance,
      location: personalInfo.terminalBio.location,
      coreFocus: personalInfo.terminalBio.coreFocus,
      summary: personalInfo.bio
    }, null, 2),

    config: `// CYBER_SYSTEM_CONFIG.sys
[DEVELOPMENT_STACK]
ENGINE = "React 19 + Vite"
STYLING = "Tailwind CSS v4"
ANIMATIONS = "Framer Motion"
ARCHITECTURE = "Modular Component Design"

[WORK_PHILOSOPHY]
- Code is clean, maintainable, and self-documenting.
- UI/UX must impress visually while staying ultra-fast.
- Continuous learning & adapting to modern tech standards.`,

    stats: `// SYSTEM_PERFORMANCE_METRICS
EXPERIENCE_YEARS    : 0${personalInfo.terminalBio.stats.experienceYears}+ YEARS
PROJECTS_DELIVERED  : ${personalInfo.terminalBio.stats.projectsCompleted}+ PRODUCTION SYSTEMS
COMMITS_THIS_YEAR   : ${personalInfo.terminalBio.stats.commitsThisYear}+ GIT COMMITS
CAFFEINE_EFFICIENCY : ${personalInfo.terminalBio.stats.caffeineEfficiency} OPTIMAL`
  };

  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-[#00fff2] shadow-[0_0_12px_#00fff2]" />
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
            // ABOUT_OPERATIVE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Avatar / HUD Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 p-2 border-2 border-[#00fff2]/50 bg-[#0d0d14] cyber-clip-corner shadow-[0_0_35px_rgba(0,255,242,0.25)] group">
              {/* Radar Corner Brackets */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00fff2]" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00fff2]" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00fff2]" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00fff2]" />

              {/* Avatar Image / Cyber Graphic */}
              <div className="relative w-full h-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src="/Pribadi.jpeg"
                  alt="Arfan Akbar Cyber Avatar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
              </div>

              {/* Floating Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0f]/90 border border-[#00fff2]/40 p-2 font-mono text-center text-xs text-[#00fff2] backdrop-blur-md">
                <span className="font-bold">// OPERATIVE: ARFAN SAFUT PRANOTO</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full mt-6 font-mono">
              <div className="p-4 border border-slate-800 bg-[#0d0d14] hover:border-[#00fff2]/50 transition-colors text-center cyber-clip-badge">
                <span className="text-2xl font-orbitron font-extrabold text-[#00fff2] block">1+</span>
                <span className="text-[11px] text-slate-400">YEARS EXP</span>
              </div>
              <div className="p-4 border border-slate-800 bg-[#0d0d14] hover:border-[#ff00e5]/50 transition-colors text-center cyber-clip-badge">
                <span className="text-2xl font-orbitron font-extrabold text-[#ff00e5] block">15+</span>
                <span className="text-[11px] text-slate-400">PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Bio View Column */}
          <div className="lg:col-span-7 space-y-4">

            {/* Terminal Tab Buttons */}
            <div className="flex gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('bio')}
                className={`px-4 py-2 border transition-all ${activeTab === 'bio'
                  ? 'border-[#00fff2] bg-[#00fff2]/10 text-[#00fff2] font-bold shadow-[0_0_15px_rgba(0,255,242,0.2)]'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
              >
                bio.json
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-4 py-2 border transition-all ${activeTab === 'config'
                  ? 'border-[#ff00e5] bg-[#ff00e5]/10 text-[#ff00e5] font-bold shadow-[0_0_15px_rgba(255,0,229,0.2)]'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
              >
                system.config
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-4 py-2 border transition-all ${activeTab === 'stats'
                  ? 'border-[#9d00ff] bg-[#9d00ff]/10 text-[#9d00ff] font-bold shadow-[0_0_15px_rgba(157,0,255,0.2)]'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
              >
                stats.sys
              </button>
            </div>

            {/* Terminal Display Box */}
            <TerminalBox
              title={`TERMINAL_INSPECT // ${activeTab.toUpperCase()}`}
              codeString={tabContents[activeTab]}
              variant={activeTab === 'bio' ? 'cyan' : activeTab === 'config' ? 'magenta' : 'purple'}
            >
              <pre className="text-xs sm:text-sm text-[#00fff2] font-mono leading-relaxed overflow-x-auto p-2">
                {tabContents[activeTab]}
              </pre>
            </TerminalBox>

            <p className="text-slate-300 font-space leading-relaxed text-sm md:text-base pt-2">
              Building next-generation digital interfaces that unite cutting-edge frontend performance with dark cyberpunk aesthetics. Experienced in engineering complex React applications, custom UI component libraries, and robust backend integrations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
