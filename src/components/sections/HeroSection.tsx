"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Utensils, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  const scrollToCarta = () => {
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red via-orange to-red overflow-hidden">
      {/* Mexican pattern background - subtle calaveras, chiles, flowers */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="mexicanPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Calavera */}
              <circle cx="20" cy="15" r="10" fill="white" opacity="0.3"/>
              <circle cx="16" cy="13" r="3" fill="#E63946"/>
              <circle cx="24" cy="13" r="3" fill="#E63946"/>
              <rect x="14" y="20" width="12" height="5" fill="white" opacity="0.3" rx="1"/>
              <line x1="16" y1="20" x2="16" y2="25" stroke="#E63946" strokeWidth="0.5"/>
              <line x1="20" y1="20" x2="20" y2="25" stroke="#E63946" strokeWidth="0.5"/>
              <line x1="24" y1="20" x2="24" y2="25" stroke="#E63946" strokeWidth="0.5"/>

              {/* Chile */}
              <path d="M60 50 Q65 40 70 50 Q65 55 60 50" fill="white" opacity="0.4"/>

              {/* Nopal */}
              <ellipse cx="10" cy="60" rx="8" ry="5" fill="white" opacity="0.2"/>
              <circle cx="6" cy="58" r="1" fill="white" opacity="0.3"/>
              <circle cx="14" cy="58" r="1" fill="white" opacity="0.3"/>
              <circle cx="10" cy="62" r="1" fill="white" opacity="0.3"/>

              {/* Flower */}
              <circle cx="60" cy="20" r="4" fill="white" opacity="0.25"/>
              <circle cx="60" cy="20" r="2" fill="#FCBF49" opacity="0.5"/>
              <circle cx="56" cy="18" r="2" fill="white" opacity="0.25"/>
              <circle cx="64" cy="18" r="2" fill="white" opacity="0.25"/>
              <circle cx="56" cy="22" r="2" fill="white" opacity="0.25"/>
              <circle cx="64" cy="22" r="2" fill="white" opacity="0.25"/>

              {/* Small taco */}
              <path d="M40 70 Q45 65 50 70 Q45 75 40 70" fill="white" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#mexicanPattern)" />
        </svg>
      </div>



      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16 md:pt-24">
        {/* Logo - integrated card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl">
            <Image
              src="/assets/logo.webp"
              alt="Taquería Mexicana Bésame"
              width={150}
              height={150}
              className="mx-auto rounded-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-lilita text-5xl md:text-7xl text-white mb-3"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
        >
          Taquería Mexicana Bésame
        </motion.h1>

        {/* Tagline - better contrast */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-lato text-cream text-xl md:text-2xl mb-8 font-medium"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
        >
          Auténtica comida mexicana en el corazón de Aranjuez
        </motion.p>

        {/* Quick info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="bg-white/16 backdrop-blur-sm text-white px-[14px] py-2 rounded-full text-sm font-lato flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Aranjuez
          </span>
          <span className="bg-white/16 backdrop-blur-sm text-white px-[14px] py-2 rounded-full text-sm font-lato flex items-center gap-1.5">
            <Utensils className="w-4 h-4" />
            Come aquí / Recoge
          </span>
          <span className="bg-white/16 backdrop-blur-sm text-white px-[14px] py-2 rounded-full text-sm font-lato flex items-center gap-1.5">
            <Truck className="w-4 h-4" />
            Delivery disponible
          </span>
        </motion.div>

        {/* CTA Buttons - better hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink
            href="https://besamearanjuez.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="order-1 sm:order-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor: "#fff4df", color: "#e7333f" }}
          >
            ¡Pedir Ahora!
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            size="lg"
            onClick={scrollToCarta}
            className="border-2 border-white/60 text-white hover:bg-white hover:text-red backdrop-blur-sm order-2 sm:order-1"
          >
            Ver Carta
          </ButtonLink>
        </motion.div>
      </div>

      {/* Decorative calavera image */}
      <div className="absolute bottom-10 right-10 opacity-30 hidden lg:block w-40 h-40">
        <Image
          src="/assets/galeria/calavera-2.webp"
          alt="Decoración mexicana"
          fill
          className="object-contain"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}