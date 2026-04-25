import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pacifico, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lilitaOne = localFont({
  src: "../../public/fonts/LilitaOne-Regular.ttf",
  variable: "--font-lilita",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Taquería Mexicana Bésame | Aranjuez",
  description: "Auténtica comida mexicana en el corazón de Aranjuez. Tacos, burritos, quesadillas y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${lilitaOne.variable} ${pacifico.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}