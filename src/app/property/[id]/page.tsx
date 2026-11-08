import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { sampleProperties, sampleRooms, sampleAgent } from "@/lib/sample-data";

export function generateStaticParams() {
  return sampleProperties.map((p) => ({ id: p.id }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = sampleProperties.find((p) => p.id === id);
  if (!property) notFound();

  const rooms = sampleRooms.filter((r) => r.propertyId === id);

  return (
    <div className="mx-auto min-h-dvh max-w-lg pb-8">
      <AppHeader backHref="/search" title={property.title} />

      <div className="relative aspect-video bg-ink/90">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-3xl">▶</span>
          <p className="mt-2 text-sm font-medium">Building overview video</p>
          <p className="text-xs opacity-70">Sample media · separate from room media</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold text-ink">{property.title}</h1>
            <p className="text-sm text-text-secondary">{property.address}</p>
            <p className="mt-1 text-sm">★ {property.rating} ({property.reviews} reviews)</p>
          </div>
          <Link href={`/agent/${property.agentId}`} className="text-sm font-medium text-primary">
            Agent profile
          </Link>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {sampleAgent.initials}
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{sampleAgent.name}</p>
            <p className="text-xs text-text-secondary">Open map · Contact below</p>
          </div>
        </div>

        <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-secondary">
          Rooms
        </h2>
        <ul className="mt-2 space-y-2">
          {rooms.map((room) => (
            <li key={room.id}>
              <Link
                href={`/property/${id}/room/${room.id}`}
                className="card flex items-center justify-between gap-3"
              >
                <div>
                  <p className="font-semibold text-ink">{room.label}</p>
                  <p className="text-xs text-text-secondary">{room.type}</p>
                  <p className="mt-0.5 text-sm font-medium">
                    ₦{room.price.toLocaleString()}/{room.period}
                  </p>
                </div>
                <AvailabilityBadge status={room.availability} />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-xs text-text-secondary">
          Sample data only. Live listings after Supabase is connected.
        </p>
      </div>
    </div>
  );
}
