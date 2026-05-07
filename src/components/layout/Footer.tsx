import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { restaurantAddress, restaurantMapsUrl } from "@/data/location";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark py-8 text-white md:py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-5">
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
              <li><Link href="/#carta" className="hover:text-white">Carta</Link></li>
              <li><Link href="/#nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/#galeria" className="hover:text-white">Galería</Link></li>
              <li><Link href="/#contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-lilita text-xl">Redes sociales</h4>
            <ul className="mt-4 space-y-3 font-lato text-gray-300">
              <li>
                <a
                  href="https://www.instagram.com/taqueria_besame_oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                  aria-label="Instagram de Taquería Mexicana Bésame"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/taqueriamexicanabesame/?locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                  aria-label="Facebook de Taquería Mexicana Bésame"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-yellow"
                    fill="currentColor"
                  >
                    <path d="M14 8.5V6.75C14 6.34 14.34 6 14.75 6H17V2h-3a5 5 0 0 0-5 5v1.5H6V13h3v9h5v-9h3.25L18 8.5H14Z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Taqueriabesameoficial/61575641717603/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                  aria-label="Facebook oficial de Taquería Mexicana Bésame"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-yellow"
                    fill="currentColor"
                  >
                    <path d="M14 8.5V6.75C14 6.34 14.34 6 14.75 6H17V2h-3a5 5 0 0 0-5 5v1.5H6V13h3v9h5v-9h3.25L18 8.5H14Z" />
                  </svg>
                  Facebook oficial
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@besametaqueriamexicana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                  aria-label="TikTok de Taquería Mexicana Bésame"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-yellow"
                    fill="currentColor"
                  >
                    <path d="M16.6 5.82a5.94 5.94 0 0 1-1.64-3.58H11.7v13.08a2.76 2.76 0 1 1-2.03-2.66V9.36a6.05 6.05 0 1 0 5.29 5.99V8.74a9.2 9.2 0 0 0 5.38 1.72V7.2a5.91 5.91 0 0 1-3.74-1.38Z" />
                  </svg>
                  TikTok
                </a>
              </li>
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

        <div className="mt-8 border-t border-white/10 pt-5 text-center font-lato text-base text-gray-400 md:text-left">
          © 2026 Taquería Mexicana Bésame ·{" "}
          <a
            href="https://github.com/pentarix1996"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Powered by Antonio Carvajal
          </a>
          <span className="mx-2 text-white/30">·</span>
          <Link href="/aviso-legal" className="transition-colors hover:text-white">
            Aviso legal
          </Link>
          <span className="mx-2 text-white/30">·</span>
          <Link href="/politica-privacidad" className="transition-colors hover:text-white">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
