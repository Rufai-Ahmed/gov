"use client";

import { MainNav } from "@/components/main-nav";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Company", href: "/company" },
  { label: "Sign Up", href: "/sign-up" },
];

export function Header() {
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
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </header>
  );
}
