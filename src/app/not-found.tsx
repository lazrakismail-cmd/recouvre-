import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <span className="inline-block -rotate-3 rounded-sm border-2 border-tampon px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-tampon">
        Adresse inconnue
      </span>
      <h1 className="mt-5 font-serif text-4xl leading-tight font-medium">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-4 leading-relaxed text-graphite">
        Le lien est peut-être incomplet. Tout ce qu&apos;il te faut est sur l&apos;accueil.
      </p>
      <Link
        href="/"
        className="mt-8 flex h-14 items-center justify-center rounded-md bg-encre px-6 font-semibold text-papier sm:inline-flex"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
