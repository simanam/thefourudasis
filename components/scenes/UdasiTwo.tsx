'use client';

import { motion } from 'framer-motion';
import ParallaxLayer from '@/components/3d/ParallaxLayer';
import AtmosphericEffects from '@/components/3d/AtmosphericEffects';
import ChapterTitle from '@/components/ui/ChapterTitle';

export default function UdasiTwo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-south-ocean via-south-turquoise/30 to-south-ocean/80">
      {/* Background Layer - Ocean and Sky */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-south-ocean to-south-coral/30" />
      </ParallaxLayer>

      {/* Atmospheric Effects - Ocean Mist */}
      <AtmosphericEffects
        type="mist"
        intensity={25}
        color="rgba(137, 207, 240, 0.15)"
      />

      {/* Midground Layer - Ocean Waves */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full flex items-center justify-center opacity-30"
        >
          <div className="text-6xl text-south-turquoise/40">🌊</div>
        </motion.div>
      </ParallaxLayer>

      {/* Foreground Layer - Cliff Silhouette */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="w-48 h-48 bg-gradient-to-t from-gray-900 to-gray-800 opacity-70 rounded-t-lg" />
        </motion.div>
      </ParallaxLayer>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        <ChapterTitle
          englishTitle="THE SECOND UDASI"
          punjabiTitle="ਦੂਜੀ ਉਦਾਸੀ"
          subtitle="The Vastness of Unity • Sri Lanka & The South"
          delay={0.3}
        />

        {/* Japji Sahib Excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl text-center"
        >
          <p className="text-2xl md:text-3xl text-south-turquoise font-light leading-relaxed mb-4">
            ਸਭਨਾ ਜੀਆ ਕਾ ਇਕੁ ਦਾਤਾ
          </p>
          <p className="text-base md:text-lg text-south-foam/70 font-light">
            There is One Giver for all living beings
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-south-coral to-transparent"
        />
      </div>

      {/* Effects */}
      <div className="absolute inset-0 film-grain vignette pointer-events-none" />
    </section>
  );
}
