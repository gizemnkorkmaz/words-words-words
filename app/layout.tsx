import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../context/ThemeContext";
import { DictionaryProvider } from "@/context/DictionaryContext";

export const metadata: Metadata = {
  title: "Next Dictionary",
  description: "A dictionary app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <DictionaryProvider>
            <Header />
            {children}
            <Footer />
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
