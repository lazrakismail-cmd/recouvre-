import type { Metadata } from "next";
import { Champ } from "@/components/Champ";
import { PageLegale } from "@/components/PageLegale";
import { editeur } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Quelles données Recouvre collecte, pourquoi, et comment exercer tes droits.",
};

export default function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité" maj="7 novembre 2026">
      <h2>Responsable du traitement</h2>
      <p>
        <Champ valeur={editeur.nom} label="nom complet" />, {editeur.statut},{" "}
        <Champ valeur={editeur.adresse} label="adresse fiscale" />. Contact :{" "}
        <Champ valeur={editeur.email} label="email de contact" />.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>Ton compte : adresse email et nom ou raison sociale.</li>
        <li>
          Tes factures : numéro, montant, échéance, fichier éventuel, et les coordonnées
          professionnelles de ton client débiteur (nom, email, adresse).
        </li>
        <li>Ton abonnement : statut et historique des paiements. Les numéros de carte sont traités uniquement par Stripe, jamais par Recouvre.</li>
        <li>La mesure d&apos;audience : des statistiques de visite anonymes, sans cookie publicitaire.</li>
      </ul>

      <h2>Pourquoi</h2>
      <p>
        Ces données servent uniquement à fournir le service : envoyer tes relances, générer ta
        mise en demeure, gérer ton abonnement et comprendre combien de visiteurs deviennent
        clients. Elles ne sont jamais vendues ni utilisées pour de la publicité. La base légale
        est l&apos;exécution du contrat d&apos;abonnement, et notre intérêt légitime pour la
        mesure d&apos;audience.
      </p>

      <h2>Sous-traitants</h2>
      <ul>
        <li>Vercel (hébergement du site)</li>
        <li>Supabase (base de données et connexion)</li>
        <li>Stripe (paiement)</li>
        <li>Un service d&apos;envoi d&apos;emails, pour les relances</li>
      </ul>
      <p>
        Certains sont établis aux États-Unis ; les transferts sont encadrés par les clauses
        contractuelles types de la Commission européenne.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées tant que ton compte est actif, puis supprimées dans les 3
        mois suivant la fin de l&apos;abonnement, sauf les pièces comptables que la loi oblige
        à garder plus longtemps.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux demander l&apos;accès, la rectification, la suppression ou l&apos;export de tes
        données, ou t&apos;opposer à un traitement, en écrivant à{" "}
        <Champ valeur={editeur.email} label="email de contact" />. Réponse sous un mois. Tu
        peux aussi saisir l&apos;autorité de protection des données (AEPD en Espagne, CNIL en
        France).
      </p>
    </PageLegale>
  );
}
