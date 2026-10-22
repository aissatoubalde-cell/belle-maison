import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Veuillez indiquer votre nom."),
  email: z.email("Adresse e-mail invalide."),
  phone: z.string().trim().optional(),
  subject: z.enum(["construction", "btp", "promotion", "investissement", "gestion", "autre"], {
    error: "Veuillez choisir un objet.",
  }),
  message: z.string().trim().min(20, "Décrivez votre projet en quelques phrases (20 caractères minimum)."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const subjectLabels: Record<ContactInput["subject"], string> = {
  construction: "Construction et bâtiment",
  btp: "Bâtiment et Travaux Publics",
  promotion: "Développement et promotion immobilière",
  investissement: "Investissement immobilier",
  gestion: "Gestion et valorisation immobilières",
  autre: "Autre demande",
};
