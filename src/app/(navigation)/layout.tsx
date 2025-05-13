import type { Metadata } from "next";

import "../globals.css";
import Navigation from "@/components/Navigation";

import { getMe } from "@/lib/getMe";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    template: "%s | Grace Empire Ministry",
    default: "Grace Empire Ministry",
  },
  description: "Grace Empire Ministry",
  applicationName: "Grace Empire Ministry",
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const url = `${BASE_URL}/api/v1/users/getMe`;
  const userData = await getMe(url, token);

  return <Navigation userData={userData}>{children}</Navigation>;
}
