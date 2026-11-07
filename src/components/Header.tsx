import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-filet">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-[1.4rem] font-semibold tracking-tight">
          Recouvre
        </Link>
      </div>
    </header>
  );
}
