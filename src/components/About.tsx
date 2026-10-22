import { Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import AnimatedWords from "./AnimatedWords";
import { GrowLine } from "./GrowLine";

export default function About() {
  return (
    <section id="apropos" className="bg-ivory">
      <Container className="grid items-start gap-12 py-26 md:grid-cols-2 md:gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>01 · Présentation</Eyebrow>
          <h2 className="m-0 font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.15] text-balance">
            <AnimatedWords text="Une approche intégrée, du projet à la valorisation du patrimoine." delay={0.1} />
          </h2>
          <GrowLine />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-5 text-[1.05rem] leading-[1.75] text-ink md:pt-9">
          <p className="m-0">
            <strong className="text-navy">BELLE MAISON PROPERTIES S.A</strong> est une société à vocation entrepreneuriale et d’investissement, orientée vers la construction, le Bâtiment et les Travaux Publics (BTP), le développement des infrastructures et les activités immobilières.
          </p>
          <p className="m-0">
            Nous accompagnons particuliers, entreprises, investisseurs et institutions publiques ou privées dans des projets de construction et d’aménagement : développement de projets, bâtiments, infrastructures, promotion immobilière et valorisation du patrimoine.
          </p>
          <p className="m-0">
            Nos activités se développent en République de Guinée, aux États-Unis et sur d’autres marchés ciblés, avec une vision orientée vers la qualité, la performance et la durabilité.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
