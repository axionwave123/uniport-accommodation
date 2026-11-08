import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

const items = [
  { id: "1", room: "Room A1 · Sample Lodge", when: "Sat 14 Nov · 10:00 AM", status: "pending" as const },
  { id: "2", room: "Room C3 · Sample Court", when: "Sun 15 Nov · 2:00 PM", status: "accepted" as const },
  { id: "3", room: "Room B1 · Sample Lodge", when: "Agent suggests Mon 16 Nov", status: "reschedule" as const },
  { id: "4", room: "Room D2", when: "Declined", status: "declined" as const },
];

const statusStyle = {
  pending: "bg-warning/15 text-warning",
  accepted: "bg-success/15 text-success",
  reschedule: "bg-primary/15 text-primary",
  declined: "bg-error/15 text-error",
};
const statusLabel = {
  pending: "Pending",
  accepted: "Accepted",
  reschedule: "New time proposed",
  declined: "Declined",
};

export const metadata = { title: "My inspections" };

export default function InspectionsPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="My inspections" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <p className="mb-3 text-xs text-text-secondary">Sample status history</p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-ink">{item.room}</p>
                  <p className="mt-0.5 text-xs text-text-secondary">{item.when}</p>
                </div>
                <span className={`rounded-pill px-2 py-0.5 text-xs font-medium ${statusStyle[item.status]}`}>
                  {statusLabel[item.status]}
                </span>
              </div>
              {item.status === "reschedule" && (
                <div className="mt-3 flex gap-2">
                  <button type="button" className="btn-primary flex-1 text-sm">Accept</button>
                  <button type="button" className="btn-secondary flex-1 text-sm">Decline</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <Link href="/search" className="mt-6 block text-center text-sm text-primary">
          Find more rooms →
        </Link>
      </div>
      <BottomNav />
    </div>
  );
}
