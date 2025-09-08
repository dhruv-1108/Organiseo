import { Poppins } from "next/font/google";
import "./../globals.css";
import { cn } from "@/lib/utils";

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
    <html>
      <body className={cn("h-full bg-slate-100", poppinsSans.className)}>
        <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      </body>
    </html>
  );
}
