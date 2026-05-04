import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { restaurantAddress, restaurantMapsUrl } from "@/data/location";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function NosotrosSection() {
  return (
    <SectionWrapper id="nosotros" className="border-b border-red/30 bg-white">
      <SectionHeading
        title="Nosotros"
        subtitle="Un pedacito de México en Aranjuez"
        className="mb-12"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="space-y-5 font-lato text-lg leading-relaxed text-gray-700">
            <p>
              En <span className="font-bold text-red">Taquería Mexicana Bésame</span>, cada taco
              cuenta una historia. Somos una familia mexicana que trajo los sabores de nuestra
              tierra a Aranjuez, creando un rincón donde tradición, color y barrio se encuentran.
            </p>
            <p>
              Nuestro compromiso es ofrecerte{" "}
              <span className="font-bold text-orange">autenticidad</span>: salsas con carácter,
              tortillas, guacamole en la mesa y un ambiente que te transporta directamente a
              México.
            </p>
          </div>

          <blockquote className="relative mt-9 rounded-[1.5rem] border-l-8 border-teal bg-[#fff3d7] p-6 shadow-[0_14px_35px_rgba(112,62,0,0.08)]">
            <Sparkles className="absolute -left-4 -top-4 h-9 w-9 rounded-full bg-teal p-2 text-white" />
            <p className="font-pacifico text-2xl leading-relaxed text-green">
              La comida mexicana es más que comer, es sentirse en casa.
            </p>
          </blockquote>

          <a
            href={restaurantMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-dark px-5 py-4 font-lato font-bold text-white shadow-xl transition-colors hover:bg-red"
          >
            <MapPin className="h-5 w-5 text-yellow" />
            {restaurantAddress}
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rotate-2 rounded-[2rem] bg-gradient-to-br from-red/18 via-orange/18 to-teal/18" />
          <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-[#fff3d7] bg-white shadow-[0_28px_80px_rgba(26,26,26,0.16)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/galeria/local-1.jpg"
                alt="Interior real de Taquería Mexicana Bésame"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 650px, 100vw"
              />
            </div>
          </div>
          <Image
            src="/assets/decor/flower-cluster.png"
            alt=""
            width={360}
            height={180}
            className="pointer-events-none absolute -bottom-14 -right-7 w-64 drop-shadow-2xl"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
