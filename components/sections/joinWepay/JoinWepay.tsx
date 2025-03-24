"use client";

import { useState } from "react";
import TestimonialCard from "./testimonial-card";
import Pagination from "./pagination";
import { testimonials } from "./testimonials";

const JoinWepay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage < 0
        ? testimonials.length - testimonialsPerPage
        : prevIndex - testimonialsPerPage
    );
  };

  const handlePageChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  return (
    <div className="min-h-screen bg-[#e6fff5] dark:bg-[#043024] flex flex-col items-center mt-20 justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Join The WePay Revolution Today!
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <Pagination
        currentIndex={currentIndex}
        totalPages={totalPages}
        itemsPerPage={testimonialsPerPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default JoinWepay;
