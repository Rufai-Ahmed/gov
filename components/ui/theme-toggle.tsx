"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = (checked: boolean) => {
    console.debug("toggleTheme called with:", checked);
    setTheme(checked ? "dark" : "light");
  };

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      id="theme"
      onCheckedChange={toggleTheme}
    />
  );
}
