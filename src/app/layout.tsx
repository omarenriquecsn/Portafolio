import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Omar Contreras",
  description: "Desarrollador Full-Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="w-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Navbar />
        {children}
      </body>
    </html>
  );
}
