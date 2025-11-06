'use client';

import { motion } from 'framer-motion';

interface CloudStreaksProps {
  streakCount?: number;
  speed?: number;
  opacity?: number;
}

export default function CloudStreaks({
  streakCount = 35,
  speed = 10,
  opacity = 0.7
}: CloudStreaksProps) {
  // Focal point (center point where clouds originate from - behind mountains)
  const focalX = 35; // 35% - left of center
  const focalY = 50; // 50% from top - middle area behind mountains

  // Generate random cloud streak data - spreading upward in cone shape
  const streaks = Array.from({ length: streakCount }, (_, i) => {
    // Spread angle - from -70deg to +70deg (140 degree cone going upward - WIDER)
    const spreadAngle = (Math.random() - 0.5) * (Math.PI * 0.8); // -70 to +70 degrees (wider spread)
    const distance = 600 + Math.random() * 400; // How far they travel upward (600-1000px)

    // Calculate end position (spreading upward and outward)
    const horizontalSpread = Math.sin(spreadAngle) * distance * 1.2; // MUCH MORE horizontal spread
    const verticalDistance = -Math.abs(Math.cos(spreadAngle)) * distance; // Always go up (negative Y)

    return {
      id: i,
      delay: Math.random() * speed, // Random delay for staggered animation
      width: Math.random() * 250 + 150, // Random width between 150-400px
      height: Math.random() * 10 + 5, // Height between 5-15px
      rotation: 0, // Keep all streaks straight/vertical (no rotation)
      duration: speed + Math.random() * 5, // Slight variation in speed (10-15 seconds)
      blur: Math.random() * 20 + 15, // Blur between 15-35px
      horizontalSpread,
      verticalDistance
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {streaks.map((streak) => (
        <motion.div
          key={streak.id}
          className="absolute"
          style={{
            left: `${focalX}%`,
            top: `${focalY}%`,
            width: `${streak.width}px`,
            height: `${streak.height}px`,
            rotate: streak.rotation,
            transformOrigin: 'center bottom',
          }}
          animate={{
            // Start from focal point, spread upward in cone/fan shape
            x: [0, streak.horizontalSpread],
            y: [0, streak.verticalDistance],
            opacity: [0, opacity, opacity, 0],
            scale: [0.5, 1], // Start smaller, grow as they rise
          }}
          transition={{
            duration: streak.duration,
            repeat: Infinity,
            delay: streak.delay,
            ease: 'linear',
          }}
        >
          {/* Cloud piece - textured white cloth/fabric */}
          <div
            className="w-full h-full"
            style={{
              filter: `blur(${streak.blur}px)`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.95) 80%, transparent 100%)',
              boxShadow: '0 0 20px rgba(255,255,255,0.3)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
