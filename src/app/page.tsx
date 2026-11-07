import Link from "next/link";
import { site } from "@/lib/site";
import { StickyCta } from "@/components/StickyCta";

function BoutonCommencer({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/commencer"
      className={`flex h-14 items-center justify-center rounded-md bg-tampon px-6 text-[1.05rem] font-semibold text-white shadow-[0_1px_0_rgba(21,35,59,0.25)] transition active:translate-y-px hover:bg-[#c23a15] ${className}`}
    >
      Commencer, c&apos;est gratuit
    </Link>
  );
}

const benefices = [
  {
    n: "01",
    titre: "Tu n'écris plus rien",
    texte:
      "Chaque relance est rédigée pour toi : courtoise au début, ferme à la fin, toujours professionnelle. Ton client ne lit jamais un message gêné.",
  },
  {
    n: "02",
    titre: "Ça part tout seul",
    texte:
      "À 7, 15 et 30 jours après l'échéance, sans que tu y penses. Le client paie, tu marques la facture encaissée, les relances s'arrêtent.",
  },
  {
    n: "03",
    titre: "La mise en demeure est prête",
    texte:
      "Si le silence continue, la lettre est déjà rédigée : montant, pénalités de retard, indemnité forfaitaire de 40 €. Il ne reste qu'à l'envoyer en recommandé.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Promesse */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-12 sm:pt-20 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tampon">
          Pour les indépendants qui facturent des pros
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2.35rem] leading-[1.04] font-medium tracking-[-0.01em] sm:text-6xl">
          {site.promesse}
        </h1>
        <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-graphite">
          Recouvre écrit et envoie tes relances à 7, 15 et 30 jours. Si rien ne bouge, ta
          mise en demeure est prête. Tu n&apos;as plus jamais à demander toi-même.
        </p>
        <div id="cta-hero" className="mt-8 max-w-sm">
          <BoutonCommencer className="w-full" />
          <p className="mt-3 text-center text-sm text-graphite">
            3 questions · 1 minute · sans carte bancaire
          </p>
        </div>
      </section>

      {/* Douleur chiffrée */}
      <section className="border-y border-filet bg-white/50">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2 sm:items-center sm:py-20">
          <div className="relative rounded-sm border border-filet bg-white p-5 shadow-[0_18px_40px_-24px_rgba(21,35,59,0.35)]">
            <div className="flex items-baseline justify-between border-b border-filet pb-3 text-xs uppercase tracking-[0.12em] text-graphite">
              <span>Facture n° 2026-014</span>
              <span>Échue le 7 août</span>
            </div>
            <dl className="mt-4 space-y-2 text-[0.95rem]">
              <div className="flex justify-between gap-4">
                <dt className="text-graphite">Client</dt>
                <dd>Studio Martin</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-graphite">Prestation</dt>
                <dd className="text-right">Identité visuelle</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-filet pt-3 font-semibold">
                <dt>Montant dû</dt>
                <dd>2 400,00 €</dd>
              </div>
            </dl>
            <span className="absolute -top-3 right-4 rotate-[-6deg] rounded-sm border-2 border-tampon bg-papier px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-tampon">
              92 jours de retard
            </span>
          </div>

          <div>
            <h2 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
              Relancer est gênant. Alors on attend.
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <span className="w-24 shrink-0 font-serif text-2xl font-semibold">2 400 €</span>
                <span className="text-graphite">de travail déjà livré, toujours pas payé.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-24 shrink-0 font-serif text-2xl font-semibold text-tampon">
                  + 40 €
                </span>
                <span className="text-graphite">
                  d&apos;indemnité forfaitaire que la loi te permet de réclamer pour chaque
                  facture payée en retard. Presque toujours oubliée.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-24 shrink-0 font-serif text-2xl font-semibold">0</span>
                <span className="text-graphite">
                  relance envoyée. Au bout de trois mois, la trésorerie manque et la facture
                  est devenue difficile à réclamer.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight font-medium sm:text-4xl">
          L&apos;argent est dû. Recouvre le demande pour toi.
        </h2>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-sm border border-filet bg-filet sm:grid-cols-3">
          {benefices.map((b) => (
            <li key={b.n} className="bg-papier p-6">
              <span className="text-sm font-semibold tracking-[0.12em] text-tampon">{b.n}</span>
              <h3 className="mt-3 font-serif text-[1.45rem] leading-snug font-medium">
                {b.titre}
              </h3>
              <p className="mt-2 leading-relaxed text-graphite">{b.texte}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 hidden max-w-sm sm:block">
          <BoutonCommencer className="w-full" />
          <p className="mt-3 text-center text-sm text-graphite">
            Tu vois ta première relance avant de payer quoi que ce soit.
          </p>
        </div>
      </section>

      {/* Bouton fixe au pouce, sur mobile */}
      <StickyCta cibleId="cta-hero">
        <BoutonCommencer className="w-full" />
      </StickyCta>
    </main>
  );
}
