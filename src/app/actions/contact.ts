"use server";

import { Resend } from "resend";
import { contactSchema, subjectLabels, type ContactInput } from "@/lib/contact-schema";

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Le formulaire contient des erreurs." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error("Variables RESEND_API_KEY / CONTACT_TO / CONTACT_FROM manquantes dans .env.local");
    return { ok: false, error: "L’envoi d’e-mail n’est pas encore configuré. Contactez-nous directement par téléphone ou e-mail." };
  }

  const { name, email, phone, subject, message } = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Site web] ${subjectLabels[subject]} — ${name}`,
    text: [
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone || "—"}`,
      `Objet : ${subjectLabels[subject]}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, error: "L’envoi a échoué. Veuillez réessayer ou nous appeler." };
  }
  return { ok: true };
}
