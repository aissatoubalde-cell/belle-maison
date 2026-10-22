"use client";

import { motion } from "motion/react";

type Props = { text: string; delay?: number; stagger?: number; className?: string };

/** Fait apparaître un texte mot par mot (glissement vers le haut) quand il entre dans le viewport. */
export default function AnimatedWords({ text, delay = 0, stagger = 0.07, className }: Props) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span
              className="inline-block"
              initial={{ y: "105%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
