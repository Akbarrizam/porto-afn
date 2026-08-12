import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootScreen from './components/BootScreen';
import CursorFollower from './components/CursorFollower';
import CyberBackground from './components/CyberBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [bootCompleted, setBootCompleted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#e5e5e5] font-space selection:bg-[#00fff2] selection:text-[#0a0a0f]">
      {/* Booting Terminal Loading Screen */}
      <AnimatePresence>
        {!bootCompleted && (
          <BootScreen onComplete={() => setBootCompleted(true)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {bootCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ambient & Background Layer */}
          <CyberBackground />
          <CursorFollower />
          <ScrollProgress />

          {/* Header Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
