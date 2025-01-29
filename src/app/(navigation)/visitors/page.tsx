export const dynamic = "force-dynamic";
import { Metadata } from "next";
import VisitorsPage from "./visitorsPage";
import { getAllVisitors } from "@/lib/getAllVisitors";

import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Visitors",
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Users() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const url = `${BASE_URL}/api/v1/visitors`;
  const visitors = await getAllVisitors(url, token);

  return (
    <div className="container mx-auto lg:p-12 p-2 animate-slide-up">
      <VisitorsPage visitors={visitors} token={token} />
    </div>
  );
}
