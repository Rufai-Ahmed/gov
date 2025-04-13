"use client";
import LinkIcon from "@/components/icons/link-icon";
import { useTheme } from "next-themes";
import React from "react";

const GetStarted = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <section className="w-full bg-[#DEFFF4] dark:bg-[#043024] min-h-[70vh] flex items-center py-10">
      <div className="container mx-auto h-full w-full px-6 flex items-center justify-center gap-16 md:gap-28 flex-wrap">
        <LinkIcon />

        <div className="flex flex-col justify-between">
          <h1 className="text-[30px] mb-10 font-bold text-[#043024] dark:text-white text-center">
            {isDarkMode
              ? "How To Take Open Wepay Account"
              : "Get started with WePay"}
          </h1>

          <div className="flex items-start">
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-semibold">
                1
              </div>
              <div className="w-[2px] h-[25px] bg-green-400 "></div>
              <div className="w-[2px] h-[25px] bg-gray-400 "></div>
            </div>
            <div className={`ml-[60px]`}>
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-[#043024]"
                }  text-[30px]    mb-6   max-sm:text-[16px]`}
              >
                Download The app
              </h3>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start ">
            <div className="relative flex flex-col items-center">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-[#003429]"
                } w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold`}
              >
                2
              </div>
              <div className="w-[2px] h-[60px] bg-gray-400"></div>
            </div>
            <div className={`ml-[60px] mb-5x`}>
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-[#043024]"
                } text-[30px]   mb-1 text-lg     max-sm:text-[16px]`}
              >
                Sign Up With Biometrics
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } text-black opacity-70 text-[15px] `}
              >
                Your fingerprint {isDarkMode ? " na" : "is"} your password
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start ">
            <div className="relative flex flex-col items-center">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-[#003429]"
                }  w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold`}
              >
                3
              </div>
            </div>
            <div className={`ml-[60px] `}>
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-[#043024]"
                } text-[30px] max-sm:text-[16px]`}
              >
                {" "}
                {isDarkMode
                  ? "Put Money For Your Account"
                  : "Fund Your Account"}{" "}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } text-black opacity-70 text-[15px] `}
              >
                {isDarkMode
                  ? "Start secure and smooth banking today."
                  : "Start secure and seamless banking today"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
