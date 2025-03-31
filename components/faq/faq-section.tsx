"use client";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Toggle FAQ item
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // FAQ data with both languages
  const faqItems = [
    {
      englishQuestion: "What is WePay?",
      pidginQuestion: "Wetin be WePay?",
      englishAnswer:
        "WePay is a financial platform that provides seamless payment solutions, including POS transactions, transfers, bill payments, and biometric-based services.",
      pidginAnswer:
        "WePay na platform wey you fit use do money things easily, like send money, pay bills, and use your fingerprint to do am.",
    },
    {
      englishQuestion: "How does WePay work?",
      pidginQuestion: "How WePay dey work?",
      englishAnswer:
        "WePay operates through a network of agents and digital services, allowing users to perform cash withdrawals, transfers, and bill payments while earning rewards through biometric transactions.",
      pidginAnswer:
        "You fit use WePay withdraw money, send money, pay bills, and if you use your fingerprint, you fit get some rewards.",
    },
    {
      englishQuestion: "Is WePay a bank?",
      pidginQuestion: "WePay na bank?",
      englishAnswer:
        "No, WePay is not a bank, but it works with banks to help you manage your money.",
      pidginAnswer:
        "No, WePay no be bank, but e dey work with banks to help you do your money things.",
    },
    {
      englishQuestion: "Who can use WePay?",
      pidginQuestion: "Who fit use WePay?",
      englishAnswer:
        "WePay serves a wide range of users, including: •Individuals •Small & Medium Enterprises (SMEs) •Marketplaces •Financial Institutions",
      pidginAnswer:
        "WePay dey for ordinary people, small and medium businesses, marketplaces, and even banks.",
    },
    {
      englishQuestion: "In which countries is WePay available?",
      pidginQuestion: "Which countries WePay dey?",
      englishAnswer: "WePay currently operates in Nigeria only.",
      pidginAnswer: "For now, WePay dey only for Nigeria.",
    },
    {
      englishQuestion: "Where can I download the WePay app?",
      pidginQuestion: "Where I fit download WePay app?",
      englishAnswer:
        "You can download the WePay app from the Google Play Store. Look for the official link on our website or footer section.",
      pidginAnswer:
        "You fit download am from Google Play Store. Look for the correct link on our website or the bottom part.",
    },
    {
      englishQuestion: "How do I start using WePay?",
      pidginQuestion: "How I go start to use WePay?",
      englishAnswer:
        "Getting started is easy with these 3 steps: 1. Download the App: Available on the Google Play Store. 2. Register with your fingerprint as your password. 3. Fund your account and start enjoying seamless banking.",
      pidginAnswer:
        "To start use WePay, just do these three things: 1. Download the app from Play Store. 2. Register with your fingerprint, wey go be like your password. 3. Put money inside your account, then you fit start to do your banking without wahala.",
    },
    // New FAQ items from screenshots
    {
      englishQuestion: "What is the WePay biometric service?",
      pidginQuestion: "Wetin be WePay biometric service?",
      englishAnswer:
        "The WePay biometric service allows users to perform transactions securely using fingerprint authentication.",
      pidginAnswer:
        "Na the service wey make you fit use your fingerprint to do your money things securely.",
    },
    {
      englishQuestion: "Do I need a smartphone to use WePay?",
      pidginQuestion: "I need smartphone to use WePay?",
      englishAnswer:
        "No! WePay's biometric technology allows you to access your money without a phone or card—just your fingerprint is enough. Simply sign up through one of our agents if you don't have a smartphone.",
      pidginAnswer:
        "No! You no need smartphone. With WePay biometric, you fit use only your fingerprint to access your money. If you no get phone, just go meet our agent to help you sign up.",
    },
    {
      englishQuestion: "How much is the biometric subscription fee?",
      pidginQuestion: "How much be the biometric subscription fee?",
      englishAnswer:
        "The biometric subscription costs ₦4,950 per user valid for 365 days.",
      pidginAnswer:
        "You go pay ₦4,950 for the biometric service, and e go last for one year.",
    },
    {
      englishQuestion: "What do I need to sign up?",
      pidginQuestion: "Wetin I need to sign up?",
      englishAnswer:
        "You only need to download the WePay app and register using your BVN and fingerprint. No additional documents or devices are required.",
      pidginAnswer:
        "Just download WePay app, then use your BVN and fingerprint to register. You no need any other thing.",
    },
    {
      englishQuestion: "What can I do with WePay?",
      pidginQuestion: "Wetin I fit do with WePay?",
      englishAnswer:
        "With WePay, you can: •Send money instantly. •Pay bills effortlessly. •Make purchases securely. •Withdraw or deposit funds using affordable POS systems. •Use Protocol X for fast and secure payments with Recal, Freeze & Release features.",
      pidginAnswer:
        "With WePay, you fit: •Send money quick quick. •Pay bills without stress. •Buy things safely. •Withdraw or put money with cheap POS. •Use Protocol X for fast and secure payments, with features like Recal, Freeze, and Release.",
    },
    {
      englishQuestion: "How does biometric security work?",
      pidginQuestion: "How biometric security dey work?",
      englishAnswer:
        "Your fingerprint serves as your unique password, securely encrypted to protect your account. This eliminates the need for multiple PINs, passwords, or physical cards.",
      pidginAnswer:
        "Your fingerprint na your special password, wey dem don secure well well to protect your account. So you no need to remember many PINs or passwords, or carry card.",
    },
    {
      englishQuestion: "Is it possible to use WePay offline?",
      pidginQuestion: "I fit use WePay offline?",
      englishAnswer:
        "Not at the moment! WePay is set to roll out offline-enabled payments in 2027, allowing you to make transactions even without an internet connection.",
      pidginAnswer:
        "For now, no. But by 2027, you go fit do transactions without internet.",
    },
    {
      englishQuestion: "Is my money safe with WePay?",
      pidginQuestion: "My money safe with WePay?",
      englishAnswer:
        "Absolutely Yes! WePay uses cutting-edge encryption and biometric authentication to ensure your funds and transactions are secure.",
      pidginAnswer:
        "Yes, your money safe well well with WePay. We dey use strong security like encryption and biometric to protect your money and transactions.",
    },
    {
      englishQuestion: "What happens if I lose my phone?",
      pidginQuestion: "If I lose my phone, wetin go happen?",
      englishAnswer:
        "Losing your phone doesn't affect your access. With WePay, your fingerprint is your wallet, so you can still manage your money without a device.",
      pidginAnswer:
        "No wahala, you fit still access your money with your fingerprint, even without phone.",
    },
    {
      englishQuestion: "What if I need help with my account?",
      pidginQuestion: "If I need help with my account, wetin I go do?",
      englishAnswer:
        "WePay offers excellent customer support. Contact us via phone or visit one of our offices for assistance.",
      pidginAnswer: "Just call us or come to our office, we go help you",
    },
    {
      englishQuestion: "How can I contact WePay?",
      pidginQuestion: "How I fit contact WePay?",
      englishAnswer:
        "You can reach out via:\nPhone: 08141551867\nEmail: contact@wepayweb.com\nHead Office: No.3 Ikot Ekpene Road, Abak 520103, Akwa Ibom State.",
      pidginAnswer: "You fit call us: 08141551867",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#043024]" : "bg-[#e6fff5]"
      } py-12 px-6`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-white" : "text-[#1a5741]"
          }`}
        >
          Frequently Asked Questions (FAQ)
        </h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                isDarkMode ? "bg-[#054332]" : "bg-[#d0f7e9]"
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full p-4 text-left flex justify-between items-center ${
                  isDarkMode ? "text-white" : "text-[#1a5741]"
                } font-medium`}
              >
                <span>
                  {isDarkMode ? item.pidginQuestion : item.englishQuestion}
                </span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
                style={{
                  maxHeight: openItem === index ? "1000px" : "0",
                  opacity: openItem === index ? 1 : 0,
                  padding: openItem === index ? "1rem" : "0 1rem",
                }}
              >
                <p>{isDarkMode ? item.pidginAnswer : item.englishAnswer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
