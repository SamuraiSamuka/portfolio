import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["500", "400"] });

export const metadata: Metadata = {
  title: "Samuel Carvalho",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${outfit.className} relative mx-auto h-full px-8 md:max-w-screen-md lg:max-w-screen-lg`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
