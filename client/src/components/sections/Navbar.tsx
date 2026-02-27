import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { scrollToSection } from "./shared";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      data-testid="navbar"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 font-mono text-[15px] font-semibold tracking-tight text-primary"
          data-testid="link-home"
        >
          <Terminal className="w-5 h-5 text-primary" />
          &lt;Meg /&gt;
        </button>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              data-testid={`link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
              className="block text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer w-full text-left"
              data-testid={`mobile-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
