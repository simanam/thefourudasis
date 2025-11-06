'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up'
      ? [`${speed * 100}%`, `-${speed * 100}%`]
      : [`-${speed * 100}%`, `${speed * 100}%`]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`parallax-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}
