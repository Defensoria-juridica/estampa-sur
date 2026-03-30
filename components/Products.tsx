export default function Products() {
  const productos = [
    {
      title: "Poleras Personalizadas",
      description: "Diseños únicos para regalos, equipos, negocios y emprendimientos.",
      image: "/images/polera.jpg",
    },
    {
      title: "Tazones Personalizados",
      description: "Tazones con frases, logos, fotos y diseños especiales.",
      image: "/images/tazon.jpg",
    },
    {
      title: "Stickers",
      description: "Stickers personalizados para marcas, eventos, regalos y packaging.",
      image: "/images/stickers.jpg",
    },
    {
      title: "DTF Textil",
      description: "Impresiones DTF con gran calidad para prendas y proyectos personalizados.",
      image: "/images/dtf.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">
            Nuestros productos
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Lo que personalizamos para ti
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Creamos productos personalizados con estilo, dedicación y detalles
            pensados para regalos, negocios y emprendimientos.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  {producto.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-6">
                  {producto.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}