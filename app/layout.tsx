import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";
import { Providers } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sample",
  description: "Generated by Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        dir="rtl"
        className={`bg-[--bgColor] ${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <Providers>

          <Layout>

            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
