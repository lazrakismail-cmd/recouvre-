// Informations de l'éditeur. Les valeurs `null` s'affichent comme
// « [À compléter : …] » sur les pages légales tant qu'elles ne sont pas remplies.
export const editeur = {
  nom: null as string | null, // Nom complet tel qu'inscrit comme autónomo
  statut: "travailleur indépendant (autónomo) établi en Espagne",
  nif: null as string | null, // NIF espagnol
  adresse: null as string | null, // Adresse fiscale
  email: null as string | null, // Email de contact public
};

export const site = {
  nom: "Recouvre",
  url: "https://recouvre-peach.vercel.app",
  promesse: "Tes factures impayées, relancées jusqu'à la mise en demeure.",
  description:
    "Recouvre écrit et envoie tes relances à 7, 15 et 30 jours, puis prépare ta mise en demeure. L'argent est dû : on le demande pour toi.",
  prixMensuel: 29,
  garantieJours: 30,
};

export const prixParJour = (site.prixMensuel * 12) / 365; // ≈ 0,95 €
