import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-filet">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Recouvre</span>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/mentions-legales" className="underline-offset-4 hover:underline">
            Mentions légales
          </Link>
          <Link href="/cgv" className="underline-offset-4 hover:underline">
            CGV
          </Link>
          <Link href="/confidentialite" className="underline-offset-4 hover:underline">
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
