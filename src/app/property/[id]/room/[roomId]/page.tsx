import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { sampleProperties, sampleRooms } from "@/lib/sample-data";

export function generateStaticParams() {
  return sampleRooms.map((r) => ({ id: r.propertyId, roomId: r.id }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string; roomId: string }>;
}) {
  const { id, roomId } = await params;
  const property = sampleProperties.find((p) => p.id === id);
  const room = sampleRooms.find((r) => r.id === roomId && r.propertyId === id);
  if (!property || !room) notFound();

  return (
    <div className="mx-auto min-h-dvh max-w-lg pb-8">
      <AppHeader backHref={`/property/${id}`} title={`${room.label} · ${property.title}`} />

      <div className="relative aspect-[4/3] bg-primary/20">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-ink">
          <p className="text-sm font-medium">Room media gallery</p>
          <p className="text-xs text-text-secondary">Photos / video for this room only</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold text-ink">{room.label}</h1>
            <p className="text-sm text-text-secondary">{room.type}</p>
          </div>
          <AvailabilityBadge status={room.availability} />
        </div>

        <p className="mt-3 text-2xl font-bold text-ink">
          ₦{room.price.toLocaleString()}
          <span className="text-base font-normal text-text-secondary">/{room.period}</span>
        </p>
        <p className="mt-2 text-xs text-text-secondary">
          Inspection request ≠ reservation. No payment on this platform.
        </p>

        <div className="mt-6 space-y-2">
          {room.availability === "available" ? (
            <Link href={`/inspect/${room.id}`} className="btn-primary flex w-full justify-center">
              Request inspection for this room
            </Link>
          ) : (
            <button type="button" disabled className="btn-primary w-full opacity-50">
              Occupied — not bookable
            </button>
          )}
          <div className="flex gap-2">
            <Link href="/agent/a1/contact" className="btn-secondary flex-1 text-center">
              Contact agent
            </Link>
            <Link href="/agent/a1" className="btn-secondary flex-1 text-center">
              Agent profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
