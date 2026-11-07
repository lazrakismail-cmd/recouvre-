export function PageLegale({
  titre,
  maj,
  children,
}: {
  titre: string;
  maj: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-10 sm:py-16">
      <h1 className="font-serif text-4xl leading-tight font-medium">{titre}</h1>
      <p className="mt-2 text-sm text-graphite">Dernière mise à jour : {maj}</p>
      <div className="mt-8 space-y-4 leading-relaxed text-encre/90 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-encre [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
        {children}
      </div>
    </main>
  );
}
