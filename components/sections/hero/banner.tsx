"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import CountUp from "react-countup";

const Banner = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section className=" w-[100%]">
      {/* Inner */}
      <div className="w-[100%] flex mt-20 justify-center text-center ">
        <div className="w-[90%] bg-[#043024] border border-[#0F7760] flex rounded-[32px] py-[16px] px-[20px] sm:px-[40px]">
          <div className="flex items-center space-y-3 justify-around flex-wrap w-full">
            {/* 360 */}
            <div>
              <div className=" text-[20px] sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                <b>
                  {" "}
                  <CountUp end={360} duration={6} delay={0} />
                  M+
                </b>
              </div>
              <p
                className={`text-white text-[14px] ${
                  isDarkMode ? "text-[11.6px]" : "text-[14px]"
                }`}
              >
                {" "}
                {isDarkMode ? (
                  <span>People Wey No Get Bank Account</span>
                ) : (
                  <span>Underserved Population</span>
                )}{" "}
              </p>
            </div>

            {/* 10+  */}
            <div className="">
              <div className="sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                <b>
                  <CountUp end={10} duration={6} delay={0} />
                </b>
                <b>+</b>
              </div>
              <p
                className={`text-white text-[14px] ${
                  isDarkMode ? "text-[11.6px]" : "text-[14px]"
                }`}
              >
                {" "}
                African Countries
              </p>
            </div>

            {/* 500 */}
            <div className={`md:pb-[20px] lg:pb-[0px]  `}>
              <div className="sm:text-[30px] lg:text-[55px] text-[#2ff86d]">
                <b>
                  {" "}
                  <CountUp end={500} duration={6} delay={0} />
                </b>
                <b>M+</b>
              </div>
              <p
                className={`text-white text-[14px] ${
                  isDarkMode ? "text-[11.6px]" : "text-[14px]"
                }`}
              >
                Potential Customers
              </p>
            </div>

            <div className="sm:pl-[20px] md:pl-[60px] ">
              <a>
                {" "}
                <Image
                  src={"/icons/googleplay.svg"}
                  width={100}
                  height={100}
                  className="w-[200px]"
                  alt="GooglePlay store"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
