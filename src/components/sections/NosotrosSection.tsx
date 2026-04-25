import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function NosotrosSection() {
  return (
    <SectionWrapper id="nosotros" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="font-lilita text-4xl md:text-5xl text-dark mb-6">Nosotros</h2>
          <div className="space-y-4 font-lato text-gray-700 text-lg leading-relaxed">
            <p>
              En <span className="font-bold text-red">Taquería Mexicana Bésame</span>, cada taco 
              cuenta una historia. Somos una familia mexicana que trajo los sabores de nuestra 
              tierra a Aranjuez, creando un rincón donde la tradición y la pasión se unen.
            </p>
            <p>
              Nuestro compromiso es ofrecerte <span className="font-bold text-orange">autenticidad</span>: 
              desde las salsas preparadas con recetas heredadas de generaciones, hasta las 
              tortillas hechas a mano cada mañana.
            </p>
            <p className="font-pacifico text-2xl text-green">
              "La comida mexicana es más que comer, es sentirse en casa."
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.94181188791427!2d-3.604038649108135!3d40.029239083963795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42058ae8cdea97%3A0xa689ddaa30908795!2sRestaurante%20Taquer%C3%ADa%20Mexicana%20B%C3%A9same!5e0!3m2!1ses!2ses!4v1777125841250!5m2!1ses!2ses"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Taquería Mexicana Bésame"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}