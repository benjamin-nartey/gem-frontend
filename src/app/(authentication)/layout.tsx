import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../globals.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login | Grace Empire Ministry",
  description: "Grace Empire Ministry Login Page",
  applicationName: "Grace Empire Ministry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={inter.className}>{children}</section>;
}
