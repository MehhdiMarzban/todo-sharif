import type { Metadata } from "next";

import AppFont from "@/constants/localFonts";
import { siteConfig } from "@/config/site";
import { Footer, Header } from "@/components/common";
import "@/styles/globals.css";
import AppProviders from "@/components/providers";

export const metadata: Metadata = {
    title: {
        template: `%s | ${siteConfig.title}`,
        default: siteConfig.title,
    },
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
                <AppProviders>
                    <div className="min-h-screen flex flex-col justify-between">
                        <Header />
                        <main className="container py-4">{children}</main>
                        <Footer />
                    </div>
                </AppProviders>
            </body>
        </html>
    );
}
