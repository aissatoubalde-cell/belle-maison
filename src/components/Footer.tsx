import { contact } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-navy-deep text-stone">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-9 text-[0.85rem]">
        <div className="flex flex-col gap-1">
          <span className="font-semibold tracking-[0.2em] text-gold">BELLE MAISON PROPERTIES S.A</span>
          <span>RCCM : {contact.rccm} · NIF : {contact.nif}</span>
        </div>
        <span>© 2026 Belle Maison Properties S.A · Tous droits réservés</span>
      </div>
    </footer>
  );
}
