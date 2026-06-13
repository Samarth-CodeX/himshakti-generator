import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "HimShakti Product Description Generator",
  description: "AI-Assisted Full Stack Workspace Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="bg-slate-50 min-h-screen flex flex-col justify-between text-slate-800">
        <div>
          <Navbar />
          <main className="max-w-7xl mx-auto p-4 md:p-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
