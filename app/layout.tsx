// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LocationProvider } from "@/contexts/location-context";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pode Pet - Encontre lugares pet-friendly",
  description:
    "Descubra restaurantes, parques e estabelecimentos que aceitam pets perto de você",
  keywords: ["pet-friendly", "cachorro", "gato", "restaurantes", "parques"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        <LocationProvider>
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}