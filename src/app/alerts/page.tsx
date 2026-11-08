import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

const alerts = [
  { id: "1", text: "Agent Name posted a new listing", detail: "Sample Hall, Choba · 2 rooms", time: "3 min ago" },
  { id: "2", text: "Inspection accepted", detail: "Room C3 · Sun 15 Nov", time: "Yesterday" },
  { id: "3", text: "Agent Two posted a new listing", detail: "Yesterday", time: "Yesterday" },
];

export const metadata = { title: "Alerts" };

export default function AlertsPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Alerts" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <p className="mb-3 text-xs text-text-secondary">In-app notifications (sample)</p>
        <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
          {alerts.map((a) => (
            <li key={a.id} className="px-4 py-3">
              <p className="text-sm font-medium text-ink">{a.text}</p>
              <p className="text-xs text-text-secondary">{a.detail}</p>
              <p className="mt-0.5 text-[10px] text-text-secondary">{a.time}</p>
            </li>
          ))}
        </ul>
      </div>
      <BottomNav />
    </div>
  );
}
