"use client";

import { motion } from "motion/react";

/** Trait doré qui se déploie de gauche à droite à l'entrée dans le viewport. */
export function GrowLine({ className = "h-0.5 w-24 bg-gold" }: { className?: string }) {
  return (
    <motion.div
      className={`origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    />
  );
}
