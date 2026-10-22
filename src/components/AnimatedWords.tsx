"use client";

import { motion, type Variants } from "motion/react";

type Props = { text: string; delay?: number; stagger?: number; className?: string };

const container: Variants = { hidden: {}, visible: {} };
const word: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/**
 * Fait apparaître un texte mot par mot (glissement vers le haut) quand il entre dans le viewport.
 * L'observation se fait sur le conteneur entier (pas sur chaque mot, qui est hors de sa boîte avant l'animation).
 */
export default function AnimatedWords({ text, delay = 0, stagger = 0.07, className }: Props) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      aria-label={text}
      role="text"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <motion.span
              className="inline-block"
              variants={word}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
}
