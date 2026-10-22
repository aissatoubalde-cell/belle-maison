import { marches } from "@/data/site";
import { Container, SectionHeader } from "./ui";
import Reveal from "./Reveal";

export default function Marches() {
  return (
    <section id="marches" className="bg-ivory">
      <Container className="flex flex-col gap-12 py-26">
        <SectionHeader eyebrow="05 · Nos marchés cibles" title="Entre l’Afrique de l’Ouest et l’Amérique du Nord." />
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
          {marches.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="card-hover flex h-full flex-col gap-3 border border-transparent border-t-[3px] border-t-gold bg-white px-8 py-9">
              <div className="text-[0.75rem] font-semibold tracking-[0.25em] text-gold-dark uppercase">{m.tag}</div>
              <h3 className="m-0 font-serif text-[1.8rem] font-normal">{m.title}</h3>
              <p className="m-0 text-[0.95rem] text-ink">{m.text}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
