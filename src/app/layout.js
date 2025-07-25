import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterForAll from "./components/FooterForAll";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    // default: "Home || Kinnun.com",
    template: "%s | Kinnun.com",
  },
  description:
    "Explore Kinnun.com for premium cable protectors, tech accessories, and gadget-friendly solutions. Style your cables and protect them with our cute and durable designs.",
  keywords: [
    "Kinnun.com",
    "Cable protectors",
    "Cute cable accessories",
    "iPhone cable guard",
    "Android USB cover",
    "Cartoon cable wrap",
    "Kinnun official store",
    "Tech gadgets BD",
    "Best cable organizer",
    "Wire protector for phone",
  ],
  robots: "index, follow",
  authors: [{ name: "Kinnun Team", url: "https://kinnun.com" }],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-white`}
      >
        <Navbar></Navbar>
        {children}
        <Toaster />
        <Analytics />
        <FooterForAll></FooterForAll>
      </body>

    </html>
  );
}
