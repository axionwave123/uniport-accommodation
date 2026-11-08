import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const metadata = { title: "Agent dashboard" };

export default function AgentDashboardPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Dashboard" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <p className="mb-3 text-xs text-text-secondary">Agent demo · sample numbers only</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="card">
            <p className="text-xs text-text-secondary">Listing views</p>
            <p className="text-2xl font-bold text-ink">—</p>
          </div>
          <div className="card">
            <p className="text-xs text-text-secondary">Pending inspections</p>
            <p className="text-2xl font-bold text-ink">3</p>
          </div>
          <div className="card">
            <p className="text-xs text-text-secondary">Followers</p>
            <p className="text-2xl font-bold text-ink">—</p>
          </div>
          <div className="card">
            <p className="text-xs text-text-secondary">Rooms available</p>
            <p className="text-2xl font-bold text-ink">5</p>
          </div>
        </div>
        <Link href="/agent/listings/new" className="btn-primary mt-6 flex w-full justify-center">
          + Add new listing
        </Link>
        <Link href="/agent/listings" className="btn-secondary mt-2 flex w-full justify-center">
          Manage rooms
        </Link>
      </div>
      <BottomNav mode="agent" />
    </div>
  );
}
