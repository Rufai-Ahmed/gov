"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  buttonText?: string;
  showButton?: boolean;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  buttonText = "Get It Now",
  showButton = false,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-transparent rounded-3xl p-4 border flex flex-col justify-between py-10 items-center text-center dark:h-[390px] h-[350px] w-[250px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      <div className="text-brand mb-6 size-20">{icon}</div>

      <h3 className="text-[#003429] dark:text-[#e0f2ef] text-[18px] font-bold mb-4">
        {title}
      </h3>

      <p className="text-[#2a665a] dark:text-[#a7c9c3] text-[14px] mb-4">
        {description}
      </p>

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <Button
            className="bg-[#00d642] hover:bg-brand-600 dark:bg-green-500 text-white font-medium px-6 py-2 rounded-full"
            size="sm"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
