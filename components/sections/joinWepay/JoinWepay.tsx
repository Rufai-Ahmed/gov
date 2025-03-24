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
    <div className="min-h-screen bg-[#e6fff5] dark:bg-[#043024] flex flex-col items-center mt-20 justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1a5741] dark:text-white">
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
          <div className="flex items-center justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static transform-none bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-[#1a5741] dark:text-white border-none" />
            <div className="flex items-center justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index
                      ? "bg-[#1a5741] dark:bg-green-400"
                      : "bg-green-200 dark:bg-green-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static transform-none bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-[#1a5741] dark:text-white border-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default JoinWepay;
