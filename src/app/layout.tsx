import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Footer from "../components/Footer"
import Header from "../components/Header"
import SideBanner from "../components/SideBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Remodeling at the Best Price",
  description: "Loredo Professional Remodeling is committed providing exceptional workmanship and customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className}>
        <Header />
        <SideBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
