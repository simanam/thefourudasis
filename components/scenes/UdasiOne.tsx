'use client';

import { motion } from 'framer-motion';
import ParallaxLayer from '@/components/3d/ParallaxLayer';
import AtmosphericEffects from '@/components/3d/AtmosphericEffects';
import ChapterTitle from '@/components/ui/ChapterTitle';

export default function UdasiOne() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-east-saffron/20 via-east-gold/10 to-east-teal/20">
      {/* Background Layer - Sky and Horizon */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-east-teal/30 to-east-saffron/40" />
      </ParallaxLayer>

      {/* Atmospheric Effects - Morning Fog */}
      <AtmosphericEffects
        type="mist"
        intensity={30}
        color="rgba(255, 213, 126, 0.2)"
      />

      {/* Midground Layer - Landscape Elements */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 flex items-center justify-center">
        {/* Placeholder for landscape image */}
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <div className="text-6xl text-east-gold/30">🌅</div>
        </div>
      </ParallaxLayer>

      {/* Foreground Layer - Silhouette */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 flex items-center justify-center">
        {/* Placeholder for Guru Nanak silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative"
        >
          <div className="w-32 h-64 bg-gradient-to-b from-gray-900 to-black rounded-t-full opacity-60" />
        </motion.div>
      </ParallaxLayer>

      {/* Content Layer - Text */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        <ChapterTitle
          englishTitle="THE FIRST UDASI"
          punjabiTitle="ਪਹਿਲੀ ਉਦਾਸੀ"
          subtitle="The Awakening of the East • Bengal & Assam"
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
          <p className="text-2xl md:text-3xl text-east-gold font-light leading-relaxed mb-4">
            ਇਕ ਓਅੰਕਾਰ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ
          </p>
          <p className="text-base md:text-lg text-east-white/70 font-light">
            There is One Creator, Truth is His Name
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-east-gold to-transparent"
        />
      </div>

      {/* Film Grain & Vignette */}
      <div className="absolute inset-0 film-grain vignette pointer-events-none" />
    </section>
  );
}
