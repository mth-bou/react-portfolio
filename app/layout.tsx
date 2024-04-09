import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import {WelcomeConsoleMessage} from "@/app/_components/WelcomeConsoleMessage";

const NotoSans = Noto_Sans({
  subsets: ["latin"] ,
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Mathieu Boucher - Software Engineer",
  description: "High-performance, intuitive software developer, specializing in the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
    <WelcomeConsoleMessage />
      <body className={cn(
          GeistSans.variable,
          GeistMono.variable,
          NotoSans.variable,
          "font-sans h-full bg-background text-foreground"
      )}>{children}</body>
    </html>
  );
}
