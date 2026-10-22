import { Container, Eyebrow, SectionTitle } from "./ui";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="apropos" className="bg-ivory">
      <Container className="flex flex-wrap gap-x-[72px] gap-y-12 py-26">
        <Reveal className="flex flex-[1_1_320px] flex-col gap-[18px]">
          <Eyebrow>01 · Présentation</Eyebrow>
          <SectionTitle>Une approche intégrée, du projet à la valorisation du patrimoine.</SectionTitle>
          <div className="h-0.5 w-24 bg-gold" />
        </Reveal>
        <Reveal delay={0.15} className="flex min-w-0 flex-[999_1_480px] flex-col gap-[18px] text-[1.05rem] text-ink">
          <p className="m-0">
            <strong>BELLE MAISON PROPERTIES S.A</strong> est une société à vocation entrepreneuriale et d’investissement, orientée vers la construction, le Bâtiment et les Travaux Publics (BTP), le développement des infrastructures et les activités immobilières.
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
