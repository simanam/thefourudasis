'use client';

import { motion } from 'framer-motion';
import ParallaxLayer from '@/components/3d/ParallaxLayer';
import AtmosphericEffects from '@/components/3d/AtmosphericEffects';
import ChapterTitle from '@/components/ui/ChapterTitle';

export default function UdasiThree() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-north-frost via-north-mist/40 to-north-slate/60">
      {/* Background Layer - Mountain Sky */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-north-slate to-north-mist/50" />
      </ParallaxLayer>

      {/* Atmospheric Effects - Snowfall */}
      <AtmosphericEffects
        type="snow"
        intensity={40}
        color="rgba(255, 255, 255, 0.8)"
      />

      {/* Midground Layer - Mountains */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center opacity-25">
          <div className="text-6xl text-north-frost/40">🏔️</div>
        </div>
      </ParallaxLayer>

      {/* Foreground Layer - Walking Figure */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          {/* Silhouette with crimson shawl accent */}
          <div className="relative">
            <div className="w-24 h-48 bg-gradient-to-b from-gray-900 to-black rounded-t-full opacity-70" />
            <div className="absolute top-12 left-0 w-32 h-20 bg-north-crimson/40 rounded-lg -ml-4" />
          </div>
        </motion.div>
      </ParallaxLayer>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        <ChapterTitle
          englishTitle="THE THIRD UDASI"
          punjabiTitle="ਤੀਜੀ ਉਦਾਸੀ"
          subtitle="Into the Silence • Tibet & Kashmir"
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
          <p className="text-2xl md:text-3xl text-north-frost font-light leading-relaxed mb-4">
            ਜਿਸ ਨੋ ਕ੍ਰਿਪਾ ਕਰੇ ਸੋ ਪਾਵੈ
          </p>
          <p className="text-base md:text-lg text-north-frost/70 font-light">
            He who receives His grace, shall attain Him
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 w-32 h-px bg-gradient-to-r from-transparent via-north-crimson to-transparent"
        />
      </div>

      {/* Effects */}
      <div className="absolute inset-0 film-grain vignette pointer-events-none" />
    </section>
  );
}
