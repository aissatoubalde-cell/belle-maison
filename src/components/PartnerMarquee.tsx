"use client";

import { useState } from "react";
import { typesPartenaires } from "@/data/site";

/** Bandeau défilant en continu ; s'arrête au survol (CSS + JS) et respecte prefers-reduced-motion. */
export default function PartnerMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...typesPartenaires, ...typesPartenaires]; // dupliqué pour une boucle sans coupure
  return (
    <div
      className="marquee"
      aria-label="Types de partenaires"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul className="marquee-track m-0 list-none p-0" style={{ animationPlayState: paused ? "paused" : undefined }}>
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= typesPartenaires.length}
            className="shrink-0 rounded-lg border gold-border bg-white px-6 py-4 font-serif text-[1.05rem] whitespace-nowrap text-navy shadow-[0_10px_24px_-14px_rgba(31,61,111,0.25)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
