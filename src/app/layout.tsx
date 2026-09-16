import type { Metadata, Viewport } from "next";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";

export const metadata: Metadata = {
  title: "hans lacuesta : developer, self-published",
  description:
    "Portfolio of Hans Lacuesta, full-stack developer. Shipping resilient webapps for institutions: Clinicka, Phoenix E-Wallet, Glasshill Pansol, Soul Scraper, OCTANE, Memoir.",
  authors: [{ name: "Hans Lacuesta" }],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hans Lacuesta",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Hans Lacuesta",
    "Full-Stack Developer",
    "Gordon College",
    "BSIT",
    "React",
    "Next.js",
    "TypeScript",
    "Brutalist Portfolio",
    "PWA",
  ],
  openGraph: {
    title: "hans lacuesta : developer, self-published",
    description:
      "A full-stack developer based in the Philippines shipping systems institutions rely on.",
    type: "website",
    locale: "en_PH",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#AAB694" },
    { media: "(prefers-color-scheme: dark)", color: "#121311" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;600;700;800;900&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="antialiased min-h-screen relative selection:bg-[#cbff4d] selection:text-[#0a0a0a]">
        <PwaRegister />
        <a
          href="#main"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#cbff4d] focus:text-[#0a0a0a] focus:px-4 focus:py-2 focus:font-mono focus:font-bold focus:border-2 focus:border-[#0a0a0a]"
        >
          Skip to main content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
