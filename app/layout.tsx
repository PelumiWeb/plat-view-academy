import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Poppins,
  Manrope,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Heder";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],

  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zero to Hero Cybersecurity Program",
  description:
    "Learn cybersecurity from scratch with a clear roadmap. Master the fundamentals, tools, and skills needed to start a career in cybersecurity with guided training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} ${geistInter.variable} ${geistManrope.variable} antialiased`}>
        <div className="flex flex-col min-h-screen w-screen bg-white ">
          <Header />
          <div className="">{children}</div>
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
