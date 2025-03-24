"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedShapesProps {
  position: "top-left" | "bottom-right" | "bottom-left";
  className?: string;
}

export function AnimatedShapes({ position, className }: AnimatedShapesProps) {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Different shapes based on position
  const shapes =
    position === "top-left"
      ? [
          { points: "0,0 150,30 120,100 0,80", delay: 0 },
          { points: "180,50 300,0 350,80 220,120", delay: 1.5 },
        ]
      : [
          { points: "0,20 120,0 150,80 20,100", delay: 0.5 },
          { points: "180,0 300,30 270,110 150,80", delay: 2 },
          { points: "50,150 170,130 190,210 70,230", delay: 1 },
        ];

  const shapeColor = "#00de44"; // Brand green

  return (
    <div
      className={`absolute pointer-events-none overflow-hidden ${
        position === "top-left"
          ? "top-0 left-0"
          : position === "bottom-left"
          ? "bottom-0 left-0"
          : "bottom-0 right-0"
      } w-[350px] h-[350px] opacity-30 dark:opacity-20 ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {shapes.map((shape, index) => (
          <motion.polygon
            key={index}
            points={shape.points}
            stroke={shapeColor}
            strokeWidth="2"
            fill="transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.05, 0.95, 1],
              rotate: [0, 5, -5, 0],
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 8,
              delay: shape.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
