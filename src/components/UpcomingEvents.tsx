"use client";
import EventCard from "./EventCard";

import { Events } from "@/constants/events";
import { TypingText } from "./CustomText";

export default function UpcomingEvents() {
  return (
    <section
      id="events"
      className="lg:px-16 px-4 py-16 w-full animate-slide bg-[#ddd]"
    >
      <TypingText title=" | Upcoming Events" textStyles="text-black" />
      <div className="w-full flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:gap-4 gap-6 ">
        {Events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}
