// import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Footer from "../components/Footer"
import Header from "../components/Header"
import SideBanner from "../components/SideBanner";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: {
    default: string;
    template: string;
  };
  description: string;
}

export const metadata: Metadata = {
  title: {
    default: "Professional Remodeling at the Best Price",
    template: "%s | Loredo Professional Remodeling",
  },
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
       <AppRouterCacheProvider>
          <Header />
          <SideBanner />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
