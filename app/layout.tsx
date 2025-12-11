import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owen Burke | Finance, Data Analytics & Performance",
  description:
    "Personal website and portfolio of Owen Burke — Finance & Data Analytics, student-athlete, and Builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1 container-px mx-auto w-full max-w-6xl py-8 sm:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


