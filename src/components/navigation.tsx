"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center"
            >
              <div
                className={`w-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "h-4 bg-primary"
                    : "h-2 bg-muted-foreground group-hover:h-12 group-hover:bg-primary"
                }`}
              />

              <span
                className={`absolute left-4 whitespace-nowrap font-cursive text-xl transition-all duration-300 ${
                  isActive
                    ? "opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-primary"
                    : "opacity-0 -translate-x-2 text-muted-foreground group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary"
                }`}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
