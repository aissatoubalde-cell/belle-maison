# Belle Maison Properties S.A — Site vitrine

Site one-page construit avec **Next.js 16 (App Router)**, **React 19**, **TypeScript** et **Tailwind CSS v4**.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3001 (le port 3001 est fixé dans le script `dev` pour éviter les conflits avec d’autres projets).

## Structure

- `src/app/layout.tsx` — polices (Bodoni Moda, Montserrat via `next/font`), métadonnées SEO.
- `src/app/globals.css` — tokens de couleur du design (navy, ivoire, or…) déclarés dans `@theme`.
- `src/app/page.tsx` — assemble les sections.
- `src/components/` — un composant par section (Header, Hero, About, …, Footer) + `ui.tsx` (Container, Eyebrow, Button…).
- `src/data/site.ts` — **tout le contenu éditable** : navigation, activités, réalisations, projets en cours, marchés, valeurs, partenaires, coordonnées.
- `public/images/` — images. Les fichiers actuels sont des **placeholders** à remplacer par les vrais visuels (mêmes noms de fichiers).

## Remplacer les images

| Fichier | Contenu attendu |
| --- | --- |
| `logo.png` | Logo (≈ 150 px de large à l’affichage) |
| `favicon.png` | Favicon |
| `skyline.svg` | Illustration skyline du hero (dessin vectoriel fourni, remplaçable) |
| `activite-1.svg` … `activite-6.svg` | Illustrations des 6 activités (dessins vectoriels fournis, remplaçables) |
| `partenaire-fvg.png`, `partenaire-eltg.png`, `partenaire-bvit.png` | Logos partenaires |
| `qr-contact.svg` | QR code de la carte de contact |

Pour les réalisations et projets en cours, ajouter un champ `image: "/images/xxx.jpg"` dans `src/data/site.ts` : le placeholder en pointillés disparaît automatiquement.

## Librairies ajoutées

| Librairie | Rôle | Où |
| --- | --- | --- |
| `motion` (Framer Motion) | Apparition en fondu des sections et cartes au scroll | `src/components/Reveal.tsx` |
| `react-hook-form` + `@hookform/resolvers` | Gestion du formulaire de contact | `src/components/ContactForm.tsx` |
| `zod` | Schéma de validation partagé client / serveur | `src/lib/contact-schema.ts` |
| `resend` | Envoi de l’e-mail depuis une Server Action | `src/app/actions/contact.ts` |

## Configurer l’envoi d’e-mails (Resend)

1. Créer un compte sur https://resend.com et générer une clé API.
2. Copier `.env.example` vers `.env.local` et renseigner :
   - `RESEND_API_KEY` : la clé générée.
   - `CONTACT_FROM` : l’expéditeur. En test, `onboarding@resend.dev` fonctionne sans configuration ; en production, vérifier le domaine (ex. `contact@bellemaison.gn`) dans Resend.
   - `CONTACT_TO` : l’adresse qui reçoit les demandes.
3. Redémarrer `npm run dev`.

Sans clé valide, le formulaire affiche un message d’erreur propre et l’erreur détaillée apparaît dans la console serveur.

> Note : `.npmrc` contient `legacy-peer-deps=true` à cause d’un conflit de peer dependency optionnelle (`effect`) dans `@hookform/resolvers` 6. Il n’affecte pas le projet.

## SEO : sitemap et robots

`src/app/sitemap.ts` et `src/app/robots.ts` génèrent `/sitemap.xml` et `/robots.txt`. Ils lisent le domaine dans `NEXT_PUBLIC_SITE_URL` (`.env.local`). **Remplacer `https://www.example.com` par le vrai domaine avant la mise en ligne**, puis soumettre `https://votre-domaine/sitemap.xml` dans Google Search Console. Quand vous ajouterez des pages, ajoutez-les dans le tableau de `sitemap.ts`.
