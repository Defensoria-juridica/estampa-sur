import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Productos Destacados
        </h2>

        <p className="text-gray-600 text-center mt-2">
          Algunos de nuestros productos personalizados
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-48 rounded-lg"></div>

              <h3 className="mt-4 font-semibold text-lg">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}