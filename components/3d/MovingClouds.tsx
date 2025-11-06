'use client';

import { motion } from 'framer-motion';

interface MovingCloudsProps {
  cloudCount?: number;
  speed?: number;
  opacity?: number;
}

export default function MovingClouds({
  cloudCount = 8,
  speed = 30,
  opacity = 0.15
}: MovingCloudsProps) {
  // Generate random cloud data
  const clouds = Array.from({ length: cloudCount }, (_, i) => ({
    id: i,
    startX: Math.random() * 120 - 10, // Random horizontal position (-10% to 110%)
    delay: Math.random() * speed, // Random delay for staggered animation
    size: Math.random() * 150 + 80, // Random size between 80-230
    duration: speed + Math.random() * 15, // Slight variation in speed
    horizontalDrift: Math.random() * 30 - 15 // Slight horizontal drift (-15 to +15)
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            left: `${cloud.startX}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`, // Clouds are wider than tall
            opacity: opacity,
          }}
          animate={{
            // Move from bottom to top (rising upward in the sky)
            y: ['120%', '-30%'],
            x: [0, cloud.horizontalDrift], // Slight horizontal drift
            opacity: [0, opacity, opacity, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: 'linear',
          }}
        >
          {/* Placeholder cloud - soft white blur */}
          <div
            className="w-full h-full bg-white rounded-full"
            style={{
              filter: 'blur(25px)',
              transform: 'scale(1.5)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
