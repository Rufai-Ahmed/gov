"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentIndex: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentIndex,
  totalPages,
  itemsPerPage,
  onPageChange,
  onNext,
  onPrev,
}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index * itemsPerPage)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex / itemsPerPage === index
                ? "bg-[#1a5741]"
                : "bg-green-200"
            )}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6 text-[#1a5741]" />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6 text-[#1a5741]" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
