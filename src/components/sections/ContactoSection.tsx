import Image from "next/image";
import React from "react";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurantAddress_sub, restaurantMapsUrl } from "@/data/location";

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
    icon: <MapPin className="h-8 w-8" />,
    title: "Reseñas",
    content: restaurantAddress_sub,
    link: restaurantMapsUrl,
    isMapLink: true,
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Horario",
    schedule: [
      { days: "Lunes - Martes", isClosed: true },
      { days: "Miércoles - Viernes", hours: "20:00 - 23:00" },
      { days: "Sábado - Domingo", hours: "13:00 - 16:00 y 20:00 - 23:00" },
    ],
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Teléfono",
    content: "916 77 37 10",
    link: "tel:+34916773710",
  },
];

export function ContactoSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-white py-10 md:py-16"
      style={{ scrollMarginTop: "86px" }}
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-7 md:mb-12">
          <RevealOnScroll>
            <SectionHeading
              title="Contacto"
              subtitle="Dirección, horario y teléfono siempre visibles para decidir rápido."
            />
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
          {contactInfo.map((item, index) => (
            <RevealOnScroll key={item.title} delay={0.16 + index * 0.08}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-orange/15 bg-[#fff3d7] p-4 text-center shadow-[0_10px_26px_rgba(112,62,0,0.08)] md:rounded-[1.5rem] md:p-7">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red text-white shadow-lg shadow-red/20 md:mb-5 md:h-16 md:w-16">
                  {item.icon}
                </div>
                <h3 className="font-lilita text-2xl text-dark">{item.title}</h3>
                {"schedule" in item && item.schedule ? (
                  <div className="mt-3 space-y-1.5 md:mt-4 md:space-y-2">
                    {item.schedule.map((entry) => (
                      <div key={entry.days} className="font-lato text-sm">
                        <span className="text-gray-500">{entry.days}: </span>
                        {entry.isClosed ? (
                          <span className="font-bold text-red">Cerrado</span>
                        ) : (
                          <span className="font-bold text-gray-800">{entry.hours}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : item.link ? (
                  <a
                    href={item.link}
                    target={item.title === "Teléfono" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1 font-lato font-bold text-gray-800 transition-colors hover:text-red"
                  >
                    {item.content}
                    {item.isMapLink && <ExternalLink className="h-3 w-3" />}
                  </a>
                ) : (
                  <p className="mt-4 font-lato text-gray-700">{item.content}</p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.45}>
          <div className="relative mt-7 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#e7333f_0%,#f26b21_48%,#fa8700_100%)] p-6 text-center text-white shadow-[0_18px_50px_rgba(230,57,70,0.23)] md:mt-12 md:rounded-[2rem] md:p-12">
            <Image
              src="/assets/decor/papel-picado.png"
              alt=""
              width={900}
              height={307}
              className="pointer-events-none absolute -top-16 left-1/2 w-[720px] -translate-x-1/2 opacity-40"
            />
            <div className="relative z-10">
              <h3 className="font-lilita text-3xl md:text-5xl">¡Haz tu pedido!</h3>
              <p className="mx-auto mt-3 max-w-2xl font-lato text-base font-bold text-cream md:mt-4 md:text-lg">
                Pide online y disfruta nuestros tacos en casa, o ven a vivir el ambiente del local.
              </p>
              <ButtonLink
                href="https://besamearanjuez.com/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-7 bg-white text-red shadow-xl hover:bg-cream"
              >
                Pedir ahora
              </ButtonLink>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
