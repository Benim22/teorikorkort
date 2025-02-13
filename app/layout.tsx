import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "🚦TeoriKörkort.se - Klara teoriprovet på första försöket!",
  description:
    "Bästa körkorts appen 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-white antialiased h-full w-full")}>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
