"use client";
import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface BetterCardProps {
  delay?: number;
  icon: ReactNode;
  content: string | ReactNode;
  title: string;
}

const BetterCard: FC<BetterCardProps> = ({
  delay = 0,
  content,
  icon,
  title,
}) => {
  return (
    <div className="relative group w-[320px] h-[450px]">
      {/* Faded green border */}
      <div className="pointer-events-none absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#2FF86D] to-transparent" />

      {/* Card Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col rounded-3xl bg-white dark:bg-[#00261E] p-6 pt-10 dark:text-white text-[#00de44]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
      >
        {/* Example icon */}
        <h4 className="w-full justify-center flex mb-4">{icon}</h4>
        <h3 className="mb-2 text-[23px] dark:text-white text-[#043024] font-bold">
          {title}
        </h3>
        <p className="text-[#043024] dark:text-white ">{content}</p>
      </motion.div>
    </div>
  );
};

export default BetterCard;
