"use client";

import { useState } from "react";
import Image from "next/image";
import { nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gold/45 bg-ivory">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-3.5">
        <a href="#accueil" aria-label="Belle Maison Properties – accueil" className="block">
          <Image src="/images/logo.png" alt="Belle Maison Properties S.A" width={150} height={40} priority className="h-auto w-[150px]" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <div
          id="menu-principal"
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-2 pb-2 text-[0.85rem] font-semibold uppercase tracking-[0.08em] lg:flex lg:w-auto lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-7 lg:gap-y-2 lg:pb-0`}
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2.5 no-underline">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-navy px-[22px] py-3 text-center text-ivory no-underline hover:text-gold-light">
            Nous contacter
          </a>
        </div>
      </nav>
    </header>
  );
}
