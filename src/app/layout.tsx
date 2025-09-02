import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Store",
  description: "Seu e-commerce de calçados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <div className="px-5 md:px-[100px]">
          <Header />
        </div>
        <main className="px-5 md:px-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
