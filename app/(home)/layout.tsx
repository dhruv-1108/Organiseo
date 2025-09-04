import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full bg-slate-100", poppinsSans.className)}>
        <Navbar />
        <main className="pt-40 pb-20 bg-slate-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
