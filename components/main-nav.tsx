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

  return (
    <nav className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={pathname === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
