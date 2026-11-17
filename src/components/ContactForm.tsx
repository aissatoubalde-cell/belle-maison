"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, subjectLabels, type ContactInput } from "@/lib/contact-schema";

const field =
  "w-full border border-ivory/15 bg-navy px-4 py-3 transition-colors text-ivory placeholder:text-mist/60 focus:border-gold focus:outline-none";
const label = "text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-gold";

const ERROR_SEND = "L’envoi a échoué. Veuillez réessayer ou nous appeler.";
const ERROR_CONFIG = "L’envoi d’e-mail n’est pas encore configuré. Contactez-nous directement par téléphone ou e-mail.";

/**
 * Envoi direct depuis le navigateur vers Web3Forms (usage prévu par le service).
 * Un envoi depuis le serveur Vercel est bloqué par la protection Cloudflare de Web3Forms.
 * La clé d'accès Web3Forms est conçue pour être exposée côté client : elle n'autorise
 * que l'envoi vers l'adresse pour laquelle elle a été créée.
 */
async function sendToWeb3Forms(accessKey: string, data: ContactInput): Promise<boolean> {
  const { name, email, phone, subject, message } = data;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Belle Maison Properties — Site web",
        subject: `[Site web] ${subjectLabels[subject]} — ${name}`,
        replyto: email,
        name,
        email,
        phone: phone || "—",
        objet: subjectLabels[subject],
        message,
        botcheck: "",
      }),
    });
    const json = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !json.success) {
      console.error("Web3Forms error:", res.status, json);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Web3Forms error:", err);
    return false;
  }
}

export default function ContactForm({ accessKey }: { accessKey?: string }) {
  const [status, setStatus] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "construction" },
  });

  // Le message de confirmation disparaît de lui-même après 6 secondes
  useEffect(() => {
    if (status?.type !== "ok") return;
    const timer = setTimeout(() => setStatus(null), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = (data: ContactInput) => {
    setStatus(null);
    if (!accessKey) {
      setStatus({ type: "error", text: ERROR_CONFIG });
      return;
    }
    startTransition(async () => {
      const ok = await sendToWeb3Forms(accessKey, data);
      if (ok) {
        reset();
        setStatus({ type: "ok", text: "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement." });
      } else {
        setStatus({ type: "error", text: ERROR_SEND });
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
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+224 6XX XX XX XX"
            className={field}
            {...register("phone", {
              onChange: (e) => {
                // Ne garde que les chiffres, les espaces et un « + » en tête
                const v = e.target.value as string;
                e.target.value = (v.startsWith("+") ? "+" : "") + v.replace(/[^\d ]/g, "").replace(/ {2,}/g, " ");
              },
            })}
          />
          {errors.phone && <p className="m-0 text-[0.8rem] text-gold-light">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className={label}>Objet</label>
          <select id="subject" className={field} {...register("subject")}>
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
