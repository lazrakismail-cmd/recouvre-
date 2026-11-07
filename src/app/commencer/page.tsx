import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commencer",
  robots: { index: false },
};

// Remplacé au J3 par les trois questions.
export default function Commencer() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <span className="inline-block -rotate-3 rounded-sm border-2 border-tampon px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-tampon">
        Presque prêt
      </span>
      <h1 className="mt-5 font-serif text-4xl leading-tight font-medium">
        Le diagnostic ouvre très bientôt.
      </h1>
      <p className="mt-4 leading-relaxed text-graphite">
        Trois questions sur tes factures en attente, et tu verras ce qu&apos;elles te coûtent
        aujourd&apos;hui. Reviens dans quelques jours.
      </p>
      <Link href="/" className="mt-8 inline-block font-medium underline underline-offset-4">
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
