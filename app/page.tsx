"use client";
import Image from "next/image";
import React from "react";
import { Handlee, Inter } from "next/font/google";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const Page = () => {
  return (
    <div className="w-full ">
      <Image
        src={"/images/ripped-header.png"}
        className="w-full"
        width={100}
        height={100}
        alt="header"
        priority
        unoptimized
      />

      <div className="h-[433px] text-center flex items-center justify-center bg-green-500 relative">
        <div className="flex flex-col font-bold">
          <h5 className={`uppercase ${inter.className} text-[13px]`}>Home / activities</h5>

          <h2
            className={`${handlee.className} text-[70px] font-black text-white`}
          >
            About Me
          </h2>
        </div>

        <Image
          src={"/images/ripped-paper.png"}
          className="w-full absolute bottom-0"
          width={100}
          height={100}
          alt="header"
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default Page;
