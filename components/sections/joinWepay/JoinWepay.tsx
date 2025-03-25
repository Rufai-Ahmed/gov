/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./testimonial-card";
import { testimonials } from "./testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "../../hooks/use-media-query";

const JoinWepay = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen bg-[#e6fff5] dark:bg-[#043024] flex flex-col items-center py-12 md:py-20 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[#1a5741] dark:text-white leading-tight">
        Join The WePay Revolution Today!
      </h1>

      <div className="w-full max-w-7xl">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className={`pl-2 md:pl-4 ${
                  isMobile ? "basis-full" : "basis-1/2"
                }`}
              >
                <div className="h-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-6 md:mt-8 gap-2">
            <CarouselPrevious className="relative static transform-none bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-[#1a5741] dark:text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
            <div className="flex items-center justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    current === index
                      ? "bg-[#1a5741] dark:bg-green-400"
                      : "bg-green-200 dark:bg-green-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static transform-none bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-[#1a5741] dark:text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default JoinWepay;
