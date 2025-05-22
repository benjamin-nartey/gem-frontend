import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram, FaMeta, FaSnapchat, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="w-full py-16 lg:px-16 px-4 bg-[#040D21] text-white">
      <div className="w-full">
        <div className="w-full flex justify-between items-center mb-6">
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

          <div className="flex justify-center items-center gap-4">
            <Link className="relative w-32 h-8" href="#">
              <Image
                src="/gplay.png"
                alt="google play"
                fill
                className="object-cover rounded border border-white border-solid bg-no-repeat"
                priority
                quality={100}
                sizes="100"
              />
            </Link>

            <Link className="relative w-32 h-8" href="#">
              <Image
                src="/astore.png"
                alt="app store"
                fill
                className="object-cover rounded border border-white border-solid bg-no-repeat"
                priority
                quality={100}
                sizes="100"
              />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-8 mb-6">
          <h2 className="w-1/3">
            Our mission is to know Christ and make Him known through worship,
            discipleship, and service. Our Vision:
          </h2>

          <ul className="flex gap-6 text-sm">
            <Link className="hover:underline" href={`#home`}>
              Home
            </Link>
            <Link className="hover:underline" href={`#about`}>
              About
            </Link>
            <Link className="hover:underline" href={`#ministries`}>
              Ministries
            </Link>
            <Link className="hover:underline" href={`#services`}>
              Services
            </Link>
            <Link className="hover:underline" href={`#events`}>
              Events
            </Link>
            <Link className="hover:underline" href={`#contactUs`}>
              Contact Us
            </Link>
          </ul>

          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="text-xs">
            {`Copyright ${new Date().getFullYear()}© GEM. All Rights Reserved`}
          </span>
          <ul className="flex justify-center items-center gap-4">
            <Link className="hover:scale-75 transition-all" href={`#`}>
              <FaMeta size={24} />
            </Link>
            <Link className="hover:scale-75 transition-all" href={`#`}>
              <FaSnapchat size={24} />
            </Link>
            <Link className="hover:scale-75 transition-all" href={`#`}>
              <FaXTwitter size={24} />
            </Link>
            <Link className="hover:scale-75 transition-all" href={`#`}>
              <FaInstagram size={24} />
            </Link>
            <Link className="hover:scale-75 transition-all" href={`#`}>
              <FaTiktok size={24} />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
