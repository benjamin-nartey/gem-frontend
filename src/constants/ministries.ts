import { FaMicrophone } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { LuDrama } from "react-icons/lu";
import { FaPray } from "react-icons/fa";

interface MinistryProps {
  name: string;
  imageUrl: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  link: string;
}

export const MINISTRIES: MinistryProps[] = [
  {
    name: "empire melodies",
    imageUrl: "bg-melodies",
    icon: FaMicrophone,
    color: "purple-600",
    link: "/empire-melodies",
  },
  {
    name: "empire revolution",
    imageUrl: "bg-revolution",
    icon: GiMicrophone,
    color: "emerald-500",
    link: "/empire-revolution",
  },
  {
    name: "empire celebrations",
    imageUrl: "bg-celebrations",
    icon: MdCelebration,
    color: "sky-500",
    link: "/empire-celebration",
  },
  {
    name: "empire kids",
    imageUrl: "bg-kids",
    icon: FaChildren,
    color: "pink-500",
    link: "/empire-kids",
  },
  {
    name: "empire drama troupe",
    imageUrl: "bg-drama",
    icon: LuDrama,
    color: "yellow-400",
    link: "/empire-drama-toupe",
  },
  {
    name: "empire prayer towers",
    imageUrl: "bg-prayer",
    icon: FaPray,
    color: "indigo-600",
    link: "/empire-prayer-towers",
  },
];
