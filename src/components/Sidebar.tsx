"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { FaAddressCard, FaCommentDots } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdDashboard, MdPolicy, MdRecommend } from "react-icons/md";

const isNotActiveStyle: string =
  "px-5 py-2 flex items-center text-white gap-3 w-full hover:bg-[#b430bb] hover:text-black hover:font-semibold transition-all duration-200 ease-in-out capitalize";

const isActiveStyle: string =
  "px-5 py-2 flex items-center text-black gap-3 bg-[#D09EE8] font-bold w-full transition-all duration-200 ease-in-out capitalize";

interface SideBarProps {
  closeToggle?: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ closeToggle }: SideBarProps) => {
  const pathname = usePathname();

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div
      style={{
        minWidth: "220px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="flex flex-col justify-start h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <div className=" flex flex-col start gap-8 pb-4 h-full bg-clip-padding backdrop-filter lg:backdrop-filter-none backdrop-blur-md lg:backdrop-blur-none bg-primary lg:bg-transparent ">
        <div className="w-full bg-primary sticky top-0 z-10 py-[1.1rem] px-5">
          <div className=" logo-box flex justify-start items-center gap-2 ">
            <Image
              width={190}
              height={45}
              className="w-[190px] h-auto"
              src="/GEM logo long.png"
              alt="logo"
              priority
            />
          </div>
        </div>
        <nav className="flex flex-col gap-4 text-[15px] ">
          <Link
            href="/dashboard"
            className={
              pathname === "/dashboard" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <MdDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/visitors"
            className={
              pathname === "/visitors" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <FaAddressCard size={18} />
            Visitors
          </Link>

          <Link
            href="/members"
            className={
              pathname === "/members" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <FaCircleExclamation size={18} />
            Members
          </Link>

          <Link
            href="/attendance"
            className={
              pathname === "/attendance" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <MdPolicy size={20} />
            Attendance
          </Link>

          <Link
            href="/departments"
            className={
              pathname === "/departments" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <FaCommentDots size={18} />
            Departments
          </Link>

          <Link
            href="/contributions"
            className={
              pathname === "/contributions" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <MdRecommend size={20} />
            Contributions
          </Link>

          <Link
            href="/configurations"
            className={
              pathname === "/configurations" ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => {
              handleCloseSidebar();
            }}
          >
            <IoSettings size={20} />
            Configurations
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
