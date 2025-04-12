"use client";

import { useState, useEffect } from "react";
import { MainNav } from "@/components/main-nav";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    {
      label: theme === "dark" ? "Why We Better Pass" : "Why We're Better",
      href: "products",
    },
    { label: "Who We Serve", href: "who-we-serve" },
    { label: "About Us", href: "about-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-4 px-6 flex items-center justify-between transition-all duration-300 ease-in-out sticky z-40 top-0 ${
        hasScrolled
          ? "bg-white dark:bg-[#00261e] bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg"
          : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <MainNav items={navItems} />

      {/* Mobile Navigation */}
      <div className="flex items-center gap-4 md:hidden">
        <MobileSidebar navItems={navItems} />
      </div>

      {/* Right Side Actions */}
      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="brand"
          size="lg"
          asChild
          className="hidden md:inline-flex"
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </header>
  );
}
