import Welcome from "./Welcome";
import Video from "./Video";

export default function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center p-24 min-h-screen bg-[rgba(75,12,191,.4)]"
    >
      <Welcome />
      <Video />
    </section>
  );
}
