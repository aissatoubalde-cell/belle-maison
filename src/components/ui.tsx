import type { ReactNode } from "react";
import Reveal from "./Reveal";
import AnimatedWords from "./AnimatedWords";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1240px] px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return <div className={`eyebrow ${tone === "light" ? "text-gold" : "text-gold-dark"}`}>{children}</div>;
}

export function SectionTitle({ children, size = "lg" }: { children: ReactNode; size?: "lg" | "md" }) {
  const sizes = size === "lg" ? "text-[clamp(2rem,4vw,3rem)]" : "text-[clamp(1.8rem,3.4vw,2.5rem)]";
  return (
    <h2 className={`m-0 font-serif font-normal leading-[1.15] ${sizes}`}>
      {typeof children === "string" ? <AnimatedWords text={children} delay={0.15} /> : children}
    </h2>
  );
}

export function SectionHeader({ eyebrow, title, tone = "dark", children }: { eyebrow: ReactNode; title: ReactNode; tone?: "dark" | "light"; children?: ReactNode }) {
  return (
    <div className="flex max-w-[760px] flex-col gap-3.5">
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <SectionTitle>{title}</SectionTitle>
      {children ? <Reveal delay={0.45}>{children}</Reveal> : null}
    </div>
  );
}

export function Button({ href, variant = "gold", children }: { href: string; variant?: "gold" | "outline" | "navy"; children: ReactNode }) {
  const styles = {
    gold: "bg-gold text-navy hover:text-navy hover:bg-gold-light px-7 py-4",
    outline: "border-[1.5px] border-gold text-ivory hover:text-gold-light px-7 py-[15px]",
    navy: "bg-navy text-ivory hover:text-gold-light px-[22px] py-3",
  }[variant];
  return (
    <a href={href} className={`inline-block text-[0.9rem] font-semibold tracking-[0.08em] uppercase no-underline transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 ${styles}`}>
      {children}
    </a>
  );
}
