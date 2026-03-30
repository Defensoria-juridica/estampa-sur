import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Estampa Sur",
  description: "Catálogo de productos personalizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}