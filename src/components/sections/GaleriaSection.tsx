"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

export function GaleriaSection() {
  return (
    <section
      id="galeria"
      className="relative hidden overflow-hidden border-b border-red/30 bg-[#fff8df] py-16 md:block"
      style={{ scrollMarginTop: "92px" }}
    >
      <Image
        src="/assets/decor/floral-corner-cropped.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-3 top-0 w-40 opacity-95 lg:w-52"
      />
      <Image
        src="/assets/decor/floral-corner-right.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -right-3 top-0 w-40 opacity-95 lg:w-52"
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <SectionHeading
          title="Galería"
          subtitle="Imágenes de nuestro restaurante y platos"
          className="mb-9"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.28 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-[0_12px_34px_rgba(91,42,0,0.14)] ring-[6px] ring-white/80"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
