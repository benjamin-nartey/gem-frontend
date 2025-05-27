"use client";

import React from "react";
import MinistriesCard from "./MinistriesCard";
import { MINISTRIES } from "@/constants/ministries";

import { TypingText } from "./CustomText";

export default function Ministries() {
  return (
    <section id="ministries" className="lg:px-16 px-4 py-16 w-full">
      <div className="text-center w-full">
        <TypingText title=" | Ministries" textStyles="text-black" />

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
