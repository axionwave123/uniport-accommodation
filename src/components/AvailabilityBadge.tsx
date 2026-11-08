export function AvailabilityBadge({
  status,
}: {
  status: "available" | "occupied" | "pending" | "unavailable";
}) {
  const map = {
    available: { label: "Available", className: "bg-success/15 text-success" },
    occupied: { label: "Occupied", className: "bg-error/15 text-error" },
    pending: { label: "Pending", className: "bg-warning/15 text-warning" },
    unavailable: { label: "Unavailable", className: "bg-disabled/20 text-text-secondary" },
  };
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-xs font-medium ${s.className}`}
    >
      <span aria-hidden>
        {status === "available" ? "✓" : status === "occupied" ? "×" : "•"}
      </span>
      {s.label}
    </span>
  );
}
