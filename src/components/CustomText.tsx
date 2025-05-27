import { motion } from "motion/react";

import { textContainer, textVariant2 } from "@/lib/motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.h2
    variants={textContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.35 }}
    className={`text-4xl font-bold text-center mb-8 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h2>
);
