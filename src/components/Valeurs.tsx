import { valeurs } from "@/data/site";
import { Container, SectionHeader } from "./ui";
import Reveal from "./Reveal";

const icons: Record<(typeof valeurs)[number]["icon"], React.ReactNode> = {
  shield: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>),
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  scale: <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7h6zM19 7l-3 7h6z" />,
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="1" /><path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" /></>),
  rings: (<><circle cx="9" cy="12" r="5.5" /><circle cx="15" cy="12" r="5.5" /></>),
  leaf: (<><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" /><path d="M5 19l8-8" /></>),
};

export default function Valeurs() {
  return (
    <section id="valeurs" className="bg-ivory">
      <Container className="flex flex-col gap-12 py-26">
        <SectionHeader eyebrow="07 · Nos valeurs" title="Des relations fondées sur la confiance." />
        <div className="grid gap-x-12 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
          {valeurs.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
              <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8975A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {icons[v.icon]}
              </svg>
              <h3 className="m-0 font-serif text-[1.5rem] font-normal">{v.title}</h3>
              <p className="m-0 text-[0.95rem] text-muted">{v.text}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
