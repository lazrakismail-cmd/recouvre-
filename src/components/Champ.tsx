// Affiche une valeur de l'éditeur, ou un champ clairement marqué à compléter.
export function Champ({ valeur, label }: { valeur: string | null; label: string }) {
  if (valeur) return <>{valeur}</>;
  return (
    <mark className="rounded-sm bg-tampon/10 px-1 font-medium text-tampon">
      [À compléter : {label}]
    </mark>
  );
}
