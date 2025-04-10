"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/ui/nav-link";

interface NavItem {
  label: string;
  href: string;
}

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={pathname === item.href}
          onClick={() => handleNavClick(item.href)}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
