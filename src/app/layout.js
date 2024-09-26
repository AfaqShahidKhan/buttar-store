import { Inter } from "next/font/google";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/lib/ReduxProvider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Buttar Store",
    default: "Welcome / Buttar Store",
  },
  description: "Unleash Your Style: Fashion Finds at Your Fingertips!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logos/logo.png" type="image/png" sizes="any" />
      </head>
      <body
        className={`${josefin.className} antialiased bg-primary-30 text-primary-950 min-h-screen flex flex-col relative mb-20 md:mb-0`}
      >
        <ReduxProvider>
          <Navbar />
          <div className="flex-1 grid">
            <main className="max-w-8xl mx-auto w-full px-2">{children}</main>
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
