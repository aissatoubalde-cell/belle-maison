export const nav = [
  { href: "#apropos", label: "À propos" },
  { href: "#activites", label: "Activités" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#marches", label: "Marchés" },
  { href: "#approche", label: "Approche" },
  { href: "#valeurs", label: "Valeurs" },
  { href: "#partenaires", label: "Partenaires" },
];

export const contact = {
  email: "bellemaison.sa@gmail.com",
  phone: "(+224) 622-21-30-05",
  phoneHref: "tel:+224622213005",
  address: "Kipé, Conakry — République de Guinée",
  rccm: "GN.TCC.2026.B.13609",
  nif: "701465635",
};

export const missionPoints = [
  "La qualité technique des ouvrages",
  "La maîtrise des coûts et des ressources",
  "Le respect des délais contractuels",
  "La sécurité et la conformité réglementaire",
  "La durabilité des constructions",
  "La satisfaction des clients et des partenaires",
];

export const activites = [
  {
    image: "/images/activite-1.svg",
    title: "Construction et bâtiment",
    text: "Maisons individuelles et villas, immeubles résidentiels, bâtiments commerciaux, administratifs et industriels ; gros œuvre, second œuvre, finitions, rénovation et projets clés en main.",
  },
  {
    image: "/images/activite-2.svg",
    title: "Bâtiment et Travaux Publics",
    text: "Terrassement, génie civil, voiries et routes, ouvrages techniques, drainage et assainissement, réseaux d’adduction d’eau et infrastructures hydrauliques.",
  },
  {
    image: "/images/activite-3.svg",
    title: "Développement et promotion immobilière",
    text: "Programmes de logements, résidences, villas et immeubles d’appartements, complexes commerciaux, partenariats fonciers et montage d’opérations.",
  },
  {
    image: "/images/activite-4.svg",
    title: "Investissement immobilier",
    text: "Acquisition de maisons, villas et appartements, immeubles résidentiels et commerciaux, achat-vente de biens et constitution de portefeuilles immobiliers.",
  },
  {
    image: "/images/activite-5.svg",
    title: "Gestion et valorisation immobilières",
    text: "Gestion locative, administration de propriétés, entretien et maintenance, commercialisation, suivi des revenus locatifs et optimisation des actifs.",
  },
  {
    image: "/images/activite-6.svg",
    title: "Ingénierie et partenariats",
    text: "Coopération avec entreprises de génie civil, bureaux d’études, architectes, fournisseurs, investisseurs, banques et promoteurs, des études à la réalisation.",
  },
];

export type Realisation = {
  image?: string;
  year: string;
  title: string;
  type: string;
  location: string;
  text: string;
};

export const realisations: Realisation[] = [
  { year: "[ANNÉE]", title: "[Nom du projet]", type: "[Type d’ouvrage]", location: "[Lieu]", text: "[Courte description : surface, nombre de logements, travaux réalisés, client…]" },
  { year: "[ANNÉE]", title: "[Nom du projet]", type: "[Type d’ouvrage]", location: "[Lieu]", text: "[Courte description : surface, nombre de logements, travaux réalisés, client…]" },
  { year: "[ANNÉE]", title: "[Nom du projet]", type: "[Type d’ouvrage]", location: "[Lieu]", text: "[Courte description : surface, nombre de logements, travaux réalisés, client…]" },
];

export type Projet = Realisation & { progress: number; delivery: string };

export const projetsEnCours: Projet[] = [
  { year: "", title: "[Nom du projet]", type: "[Type d’ouvrage]", location: "[Lieu]", text: "[Courte description du projet]", progress: 50, delivery: "[DATE]" },
  { year: "", title: "[Nom du projet]", type: "[Type d’ouvrage]", location: "[Lieu]", text: "[Courte description du projet]", progress: 50, delivery: "[DATE]" },
];

export const marches = [
  { tag: "Marché prioritaire", title: "République de Guinée", text: "Logements, bâtiments professionnels et infrastructures pour accompagner l’urbanisation et le développement économique, en lien avec les acteurs publics et privés." },
  { tag: "Investissement", title: "États-Unis", text: "Opportunités d’investissement et de développement immobilier, notamment dans les actifs résidentiels : acquisition, valorisation et gestion." },
  { tag: "Moyen et long terme", title: "Afrique de l’Ouest", text: "Développement progressif sur d’autres marchés de la sous-région, en privilégiant les partenariats locaux et une approche adaptée à chaque pays." },
];

export const approche = [
  { title: "Identification des opportunités", text: "Analyse des besoins du client, des objectifs du projet et du contexte du marché." },
  { title: "Études préalables", text: "Faisabilité technique, juridique, financière et commerciale, avec les professionnels compétents." },
  { title: "Structuration du projet", text: "Programme, budget prévisionnel, calendrier et mode de réalisation." },
  { title: "Mobilisation des ressources", text: "Sélection des partenaires, entreprises, fournisseurs et financements nécessaires." },
  { title: "Exécution et suivi", text: "Coordination des intervenants, suivi des travaux, contrôle de la qualité, des coûts et des délais." },
  { title: "Livraison et valorisation", text: "Réception des ouvrages, remise au client et accompagnement dans la gestion de l’actif." },
];

export const valeurs = [
  { icon: "shield", title: "Intégrité et transparence", text: "Des relations professionnelles fondées sur la confiance, la clarté des engagements et le respect des obligations contractuelles." },
  { icon: "star", title: "Qualité et professionnalisme", text: "Des solutions adaptées aux exigences techniques et aux attentes des clients." },
  { icon: "scale", title: "Maîtrise des coûts", text: "Une préparation rigoureuse des projets et une utilisation efficace des ressources." },
  { icon: "calendar", title: "Respect des engagements", text: "Une organisation structurée et un suivi régulier de l’exécution des opérations." },
  { icon: "rings", title: "Partenariat et coopération", text: "Des relations durables avec les clients, les investisseurs, les entreprises et les institutions." },
  { icon: "leaf", title: "Durabilité", text: "Des constructions fonctionnelles, pérennes et adaptées à leur environnement." },
] as const;

export const typesPartenaires = [
  "Entreprises de construction et de génie civil",
  "Bureaux d’études et cabinets d’ingénierie",
  "Architectes et professionnels de l’aménagement",
  "Fournisseurs de matériaux et d’équipements",
  "Investisseurs privés et institutionnels",
  "Banques et institutions de financement",
  "Promoteurs immobiliers et propriétaires fonciers",
];

export const clients = [
  { logo: "/images/partenaire-fvg.png", alt: "Logo Falcon Vision Group", name: "Falcon Vision Group", tag: "Logistique · Mines · Négoce", bg: "#EDEDED", padded: false },
  { logo: "/images/partenaire-eltg.png", alt: "Logo ELTG Infrastructures de transport", name: "ELTG", tag: "Infrastructures de transport", bg: "#F3F3F1", padded: true },
  { logo: "/images/partenaire-bvit.png", alt: "Logo BVIT Services Group", name: "BVIT Services Group", tag: "Études, conseil & engineering", bg: "#FFFFFF", padded: true },
];
