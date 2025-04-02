"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import CountUp from "react-countup";

const Banner = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section className="w-[100%]">
      {/* Inner */}
      <div className="w-[100%] flex mt-5 justify-center text-center">
        <div className="w-[90%] bg-[#043024] border border-[#0F7760] flex rounded-[32px] py-[16px] px-[20px] sm:px-[40px]">
          <div className="flex items-center justify-between flex-wrap w-full">
            {/* Stats Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-[70%] lg:w-[75%] mb-4 sm:mb-0">
              {/* 360M+ */}
              <div className="flex flex-col items-center">
                <div className="text-[20px] sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                  <b>
                    <CountUp end={360} duration={6} delay={0} />
                    M+
                  </b>
                </div>
                <p
                  className={`text-white ${
                    isDarkMode ? "text-[11.6px]" : "text-[14px]"
                  } sm:text-[16px] lg:text-[15px]`}
                >
                  {isDarkMode ? (
                    <span>People Wey No Get Bank Account</span>
                  ) : (
                    <span>Underserved Population</span>
                  )}
                </p>
              </div>

              {/* 10+ */}
              <div className="flex flex-col items-center">
                <div className="text-[20px] sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                  <b>
                    <CountUp end={10} duration={6} delay={0} />+
                  </b>
                </div>
                <p
                  className={`text-white ${
                    isDarkMode ? "text-[11.6px]" : "text-[14px]"
                  } sm:text-[16px] lg:text-[18px]`}
                >
                  African Countries
                </p>
              </div>

              {/* 500M+ */}
              <div className="flex flex-col items-center">
                <div className="text-[20px] sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                  <b>
                    <CountUp end={500} duration={6} delay={0} />
                    M+
                  </b>
                </div>
                <p
                  className={`text-white ${
                    isDarkMode ? "text-[11.6px]" : "text-[14px]"
                  } sm:text-[16px] lg:text-[18px]`}
                >
                  Potential Customers
                </p>
              </div>
            </div>

            {/* Google Play */}
            <div className="w-full sm:w-[25%] lg:w-[20%] flex justify-center sm:justify-end mt-6 sm:mt-0">
              <a>
                <Image
                  src={"/icons/googleplay.svg"}
                  width={100}
                  height={100}
                  className="w-[150px] sm:w-[180px] lg:w-[200px]"
                  alt="GooglePlay store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
