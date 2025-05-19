import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Ministries from "@/components/Ministries";
import Services from "@/components/Services";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Ministries />
      <Services />
      <UpcomingEvents />
    </>
  );
}
