import type React from "react";
import type { Testimonial } from "./testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative rounded-xl border-2 border-green-400 p-1">
      <div className="absolute -left-1 top-1/4 w-2 h-2 bg-green-500 rounded-full" />
      <div className="absolute -right-1 top-1/2 w-2 h-2 bg-green-500 rounded-full" />
      <div className="absolute -left-1 bottom-1/4 w-2 h-2 bg-green-500 rounded-full" />

      <div className="bg-[#1a5741] text-white p-8 rounded-lg h-full flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">
          Real Stories, Real Impact
        </h2>
        <p className="text-gray-100 mb-8 flex-grow">{testimonial.content}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <h3 className="font-semibold text-xl">{testimonial.name}</h3>
            <p className="text-gray-300 text-sm">{testimonial.title}</p>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-300">
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
