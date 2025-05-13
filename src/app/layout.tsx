import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Grace Empire Ministry",
    default: "Grace Empire Ministry",
  },
  description: "Grace Empire Ministry",
  applicationName: "Grace Empire Ministry",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth scrollbar-hide" lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
