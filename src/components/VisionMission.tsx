import { missionPoints } from "@/data/site";
import { Container, Eyebrow } from "./ui";

export default function VisionMission() {
  return (
    <section className="bg-white">
      <Container className="grid gap-8 py-24 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        <div className="flex flex-col gap-[18px] bg-navy px-10 py-12 text-ivory">
          <Eyebrow tone="light">02 · Notre vision</Eyebrow>
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.2]">Devenir un acteur reconnu de la construction et de l’immobilier.</h2>
          <p className="m-0 text-mist">
            Participer à la réalisation de projets modernes, fonctionnels et durables, et contribuer à l’amélioration du cadre de vie, au développement urbain et aux infrastructures dont les territoires et les populations ont besoin.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] border gold-border px-10 py-12">
          <Eyebrow>03 · Notre mission</Eyebrow>
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.2]">Identifier, développer et réaliser des projets adaptés aux marchés.</h2>
          <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-ink">
            {missionPoints.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
