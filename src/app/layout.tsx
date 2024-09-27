import type { Metadata } from "next";
import "../assets/globals.css";
import {Bar, Footer} from "@/components";

export const metadata: Metadata = {
  title: "Bernard Matteo",
  description: "BERNARD Matteo - Portfolio Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-blue-200 font-sans"}>
      <Bar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
