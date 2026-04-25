"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#carta", label: "Carta" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-md"
          : "bg-gradient-to-b from-black/30 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 z-50">
            <Image
              src="/assets/logo.webp"
              alt="Taquería Mexicana Bésame"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className={cn(
              "font-lilita text-xl hidden sm:block transition-colors",
              isScrolled ? "text-dark" : "text-white"
            )}>
              Bésame
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-lato transition-all duration-200",
                  isScrolled
                    ? "text-dark hover:text-red"
                    : "text-white/90 hover:text-white hover:drop-shadow-lg"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://besamearanjuez.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-2 rounded-full font-lato font-bold transition-all duration-200",
              isScrolled
                ? "bg-red text-white hover:bg-orange"
                : "bg-white text-red hover:bg-cream shadow-lg"
            )}
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </nav>
  );
}