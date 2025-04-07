import type React from "react";
import type { Testimonial } from "./testimonial";
import Image from "next/image";
import Fave from "@/components/icons/fave";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative w-full h-full bg-[#e6fff0] dark:bg-[#043024]">
      <div className="relative flex items-center justify-center p-0 sm:px-8 sm:p-6 md:p-8">
        <div className="absolute inset-0">
          <Image
            src="/images/border.svg"
            alt="Decorative border"
            fill
            className="object-contain dark:bg-[#043024]"
            priority
          />
        </div>

        <div className="relative bg-[#0a4331] dark:bg-[#043024] text-white w-full p-4 sm:p-6 md:p-8 rounded-lg h-full flex flex-col m-2 sm:m-3 md:m-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Real Stories, Real Impact
          </h2>
          {/* Removed line-clamp classes to show full text */}
          <p className="text-gray-100 mb-4 sm:mb-6 md:mb-8 flex-grow text-xs sm:text-sm md:text-base">
            {testimonial.content}
          </p>

          <div className="flex items-start sm:items-center justify-between mt-auto gap-4">
            <div>
              <h3 className="font-semibold text-md sm:text-xl">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {testimonial.title}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-green-300 self-end sm:self-auto flex items-center justify-center">
              <Fave />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
