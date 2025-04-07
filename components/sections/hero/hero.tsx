"use client";
import { ThemeToggle } from "../../ui/theme-toggle";
import { AnimatedShapes } from "../../ui/animated-shapes";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import Fingerprint from "../../icons/fingerprint";
import NoPhone from "../../icons/no-phone";
import Banner from "./banner";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const heading = isDarkMode
    ? "Banking Wey No Get Boundary"
    : "Banking Beyond Boundaries";
  const subHeading = isDarkMode
    ? "WePay dey use better biometric technology, plus strong encryption to bring financial freedom come everywhere for Africa."
    : "WePay leverages advanced biometric technology, and cutting-edge encryption to deliver financial freedom across Africa.";
  const feature1Title = isDarkMode
    ? "Your Money Dey Your Hand"
    : "Your Money At Your Fingertips";
  const feature1Desc = isDarkMode
    ? "Enjoy banking wey dey secure and smooth. Send money, pay bills, and buy things sharp-sharp."
    : "Experience secure, seamless banking. Send money, pay bills, and make purchases instantly.";
  const feature2Title = isDarkMode
    ? "What If Losing Your Phone No Mean Anything?"
    : "What If Losing Your Phone Meant Nothing?";
  const feature2Desc = isDarkMode
    ? "Imagine world where your fingerprint na your wallet, and money matter no get boundary again."
    : "Imagine a world where your fingerprint replaces your wallet, and financial access transcends boundaries.";
  const buttonText = isDarkMode ? "Get Am Now" : "Get It Now";

  return (
    <section className="container relative mx-auto px-6 flex flex-col items-center min-h-[70vh] justify-center">
      {/* Animated Shapes */}
      <AnimatedShapes position="top-left" className="md:block hidden" />
      <AnimatedShapes position="bottom-right" className="md:block hidden" />

      <div>
        <ThemeToggle />
      </div>

      <motion.div
        className="space-y-10 text-brand-500 text-center z-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-5">
          <motion.h1
            className="text-4xl md:text-[70px] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heading}
          </motion.h1>
          <motion.p
            className="text-lg md:text-[20px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subHeading}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-12 w-full">
          <FeatureCard
            icon={<Fingerprint />}
            title={feature1Title}
            description={feature1Desc}
            delay={0.6}
            buttonText={buttonText}
            showButton={true}
          />

          <FeatureCard
            icon={<NoPhone />}
            title={feature2Title}
            description={feature2Desc}
            delay={0.8}
            buttonText={buttonText}
            showButton={true}
          />
        </div>
      </motion.div>

      <div className="mt-14">
        <button className="bg-[#00d642] text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
          Targeting
        </button>
      </div>

      <Banner />
    </section>
  );
};

export default Hero;
