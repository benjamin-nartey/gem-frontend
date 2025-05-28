import Panorama from "@/components/PanoramaCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Welcome to Grace Empire International Church Official Website",
};

export default function Ministries() {
  return (
    <section className="h-screen lg:px-16 px-4 py-16 w-full text-white bg-primary overflow-x-hidden overflow-y-scroll scrollbar-hide scroll-smooth">
      <div className="w-full min-h-full flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-3xl font-bold capitalize text-center mb-4">
              Empire Melodies
            </h1>
            <div className="w-full flex items-center justify-center ">
              <p className="lg:w-2/6 w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                explicabo facilis est, soluta sequi dolorum atque alias
                laboriosam totam at architecto ducimus animi consequuntur
                expedita tempore enim nesciunt distinctio provident!
              </p>
            </div>
          </div>
          <div className="w-full">
            <Panorama />
          </div>
        </div>
      </div>
    </section>
  );
}
