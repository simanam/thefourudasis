"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CloudStreaks from "@/components/3d/CloudStreaks";
import AtmosphericEffects from "@/components/3d/AtmosphericEffects";
import UdasiOne from "@/components/scenes/UdasiOne";
import UdasiTwo from "@/components/scenes/UdasiTwo";
import UdasiThree from "@/components/scenes/UdasiThree";
import UdasiFour from "@/components/scenes/UdasiFour";

export default function Home() {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroRef = useRef(null);

  // Scroll progress for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background and Mountains move together OPPOSITE to mouse (inverse parallax for depth, horizontal only)
  const skyX = useTransform(smoothMouseX, [0, 0], [0, 0]);
  const skyY = useMotionValue(0); // No vertical movement

  // Mountains move WITH background (same direction, horizontal only)
  const mountainX = useTransform(smoothMouseX, [-1, 1], [20, -20]);
  const mountainY = useMotionValue(0); // No vertical movement

  // Plateau and Nanak move together (same as camera)
  const plateauX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const plateauY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  // Text is static
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);

  // Nanak moves with plateau (camera movement)
  const nanakX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const nanakY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  // Hero scroll animations
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0vh", "-30vh"]);
  const heroOpacity = useTransform(
    heroScrollProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHeroInView) return;

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
  }, [isHeroInView, mouseX, mouseY]);

  return (
    <SmoothScroll>
      <main className="relative" style={{ backgroundColor: "#e1a86b" }}>
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="sticky top-0 min-h-screen w-full overflow-visible flex items-center justify-center bg-black"
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
        >
          {/* Background Layer - Retro Sky (zoomed, showing bottom half) */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="relative w-full h-[110%]"
              style={{ x: skyX, y: skyY }}
            >
              <Image
                // src="/assets/hero/retrosky.png"
                src="/assets/hero/bgnew.png"
                alt="Retro sky background"
                fill
                className="object-cover object-bottom"
                style={{
                  transform: "translateY(-20%)",
                  transformOrigin: "center bottom",
                }}
                priority
              />
            </motion.div>
          </div>

          {/* Stars Layer (behind clouds, moving slowly) */}
          <div className="absolute inset-0 z-[3] overflow-hidden">
            <AtmosphericEffects
              type="stars"
              intensity={80}
              color="rgba(255, 255, 255, 0.8)"
            />
          </div>

          {/* Cloud Streaks Layer (behind mountains) */}
          <div className="absolute inset-0 z-[5] overflow-hidden">
            <CloudStreaks />
          </div>

          {/* Mountains Layer (zoomed, bg removed, sitting in middle, with tilt) */}

          <div className="absolute inset-0 z-[10] overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-[-10%] w-[120%] h-[120%]"
              style={{ x: mountainX, y: mountainY }}
            >
              <Image
                // src="/assets/hero/retrosky.png"
                src="/assets/hero/mountiannew.png"
                alt="mountains"
                fill
                className="object-cover object-bottom"
                style={{
                  transform: "scale(0.85)",
                  transformOrigin: "center bottom",
                }}
                priority
              />
            </motion.div>
          </div>

          {/* Plateau Ground Layer (bg removed, bottom position) */}
          {/* <div className="absolute inset-0 z-15 overflow-hidden">
            <motion.div
              className="relative w-full h-full flex items-end"
              style={{ x: plateauX, y: plateauY }}
            >
              <div
                className="relative w-full h-[40%]"
                style={{
                  transform:
                    "scale(1.2) rotate(4deg) translateY(30%) translateX(-1%)",
                  transformOrigin: "bottom center",
                }}
              >
                <Image
                  src="/assets/hero/plateu-no-bg.png"
                  alt="Plateau ground"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>
          </div> */}

          <div className="absolute inset-0 z-15 overflow-hidden">
            <motion.div
              className="relative w-full h-full flex items-end"
              style={{ x: plateauX, y: plateauY }}
            >
              <div
                className="relative w-[120%] h-[100%]"
                style={{
                  transform: " translateY(70%)",
                  transformOrigin: "bottom center",
                }}
              >
                <Image
                  src="/assets/hero/newdesert.png"
                  alt="Plateau ground"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>
          </div>

          {/* Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none z-[25]">
            <Image
              src="/assets/hero/grain.png"
              alt="Grain texture"
              fill
              className="object-cover opacity-100"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>

          {/* Title Text Layer */}
          <div className="relative z-20 flex items-center justify-center w-full h-full px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="flex flex-col items-start"
              style={{
                x: textX,
                y: textY,
                transform:
                  "translateX(40%) rotate(4deg) perspective(500px) rotateY(-10deg)",
                transformOrigin: "left center",
              }}
            >
              <h1
                className="leading-none mb-0"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  // textShadow: "8px 8px 20px rgba(0,0,0,0.9)",
                  fontSize: "clamp(6rem, 8vw, 10rem)",
                  fontWeight: "100",
                  letterSpacing: "0",
                  lineHeight: "0.98",
                  textTransform: "uppercase",
                  color: "#f8d4a8",
                }}
              >
                <div>THE</div>
                <div>FOUR</div>
                <div>UDASIS</div>
              </h1>
            </motion.div>
          </div>

          {/* Nanak Figure Layer (foreground, on top of everything) */}
          <div className="absolute inset-0 z-30">
            <motion.div
              className="relative w-full h-full flex items-end justify-start pb-0 pl-[20%]"
              style={{
                x: nanakX,
                y: nanakY,
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
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/70 text-sm tracking-wider drop-shadow-lg"
            >
              ↓ SCROLL TO JOURNEY ↓
            </motion.div>
          </div>

          {/* Vignette Effect */}
          <div className="absolute inset-0 vignette pointer-events-none z-35" />
        </motion.section>

        {/* Udasi Sections */}
        <UdasiOne />
        <UdasiTwo />
        <UdasiThree />
        <UdasiFour />

        {/* Outro Section */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-8"
          >
            <p className="text-3xl md:text-5xl font-light text-white/80 mb-8">
              The Journey Never Ends
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-6xl mb-8"
            >
              ੴ
            </motion.div>
            <p className="text-sm text-gray-500 tracking-wider">
              Created with devotion by Amandeep Singh
            </p>
          </motion.div>

          <div className="absolute inset-0 film-grain vignette pointer-events-none" />
        </section>
      </main>
    </SmoothScroll>
  );
}
