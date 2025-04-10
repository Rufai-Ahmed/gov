"use client";

interface NavItem {
  label: string;
  href: string;
}

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
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
        <button
          className="font-normal transition-colors text-[#003429B2] hover:text-brand dark:text-foreground dark:hover:text-brand"
          key={item.href}
          onClick={() => handleNavClick(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
