import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noiratlas.vercel.app"),
  title: "NOIR ATLAS — Personal Art Gallery",
  description:
    "A curated collection of original AI artworks and illustrations, crafted as high-resolution wallpapers and backgrounds for screens from mobile to ultra-wide.",
  openGraph: {
    type: "website",
    url: "https://noiratlas.vercel.app/",
    title: "NOIR ATLAS — Personal Art Gallery",
    description:
      "A curated collection of original AI artworks and illustrations, crafted as high-resolution wallpapers and backgrounds for screens from mobile to ultra-wide.",
    images: [
      {
        url: "/personal%20art%20profile.jpg",
        alt: "Personal art profile for NOIR ATLAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIR ATLAS — Personal Art Gallery",
    description:
      "A curated collection of original AI artworks and illustrations, crafted as high-resolution wallpapers and backgrounds for screens from mobile to ultra-wide.",
    images: ["/personal%20art%20profile.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
