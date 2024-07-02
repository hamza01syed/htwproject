import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Tutors World",
  description:
    "Personalized tutoring for all subjects and grades. Expert tutors, flexible schedules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
