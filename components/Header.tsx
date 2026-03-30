export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-900">
            Estampa Sur
          </h2>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black transition">
            Inicio
          </a>

          <a href="#" className="hover:text-black transition">
            Catálogo
          </a>

          <a href="#" className="hover:text-black transition">
            Galería
          </a>

          <a href="#" className="hover:text-black transition">
            Contacto
          </a>
        </nav>

        {/* Botón WhatsApp */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            WhatsApp
          </button>
        </div>

      </div>
    </header>
  );
}