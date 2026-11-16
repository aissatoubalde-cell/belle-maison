"use server";

import { contactSchema, subjectLabels, type ContactInput } from "@/lib/contact-schema";

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Le formulaire contient des erreurs." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("Variable WEB3FORMS_ACCESS_KEY manquante dans .env.local");
    return { ok: false, error: "L’envoi d’e-mail n’est pas encore configuré. Contactez-nous directement par téléphone ou e-mail." };
  }

  const { name, email, phone, subject, message } = parsed.data;

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
      }),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      console.error("Web3Forms error:", data);
      return { ok: false, error: "L’envoi a échoué. Veuillez réessayer ou nous appeler." };
    }
  } catch (err) {
    console.error("Web3Forms error:", err);
    return { ok: false, error: "L’envoi a échoué. Veuillez réessayer ou nous appeler." };
  }

  return { ok: true };
}
