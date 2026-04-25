import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import React from "react";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const contactInfo: Array<{
  icon: React.ReactNode;
  title: string;
  content?: string;
  link?: string;
  isMapLink?: boolean;
  schedule?: Array<{
    days: string;
    hours?: string;
    isClosed?: boolean;
  }>;
}> = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Dirección",
    content: "Calle de Stuart 167, Aranjuez",
    link: "https://maps.app.goo.gl/nUNQTRd2zXcNZEKD6",
    isMapLink: true,
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horario",
    schedule: [
      { days: "Lunes - Martes", isClosed: true },
      { days: "Miércoles - Viernes", hours: "20:00 - 23:00" },
      { days: "Sábado - Domingo", hours: "13:00 - 16:00 y 20:00 - 23:00" },
    ],
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Teléfono",
    content: "916 77 37 10",
    link: "tel:+34916773710",
  },
];

export function ContactoSection() {
  return (
    <SectionWrapper id="contacto" className="bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <RevealOnScroll>
          <h2 className="font-lilita text-4xl md:text-5xl text-dark mb-4">Contacto</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="font-lato text-gray-600 text-lg">
            Ven a visitarnos o contáctanos
          </p>
        </RevealOnScroll>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, index) => (
          <RevealOnScroll key={item.title} delay={0.2 + index * 0.1}>
            <div className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/10 text-red mb-4">
                {item.icon}
              </div>
              <h3 className="font-lilita text-xl text-dark mb-3">{item.title}</h3>
              {"schedule" in item && item.schedule ? (
                <div className="space-y-2">
                  {item.schedule.map((entry, i) => (
                    <div key={i} className="font-lato text-sm">
                      <span className="text-gray-500">{entry.days}: </span>
                      {entry.isClosed ? (
                        <span className="text-red font-semibold">Cerrado</span>
                      ) : (
                        <span className="text-gray-700">{entry.hours}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : item.link ? (
                <a
                  href={item.link}
                  target={item.title === "Teléfono" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="font-lato text-gray-700 hover:text-red transition-colors inline-flex items-center gap-1"
                >
                  {item.content}
                  {item.isMapLink && <ExternalLink className="w-3 h-3" />}
                </a>
              ) : (
                <p className="font-lato text-gray-700 whitespace-pre-line">{item.content}</p>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* CTA Block */}
      <RevealOnScroll delay={0.5}>
        <div className="mt-12 text-center bg-gradient-to-br from-red to-orange rounded-2xl p-8 text-white">
          <h3 className="font-lilita text-2xl md:text-3xl mb-4">¡Haz tu pedido!</h3>
          <p className="font-lato text-lg mb-6 text-cream/90">
            Haz tu pedido online y disfruta de nuestros tacos en casa
          </p>
          <ButtonLink
            href="https://besamearanjuez.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-white text-red hover:bg-cream shadow-xl"
          >
            Pedir ahora
          </ButtonLink>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}