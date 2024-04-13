import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import {cn} from "@/lib/utils";
import {WelcomeConsoleMessage} from "@/app/[lang]/components/WelcomeConsoleMessage";
import {ReactNode} from "react";

const NotoSans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-caption",
});

export const metadata: Metadata = {
    title: "Mathieu Boucher - Software Engineer",
    description: "High-performance, intuitive software developer, specializing in the web.",
};

export async function generateStaticParams() {
    return [{ lang: 'fr' }, { lang: 'en' }];
}

type RootLayoutProps = {
    children: ReactNode;
    params: {lang: string};
}

export default function RootLayout({
    children,
    params: {lang}
}: Readonly<RootLayoutProps>) {
    return (
        <html lang={lang} className="h-full">
        <WelcomeConsoleMessage/>
        <body className={cn(
            GeistSans.variable,
            GeistMono.variable,
            NotoSans.variable,
            "font-sans h-full bg-background text-foreground"
        )}>{children}</body>
        </html>
    );
}
