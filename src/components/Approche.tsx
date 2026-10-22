import { approche } from "@/data/site";
import { Container, SectionHeader } from "./ui";
import Reveal from "./Reveal";

export default function Approche() {
  return (
    <section id="approche" className="bg-white">
      <Container className="flex flex-col gap-12 py-26">
        <SectionHeader eyebrow="06 · Notre approche" title="Une démarche structurée, de l’idée à la livraison." />
        <ol className="m-0 grid list-none gap-x-12 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
          {approche.map((step, i) => (
            <li key={step.title} className={`border-t gold-border ${i >= approche.length - 2 ? "border-b" : ""}`}>
              <Reveal delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.08} className="flex gap-[22px] py-[26px]">
              <span className="font-serif text-[2.2rem] leading-none text-gold-mid">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="mb-1.5 mt-0 text-[1.05rem] font-semibold">{step.title}</h3>
                <p className="m-0 text-[0.95rem] text-muted">{step.text}</p>
              </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
