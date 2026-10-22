import Image from "next/image";
import { activites } from "@/data/site";
import { Container, SectionHeader } from "./ui";
import Reveal from "./Reveal";

export default function Activites() {
  return (
    <section id="activites" className="bg-navy text-ivory">
      <Container className="flex flex-col gap-12 py-26">
        <SectionHeader eyebrow="04 · Nos domaines d’activité" title="Six métiers au service de vos projets." tone="light" />
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
          {activites.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="flex flex-col border border-gold/45">
              <Image src={a.image} alt="" width={400} height={200} className="block h-[200px] w-full object-contain pt-4" />
              <div className="flex flex-col gap-2.5 px-7 pt-5 pb-8">
                <h3 className="m-0 font-serif text-[1.6rem] font-normal">{a.title}</h3>
                <p className="m-0 text-[0.95rem] text-mist">{a.text}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
