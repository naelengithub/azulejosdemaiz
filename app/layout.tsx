import type { Metadata } from "next";
import { Jost, Philosopher } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust to your weights
  variable: "--font-jost", // optional CSS variable name
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust to your weights
  variable: "--font-philosopher",
});

export const metadata: Metadata = {
  title: "Azulejos de Maíz",
  description: "Galletas de maíz azul para toda la familia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${philosopher.variable}`}>
      <body className="font-jost">{children}</body>
    </html>
  );
}
