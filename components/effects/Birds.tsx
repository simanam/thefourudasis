"use client";

import { motion } from "framer-motion";

export default function Birds() {
  // Two groups of birds - one flying left to right, one right to left
  const birdGroups = [
    // Group 1: Left to right, 3 birds
    { count: 3, direction: "ltr", yPosition: 25, delay: 0 },
    // Group 2: Right to left, 2 birds
    { count: 2, direction: "rtl", yPosition: 40, delay: 10 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {birdGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {Array.from({ length: group.count }, (_, birdIndex) => {
            const yOffset = birdIndex * 10 - 5; // Vertical spacing within group
            const xOffset = birdIndex * 15; // Horizontal spacing within group

            return (
              <motion.div
                key={`${groupIndex}-${birdIndex}`}
                className="absolute"
                style={{
                  top: `${group.yPosition}%`,
                  left: group.direction === "ltr" ? "-50px" : "calc(100% + 50px)",
                }}
                initial={{
                  x: 0,
                  y: yOffset,
                }}
                animate={{
                  x:
                    group.direction === "ltr"
                      ? ["0vw", "110vw"]
                      : ["0vw", "-110vw"],
                  y: [
                    yOffset,
                    yOffset + 10,
                    yOffset - 5,
                    yOffset + 8,
                    yOffset,
                  ],
                }}
                transition={{
                  duration: 25,
                  delay: group.delay + birdIndex * 0.3,
                  repeat: Infinity,
                  ease: "linear", // Constant speed
                }}
              >
                {/* Simple bird shape using SVG */}
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-30"
                  style={{
                    transform:
                      group.direction === "rtl" ? "scaleX(-1)" : "scaleX(1)",
                  }}
                >
                  {/* Animated bird wings */}
                  <motion.path
                    d="M2 8 Q6 4, 10 8"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                      d: [
                        "M2 8 Q6 4, 10 8",
                        "M2 8 Q6 10, 10 8",
                        "M2 8 Q6 4, 10 8",
                      ],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M14 8 Q18 4, 22 8"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                      d: [
                        "M14 8 Q18 4, 22 8",
                        "M14 8 Q18 10, 22 8",
                        "M14 8 Q18 4, 22 8",
                      ],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Bird body */}
                  <circle cx="12" cy="8" r="1.5" fill="#1a1a1a" />
                </svg>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
