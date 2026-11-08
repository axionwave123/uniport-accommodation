import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { sampleAgent, sampleProperties } from "@/lib/sample-data";

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;
  const agent = sampleAgent;
  const listings = sampleProperties.filter((p) => p.agentId === agent.id);

  return (
    <div className="mx-auto min-h-dvh max-w-lg pb-8">
      <AppHeader backHref="/search" title="Agent profile" />

      <div className="px-4 py-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
            {agent.initials}
          </div>
          <h1 className="mt-3 text-xl font-bold text-ink">{agent.name}</h1>
          <p className="mt-1 text-sm text-text-secondary">
            ★ {agent.rating} · {agent.reviews} reviews
          </p>
          <p className="mt-2 max-w-xs text-sm text-text-secondary">{agent.bio}</p>
          <div className="mt-4 flex gap-2">
            <button type="button" className="btn-secondary">
              Follow
            </button>
            <Link href={`/agent/${agent.id}/contact`} className="btn-primary">
              Contact
            </Link>
          </div>
        </div>

        <h2 className="mt-8 text-sm font-semibold text-ink">Listings ({listings.length})</h2>
        <ul className="mt-2 space-y-2">
          {listings.map((p) => (
            <li key={p.id}>
              <Link href={`/property/${p.id}`} className="card flex gap-3">
                <div className="h-14 w-16 shrink-0 rounded-md bg-border/60" />
                <div>
                  <p className="font-medium text-ink">{p.title}</p>
                  <p className="text-xs text-text-secondary">{p.roomsAvailable} rooms available</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-6 text-sm font-semibold text-ink">Reviews</h2>
        <div className="card mt-2">
          <p className="text-sm text-text-secondary">Sample review text appears here.</p>
          <p className="mt-1 text-xs text-text-secondary">★ ★ ★ ★ ☆</p>
        </div>
        <Link
          href={`/agent/${agent.id}/review`}
          className="mt-3 block text-center text-sm font-medium text-primary"
        >
          Write a review
        </Link>
      </div>
    </div>
  );
}
