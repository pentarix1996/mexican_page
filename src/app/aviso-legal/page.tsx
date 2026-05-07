import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal | Taquería Mexicana Bésame",
  description: "Aviso legal de la web de Taquería Mexicana Bésame.",
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-[#fff8df] px-5 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 font-lato text-gray-700 shadow-[0_18px_50px_rgba(91,42,0,0.12)] ring-[6px] ring-white/80 md:p-10">
        <p className="font-pacifico text-lg text-orange">Información legal</p>
        <h1 className="mt-2 font-lilita text-4xl text-dark md:text-5xl">Aviso legal</h1>

        <div className="mt-8 space-y-8 leading-relaxed">
          <section>
            <h2 className="font-lilita text-2xl text-red">1. Titularidad del sitio web</h2>
            <p className="mt-3">
              En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que
              el presente sitio web es titularidad de:
            </p>
            <ul className="mt-4 space-y-2 rounded-2xl bg-[#fff3d7] p-5">
              <li><strong>Titular:</strong> HIJOS DEL QUINTO SOL</li>
              <li><strong>NIF:</strong> B44866259</li>
              <li><strong>Domicilio fiscal y social:</strong> Calle Stuart, NUM 167 Planta BJ, 28300 Aranjuez (Madrid)</li>
              <li><strong>Teléfono de contacto:</strong> 916 77 37 10</li>
              <li><strong>Email de contacto:</strong> besametaqueriamexicanaoficial@gmail.com</li>
              <li><strong>Nombre comercial:</strong> Taquería Mexicana Bésame</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">2. Objeto</h2>
            <p className="mt-3">
              Este sitio web tiene carácter meramente informativo y muestra información sobre la
              actividad, ubicación, horarios, carta, imágenes y canales de contacto de Taquería Mexicana
              Bésame.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">3. Precios de la carta</h2>
            <p className="mt-3">
              Los precios publicados, en su caso, incluyen los impuestos aplicables salvo indicación
              expresa en contrario y tienen carácter meramente informativo.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">4. Condiciones de uso</h2>
            <p className="mt-3">
              El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación
              de este aviso legal. El usuario se compromete a hacer un uso adecuado del sitio web y a no
              emplearlo para actividades ilícitas o contrarias a la buena fe, el orden público o la
              normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">5. Propiedad intelectual e industrial</h2>
            <p className="mt-3">
              Los contenidos de este sitio web, incluyendo textos, imágenes, diseño, logotipos,
              elementos gráficos y código fuente, están protegidos por la normativa de propiedad
              intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin
              autorización expresa del titular, salvo en los casos permitidos legalmente.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">6. Responsabilidad</h2>
            <p className="mt-3">
              El titular procura que la información publicada sea correcta y esté actualizada, pero no
              garantiza la inexistencia de errores u omisiones. El titular no se hace responsable de los
              daños derivados del uso de la información contenida en este sitio web ni de los enlaces a
              sitios externos de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">7. Legislación aplicable</h2>
            <p className="mt-3">
              Este aviso legal se rige por la legislación española. Para cualquier controversia que
              pudiera derivarse del acceso o uso del sitio web, las partes se someterán a los juzgados y
              tribunales que correspondan conforme a la normativa aplicable.
            </p>
          </section>

          <p className="rounded-2xl border border-orange/20 bg-[#fff8df] p-5 text-sm text-gray-600">
            Última actualización: 7 de mayo de 2026
          </p>
        </div>
      </article>
    </main>
  );
}
