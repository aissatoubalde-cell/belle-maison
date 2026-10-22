"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, subjectLabels, type ContactInput } from "@/lib/contact-schema";
import { sendContact } from "@/app/actions/contact";

const field =
  "w-full border border-gold/50 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-mist/60 focus:border-gold focus:outline-none";
const label = "text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-gold";

export default function ContactForm() {
  const [status, setStatus] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "construction" },
  });

  const onSubmit = (data: ContactInput) => {
    setStatus(null);
    startTransition(async () => {
      const res = await sendContact(data);
      if (res.ok) {
        reset();
        setStatus({ type: "ok", text: "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement." });
      } else {
        setStatus({ type: "error", text: res.error });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={label}>Nom complet</label>
          <input id="name" type="text" autoComplete="name" className={field} {...register("name")} />
          {errors.name && <p className="m-0 text-[0.8rem] text-gold-light">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={label}>E-mail</label>
          <input id="email" type="email" autoComplete="email" className={field} {...register("email")} />
          {errors.email && <p className="m-0 text-[0.8rem] text-gold-light">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={label}>Téléphone (optionnel)</label>
          <input id="phone" type="tel" autoComplete="tel" className={field} {...register("phone")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className={label}>Objet</label>
          <select id="subject" className={`${field} bg-navy`} {...register("subject")}>
            {Object.entries(subjectLabels).map(([value, text]) => (
              <option key={value} value={value}>{text}</option>
            ))}
          </select>
          {errors.subject && <p className="m-0 text-[0.8rem] text-gold-light">{errors.subject.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={label}>Votre projet</label>
        <textarea id="message" rows={4} className={field} {...register("message")} />
        {errors.message && <p className="m-0 text-[0.8rem] text-gold-light">{errors.message.message}</p>}
      </div>

      {status && (
        <p role="status" className={`m-0 border px-4 py-3 text-[0.9rem] ${status.type === "ok" ? "border-gold text-gold-light" : "border-red-300/60 text-red-200"}`}>
          {status.text}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-center bg-gold px-10 py-4 text-[0.9rem] font-semibold tracking-[0.08em] text-navy uppercase transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
