"use client";

import { motion } from "framer-motion";

interface SmokeProps {
  x: string;
  y: string;
}

export default function Smoke({ x, y }: SmokeProps) {
  // Generate multiple smoke particles with staggered delays
  const smokeParticles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, bottom: y }}
    >
      {smokeParticles.map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: "80px",
            height: "80px",
            background: `radial-gradient(circle, rgba(255, 255, 255, ${
              0.7 - index * 0.02
            }) 0%, rgba(240, 240, 240, ${0.5 - index * 0.02}) 40%, transparent 70%)`,
            filter: "blur(12px)",
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            x: [10, 50, 100, 150],
            y: [0, -150, -350, -600],
            scale: [0.4, 1, 1.5, 2],
            opacity: [0, 0.8, 0.5, 0],
          }}
          transition={{
            duration: 8,
            delay: index * 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
