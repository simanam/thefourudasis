'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function PerspectiveShift() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Camera pan from right to left (all elements move together - no parallax)
  const xShift = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Nanak opacity crossfade (left fades out, right fades in)
  const nanakLeftOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const nanakRightOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  // Text slides in from left as we scroll
  const textX = useTransform(scrollYProgress, [0.4, 0.7], [-200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] w-full overflow-hidden bg-black"
    >
      {/* Sticky container that holds the scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* All scene elements move together (no parallax) */}
        <motion.div
          className="absolute inset-0"
          style={{ x: xShift }}
        >
          {/* Sky Background */}
          <div className="absolute inset-0">
            <Image
              src="/assets/hero/retrosky.png"
              alt="Sky"
              fill
              className="object-cover object-bottom"
              style={{
                transform: "translateY(-30%)",
              }}
            />
          </div>

          {/* Mountains */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-full h-full"
              style={{
                transform: "scale(1.3) rotate(4deg) translateY(-30%)",
              }}
            >
              <Image
                src="/assets/hero/mountain-no-bg.png"
                alt="Mountains"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Plateau Ground */}
          <div className="absolute inset-0 flex items-end">
            <div
              className="relative w-full h-[70%]"
              style={{
                transform: "scale(1.2) rotate(4deg) translateY(30%) translateX(-1%)",
              }}
            >
              <Image
                src="/assets/hero/plateu-no-bg.png"
                alt="Plateau"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

          {/* Nanak Left (fades out) */}
          <motion.div
            className="absolute inset-0 flex items-end justify-start pb-0 pl-[20%]"
            style={{
              opacity: nanakLeftOpacity,
              translateY: 160
            }}
          >
            <div className="relative w-[350px] h-[600px] lg:w-[450px] lg:h-[700px]">
              <Image
                src="/assets/hero/nanak-left-no-bg.png"
                alt="Guru Nanak Dev Ji"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* Nanak Right (fades in) */}
          <motion.div
            className="absolute inset-0 flex items-end justify-end pb-0 pr-[20%]"
            style={{
              opacity: nanakRightOpacity,
              translateY: 160
            }}
          >
            <div className="relative w-[350px] h-[600px] lg:w-[450px] lg:h-[700px]">
              <Image
                src="/assets/hero/nanak-right-no-bg.png"
                alt="Guru Nanak Dev Ji"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Story Text (slides in from left) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start pl-[10%] pointer-events-none"
          style={{ x: textX, opacity: textOpacity }}
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Journey Begins
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              In 1500 CE, at the age of 30, Guru Nanak Dev Ji embarked on the first of his four great journeys—the Udasis.
              These spiritual odysseys would span over two decades and cover thousands of miles across the ancient world.
            </p>
          </div>
        </motion.div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/hero/grainy.png"
            alt="Grain texture"
            fill
            className="object-cover opacity-40"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>
    </section>
  );
}
