import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "../client-layout";
import Menu from "../components/Menu/Menu";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIS MAJESTY MFAR ROBINSON TAMBE AYUK TANYI",
  description:
    "The official website of His Majesty Mfar Robinson Tambe Ayuk Tanyi",
  icons: "/logo.svg",
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
        <ClientLayout>
          <Menu />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
