'use client';

import { motion } from 'framer-motion';

interface AtmosphericEffectsProps {
  type: 'mist' | 'dust' | 'snow' | 'stars';
  intensity?: number;
  color?: string;
}

export default function AtmosphericEffects({
  type,
  intensity = 50,
  color = 'rgba(255, 255, 255, 0.3)'
}: AtmosphericEffectsProps) {
  const particleCount = intensity;

  const getAnimationConfig = () => {
    switch (type) {
      case 'mist':
        return {
          duration: 20,
          y: [-100, 100],
          opacity: [0, 0.5, 0]
        };
      case 'dust':
        return {
          duration: 15,
          y: [0, -200],
          x: [-20, 20],
          opacity: [0.3, 0.7, 0]
        };
      case 'snow':
        return {
          duration: 10,
          y: [-100, 1200],
          x: [-30, 30],
          opacity: [0, 1, 0.8, 0]
        };
      case 'stars':
        return {
          duration: 20,
          y: ['0vh', '-50vh'], // Slowly drift upward
          x: [-20, 20], // Slight horizontal drift
          opacity: [0, 0.9, 0.9, 0],
          scale: [0.8, 1.2, 1.2, 0.8]
        };
      default:
        return { duration: 10 };
    }
  };

  const animationConfig = getAnimationConfig();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: type === 'stars' ? `${Math.random() * 2 + 1}px` : `${Math.random() * 4 + 1}px`,
            height: type === 'stars' ? `${Math.random() * 2 + 1}px` : `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: type === 'stars' ? `${Math.random() * 120 + 10}%` : '-10%',
            backgroundColor: color,
            filter: type === 'stars' ? 'none' : 'blur(1px)',
            boxShadow: type === 'stars' ? '0 0 4px rgba(255, 255, 255, 0.6), 0 0 2px rgba(255, 255, 255, 0.8)' : 'none'
          }}
          animate={animationConfig}
          transition={{
            duration: animationConfig.duration,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
