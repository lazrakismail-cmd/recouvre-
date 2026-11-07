export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-6 py-10">
      <header className="flex items-center justify-between border-b border-filet pb-4">
        <span className="font-serif text-2xl font-semibold tracking-tight">
          Recouvre
        </span>
        <span className="-rotate-3 rounded-sm border-2 border-tampon px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-tampon">
          Ouverture imminente
        </span>
      </header>

      <section className="flex flex-1 flex-col justify-center py-16">
        <h1 className="font-serif text-[2.4rem] leading-[1.05] font-medium">
          Tes factures impayées, relancées jusqu&apos;à la mise en demeure.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-graphite">
          L&apos;argent est dû. Il n&apos;est simplement jamais demandé.
        </p>
      </section>

      <footer className="border-t border-filet pt-4 text-sm text-graphite">
        © 2026 Recouvre
      </footer>
    </main>
  );
}
