import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for x and y
  const springX = useSpring(0, { damping: 25, stiffness: 150 });
  const springY = useSpring(0, { damping: 25, stiffness: 150 });

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      className="pointer-events-none fixed top-0 left-0 z-40 w-64 h-64 rounded-full mix-blend-screen opacity-40 blur-3xl transition-opacity duration-300"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#00fff2] via-[#9d00ff] to-[#ff00e5] animate-pulse" />
    </motion.div>
  );
}
