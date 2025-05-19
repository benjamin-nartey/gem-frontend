"use client";

import ServicesTimeline from "./ServicesTimeline";
import ThreeGlobeDynamicImport from "./ThreeGlobeDynamicImport";

export default function Services() {
  return (
    <section
      id="services"
      className="lg:px-4 px-4 py-16 w-full animate-slide-up bg-[#040D21]"
    >
      <h2 className="text-4xl text-white font-bold text-center mb-8">
        Services
      </h2>
      <div className="w-full flex lg:flex-row md:flex-col flex-col">
        <div className="flex-1">
          <ServicesTimeline />
        </div>

        <div className="flex-1 lg:block hidden">
          <ThreeGlobeDynamicImport />
        </div>
      </div>
    </section>
  );
}
