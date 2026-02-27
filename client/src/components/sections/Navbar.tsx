import { useState, useEffect } from "react";
import { navLinks } from "@/data/nav-links";
import { scrollToSection } from "./shared";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.15, rootMargin: "-10% 0px -60% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4"
        data-testid="navbar"
        aria-label="Section navigation"
      >
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -z-10" />

        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;

          return (
            <button
              key={link.id}
              className="group relative flex items-center justify-center w-12 h-12 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full outline-none"
              onClick={() => scrollToSection(link.id)}
              aria-label={link.label}
              data-testid={`link-${link.id}`}
            >
              <div className="absolute right-14 px-3 py-1.5 rounded-md bg-card border border-primary/20 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-[0_0_15px_hsl(var(--primary)/0.1)] flex items-center gap-2">
                <span className="text-primary">&gt;</span>
                <span className={isActive ? "text-primary font-bold" : "text-muted-foreground"}>
                  {link.label}
                </span>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  className={`absolute inset-0 m-auto rounded-full border border-primary/50 transition-all duration-500 ease-out ${
                    isActive
                      ? "w-full h-full opacity-100 rotate-180 scale-100"
                      : "w-4 h-4 opacity-0 rotate-0 scale-0"
                  }`}
                  style={{ borderStyle: "dashed" }}
                />
                <div
                  className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center relative z-10 ${
                    isActive
                      ? "w-8 h-8 bg-background border border-primary text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                      : "w-3 h-3 bg-muted border border-border group-hover:w-4 group-hover:h-4 group-hover:border-primary/50 group-hover:bg-primary/20"
                  }`}
                >
                  <Icon
                    className={`transition-all duration-300 ${
                      isActive
                        ? "w-4 h-4 opacity-100 scale-100"
                        : "w-0 h-0 opacity-0 scale-0"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      <nav
        className="fixed bottom-0 left-0 right-0 bg-background/90 border-t border-border z-50 lg:hidden backdrop-blur-md"
        aria-label="Mobile navigation"
        data-testid="navbar-mobile"
      >
        <div className="flex items-center justify-around h-14 px-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;

            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                aria-label={link.label}
                data-testid={`mobile-link-${link.id}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-mono leading-none">{link.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
