import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import HomePage from "@/components/HomePage";
import Ministries from "@/components/Ministries";
import Services from "@/components/Services";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEM",
  description: "Welcome to Grace Empire International Church Official Website",
};

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Ministries />
      <Services />
      <UpcomingEvents />
      <ContactUs />
     
    </>
  );
}
