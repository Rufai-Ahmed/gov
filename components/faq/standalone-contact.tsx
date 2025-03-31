"use client";
import { useTheme } from "next-themes";

const StandaloneContact = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className={`p-8 ${isDarkMode ? "bg-[#043024]" : "bg-[#e6fff5]"}`}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-[#054332]" : "bg-[#d0f7e9]"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            How can I contact WePay?
          </h2>
          <div
            className={`space-y-2 text-lg ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <p>You can reach out via:</p>
            <p>Phone: 08141551867</p>
            <p>
              Email:{" "}
              <a href="mailto:contact@wepayweb.com" className="underline">
                contact@wepayweb.com
              </a>
            </p>
            <p>
              Head Office: No.3 Ikot Ekpene Road, Abak 520103, Akwa Ibom State.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandaloneContact;
