"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ButtonLink } from "@/components/ui/Button";

type Tag = "picante" | "vegetariano" | "recomendado";

export function CartaSection() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

  return (
    <SectionWrapper id="carta" className="bg-cream">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-lilita text-4xl md:text-5xl text-dark mb-4">Nuestra Carta</h2>
        <p className="font-lato text-gray-600 text-lg">
          Sabores auténticos de México en cada bocado
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {menuData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full font-lato font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-red text-white"
                : "bg-white text-dark hover:bg-red/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {menuData.categories
            .find((c) => c.id === activeCategory)
            ?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  tags={item.tags as Tag[]}
                />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA at the end */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <p className="font-lilita text-2xl text-dark mb-4">¿Ya sabes qué pedir?</p>
        <ButtonLink
          href="https://besamearanjuez.com/"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="bg-red text-white hover:bg-orange shadow-lg"
        >
          ¡Pedir Ahora!
        </ButtonLink>
      </motion.div>
    </SectionWrapper>
  );
}