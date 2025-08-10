import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer";
import Script from "next/script";

// Fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const mainFont = Inter({ subsets: ["latin"] });

// SEO + Metadata
export const metadata: Metadata = {
  title: {
    default: "Icarus Roc – Criação de Plataformas e Experiências Digitais",
    template: "%s | Icarus Roc",
  },
  description:
    "A Icarus Roc é especialista na criação de sites, plataformas e experiências digitais únicas. Transformamos ideias em presença online marcante e funcional.",
  keywords: [
    "Icarus Roc",
    "criação de sites",
    "plataformas digitais",
    "landing pages",
    "desenvolvimento web",
    "Next.js",
    "design de interfaces",
  ],
  authors: [{ name: "Icarus Roc" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Icarus Roc – Criação de Plataformas e Experiências Digitais",
    description:
      "Transformamos ideias em experiências digitais marcantes. Sites, plataformas e automações personalizadas com performance e design impecável.",
    url: "https://icarusroc.com",
    siteName: "Icarus Roc",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Icarus Roc – Agência de Criação Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Icarus Roc – Criação de Plataformas e Experiências Digitais",
    description:
      "Agência digital focada em performance, design e automações inteligentes.",
    images: ["/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${mainFont.className} antialiased bg-white text-gray-900`}>
        {/* Microsoft Clarity */}
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "smq9v53ifa");`,
          }}
        />

        {/* Google Tag Manager - gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17460584050"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17460584050');
          `}
        </Script>

        <NavBar />
        <main>{children}</main>
        <Footer />

        {/* Flowbite */}
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
