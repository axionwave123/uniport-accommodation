import Link from "next/link";
import { BottomNav } from "@/components/BottomNav";
import { sampleProperties } from "@/lib/sample-data";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold text-primary">
            UNIPORT
          </Link>
          <Link href="/auth/sign-in" className="btn-primary px-3 py-1.5 text-sm">
            Sign in
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <h1 className="text-xl font-bold text-ink">Find a room near UNIPORT</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Real road distance · Room-level availability · Direct agent contact
        </p>

        <Link href="/search" className="relative mt-4 block">
          <div className="input flex items-center gap-2 text-text-secondary">
            <span>⌕</span>
            <span>Search area or street</span>
          </div>
        </Link>

        <div className="mt-3 flex gap-2">
          <Link href="/search" className="btn-primary flex-1 text-center text-sm">
            Search list
          </Link>
          <Link href="/map" className="btn-secondary flex-1 text-center text-sm">
            Map
          </Link>
        </div>

        <p className="mt-6 text-xs text-text-secondary">
          Sample listings (not real data). Live rooms after Supabase is connected.
        </p>

        <ul className="mt-2 space-y-3">
          {sampleProperties.map((p) => (
            <li key={p.id}>
              <Link href={`/property/${p.id}`} className="card block">
                <div className="flex gap-3">
                  <div className="h-20 w-24 shrink-0 rounded-md bg-border/60" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-semibold text-ink">{p.title}</h2>
                      <AvailabilityBadge status="available" />
                    </div>
                    <p className="text-xs text-text-secondary">{p.address}</p>
                    <p className="mt-1 text-sm font-medium">
                      From ₦{p.priceFrom.toLocaleString()}/yr
                    </p>
                    <p className="text-xs text-text-secondary">
                      {p.roomsAvailable} rooms available · {p.agentName}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <BottomNav />
    </div>
  );
}
