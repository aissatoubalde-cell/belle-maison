import Image from "next/image";
import { projetsEnCours, realisations } from "@/data/site";
import { Container, Eyebrow, SectionHeader, SectionTitle } from "./ui";

function Placeholder({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center border-[1.5px] border-dashed border-gold text-[0.8rem] font-semibold tracking-[0.2em] uppercase ${dark ? "min-h-[220px] flex-[1_1_220px] bg-navy-light text-gold-light" : "aspect-[4/3] bg-sand text-gold-dark"}`}>
      {label}
    </div>
  );
}

export default function Realisations() {
  return (
    <section id="realisations" className="bg-white">
      <Container className="flex flex-col gap-14 py-26">
        <SectionHeader eyebrow="Nos réalisations" title="Des ouvrages qui parlent pour nous." />

        <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
          {realisations.map((r, i) => (
            <article key={i} className="flex flex-col gap-[18px]">
              {r.image ? (
                <Image src={r.image} alt={r.title} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              ) : (
                <Placeholder label="[Photo du projet]" />
              )}
              <div className="flex flex-col gap-2">
                <span className="self-start bg-navy px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-ivory uppercase">Livré · {r.year}</span>
                <h3 className="m-0 font-serif text-[1.6rem] font-normal">{r.title}</h3>
                <div className="text-[0.85rem] font-semibold tracking-[0.08em] text-gold-dark">{r.type} · {r.location}</div>
                <p className="m-0 text-[0.95rem] text-muted">{r.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="projets" className="flex flex-col gap-7 border-t gold-border pt-6">
          <div className="flex flex-col gap-3.5 pt-8">
            <Eyebrow>Projets en cours</Eyebrow>
            <SectionTitle size="md">Sur nos chantiers en ce moment.</SectionTitle>
          </div>
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(460px,100%),1fr))]">
            {projetsEnCours.map((p, i) => (
              <article key={i} className="flex flex-wrap bg-navy text-ivory">
                {p.image ? (
                  <Image src={p.image} alt={p.title} width={440} height={330} className="min-h-[220px] flex-[1_1_220px] object-cover" />
                ) : (
                  <Placeholder label="[Photo du chantier]" dark />
                )}
                <div className="flex flex-[1_1_240px] flex-col gap-2.5 p-7">
                  <span className="self-start bg-gold px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-navy uppercase">En cours</span>
                  <h3 className="m-0 font-serif text-[1.5rem] font-normal">{p.title}</h3>
                  <div className="text-[0.85rem] font-semibold tracking-[0.08em] text-gold-light">{p.type} · {p.location}</div>
                  <p className="m-0 text-[0.92rem] text-mist">{p.text}</p>
                  <div className="flex flex-col gap-1.5 pt-1.5 text-[0.8rem]">
                    <div className="flex justify-between"><span>Avancement</span><span>{p.progress} %</span></div>
                    <div className="h-1.5 bg-ivory/18" role="progressbar" aria-valuenow={p.progress} aria-valuemin={0} aria-valuemax={100}>
                      <div className="h-1.5 bg-gold" style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-mist">Livraison prévue : {p.delivery}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
