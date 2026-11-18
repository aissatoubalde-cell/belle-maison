import { contact } from "@/data/site";
import { Button, Container, Eyebrow } from "./ui";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import AnimatedWords from "./AnimatedWords";

const iconProps = { "aria-hidden": true, width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "#C4A468", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-ivory">
      <Container className="flex flex-col gap-16 py-26">
        <div className="flex flex-wrap items-center gap-x-20 gap-y-14">
        <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-[22px]">
          <Eyebrow tone="light">Contact</Eyebrow>
          <h2 className="m-0 font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-normal leading-[1.12]"><AnimatedWords text="Parlons de votre projet." stagger={0.08} /></h2>
          <p className="m-0 max-w-[560px] text-mist">
            Construction, travaux, promotion ou investissement immobilier : notre équipe étudie chaque demande avec attention.
          </p>
          <div className="flex flex-col gap-3.5 text-[1.1rem] font-medium">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3.5 py-1 text-ivory no-underline hover:text-gold-light">
              <svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3.5 6l8.5 7 8.5-7" /></svg>
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="flex items-center gap-3.5 py-1 text-ivory no-underline hover:text-gold-light">
              <svg {...iconProps}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
              {contact.phone}
            </a>
            <div className="flex items-center gap-3.5 py-1">
              <svg {...iconProps}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
              {contact.address}
            </div>
          </div>
          <div className="pt-2"><Button href="#partenaires">Nos partenaires</Button></div>
        </div>

        <div className="flex flex-[1_1_220px] flex-col items-center gap-3.5">
          <div className="border-2 border-gold bg-ivory p-[18px]">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG statique, pas d’optimisation nécessaire */}
            <img src="/images/qr-contact.svg" alt="Code QR – carte de contact Belle Maison Properties" width={200} height={200} className="block h-[200px] w-[200px]" />
          </div>
          <div className="text-[0.75rem] font-semibold tracking-[0.25em] text-gold uppercase">Scannez · Enregistrez</div>
        </div>
        </div>

        <Reveal className="border-t border-gold/45 pt-14">
          <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 form-card bg-navy-light px-6 py-10 sm:px-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <Eyebrow tone="light">Formulaire</Eyebrow>
              <h3 className="m-0 font-serif text-[1.8rem] font-normal">Décrivez-nous votre projet.</h3>
              <p className="m-0 max-w-[480px] text-[0.95rem] text-mist">Quelques lignes suffisent : nous vous recontactons sous 48 heures ouvrées.</p>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
