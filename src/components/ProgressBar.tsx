"use client";

import { motion } from "motion/react";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 bg-ivory/18" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <motion.div
        className="h-1.5 bg-gold"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </div>
  );
}
