"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Get all sections
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "contact",
      ].map((id) => document.getElementById(id));

      // Find the current section
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#home", id: "home", label: "Home" },
    { href: "/#about", id: "about", label: "About" },
    { href: "/#projects", id: "projects", label: "Projects" },
    { href: "/#experience", id: "experience", label: "Experience" },
    { href: "/#contact", id: "contact", label: "Contact" },
    { href: "/blog", id: "blog", label: "Blog" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    } else if (href === "/blog") {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            JD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "relative py-1 text-muted-foreground transition-colors hover:text-foreground",
                  activeSection === item.id && "text-foreground",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-16 w-full border-b bg-background/95 backdrop-blur-md md:hidden">
            <div className="container space-y-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground",
                    activeSection === item.id && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
