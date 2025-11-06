'use client';

import { motion } from 'framer-motion';

interface ChapterTitleProps {
  englishTitle: string;
  punjabiTitle: string;
  subtitle?: string;
  delay?: number;
}

export default function ChapterTitle({
  englishTitle,
  punjabiTitle,
  subtitle,
  delay = 0
}: ChapterTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.19, 1, 0.22, 1]
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 text-center"
    >
      {/* English Title */}
      <h2 className="title-cinematic mb-4 md:mb-6">
        {englishTitle}
      </h2>

      {/* Punjabi Subtitle */}
      <p className="subtitle-punjabi mb-2 md:mb-4 opacity-90">
        {punjabiTitle}
      </p>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="body-cinematic max-w-2xl mx-auto opacity-70"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
