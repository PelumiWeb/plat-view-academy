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
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0f172a", 
                color: "#f8fafc", 
                padding: "14px 18px",
                fontSize: "14px",
                borderRadius: "10px",
                boxShadow:
                  "0 10px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.2)",
              },
              success: {
                style: {
                  background: "#16a34a", 
                },
              },
              error: {
                style: {
                  background: "#dc2626",
                },
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
