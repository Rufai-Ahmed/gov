"use client";

import { MainNav } from "@/components/main-nav";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: theme === "dark" ? "Why We Better Pass" : "Why We're Better",
      href: "/products",
    },
    { label: "Who We serve", href: "/who-we-serve" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <header className="container mx-auto w-full py-4 px-6 flex items-center justify-between">
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
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
}
