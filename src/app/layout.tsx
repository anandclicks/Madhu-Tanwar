import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import "lenis/dist/lenis.css";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Madhu Tanwar | Dietitian & Dermatologist",
    template: "%s | Dr. Madhu Tanwar",
  },
  description:
    "Dr. Madhu Tanwar — dietitian and dermatologist offering personalized nutrition, medical skin care, and dual-specialty consultations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
