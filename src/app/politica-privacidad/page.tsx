import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Taquería Mexicana Bésame",
  description: "Política de privacidad de la web de Taquería Mexicana Bésame.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="bg-[#fff8df] px-5 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 font-lato text-gray-700 shadow-[0_18px_50px_rgba(91,42,0,0.12)] ring-[6px] ring-white/80 md:p-10">
        <p className="font-pacifico text-lg text-orange">Protección de datos</p>
        <h1 className="mt-2 font-lilita text-4xl text-dark md:text-5xl">Política de privacidad</h1>

        <div className="mt-8 space-y-8 leading-relaxed">
          <section>
            <h2 className="font-lilita text-2xl text-red">1. Responsable del tratamiento</h2>
            <p className="mt-3">
              El responsable del tratamiento de los datos personales relacionados con este sitio web es:
            </p>
            <ul className="mt-4 space-y-2 rounded-2xl bg-[#fff3d7] p-5">
              <li><strong>Responsable:</strong> HIJOS DEL QUINTO SOL</li>
              <li><strong>NIF:</strong> B44866259</li>
              <li><strong>Domicilio fiscal y social:</strong> Calle Stuart, NUM 167 Planta BJ, 28300 Aranjuez (Madrid)</li>
              <li><strong>Email de contacto:</strong> besametaqueriamexicanaoficial@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">2. Datos personales tratados</h2>
            <p className="mt-3">
              Este sitio web tiene carácter informativo y, actualmente, no incluye formularios de
              contacto, sistemas de reserva online, newsletter, registro de usuarios ni funcionalidades
              equivalentes para la recogida directa de datos personales.
            </p>
            <p className="mt-3">
              Si el usuario contacta voluntariamente a través de los medios externos indicados en la
              web, como teléfono, redes sociales o enlaces a plataformas de terceros, el tratamiento de
              los datos podrá quedar sujeto también a las condiciones y políticas de dichas plataformas.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">3. Finalidad del tratamiento</h2>
            <p className="mt-3">
              En caso de que el usuario contacte directamente con el titular por medios externos, los
              datos facilitados podrán utilizarse únicamente para atender la consulta, comunicación o
              solicitud realizada por el usuario.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">4. Base jurídica</h2>
            <p className="mt-3">
              La base jurídica para el tratamiento de los datos facilitados voluntariamente por el
              usuario es el consentimiento del propio usuario y, en su caso, el interés legítimo en
              atender comunicaciones relacionadas con la actividad del establecimiento.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">5. Conservación de los datos</h2>
            <p className="mt-3">
              Los datos personales que pudieran facilitarse por medios externos se conservarán durante el
              tiempo necesario para atender la finalidad para la que fueron proporcionados y, en su caso,
              durante los plazos legalmente exigibles.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">6. Comunicación de datos a terceros</h2>
            <p className="mt-3">
              No se prevé la cesión de datos personales a terceros, salvo obligación legal o cuando sea
              necesario para atender una solicitud del usuario. Los enlaces a redes sociales, Google Maps
              u otros servicios externos se rigen por las políticas de privacidad de dichas plataformas.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">7. Derechos del usuario</h2>
            <p className="mt-3">
              El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad, cuando procedan, enviando una solicitud al email
              de contacto indicado en esta política.
            </p>
            <p className="mt-3">
              Asimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa vigente,
              puede presentar una reclamación ante la Agencia Española de Protección de Datos.
            </p>
          </section>

          <section>
            <h2 className="font-lilita text-2xl text-red">8. Cookies y tecnologías similares</h2>
            <p className="mt-3">
              Actualmente, este sitio web no utiliza cookies analíticas, publicitarias ni de seguimiento.
              Si en el futuro se incorporan herramientas de analítica, publicidad, formularios avanzados
              o tecnologías similares, se actualizará la información legal correspondiente.
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
