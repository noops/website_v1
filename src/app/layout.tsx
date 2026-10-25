import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "noops.work | minimalist experiments",
  description: "A clean space for code, thoughts, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased min-h-screen flex flex-col bg-background text-foreground text-sm`}
      >
        <Navbar />
        <main className="flex-grow w-full max-w-2xl mx-auto px-5 pt-12 pb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
