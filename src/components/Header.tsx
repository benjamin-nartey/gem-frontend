"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";



export default function Header() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);
  return (
    <header
     
    >
      <nav
        className={`fixed top-0 w-full z-50 ${
          header ? "bg-black/75 text-white" : "bg-transparent"
        }  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800`}
      >
        <div className="flex flex-wrap justify-between items-center">
          <Link href="#" className="relative  lg:w-[250px] w-[200px] h-[80px] ">
            <Image
              src="/GEM logo long.png"
              alt="GEM logo"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100"
            />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#home"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#ministries"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#contactUs"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#give"
                  className="block py-2 pr-4 pl-3 text-white hover:underline transition-all decoration-white "
                >
                  Give
                </Link>
              </li>
            </ul>
          </div>

          <Link aria-label="login" href={`/login`}>
            <button className="hidden lg:block px-4 py-1 bg-white text-black font-semibold text-lg hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[rgba(75,12,191,1)] duration-500 transition-[color,box-shadow]">
              Login
            </button>
          </Link>
          <div className="block lg:hidden">
            <HamburgerMenuIcon
              className="text-white cursor-pointer"
              height={30}
              width={30}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
