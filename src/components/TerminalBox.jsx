import React, { useState } from 'react';
import { FiTerminal, FiCopy, FiCheck } from 'react-icons/fi';

export default function TerminalBox({
  title = "TERMINAL_VIEWER",
  children,
  codeString,
  className = "",
  variant = "cyan"
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!codeString) return;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const borderColors = {
    cyan: "border-[#00fff2]/30 shadow-[0_0_30px_rgba(0,255,242,0.1)]",
    magenta: "border-[#ff00e5]/30 shadow-[0_0_30px_rgba(255,0,229,0.1)]",
    purple: "border-[#9d00ff]/30 shadow-[0_0_30px_rgba(157,0,255,0.1)]"
  };

  return (
    <div className={`relative border bg-[#0d0d14]/95 font-mono overflow-hidden cyber-clip-corner ${borderColors[variant]} ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#07070a] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <FiTerminal className={variant === 'magenta' ? 'text-[#ff00e5]' : 'text-[#00fff2]'} />
          <span className="text-xs font-semibold text-slate-300 tracking-wider">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {codeString && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#00fff2] transition-colors"
              title="Copy Terminal Output"
            >
              {copied ? (
                <>
                  <FiCheck className="text-[#39ff14]" />
                  <span className="text-[#39ff14]">COPIED</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span>COPY</span>
                </>
              )}
            </button>
          )}

          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 text-xs md:text-sm text-slate-200 overflow-x-auto leading-relaxed">
        {children}
      </div>
    </div>
  );
}
