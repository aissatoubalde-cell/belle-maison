import Image from "next/image";
import { Button, Container } from "./ui";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="bg-navy text-ivory">
      <Container className="flex flex-col gap-7 pt-24 pb-10">
        <Reveal className="eyebrow text-gold">Construction · BTP · Infrastructures · Immobilier</Reveal>
        <Reveal delay={0.12}>
          <h1 className="m-0 max-w-[900px] font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.08]">
            Construisons ensemble vos projets de demain.
          </h1>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="m-0 max-w-[640px] font-serif text-[clamp(1.2rem,2.2vw,1.6rem)] italic leading-[1.45] text-gold-light">
            Construire durablement. Développer avec ambition. Investir dans l’avenir.
          </p>
        </Reveal>
        <Reveal delay={0.36} className="flex flex-wrap gap-4 pt-2">
          <Button href="#activites">Nos activités</Button>
          <Button href="#contact" variant="outline">Démarrer un projet</Button>
        </Reveal>
      </Container>
      <Container>
        <Reveal delay={0.3}>
        <Image src="/images/skyline.png" alt="" width={1600} height={320} className="block h-auto w-full" />
        </Reveal>
      </Container>
    </section>
  );
}
