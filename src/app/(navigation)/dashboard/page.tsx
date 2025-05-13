export const dynamic = "force-dynamic";
import { BarchartComponent } from "@/components/Barchart";
import { PiechartComponent } from "@/components/Piechart";

import { Metadata } from "next";
import Link from "next/link";
import { FaPeopleLine } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { MdPeople } from "react-icons/md";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="lg:p-12 p-2 flex flex-col items-center justify-center gap-8 bg-slate-200">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4 bg-gray-100/40 p-4">
        <Link href={`/visitors`} className="p-2  w-full animate-slide-in">
          <div className=" bg-white border-l-[5px] shadow border-l-primary cursor-pointer px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <FaPeopleLine size={60} color="#D09EE8" />
            <h2 className="title-font font-semibold text-3xl text-gray-900">
              46
            </h2>
            <p className="leading-relaxed font-medium text-lg">Vistors</p>
          </div>
        </Link>
        <Link href={`/#`} className="p-2  w-full animate-slide-in">
          <div className=" bg-white border-l-[5px] shadow border-l-primary cursor-pointer px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <MdPeople size={60} color="#D09EE8" />
            <h2 className="title-font font-semibold text-3xl text-gray-900">
              1.3K
            </h2>
            <p className="leading-relaxed font-medium text-lg">Members</p>
          </div>
        </Link>
        <Link href={`/#`} className="p-2  w-full animate-slide-in">
          <div className=" bg-white border-l-[5px] shadow border-l-primary cursor-pointer px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <HiBadgeCheck size={60} color="#D09EE8" />
            <h2 className="title-font font-semibold text-3xl text-gray-900">
              74
            </h2>
            <p className="leading-relaxed font-medium text-lg">Attendance</p>
          </div>
        </Link>
      </div>

      <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 p-4">
        <BarchartComponent />
        <PiechartComponent />
      </div>
    </div>
  );
}
