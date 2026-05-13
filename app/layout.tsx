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

export const metadata = {
  title: "Tadeo Sangregorio | BI & Data Analyst",
  description:
    "Portfolio profesional de BI, dashboards, automatización y analytics.",

  openGraph: {
    title: "Tadeo Sangregorio | BI & Data Analyst",
    description:
      "Portfolio profesional de BI, dashboards, automatización y analytics.",
    url: "https://portfolio-tadeo.vercel.app",
    siteName: "Tadeo Sangregorio",
    images: [
      {
        url: "/previsual.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
