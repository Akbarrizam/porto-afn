import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiTerminal, FiMail, FiGithub, FiLinkedin, FiDisc as FiDiscord, FiSend as FiTelegram, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import CyberButton from '../components/CyberButton';
import TerminalBox from '../components/TerminalBox';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [terminalLogs, setTerminalLogs] = useState([
    "SYS_CONNECT v2.077 Initialized.",
    "Type your transmission parameters below to send a direct message."
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTerminalLogs((prev) => [
      ...prev,
      `> SENDING TRANSMISSION FROM [${formData.name}]...`,
      `> VALIDATING EMAIL: ${formData.email}... OK`,
      `> ENCRYPTING PAYLOAD WITH AES-256...`
    ]);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTerminalLogs((prev) => [
        ...prev,
        "STATUS 200: TRANSMISSION DELIVERED SUCCESSFULLY!",
        "Thank you! Arfan Safut P will get back to you shortly."
      ]);

      // Trigger Cyber Neon Confetti Burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00fff2', '#ff00e5', '#9d00ff', '#39ff14']
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-[#39ff14] shadow-[0_0_12px_#39ff14]" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
              // INITIALIZE_CONTACT
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
              ESTABLISH_DIRECT_COMMUNICATION_LINK
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column - Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-6 border border-[#00fff2]/30 bg-[#0d0d14]/90 cyber-clip-corner shadow-[0_0_30px_rgba(0,255,242,0.1)] space-y-6">
              <h3 className="text-lg font-orbitron font-bold text-white tracking-wider flex items-center gap-2">
                <FiTerminal className="text-[#00fff2]" /> CONTACT_CHANNELS
              </h3>

              <div className="space-y-4 font-mono text-xs">

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="flex items-center gap-3 p-3 border border-slate-800 bg-slate-900/60 hover:border-[#00fff2] transition-colors group"
                >
                  <div className="p-2 bg-[#00fff2]/10 text-[#00fff2] text-base group-hover:scale-110 transition-transform">
                    <FiMail />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">DIRECT_EMAIL</span>
                    <span className="text-slate-200 group-hover:text-[#00fff2] font-semibold">
                      {personalInfo.socialLinks.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 border border-slate-800 bg-slate-900/60">
                  <div className="p-2 bg-[#ff00e5]/10 text-[#ff00e5] text-base">
                    <FiMapPin />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">BASE_LOCATION</span>
                    <span className="text-slate-200 font-semibold">
                      Trenggalek, Indonesia [UTC+7]
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Badges */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  NETWORK_NODES //
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-slate-800 bg-slate-900 text-slate-300 hover:text-[#00fff2] hover:border-[#00fff2] transition-all text-xl"
                    title="GitHub Profile"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-slate-800 bg-slate-900 text-slate-300 hover:text-[#00fff2] hover:border-[#00fff2] transition-all text-xl"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href={personalInfo.socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-slate-800 bg-slate-900 text-slate-300 hover:text-[#ff00e5] hover:border-[#ff00e5] transition-all text-xl"
                    title="Telegram Contact"
                  >
                    <FiTelegram />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Terminal Command Form */}
          <div className="lg:col-span-7 space-y-6">

            {/* Terminal Live Output Console Log */}
            <TerminalBox title="TRANSMISSION_CONSOLE // LOGS" variant="cyan">
              <div className="space-y-1 font-mono text-xs">
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="text-[#00fff2]">
                    {log}
                  </div>
                ))}
              </div>
            </TerminalBox>

            {/* Terminal Input Form */}
            <form onSubmit={handleSubmit} className="p-6 border border-slate-800 bg-[#0d0d14]/95 cyber-clip-corner space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    OPERATIVE_NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Cyber User"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-[#00fff2] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    COMMUNICATION_EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="user@network.com"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-[#00fff2] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  TRANSMISSION_SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Collaboration"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-[#00fff2] text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  PAYLOAD_MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your transmission message here..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-[#00fff2] text-white text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <CyberButton
                  type="submit"
                  variant="green"
                  size="lg"
                  icon={submitted ? FiCheckCircle2 : FiSend}
                  className="w-full animate-pulse"
                >
                  {isSubmitting ? "ENCRYPTING_&_SENDING..." : submitted ? "TRANSMISSION_SENT" : "EXECUTE_TRANSMISSION"}
                </CyberButton>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
