"use client";

import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function NavLink({
  href,
  active,
  className,
  onClick,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href as string}
      className={cn(
        "font-normal transition-colors",
        active
          ? "text-brand dark:text-brand"
          : "text-[#003429B2] hover:text-brand dark:text-foreground dark:hover:text-brand",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
