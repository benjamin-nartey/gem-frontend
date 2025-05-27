import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Welcome to Grace Empire International Church Official Website",
};

export default function Ministries() {
  return (
    <section className="lg:px-16 px-4 py-8 h-screen w-full text-white bg-primary overflow-x-hidden overflow-y-scroll scrollbar-hide scroll-smooth">
      <div className="w-full min-h-full grid place-content-center">
        <h1 className="font-bold text-4xl">Empire Melodies</h1>
      </div>
    </section>
  );
}
