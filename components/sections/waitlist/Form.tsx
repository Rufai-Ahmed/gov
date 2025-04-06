"use client";

import type React from "react";

import { useState } from "react";
import { Check } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Biometric payment technology"
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    // For now, we'll just redirect to the success page
    router.push("/success");
  };

  return (
    <div className="min-h-screen bg-[#e6ffea] p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <form className="space-y-8" onSubmit={handleSubmit}>
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
                className="w-full px-4 py-3 rounded-lg border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
                required
              />
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
                className="w-full px-4 py-3 rounded-lg border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
                required
              />
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
                className="w-full px-4 py-3 rounded-lg border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959]"
              />
            </div>

            {/* What are you most excited about */}
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
                  className="w-full px-4 py-3 rounded-lg border border-[#c5e8d5] bg-[#e6ffea] focus:outline-none focus:ring-2 focus:ring-[#00d959] text-left flex justify-between items-center"
                >
                  {selectedOption}
                  <FaCheck color="green" />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-[#c5e8d5]">
                    <ul className="py-1">
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        onClick={() =>
                          selectOption("Biometric Payment Technology")
                        }
                      >
                        <span>Biometric Payment Technology</span>
                        <Check className="w-5 h-5 text-[#00d959]" />
                      </li>
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        onClick={() => selectOption("Protocol X")}
                      >
                        <span>Protocol X</span>
                        <Check className="w-5 h-5 text-[#00d959]" />
                      </li>
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        onClick={() => selectOption("Biometric Rewards")}
                      >
                        <span>Biometric Rewards</span>
                        <Check className="w-5 h-5 text-[#00d959]" />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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
                  className="w-5 h-5 border border-[#c5e8d5] rounded accent-[#00d959]"
                  required
                />
              </div>
              <div className="ml-3 text-[#0a2b1e]">
                <label htmlFor="consent" className="text-base">
                  By clicking &quot;Submit & Join the Waitlist,&quot; you
                  consent to WePay reaching out via call or email with updates
                  about the WePay Mobile App. We respect your privacy, and your
                  information will remain confidential.
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#00d959] hover:bg-[#00c04d] text-white font-medium px-8 py-3 rounded-full cursor-pointer transition-all shadow-sm"
            >
              Submit & Join the Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
