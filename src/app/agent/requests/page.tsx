import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

const requests = [
  { id: "1", student: "Student One", room: "Room A1 · Sample Lodge", when: "Sat 14 Nov · 10:00 AM", message: "Hello, I'd like to see this room…" },
  { id: "2", student: "Student Two", room: "Room B1 · Sample Lodge", when: "Sun 15 Nov · 11:00 AM", message: "" },
];

export const metadata = { title: "Inspection inbox" };

export default function AgentRequestsPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Requests" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <div className="mb-3 flex gap-2 text-sm">
          <span className="rounded-pill bg-primary px-3 py-1 text-white">Pending</span>
          <span className="rounded-pill border border-border px-3 py-1 text-text-secondary">Upcoming</span>
          <span className="rounded-pill border border-border px-3 py-1 text-text-secondary">Past</span>
        </div>
        <ul className="space-y-3">
          {requests.map((r) => (
            <li key={r.id} className="card">
              <p className="font-semibold text-ink">{r.student}</p>
              <p className="text-xs text-text-secondary">{r.room}</p>
              <p className="mt-1 text-sm text-text-secondary">{r.when}</p>
              {r.message && (
                <p className="mt-2 text-sm italic text-text-secondary">&ldquo;{r.message}&rdquo;</p>
              )}
              <div className="mt-3 flex gap-2">
                <button type="button" className="btn-primary flex-1 text-sm">Accept</button>
                <button type="button" className="btn-secondary flex-1 text-sm">New time</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-text-secondary">
          Accepting does NOT mark room occupied
        </p>
      </div>
      <BottomNav mode="agent" />
    </div>
  );
}
