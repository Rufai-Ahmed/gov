"use client";

import type React from "react";

import { useTheme } from "next-themes";

const GetInTouch = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="min-h-screen bg-[#e6fff5] dark:bg-[#043024] py-16 mt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1a5741] dark:text-white mb-6">
          {isDarkMode ? "Make We Link Up!" : "Get In Touch with Us"}
        </h1>

        <div className="text-gray-700 dark:text-[#749797] text-center text-sm mb-12 max-w-2xl mx-auto">
          <p className="mb-1">
            {isDarkMode
              ? "You wan know more about how WePay fit help your business or personal money"
              : "Want to learn more about how WePay can support your business or personal financial"}
          </p>
          <p>
            {isDarkMode
              ? "needs? Drop your details below, and we go arrange call-back from our team."
              : "needs? Share your details below, and we'll arrange a call-back from our team."}
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="block text-gray-700 dark:text-gray-200 font-medium"
              >
                First name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Idara"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block text-gray-700 dark:text-gray-200 font-medium"
              >
                Last name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Joel"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-200 font-medium"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="idaraekhong@gmail.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 dark:text-gray-200 font-medium"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+234"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 dark:text-gray-200 font-medium">
              Consent<span className="text-red-500">*</span>
            </label>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-200"
              >
                I agree to receive Emails and Phone calls from WePay Team.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {isDarkMode ? "Submit" : "Get in touch"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
