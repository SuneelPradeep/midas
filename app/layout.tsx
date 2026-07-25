import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const WorkSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const WorkMono = Work_Sans({
  variable: "--font-work-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midas",
  description: "Defence Technologies Private Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${WorkSans.variable} ${WorkMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />{children}<Footer />
        </body>
    </html>
  );
}
