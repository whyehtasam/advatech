import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SkipToContent } from "@/components/layout/SkipToContent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Advatech - HR & Training | Upskill. Build Projects. Get Placed.",
    template: "%s | Advatech",
  },
  description: "Advatech offers professional training, recruitment, education tie-ups, and project management services. Enroll in courses, build projects, and get placed in top companies.",
  keywords: ["training", "BIM", "CAD", "Architecture", "placement", "recruitment", "education"],
  authors: [{ name: "Advatech" }],
  creator: "Advatech",
  publisher: "Advatech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Advatech",
    title: "Advatech - HR & Training | Upskill. Build Projects. Get Placed.",
    description: "Professional training in Architecture, CAD, BIM, and related technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advatech - HR & Training",
    description: "Professional training in Architecture, CAD, BIM, and related technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <SkipToContent />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
