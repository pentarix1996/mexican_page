"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DecorativePattern } from "@/components/ui/DecorativePattern";

export function PedirSection() {
  return (
    <SectionWrapper id="pedir" className="relative overflow-hidden">
      {/* Background with decorative pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red to-orange" />
      <div className="absolute inset-0 opacity-20">
        <DecorativePattern />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-lilita text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            ¡Haz tu pedido!
          </h2>
          <p className="font-lato text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Orderna tu comida favorita y la recopilamos para que la recojas en nuestro restaurante.
          </p>
          <ButtonLink
            href="https://besamearanjuez.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-white text-red hover:bg-yellow hover:text-dark"
          >
            ¡Pedir Ahora en besamearanjuez.com!
          </ButtonLink>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}