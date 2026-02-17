import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <header className="fixed top-0 w-full z-50 glass border-b border-border/40">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              noops.work
            </Link>
            <nav className="flex items-center gap-8 text-sm font-medium text-muted">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/musings" className="hover:text-primary transition-colors">Musings</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="border-t border-border">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} noops.work
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
