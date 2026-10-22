import Image from "next/image";
import { clients } from "@/data/site";
import PartnerMarquee from "./PartnerMarquee";
import { Container, SectionHeader } from "./ui";
import Reveal from "./Reveal";

export default function Partenaires() {
  return (
    <section id="partenaires" className="bg-white">
      <Container className="flex flex-col gap-12 py-26">
        <SectionHeader eyebrow="Nos partenaires" title="Une coopération étroite entre acteurs techniques et financiers.">
          <p className="m-0 text-muted">
            Selon les projets, nos partenariats portent sur les études, la structuration financière, la réalisation des travaux, la fourniture d’équipements ou le développement conjoint d’opérations immobilières.
          </p>
        </SectionHeader>

        <Reveal>
          <PartnerMarquee />
        </Reveal>

        <div className="flex flex-col gap-[22px]">
          <div className="flex items-center gap-[18px]">
            <span className="eyebrow text-gold-dark">Ils nous font confiance</span>
            <span className="h-px flex-auto bg-gold/60" />
          </div>
          <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
              <article className="card-hover flex h-full flex-col border gold-border">
                <div className={`flex h-[220px] items-center justify-center overflow-hidden ${c.padded ? "p-6" : ""}`} style={{ background: c.bg }}>
                  <Image src={c.logo} alt={c.alt} width={400} height={220} className="block h-full w-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 px-7 pt-6 pb-7">
                  <h3 className="m-0 font-serif text-[1.6rem] font-normal">{c.name}</h3>
                  <div className="text-[0.8rem] font-semibold tracking-[0.15em] text-gold-dark uppercase">{c.tag}</div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
