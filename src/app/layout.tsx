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
        <html lang="fa" className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary-foreground" dir="rtl" suppressHydrationWarning>
            <body className={`${AppFont.variable} font-sans antialiased`}>
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
 {/* to check speed and performance */}
//  <head>
//  <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
//  {/* rest of your scripts go under */}
// </head>