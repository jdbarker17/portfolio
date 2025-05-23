import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar/Navbar";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700'], // Add more if needed
  variable: '--font-lato', // Enables Tailwind integration
  display: 'swap'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Barker",
  description: "Jon Barker's Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        
        {children}
        
        
      </body>
    </html>
  );
}
