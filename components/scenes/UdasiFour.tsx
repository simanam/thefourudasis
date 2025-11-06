'use client';

import { motion } from 'framer-motion';
import ParallaxLayer from '@/components/3d/ParallaxLayer';
import AtmosphericEffects from '@/components/3d/AtmosphericEffects';
import ChapterTitle from '@/components/ui/ChapterTitle';

export default function UdasiFour() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-west-midnight via-west-sand/20 to-west-midnight">
      {/* Background Layer - Desert Sky */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-west-midnight to-west-gold/20" />
      </ParallaxLayer>

      {/* Atmospheric Effects - Stars and Dust */}
      <AtmosphericEffects
        type="stars"
        intensity={60}
        color="rgba(233, 227, 208, 0.9)"
      />
      <AtmosphericEffects
        type="dust"
        intensity={20}
        color="rgba(201, 164, 106, 0.3)"
      />

      {/* Midground Layer - Dunes */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 flex items-end justify-center">
        <div className="w-full h-2/3 bg-gradient-to-t from-west-sand/30 to-transparent rounded-t-full" />
      </ParallaxLayer>

      {/* Crescent Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-20 right-20"
      >
        <div className="text-6xl text-west-moonlight/60">🌙</div>
      </motion.div>

      {/* Foreground Layer - Walking into Distance */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mb-32"
        >
          {/* Distant silhouette with long shadow */}
          <div className="relative">
            <div className="w-16 h-32 bg-gradient-to-b from-gray-900 to-black rounded-t-full opacity-50" />
            {/* Shadow */}
            <div className="absolute top-32 left-0 w-64 h-1 bg-black/30 blur-sm -ml-24" />
          </div>
        </motion.div>
      </ParallaxLayer>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        <ChapterTitle
          englishTitle="THE FOURTH UDASI"
          punjabiTitle="ਚੌਥੀ ਉਦਾਸੀ"
          subtitle="The Path of Truth • Mecca & Baghdad"
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
          <p className="text-2xl md:text-3xl text-west-gold font-light leading-relaxed mb-4">
            ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ
          </p>
          <p className="text-base md:text-lg text-west-moonlight/70 font-light">
            Everyone is subject to His Command
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-west-gold to-transparent"
        />
      </div>

      {/* Effects */}
      <div className="absolute inset-0 film-grain vignette pointer-events-none" />
    </section>
  );
}
