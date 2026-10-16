import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Newsreader } from "next/font/google";

import "./globals.css";

import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/content/site";
import {
  getOrganizationStructuredData,
  getPersonStructuredData,
  getWebsiteStructuredData,
} from "@/lib/structured-data";

const bodyFont = Archivo({
  subsets: ["latin"],
  variable: "--font-body-family",
});

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: "400",
});

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif-family",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/horizon-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/horizon-favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/horizon-apple-touch-180.png", sizes: "180x180", type: "image/png" }],
  },
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | Eryze Studio",
  },
  description: siteConfig.defaultDescription,
  keywords: [
    "Eryze Studio",
    "digital studio",
    "websites",
    "platforms",
    "internal systems",
    "workflow design",
    "digital systems",
    "Anastasia Yakimovska",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.name,
    type: "website",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} ${serifFont.variable} antialiased`}>
        <ThemeProvider>
          <JsonLd
            data={[
              getOrganizationStructuredData(),
              getPersonStructuredData(),
              getWebsiteStructuredData(),
            ]}
          />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
