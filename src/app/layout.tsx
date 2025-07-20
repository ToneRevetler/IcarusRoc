import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from './components/header/Header';
import NavBar from "../../components/Header/NavBar";
import Footer from '../../components/Footer';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mainFont = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App With Icarus Roc",
  description: "Get your Next.js app up and running with Icarus Roc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <title>Icarus Roc</title>
      </head>
      <body
        className={`${mainFont.className} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
