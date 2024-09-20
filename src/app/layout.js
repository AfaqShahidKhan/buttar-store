import { Inter } from "next/font/google";
import "./globals.css";



import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

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
      <body
        className={`${josefin.className} antialiased bg-primary-30 text-primary-950 min-h-screen flex flex-col relative`}
      >
        <Navbar/>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
