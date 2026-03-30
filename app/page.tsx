import Link from "next/link";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import WhatsAppButton from "../components/WhatsAppButton";

const whatsappMessage = encodeURIComponent(
  "Hola, me interesa un producto personalizado de Estampa Sur. Quisiera más información."
);

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-cyan-50">
        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Diseños únicos para regalos, negocios y emprendimientos
          </div>
          
          <div className="mb-6 text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          ESTAMPA SUR
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Personalizamos tus{" "}
            <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              ideas
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Poleras, tazones, stickers, DTF y productos personalizados con un
            estilo creativo, atención cercana y soluciones a medida en Puerto
            Montt.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#catalogo"
              className="rounded-xl bg-black px-7 py-3 text-white shadow-md transition hover:scale-105 hover:bg-gray-800"
            >
              Ver Catálogo
            </a>

            <a
              href={`https://wa.me/56923931601?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-7 py-3 font-medium text-white shadow-md transition hover:scale-105 hover:bg-green-600"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Productos Personalizados</h2>
          <p className="mt-3 text-gray-600">
            Productos personalizados con colores, identidad y creatividad.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-pink-100 bg-pink-50 p-6 shadow-sm">
            <div className="text-3xl">👕</div>
            <h3 className="mt-4 text-xl font-semibold">Poleras</h3>
            <p className="mt-2 text-gray-600">
              Diseños personalizados para uso personal, regalos o negocios.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6 shadow-sm">
            <div className="text-3xl">☕</div>
            <h3 className="mt-4 text-xl font-semibold">Tazones</h3>
            <p className="mt-2 text-gray-600">
              Ideas originales para fechas especiales, emprendimientos y
              recuerdos.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
            <div className="text-3xl">🎨</div>
            <h3 className="mt-4 text-xl font-semibold">DTF y sublimación</h3>
            <p className="mt-2 text-gray-600">
              Soluciones versátiles para estampar con buen acabado y gran
              presencia visual.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 shadow-sm">
            <div className="text-3xl">🏷️</div>
            <h3 className="mt-4 text-xl font-semibold">Stickers y más</h3>
            <p className="mt-2 text-gray-600">
              Opciones creativas para personalizar productos, empaques y
              detalles especiales.
            </p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Productos destacados
            </h2>
            <p className="mt-3 text-gray-600">
              Una muestra de lo que podemos personalizar para ti.
            </p>
          </div>

          <div className="mt-10">
            <Products />
            <Gallery />
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              ¿Por qué elegir Estampa Sur?
            </h2>
            <p className="mt-4 text-gray-600">
              Combinamos creatividad, atención personalizada y productos que
              ayudan a dar vida a tus ideas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Atención cercana</h3>
              <p className="mt-2 text-sm text-gray-600">
                Te orientamos según lo que necesitas y el tipo de producto.
              </p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Diseños personalizados</h3>
              <p className="mt-2 text-sm text-gray-600">
                Cada pedido puede adaptarse a tu idea, marca o estilo.
              </p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">Variedad de productos</h3>
              <p className="mt-2 text-sm text-gray-600">
                Desde regalos hasta productos para negocios y eventos.
              </p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">En Puerto Montt</h3>
              <p className="mt-2 text-sm text-gray-600">
                Presencia local para una atención más directa y confiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Tienes una idea? Nosotros la hacemos realidad
          </h2>
          <p className="mt-4 text-gray-300">
            Escríbenos por WhatsApp y conversemos sobre tu diseño, regalo o
            pedido personalizado.
          </p>

          <a
            href={`https://wa.me/56923931601?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-3 font-medium text-white transition hover:bg-green-600"
          >
            Solicitar información
          </a>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}