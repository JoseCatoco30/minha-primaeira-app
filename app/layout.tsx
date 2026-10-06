// 1. Imports do Bootstrap e dos Ícones (CSS)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Linha dos ícones
import "./globals.css"

import type { Metadata } from "next";
// 2. Importar a fonte Poppins do Next.js
import { Poppins } from "next/font/google";

// 3. Configurar os pesos e subconjuntos da Poppins
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Cria uma variável CSS se precisar
});

export const metadata: Metadata = {
  title: "Eduford",
  description: "Criado com Next.js, Bootstrap, Icons e Poppins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      {/* 4. Aplicar a classe da fonte Poppins no body */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}