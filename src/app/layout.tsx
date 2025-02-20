import type { Metadata } from "next";

import AppFont from "@/constants/localFonts";
import { siteConfig } from "@/config/site";
import { Footer, Header } from "@/components/common";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${AppFont.variable} font-sans antialiased`}>
                <Header />
                <main className="container min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
