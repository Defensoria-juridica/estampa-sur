export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              ESTAMPA SUR
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-300 max-w-sm">
              Productos personalizados con creatividad, dedicación y atención
              cercana para regalos, negocios y emprendimientos en Puerto Montt.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>WhatsApp: +56 9 5601 0398</li>
              <li>Puerto Montt, Chile</li>
              <li>Atención personalizada por mensaje</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>Poleras personalizadas</li>
              <li>Tazones personalizados</li>
              <li>Stickers</li>
              <li>DTF y sublimación</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 Estampa Sur. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}