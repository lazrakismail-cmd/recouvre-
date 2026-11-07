import type { Metadata } from "next";
import { Champ } from "@/components/Champ";
import { PageLegale } from "@/components/PageLegale";
import { editeur } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergeur et contact du site Recouvre.",
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" maj="7 novembre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site Recouvre est édité par <Champ valeur={editeur.nom} label="nom complet" />,{" "}
        {editeur.statut}.
      </p>
      <ul>
        <li>
          NIF : <Champ valeur={editeur.nif} label="NIF" />
        </li>
        <li>
          Adresse : <Champ valeur={editeur.adresse} label="adresse fiscale" />
        </li>
        <li>
          Email : <Champ valeur={editeur.email} label="email de contact" />
        </li>
      </ul>
      <p>
        Directeur de la publication : <Champ valeur={editeur.nom} label="nom complet" />.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
        États-Unis — vercel.com.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, l&apos;identité visuelle et les modèles de lettres de Recouvre sont protégés.
        Les lettres générées pour un client lui appartiennent et peuvent être librement
        envoyées à ses débiteurs.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question sur le site : <Champ valeur={editeur.email} label="email de contact" />.
      </p>
    </PageLegale>
  );
}
