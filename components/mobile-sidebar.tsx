"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./ui/logo";

interface NavItem {
  label: string;
  href: string;
}

interface MobileSidebarProps {
  navItems: NavItem[];
}

export function MobileSidebar({ navItems }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-background dark:bg-background z-60 md:hidden shadow-xl"
            >
              <div className="flex flex-col p-6 h-full">
                <div className="flex items-center justify-between mb-8">
                  <Logo onClick={() => setIsOpen(false)} />
                  <ThemeToggle />
                </div>

                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <button
                      className="font-normal transition-colors text-[#003429B2] hover:text-brand dark:text-foreground dark:hover:text-brand text-xl"
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto">
                  <Button
                    variant="brand"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <a href="signup">Sign Up</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
