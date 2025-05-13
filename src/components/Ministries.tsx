import React from "react";
import MinistriesCard from "./MinistriesCard";
import { MINISTRIES } from "@/constants/ministries";

export default function Ministries() {
  return (
    <section
      id="ministries"
      className="lg:px-32 px-4 py-16 w-full animate-slide"
    >
      <div className="text-center w-full">
        <h2 className="text-4xl text-black font-bold text-center mb-8">
          Ministries
        </h2>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {MINISTRIES.map(({ name, imageUrl, icon: Icon, color, link }) => (
            <MinistriesCard
              color={color}
              key={name}
              bgImage={imageUrl}
              name={name}
              link={link}
            >
              <Icon className="text-white w-10 h-10" />
            </MinistriesCard>
          ))}
        </div>
      </div>
    </section>
  );
}
