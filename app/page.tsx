import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
            Estampa Sur
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Catálogo de productos personalizados
          </p>

          <button className="mt-6 rounded-lg bg-black px-6 py-3 text-white">
            Ver Catálogo
          </button>
        </div>
      </section>

      <FeaturedProducts />
    </main>
  );
}