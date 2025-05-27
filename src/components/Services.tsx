"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/lib/motion";

import ServicesTimeline from "./ServicesTimeline";
import ThreeGlobeDynamicImport from "./ThreeGlobeDynamicImport";
import { TypingText } from "./CustomText";

export default function Services() {
  return (
    <section
      id="services"
      className="lg:px-4 px-4 py-16 w-full animate-slide-up bg-[#040D21]"
    >
      <TypingText title=" | Services" textStyles="text-white" />
      <div className="w-full flex lg:flex-row md:flex-col flex-col">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1.8)}
          className="flex-1"
        >
          <ServicesTimeline />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-1 lg:block hidden"
        >
          <ThreeGlobeDynamicImport />
        </motion.div>
      </div>
    </section>
  );
}
