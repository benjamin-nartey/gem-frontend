import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Hanken_Grotesk } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Empire Ministry",
  description: "Official website of Great Empire Ministry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth scrollbar-hide" lang="en">
      <body className={`${hankenGrotesk.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
