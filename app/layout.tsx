import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owen Burke | Finance, Data Analytics & Performance",
  description:
    "Personal website and portfolio of Owen Burke — Finance & Data Analytics, student-athlete, and Builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--bg)] text-[var(--text)]`}>
        <ToastProvider>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex-1 container-px mx-auto w-full max-w-6xl pt-24 pb-10 sm:pt-28 sm:pb-14">
              {children}
            </main>
            <Footer />
          </div>
        </ToastProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
