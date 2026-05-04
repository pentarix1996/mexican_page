"use client";

import Image from "next/image";
import { useState } from "react";
import menuData from "@/data/menu.json";
import { ButtonLink } from "@/components/ui/Button";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Tag = "picante" | "vegetariano" | "recomendado";

export function CartaSection() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);
  const activeItems =
    menuData.categories.find((category) => category.id === activeCategory)?.items ?? [];

  return (
    <section
      id="carta"
      className="relative overflow-hidden border-b border-red/30 bg-[#fff8df] py-12 md:py-16"
      style={{ scrollMarginTop: "92px" }}
    >
      <Image
        src="/assets/decor/floral-corner-cropped.png"
        alt=""
        width={1194}
        height={1080}
        className="pointer-events-none absolute -left-3 top-0 hidden w-40 opacity-90 md:block lg:w-52"
      />
      <Image
        src="/assets/decor/floral-corner-right.png"
        alt=""
        width={1194}
        height={1080}
        className="pointer-events-none absolute -right-3 top-0 hidden w-40 opacity-90 md:block lg:w-52"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          title="Nuestra Carta"
          subtitle="Sabores auténticos de México en cada bocado"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {menuData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-5 py-2 font-lato text-[13px] font-black transition-all ${
                activeCategory === category.id
                  ? "border-red bg-red text-white shadow-[0_8px_20px_rgba(230,57,70,0.22)]"
                  : "border-orange/55 bg-white text-dark hover:border-red hover:text-red"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 min-[1500px]:grid-cols-4">
          {activeItems.map((item, index) => (
            <MenuCard
              key={`${activeCategory}-${item.name}-${index}`}
              name={item.name}
              description={item.description}
              price={item.price}
              image={(item as { image?: string }).image}
              tags={(item as { tags?: Tag[] }).tags}
              badge={activeCategory === "top_ventas" && index === 0 ? "★ Top" : undefined}
            />
          ))}
        </div>

        <div className="mt-9 text-center">
          <ButtonLink
            href="https://besamearanjuez.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red px-7 py-3 text-white shadow-[0_10px_24px_rgba(230,57,70,0.24)] hover:bg-orange"
          >
            Ver carta completa
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
