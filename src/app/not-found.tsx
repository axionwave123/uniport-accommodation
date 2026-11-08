import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-text-secondary">
        That route does not exist yet, or the link is wrong.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/search" className="btn-secondary">
          Search rooms
        </Link>
        <Link href="/account" className="btn-secondary">
          Account
        </Link>
      </div>
    </main>
  );
}
