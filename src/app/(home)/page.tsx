import Video from "@/components/Video";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Ministries from "@/components/Ministries";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-center items-center p-24 min-h-screen bg-[rgba(75,12,191,.4)]"
      >
        <Welcome />
        <Video />
      </section>
      <About />
      <Ministries />
      <Services />
    </>
  );
}
