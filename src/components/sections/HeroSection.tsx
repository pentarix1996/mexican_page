"use client";

import Image from "next/image";
import { Bell, Carrot, ChefHat, Heart, Sparkles } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "Hecho al\nmomento" },
  { icon: ChefHat, label: "Ingredientes\nfrescos" },
  { icon: Carrot, label: "Ambiente\nfamiliar" },
];

export function HeroSection() {
  const scrollToCarta = () => {
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#fff8df] pt-[72px] md:pt-[86px]"
      style={{ scrollMarginTop: "86px" }}
    >
      <div className="relative h-[640px] w-full overflow-hidden border-b-4 border-red text-white shadow-[0_16px_45px_rgba(90,24,0,0.18)] max-md:h-[calc(100svh-72px)] max-md:min-h-[610px]">
        <Image
          src="/assets/hero/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center max-md:object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(130,0,26,0.18),transparent_46%,rgba(0,0,0,0.04))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),transparent_20%,rgba(0,0,0,0.08))]" />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(185,0,47,0.18),transparent)] max-md:w-full max-md:bg-[linear-gradient(90deg,rgba(190,0,42,0.54),rgba(241,90,0,0.22)_58%,rgba(0,0,0,0.18))]" />

        <div className="relative z-10 flex h-full items-center px-7 pb-10 pt-12 sm:px-12 md:px-20 lg:pl-[14vw] lg:pr-[7vw]">
          <div className="max-w-[520px]">
            <h1 className="font-lilita text-[58px] leading-[0.9] tracking-[0.004em] text-white drop-shadow-[0_5px_0_rgba(110,0,0,0.08)] sm:text-[72px] lg:text-[82px]">
              Taquería
              <br />
              Mexicana
              <br />
              <span className="font-pacifico text-[64px] font-normal leading-[0.9] text-yellow drop-shadow-none sm:text-[82px] lg:text-[92px]">
                Bésame
              </span>
            </h1>

            <p className="mt-8 max-w-[360px] font-lato text-[21px] font-bold leading-[1.24] text-white sm:text-[24px]">
              Auténtica comida mexicana
              <br />
              en Aranjuez <Heart className="inline h-5 w-5 fill-current align-[-1px]" />
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://besamearanjuez.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[54px] min-w-[166px] items-center justify-center gap-2 rounded-full border-2 border-white bg-red px-7 font-lato text-[15px] font-black text-white shadow-[0_8px_20px_rgba(84,0,0,0.14)] transition-colors hover:bg-orange sm:h-[58px] sm:min-w-[178px]"
              >
                Pedir ahora
                <Bell className="h-4 w-4 fill-current" />
              </a>
              <button
                type="button"
                onClick={scrollToCarta}
                className="h-[54px] min-w-[138px] rounded-full border-2 border-white bg-white/5 px-7 font-lato text-[15px] font-black text-white transition-colors hover:bg-white hover:text-red sm:h-[58px] sm:min-w-[146px]"
              >
                Ver carta
              </button>
            </div>

            <div className="mt-10 grid max-w-[470px] grid-cols-1 gap-4 min-[420px]:grid-cols-3 sm:gap-6">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-yellow text-yellow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="whitespace-pre-line font-lato text-[13px] font-black leading-[1.1]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
