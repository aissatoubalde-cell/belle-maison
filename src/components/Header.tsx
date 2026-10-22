"use client";

import { useState } from "react";
import Image from "next/image";
import { nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gold/45 bg-ivory">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-3 lg:flex-nowrap">
        <a href="#accueil" aria-label="Belle Maison Properties – accueil" className="block">
          <Image src="/images/logo.png" alt="Belle Maison Properties S.A" width={890} height={490} priority className="h-auto w-[140px] shrink-0" />
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
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-2 pb-2 text-[0.85rem] font-semibold uppercase tracking-[0.08em] lg:flex lg:w-auto lg:flex-1 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-x-5 lg:gap-y-1 lg:pb-0 lg:text-[0.78rem] xl:flex-nowrap xl:gap-x-6 xl:text-[0.82rem]`}
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-navy px-[22px] py-3 text-center text-ivory no-underline transition-colors hover:bg-gold hover:text-navy lg:ml-2 lg:whitespace-nowrap lg:px-4">
            Nous contacter
          </a>
        </div>
      </nav>
    </header>
  );
}
