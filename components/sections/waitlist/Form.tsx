/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  excitedAbout: z.string().min(1, "Please select what excites you"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(
    "Biometric payment technology"
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      excitedAbout: selectedOption,
    },
  });

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setValue("excitedAbout", option);
    setDropdownOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/waitlist/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          fullName: data.fullName,
          phone: data.phone,
          excitedAbout: data.excitedAbout,
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.error === "You have already joined the waitlist") {
          toast.info("You have already joined the waitlist.");
          return;
        }
        throw new Error(
          responseData.error || "Something went wrong. Please try again."
        );
      }

      router.push("/success");
    } catch (error) {
      toast.error(" An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#e6ffea] p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[#0a2b1e] text-lg font-medium mb-2"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Idara"
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-lg text-black border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#0a2b1e] text-lg font-medium mb-2"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="idaransikak@gmail.com"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg text-black border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[#0a2b1e] text-lg font-medium mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+234"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg text-black border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
              />
            </div>

            {/* Excited About Dropdown */}
            <div className="relative">
              <label
                htmlFor="excited"
                className="block text-[#0a2b1e] text-lg font-medium mb-2"
              >
                What are you most excited about WePay?
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full px-4 py-3 rounded-lg text-black border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959] text-left flex justify-between items-center"
                >
                  {watch("excitedAbout") || selectedOption}
                  <FaCheck color="green" />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-[#c5e8d5]">
                    <ul className="py-1">
                      {[
                        "Biometric Payment Technology",
                        "Protocol X",
                        "Biometric Rewards",
                      ].map((item) => (
                        <li
                          key={item}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                          onClick={() => selectOption(item)}
                        >
                          <span>{item}</span>
                          {selectedOption === item && (
                            <Check className="w-5 h-5 text-[#00d959]" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {errors.excitedAbout && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.excitedAbout.message}
                </p>
              )}
            </div>
          </div>

          {/* Consent */}
          <div>
            <label className="block text-[#0a2b1e] text-lg font-medium mb-2">
              Consent<span className="text-red-500">*</span>
            </label>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  type="checkbox"
                  {...register("consent")}
                  className="w-5 h-5 border border-[#c5e8d5] rounded accent-[#00d959]"
                  required
                />
              </div>
              <div className="ml-3 text-[#0a2b1e]">
                <label htmlFor="consent" className="text-base">
                  By clicking &quot;Submit & Join the Waitlist,&quot; you
                  consent to WePay reaching out via call or email with updates
                  about the WePay Mobile App.
                </label>
              </div>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00d959] hover:bg-[#00c04d] text-white font-medium px-8 py-3 rounded-full cursor-pointer transition-all shadow-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit & Join the Waitlist"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
