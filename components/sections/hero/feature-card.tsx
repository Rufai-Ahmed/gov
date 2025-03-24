"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-transparent rounded-3xl p-4 border flex flex-col justify-between py-10 items-center text-center h-[320px] w-[250px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      <div className="text-brand mb-6 size-20">{icon}</div>

      <h3 className="text-[#003429] dark:text-[#e0f2ef] text-[18px] font-bold mb-4">
        {title}
      </h3>

      <p className="text-[#2a665a] dark:text-[#a7c9c3] text-[14px]">
        {description}
      </p>
    </motion.div>
  );
}
