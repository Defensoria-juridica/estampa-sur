import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estampa Sur | Productos personalizados en Puerto Montt",
  description:
    "Estampa Sur ofrece productos personalizados, estampados DTF, poleras, tazones, stickers y más en Puerto Montt. Diseños únicos para regalos, negocios y eventos.",
  keywords: [
    "Estampa Sur",
    "productos personalizados",
    "estampados en Puerto Montt",
    "DTF Puerto Montt",
    "poleras personalizadas",
    "tazones personalizados",
    "stickers personalizados",
    "sublimación Puerto Montt",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}