import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { config } from "@/lib/config";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic Metadata
  title: config.company.title,
  description: "Arnapurna Events & Cater (AEC BBSR) - Leading event management company in Bhubaneswar. Professional wedding planning, corporate events, DJ nights, and catering services. Call now for unforgettable celebrations in Odisha.",
  keywords: ["Arnapurna Events", "Arnapurna Events & Cater", "AEC BBSR", "Arnapurna Events BBSR", "event management Bhubaneswar", "wedding planners Bhubaneswar", "corporate events Odisha", "DJ nights BBSR"],
  authors: [{ name: "Arnapurna Events & Cater" }],
  
  // Open Graph
  openGraph: {
    title: "Arnapurna Events & Cater - Premier Event Management in Bhubaneswar",
    description: "Professional event management services including weddings, corporate events, DJ nights and celebrations in Bhubaneswar, Odisha.",
    url: "https://www.arnapurnaevents.in",
    siteName: "Arnapurna Events & Cater",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.arnapurnaevents.in/assets/33X33_Logo_GOLD_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Arnapurna Events & Cater Logo",
      },
    ],
  },

  // Icons
  icons: {
    icon: "/assets/33X33_Logo_GOLD.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Alternate Languages
  alternates: {
    canonical: "https://www.arnapurnaevents.in",
  },

  // Other Metadata
  generator: "Next.js",
  applicationName: "Arnapurna Events & Cater",
  referrer: "origin-when-cross-origin",
  creator: "Arnapurna Events & Cater",
  publisher: "Arnapurna Events & Cater",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Verification
  verification: {
    google: "your-google-site-verification-code", // Add your Google verification code
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <NextTopLoader color="var(--color-amber-400)" showSpinner={false} />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
