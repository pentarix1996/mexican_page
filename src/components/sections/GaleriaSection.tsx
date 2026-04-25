"use client";

import { motion } from "framer-motion";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const galleryItems = [
  { id: "local-1", alt: "Interior del restaurante", title: "Nuestro Espacio" },
  { id: "local-2", alt: "Exterior del restaurante", title: "Bésame" },
  { id: "comida-1", alt: "Tacos deliciosos", title: "Nuestros Tacos" },
  { id: "comida-2", alt: "Comida mexicana", title: "Sabores" },
  { id: "comida-3", alt: "Plato típico mexicano", title: "Tradición" },
  { id: "comida-4", alt: "Especialidad de la casa", title: "Chef's Choice" },
  { id: "calavera-1", alt: "Calavera decorativa", title: "Día de los Muertos" },
  { id: "calavera-2", alt: "Calavera mexicana", title: "Tradición" },
];

// Placeholder paths - user will replace with real images
const placeholderPaths: Record<string, string> = {
  "local-1": "/assets/galeria/local-1.jpg",
  "local-2": "/assets/galeria/local-2.jpg",
  "comida-1": "/assets/galeria/comida-1.jpg",
  "comida-2": "/assets/galeria/comida-2.jpg",
  "comida-3": "/assets/galeria/comida-3.jpg",
  "comida-4": "/assets/galeria/comida-4.jpg",
  "calavera-1": "/assets/galeria/calavera-1.webp",
  "calavera-2": "/assets/galeria/calavera-2.webp",
};

export function GaleriaSection() {
  return (
    <SectionWrapper id="galeria" className="bg-cream">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-lilita text-4xl md:text-5xl text-dark mb-4">Galería</h2>
        <p className="font-lato text-gray-600 text-lg">
          Imágenes de nuestro restaurante y platos
        </p>
      </div>

      {/* Image Grid - 2 cols mobile, 4 cols desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <ImageCard
              src={placeholderPaths[item.id]}
              alt={item.alt}
              title={item.title}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}