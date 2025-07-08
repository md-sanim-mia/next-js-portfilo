import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Naver from "@/components/share/Naver";
import Footer from "@/components/share/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Sanim Mia | Full Stack Web Developer",
  description:
    "Experienced Full Stack Developer creating responsive, secure, and scalable web applications with modern technologies.",
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
        <div className="">
          <div className="h-16">
            <Naver />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
