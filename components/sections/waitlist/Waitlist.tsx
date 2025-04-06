"use client";

import type React from "react";

import Image from "next/image";

export default function Waitlist() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full mx-auto relative flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 z-10">
          <div className="inline-block rounded-full bg-[#e6f9ed] px-6 py-2 mb-10">
            <p className="text-sm text-[#00c853] font-medium">
              • Be the First to Experience WePay!
            </p>
          </div>

          <h1 className="text-[2.75rem] sm:text-[3.5rem] font-bold text-[#0a2b1e] leading-[1.1] tracking-tight">
            Our app is almost
            <br />
            here. Join
            <span className="text-[#00d959] font-bold text-[3.8rem] leading-[0.9] tracking-tight italic inline-block">
              the waitlist
            </span>
            <br />
            to get early access!
          </h1>

          <div className="mt-10">
            <button
              onClick={scrollToForm}
              className="bg-[#00d959] hover:bg-[#00c04d] text-white font-medium px-8 py-3 cursor-pointer rounded-md transition-all shadow-lg"
            >
              Get Started →
            </button>
          </div>
        </div>

        {/* Right Column - Phone Mockup */}
        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <Image
            src="/images/iphone.svg"
            width={700}
            height={700}
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
}
