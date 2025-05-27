import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram, FaMeta, FaSnapchat, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="w-full py-16 lg:px-16 px-4 bg-[#040D21] text-white">
      <div className="w-full">
        <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-6">
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
          <h2 className="lg:w-1/3 w-full">
            Our mission is to know Christ and make Him known through worship,
            discipleship, and service. Our Vision:
          </h2>

          <div className="flex gap-6 text-sm flex-wrap">
            <Link aria-label="home" className="hover:underline" href={`#home`}>
              Home
            </Link>
            <Link
              aria-label="about"
              className="hover:underline"
              href={`#about`}
            >
              About
            </Link>
            <Link
              aria-label="ministries"
              className="hover:underline"
              href={`#ministries`}
            >
              Ministries
            </Link>
            <Link
              aria-label="services"
              className="hover:underline"
              href={`#services`}
            >
              Services
            </Link>
            <Link
              aria-label="events"
              className="hover:underline"
              href={`#events`}
            >
              Events
            </Link>
            <Link
              aria-label="contact us"
              className="hover:underline"
              href={`#contactUs`}
            >
              Contact Us
            </Link>
          </div>

          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-start items-center lg:gap-0 gap-6">
          <span className="text-xs">
            {`Copyright ${new Date().getFullYear()}© GEM. All Rights Reserved`}
          </span>
          <div className="flex justify-center items-center gap-4">
            <Link
              aria-label="meta"
              className="hover:scale-75 transition-all"
              href={`#`}
            >
              <FaMeta size={24} />
            </Link>
            <Link
              aria-label="snapchat"
              className="hover:scale-75 transition-all"
              href={`#`}
            >
              <FaSnapchat size={24} />
            </Link>
            <Link
              aria-label="twitter"
              className="hover:scale-75 transition-all"
              href={`#`}
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              aria-label="instagram"
              className="hover:scale-75 transition-all"
              href={`#`}
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              aria-label="tiktok"
              className="hover:scale-75 transition-all"
              href={`#`}
            >
              <FaTiktok size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
