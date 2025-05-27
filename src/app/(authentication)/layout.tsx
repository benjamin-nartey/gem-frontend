import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../globals.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "%s | Grace Empire Ministry",
  description: "Grace Empire Ministry Page",
  applicationName: "Grace Empire Ministry",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={inter.className}>{children}</section>;
}
