import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Luis Valverde Rios | Full-Stack Developer",
  description:
    "Premium developer portfolio for Luis Valverde Rios, a Full-Stack Developer specialized in .NET, modern frontend architecture, and scalable applications.",
  keywords: [
    "Luis Valverde Rios",
    "Full-Stack Developer",
    ".NET Specialist",
    "Next.js Portfolio",
    "React Developer"
  ],
  authors: [{ name: "Luis Valverde Rios" }],
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Luis Valverde Rios | Full-Stack Developer",
    description:
      "Elegant multilingual portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and JSON-driven content.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
