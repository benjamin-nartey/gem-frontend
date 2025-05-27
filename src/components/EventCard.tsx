"use client";
import { formatDateToShortMonthDay } from "@/lib/formatDateToSortMonthDay";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventCard({
  id,
  title,
  date,
  from,
  to,
  description,
  imageUrl,
}: EventCardProps) {
  return (
    <Link className="group" href={`/event/${id}`}>
      <div className="flex justify-between items-start w-[25rem] gap-6 ">
        <span className="grid place-content-center bg-transparent text-black text-xl font-bold rounded-lg p-4 text-center w-[80px] h-[80px] border-solid border-2 border-violet-900">
          <h3 className="group-hover:animate-slide-up">
            {formatDateToShortMonthDay(date)}
          </h3>
        </span>
        <div className="">
          <div className="flex justify-between">
            <h3 className="font-bold">{title}</h3>
            <span className="text-gray-900 text-sm">
              {from} - {to}
            </span>
          </div>
          <p className="text-start text-sm text-gray-900 line-clamp-3 mb-2">
            {description}
          </p>
          <div className="relative w-full h-[10rem]">
            <Image
              className="rounded object-cover object-top group-hover:animate-bounce"
              src={`${imageUrl}`}
              alt="event"
              fill
              priority
              quality={90}
              sizes="100"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
