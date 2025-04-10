/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { MainNav } from "@/components/main-nav";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme } = useTheme();

  const navItems = [
    { label: "Home", href: "#home" },
    {
      label: theme === "dark" ? "Why We Better Pass" : "Why We're Better",
      href: "#products",
    },
    { label: "Who We serve", href: "#join" },
    { label: "About Us", href: "#about-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="w-full py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
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
            onClick={(e) => handleScroll(e as any, "#get-started")}
          >
            <Link href="#get-started">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
