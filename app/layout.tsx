import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AOSProvider from "../Components/AOSProvider";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Creon Motion",
  description: "Innovative Motion Graphics and Visual Production Studio",
  icons: {
    icon: "/ciclecmlogo.jpg",
    shortcut: "/ciclecmlogo.jpg",
    apple: "/ciclecmlogo.jpg",
  },
  metadataBase: new URL("https://creonmotion.com"),
  alternates: {
    canonical: "https://creonmotion.com/",
  },
  openGraph: {
    title: "Creon Motion",
    description: "Innovative Motion Graphics and Visual Production Studio",
    url: "https://creonmotion.com",
    siteName: "Creon Motion",
    images: [
      {
        url: "https://creonmotion.com/ciclecmlogo.jpg",
        width: 800,
        height: 800,
        alt: "Creon Motion Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://creonmotion.com/" />

        {/* ✅ Structured Data for Google (Organization schema) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Creon Motion",
              url: "https://creonmotion.com",
              logo: "https://creonmotion.com/ciclecmlogo.jpg",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} ${montserrat.variable}`}>
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
