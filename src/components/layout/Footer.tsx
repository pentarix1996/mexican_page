import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { restaurantAddress, restaurantMapsUrl } from "@/data/location";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark py-8 text-white md:py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/logo.webp"
              alt="Taquería Mexicana Bésame"
              width={64}
              height={64}
              className="mb-4 rounded-lg bg-white"
            />
            <p className="font-lilita text-2xl">Taquería Mexicana Bésame</p>
            <p className="mt-2 font-pacifico text-yellow">
              Auténtica comida mexicana en Aranjuez
            </p>
          </div>

          <div>
            <h4 className="font-lilita text-xl">Enlaces</h4>
            <ul className="mt-4 space-y-2 font-lato text-gray-300">
              <li><a href="#carta" className="hover:text-white">Carta</a></li>
              <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
              <li><a href="#galeria" className="hover:text-white">Galería</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lilita text-xl">Contacto</h4>
            <ul className="mt-4 space-y-3 font-lato text-gray-300">
              <li className="flex gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                <a
                  href={restaurantMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {restaurantAddress}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-yellow" />
                <a href="tel:+34916773710" className="hover:text-white">916 77 37 10</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-lilita text-xl">Horario</h4>
            <ul className="mt-4 space-y-2 font-lato text-gray-300">
              <li className="flex gap-2">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                Lunes - Martes: Cerrado
              </li>
              <li>Miércoles - Viernes: 20:00 - 23:00</li>
              <li>Sábado - Domingo: 13:00 - 16:00 y 20:00 - 23:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center font-lato text-sm text-gray-400 md:text-left">
          © 2026 Taquería Mexicana Bésame ·{" "}
          <a
            href="https://github.com/pentarix1996"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Powered by Antonio Carvajal
          </a>
        </div>
      </div>
    </footer>
  );
}
