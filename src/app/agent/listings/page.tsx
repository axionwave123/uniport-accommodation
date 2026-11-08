import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { sampleRooms } from "@/lib/sample-data";

export const metadata = { title: "Rooms & availability" };

export default function AgentListingsPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Sample Lodge · Rooms" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <ul className="space-y-3">
          {sampleRooms.map((room) => (
            <li key={room.id} className="card">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-ink">{room.label}</p>
                  <p className="text-xs text-text-secondary">
                    ₦{room.price.toLocaleString()}/yr
                  </p>
                </div>
                <AvailabilityBadge status={room.availability} />
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" className="btn-secondary flex-1 text-sm">Edit</button>
                <button type="button" className="btn-secondary flex-1 text-sm">Room media</button>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/agent/listings/new" className="btn-primary mt-4 flex w-full justify-center">
          Publish listing
        </Link>
      </div>
      <BottomNav mode="agent" />
    </div>
  );
}
