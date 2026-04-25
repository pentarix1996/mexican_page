import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import React from "react";

const contactInfo: Array<{
  icon: React.ReactNode;
  title: string;
  content?: string;
  link?: string;
  schedule?: Array<{
    days: string;
    hours?: string;
    isClosed?: boolean;
  }>;
}> = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dirección",
    content: "Calle de Stuart 167, Aranjuez",
    link: "https://maps.app.goo.gl/nUNQTRd2zXcNZEKD6",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horario",
    schedule: [
      { days: "Lunes - Martes", isClosed: true },
      { days: "Miércoles - Viernes", hours: "20:00 - 23:00" },
      { days: "Sábado - Domingo", hours: "13:00 - 16:00 y 20:00 - 23:00" },
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
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
                  className="font-lato text-gray-700 hover:text-red transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="font-lato text-gray-700 whitespace-pre-line">{item.content}</p>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}