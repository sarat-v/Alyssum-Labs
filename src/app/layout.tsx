import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import { AnalyticsLoader } from "@/components/layout/AnalyticsLoader";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://alyssum-labs.vercel.app",
  ),
  icons: {
    icon: [
      { url: "/logo-mark.png", type: "image/png", sizes: "256x256" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/logo-mark.png"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — Where Intelligence Meets Consequence`,
    description: site.description,
    images: [{ url: "/images/hero-core.png", width: 1200, height: 630, alt: site.name }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: "https://alyssumlabs.com",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      streetAddress: site.registeredOfficeAddress.join(", "),
    },
    identifier: site.uen || undefined,
    sameAs: site.linkedinCompanyUrl ? [site.linkedinCompanyUrl] : [],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-base text-text-primary">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AnalyticsLoader />
        <CookieConsentBanner />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
