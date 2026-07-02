import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LFX — The Linux Foundation's Tool Suite for Open Source",
  description:
    "LFX provides a suite of tools to help open source projects and ecosystems thrive — from analytics and mentorship to CLA management and crowdfunding.",
  openGraph: {
    title: "LFX — The Linux Foundation's Tool Suite for Open Source",
    description:
      "LFX provides a suite of tools to help open source projects and ecosystems thrive.",
    url: "https://lfx.linuxfoundation.org",
    siteName: "LFX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="min-h-screen flex flex-col pt-14 lg:pt-[4.25rem]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
