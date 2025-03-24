/* eslint-disable @next/next/no-img-element */
import type React from "react";
import type { Testimonial } from "./testimonial";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
      style={{ background: "#e6fff0" }}
    >
      <div className="relative flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="absolute inset-0 size-full">
          <Image
            src="/images/border.svg"
            alt="Decorative border"
            fill
            className="object-cie"
            priority
          />
        </div>

        <div className="relative bg-[#0a4331] text-white p-4 sm:p-6 md:p-8 rounded-lg h-full w-full flex flex-col m-2 sm:m-3 md:m-4">
          <h2 className="text-md sm:text-2xl font-semibold mb-2 sm:mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-gray-100 mb-4 sm:mb-6 md:mb-8 flex-grow text-xs sm:text-base">
            {testimonial.content}
          </p>

          <div className="flex items-start sm:items-center justify-between mt-auto gap-4">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {testimonial.title}
              </p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-green-300 self-end sm:self-auto">
              <img
                src={
                  testimonial.avatar || "/placeholder.svg?height=64&width=64"
                }
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
