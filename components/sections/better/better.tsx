"use client";
import React from "react";
import BetterCard from "./better-card";
import { AnimatedShapes } from "@/components/ui/animated-shapes";
import FingerLock from "@/components/icons/finger-lock";
import Thumb from "@/components/icons/thumb";
import { useTheme } from "next-themes";

const Better = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Define headings and card texts in standard English and Pidgin (for dark mode)
  const heading = isDarkMode ? "Why We Better Pass" : "Why We're Better";

  const card1Title =  "Biometric Security";
  const card1Content = isDarkMode
    ? "Your fingerprint na your only key, and we lock am with strong encryption."
    : "Your fingerprint is your only key, protected by advanced encryption.";

  const card2Title ="Effortless convenience";
  const card2Content = isDarkMode
    ? "No card, no phone—touch and make payment anytime, anywhere."
    : "No cards, no phones—access your money anytime, anywhere.";

  const card3Title = "Affordable Banking Solutions";
  const card3Content = isDarkMode
    ?    <span>
    <span className="text-brand">
    To make money hard, but to commot am no suppose
    </span>{" "}
    WePay offers transparent, low-cost transaction fees, making
    banking accessible and affordable for everyone.
  </span>
    :     <span>
    <span className="text-brand">
      Making money is hard, withdrawing it shouldn&apos;t be.
    </span>{" "}
    WePay offers transparent, low-cost transaction fees, making
    banking accessible and affordable for everyone.
  </span>
;

  return (
    <section className="container relative overflow-hidden px-6 mx-auto min-h-[50vh] mt-20 pb-20">
      <h1 className="text-center text-[40px] font-bold dark:text-white text-[#043024] mb-10">
        {heading}
      </h1>

      <div className="flex items-center justify-center gap-5 flex-wrap">
        <BetterCard
          icon={<FingerLock />}
          title={card1Title}
          content={card1Content}
        />
        <BetterCard
          icon={<Thumb />}
          title={card2Title}
          content={card2Content}
        />
        <BetterCard
          icon={<h1 className="text-[80px] text-[#00EA48] font-bold">₦</h1>}
          title={card3Title}
          content={card3Content}
        />
      </div>

      <AnimatedShapes position="bottom-left" />
    </section>
  );
};

export default Better;
