import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold text-primary">
            UNIPORT
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/search" className="btn-secondary text-sm">
              Search
            </Link>
            <Link href="/auth/sign-in" className="btn-primary text-sm">
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Find available rooms near UNIPORT
          </h1>
          <p className="mt-3 text-text-secondary">
            Real road distance · Room-level availability · Contact agents directly
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/search" className="btn-primary">
              Search available rooms
            </Link>
            <Link href="/auth/sign-up?role=agent" className="btn-secondary">
              List a property (agents)
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="card text-left">
            <div className="text-2xl">📍</div>
            <h3 className="mt-2 font-semibold text-ink">By road distance</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Actual road routes and travel time from campus, not straight-line.
            </p>
          </div>
          <div className="card text-left">
            <div className="text-2xl">🏠</div>
            <h3 className="mt-2 font-semibold text-ink">Room-level status</h3>
            <p className="mt-1 text-sm text-text-secondary">
              See which rooms are available or occupied inside each building.
            </p>
          </div>
          <div className="card text-left">
            <div className="text-2xl">📞</div>
            <h3 className="mt-2 font-semibold text-ink">Direct contact</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Call or WhatsApp the agent. Request inspection for a specific room.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-text-secondary">
        UNIPORT Student Accommodation · No fees for agents · No payments on platform
      </footer>
    </main>
  );
}
