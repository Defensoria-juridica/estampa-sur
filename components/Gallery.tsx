export default function Gallery() {
const trabajos = [
  { 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800", 
    title: "Polera personalizada" 
  },
  { 
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800", 
    title: "Tazón personalizado" 
  },
  { 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", 
    title: "Sticker personalizado" 
  },
  { 
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=800", 
    title: "Diseño DTF" 
  },
  { 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800", 
    title: "Regalo personalizado" 
  },
  { 
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800", 
    title: "Trabajo para emprendimiento" 
  },
];
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">
            Nuestros trabajos
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Inspiración para tus pedidos
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
             Algunos ejemplos de productos personalizados hechos con dedicación,
             creatividad y atención a cada detalle.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100"
            >
              <div className="h-72 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}