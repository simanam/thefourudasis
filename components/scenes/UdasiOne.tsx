"use client";

import Image from "next/image";
import Smoke from "@/components/effects/Smoke";
import Birds from "@/components/effects/Birds";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function UdasiOne() {
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Subtle parallax for village (left-right only)
  const villageX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);

  // River moves in opposite direction (inverse parallax for depth)
  const riverX = useTransform(smoothMouseX, [-1, 1], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize to -1 to 1
      const xPct = (clientX / innerWidth) * 2 - 1;
      const yPct = (clientY / innerHeight) * 2 - 1;

      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#ed8e3e" }}
    >
      {/* River Background Image */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ x: riverX }}
      >
        <Image
          src="/assets/udasi1/river.png"
          alt="River"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Birds - Flying in the sky, behind village */}
      <div className="absolute inset-0 z-30">
        <Birds />
      </div>

      {/* Smoke Effect - Behind village, above background */}
      <div className="absolute inset-0 z-40">
        <Smoke x="65%" y="30%" />
      </div>

      {/* Village Image - Positioned at bottom, can overflow upward only */}
      <motion.div
        className="absolute top-[-4vh] left-0 w-[110%] h-[130vh] scale-100 z-50"
        style={{ x: villageX }}
      >
        <Image
          src="/assets/udasi1/village.png"
          alt="Village"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* Nanak Figure - Positioned on the right */}
      <div className="absolute -bottom-[50px] left-[35%] w-[550px] h-[850px] lg:w-[700px] lg:h-[1050px] z-[60]">
        <Image
          src="/assets/udasi1/NANAK UDASI 1.png"
          alt="Guru Nanak Dev Ji - First Udasi"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Film Grain & Vignette */}
      <div className="absolute inset-0 film-grain vignette pointer-events-none" />
    </section>
  );
}
