"use client";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "@/components/ui/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003024] text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Address Section */}
          <div className="space-y-6">
            <div className="flex justify-start">
              <Logo />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Head Office:</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                14th Floor, Udom Emmanuel Towers, Banking Layout, Udo
                <br />
                Udoma Avenue, Uyo 521110, Akwa Ibom State, Nigeria.
              </p>
            </div>

            <div className="border-t border-gray-700 my-6 pt-6 space-y-2">
              <h3 className="font-semibold text-lg">Branch Office:</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                3rd Floor, Workcity, Plot 1, Maruwa Bus Stop, 128 Remi
                <br />
                Olowude Street, Lekki Phase 1, Lagos 105102,
                <br />
                Lagos State, Nigeria.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-green-400">
                DOWNLOAD OUR APP
              </h3>
              <Link
                href="#"
                className="text-gray-300 text-sm underline hover:text-green-400 transition-colors"
              >
                Google Playstore Link
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-green-400">PRODUCTS</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Biometric POS Terminals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile Wallet Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fingerprint-Based Transactions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Affordable POS Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instant Debit Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Serve Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-green-400">WHO WE SERVE</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Individual Consumers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Small & Medium Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Financial Institutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Marketplaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-green-400">COMPANY</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <div className="text-gray-300">
                  Contact:{" "}
                  <a
                    href="tel:08141551867"
                    className="hover:text-white transition-colors"
                  >
                    08141551867
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex space-x-3 mt-6">
              <Link
                href="#"
                className="bg-[#E1306C] p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#1877F2] p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-black p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-[#0A66C2] p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-[#25D366] p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaWhatsapp size={18} />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <div className="mb-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
          <p>
            © {currentYear} WePay Mobile Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
