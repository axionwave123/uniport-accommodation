import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { sampleProperties } from "@/lib/sample-data";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader
        title="Find a room near UNIPORT"
        right={
          <Link href="/map" className="text-sm font-medium text-primary">
            Map
          </Link>
        }
      />

      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search area or street"
            className="input pl-10"
            readOnly
            aria-label="Search area or street"
          />
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
            ⌕
          </span>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 text-sm">
          <button type="button" className="btn-secondary shrink-0 rounded-pill px-3 py-1.5 text-xs">
            Available now
          </button>
          <button type="button" className="btn-secondary shrink-0 rounded-pill px-3 py-1.5 text-xs">
            Nearest first
          </button>
          <button type="button" className="btn-secondary shrink-0 rounded-pill px-3 py-1.5 text-xs">
            Price ↑
          </button>
        </div>

        <p className="mt-4 text-xs text-text-secondary">
          Sample listings only — not real data. Connect Supabase to show live rooms.
        </p>

        <ul className="mt-3 space-y-3">
          {sampleProperties.map((p) => (
            <li key={p.id}>
              <Link href={`/property/${p.id}`} className="card block transition hover:border-primary/40">
                <div className="flex gap-3">
                  <div className="h-20 w-24 shrink-0 rounded-md bg-border/60" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-semibold text-ink">{p.title}</h2>
                      <AvailabilityBadge status="available" />
                    </div>
                    <p className="mt-0.5 text-xs text-text-secondary">{p.address}</p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      From ₦{p.priceFrom.toLocaleString()}/yr
                    </p>
                    <p className="mt-0.5 text-xs text-text-secondary">
                      ★ {p.rating} · {p.roomsAvailable} rooms available · {p.agentName}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <BottomNav />
    </div>
  );
}
