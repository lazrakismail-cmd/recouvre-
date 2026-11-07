import type { Metadata } from "next";
import { Champ } from "@/components/Champ";
import { PageLegale } from "@/components/PageLegale";
import { editeur, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Abonnement Recouvre : prix, garantie satisfait ou remboursé, résiliation.",
};

export default function CGV() {
  return (
    <PageLegale titre="Conditions générales de vente" maj="7 novembre 2026">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions régissent l&apos;abonnement au service Recouvre, vendu par{" "}
        <Champ valeur={editeur.nom} label="nom complet" /> ({editeur.statut}, NIF{" "}
        <Champ valeur={editeur.nif} label="NIF" />). Recouvre permet de suivre des factures
        impayées, d&apos;envoyer des relances écrites automatiques et de générer une lettre de
        mise en demeure.
      </p>

      <h2>2. Clients</h2>
      <p>
        Le service est réservé aux professionnels (indépendants, sociétés, associations) qui
        l&apos;utilisent pour recouvrer leurs propres factures émises à d&apos;autres
        professionnels. En souscrivant, le client déclare agir dans le cadre de son activité
        professionnelle.
      </p>

      <h2>3. Prix et paiement</h2>
      <p>
        L&apos;abonnement coûte {site.prixMensuel} € par mois (
        <Champ valeur={null} label="HT ou TTC, selon le régime de TVA" />
        ), factures illimitées. Il est payé par carte bancaire via Stripe, à la souscription
        puis chaque mois à la même date. Une facture est émise pour chaque paiement.
      </p>

      <h2>4. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant les {site.garantieJours} jours qui suivent le premier paiement, le client peut
        demander le remboursement intégral de ce paiement, sans avoir à se justifier. Il suffit
        d&apos;écrire à <Champ valeur={editeur.email} label="email de contact" /> depuis
        l&apos;adresse du compte. Le remboursement est lancé sous 48 heures ouvrées sur la carte
        utilisée ; il apparaît ensuite sur le compte bancaire sous 5 à 10 jours selon la banque.
        L&apos;abonnement est alors résilié.
      </p>

      <h2>5. Durée et résiliation</h2>
      <p>
        L&apos;abonnement est sans engagement. Il se renouvelle chaque mois et peut être
        résilié à tout moment, sur simple demande par email ou depuis l&apos;espace client
        lorsqu&apos;il est disponible. La résiliation prend effet à la fin de la période déjà
        payée ; aucun nouveau prélèvement n&apos;a lieu.
      </p>

      <h2>6. Ce que fait Recouvre, et ce qu&apos;il ne fait pas</h2>
      <p>
        Recouvre fournit des modèles de relances et de mise en demeure rédigés à partir des
        informations saisies par le client, et les envoie en son nom. Recouvre n&apos;est ni
        un avocat ni une société de recouvrement : il ne donne pas de conseil juridique, ne
        garantit pas le paiement par le débiteur et ne mène aucune procédure judiciaire. Le
        client reste responsable de l&apos;exactitude des montants, des dates et des
        coordonnées saisis.
      </p>

      <h2>7. Disponibilité</h2>
      <p>
        Le service est accessible en ligne en continu, sauf maintenance ou incident. En cas
        d&apos;interruption, les relances programmées sont envoyées dès le rétablissement du
        service.
      </p>

      <h2>8. Données</h2>
      <p>
        Le traitement des données est décrit dans la{" "}
        <a href="/confidentialite" className="underline underline-offset-4">
          politique de confidentialité
        </a>
        .
      </p>

      <h2>9. Droit applicable et litiges</h2>
      <p>
        Les présentes conditions sont soumises au{" "}
        <Champ valeur={null} label="droit applicable, à valider avec ton gestor" />. En cas
        de litige, les parties cherchent d&apos;abord une solution amiable en écrivant à{" "}
        <Champ valeur={editeur.email} label="email de contact" />.
      </p>
    </PageLegale>
  );
}
