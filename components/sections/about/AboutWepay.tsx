"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const AboutWepay = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="min-h-screen bg-[#e6fff5] dark:bg-[#043024] flex items-center justify-center mt-20 p-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-[#1a5741] dark:text-white">
            About WePay
          </h1>

          {isDarkMode ? (
            <p className="text-white text-lg leading-relaxed">
              WePay Mobile Solutions Limited dey redefine money matter for
              Africa with biometric authentication. We dey partner with big
              fintech companies, banks, and local agents all over the continent,
              to build network wey dey empower people wey no get enough access
              to banking with secure and inclusive financial services. With
              WePay, you fit do money transactions with only your fingerprint—no
              need for card or smartphone. This way dey make payment simple and
              give everybody, especially people wey dey place wey banking no fit
              reach, power to join digital economy with confidence. For WePay,
              we no just dey do digital banking, we dey do identity banking. We
              dey build bridge where normal banking dey put wall.
            </p>
          ) : (
            <p className="text-gray-700 text-lg leading-relaxed">
              WePay Mobile Solutions Limited is redefining finance in Africa
              through biometric authentication. Our robust infrastructure is
              built on strategic partnerships with leading fintech companies,
              banks, and local merchants across the continent, creating a
              network that empowers underbanked populations with secure,
              inclusive financial services. With WePay, users can conduct
              financial transactions and access their funds using only their
              fingerprints, eliminating the need for traditional cards or
              smartphones. This approach simplifies the payment process and
              empowers everyone, especially those in underbanked markets to
              participate confidently in the digital economy. At WePay,
              we&apos;re taking fintech beyond mere digital banking and into
              identity banking. We&apos;re architects of financial inclusion. We
              build bridges where traditional banking creates walls.
            </p>
          )}
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          {/* Circles & POS Container */}
          <div className="relative w-[450px] h-[450px] flex justify-center items-center">
            {/* Circles */}
            <Image
              src="/images/circle.svg"
              alt="Decorative circles"
              width={400}
              height={400}
              className="absolute object-contain"
            />

            {/* POS Device */}
            <Image
              src="/images/image.png"
              width={500}
              height={500}
              alt="WePay POS Terminal"
              quality={100}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWepay;
