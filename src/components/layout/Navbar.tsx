"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";

const navLinks = [
  { href: "/#carta", label: "Carta" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-[#ecd8af] bg-[#fff8df]/96 shadow-[0_4px_18px_rgba(58,32,0,0.08)] backdrop-blur md:h-[86px]">
      <div className="mx-auto grid h-full max-w-[1320px] grid-cols-[110px_1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[180px_1fr_180px] lg:px-10">
        <Link href="/" className="inline-flex h-full items-center">
          <Image
            src="/assets/logo.webp"
            alt="Taquería Mexicana Bésame"
            width={104}
            height={69}
            priority
            className="h-auto max-h-[58px] w-[84px] object-contain md:max-h-[66px] md:w-[100px]"
          />
        </Link>

        <div className="hidden items-center justify-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-[15px] font-black text-black transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://besamearanjuez.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end rounded-full bg-red px-4 py-2.5 font-lato text-[13px] font-black text-white shadow-[0_10px_24px_rgba(230,57,70,0.22)] transition-colors hover:bg-orange md:px-7 md:py-3 md:text-[15px]"
        >
          <span className="inline-flex items-center gap-2">
            Pedir ahora
            <Bell className="h-4 w-4 fill-current" />
          </span>
        </a>
      </div>
    </nav>
  );
}
