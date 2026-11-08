"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { sampleRooms, sampleProperties } from "@/lib/sample-data";

export default function InspectionRequestPage() {
  const router = useRouter();
  const params = useParams();
  const roomId = String(params.roomId ?? "r1");
  const room = sampleRooms.find((r) => r.id === roomId) ?? sampleRooms[0];
  const property = sampleProperties.find((p) => p.id === room.propertyId);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-4">
        <p className="text-4xl">✓</p>
        <h1 className="mt-4 text-xl font-bold text-ink">Inspection request sent</h1>
        <p className="mt-2 text-center text-sm text-text-secondary">
          Agent will respond. This is not a reservation.
        </p>
        <Link href="/inspections" className="btn-primary mt-6">
          View my inspections
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-dvh max-w-lg pb-8">
      <AppHeader
        backHref={`/property/${room.propertyId}/room/${room.id}`}
        title="Request inspection"
      />
      <form
        className="space-y-4 px-4 py-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="card flex gap-3">
          <div className="h-14 w-14 shrink-0 rounded-md bg-border/60" />
          <div>
            <p className="font-semibold text-ink">{room.label}</p>
            <p className="text-xs text-text-secondary">{property?.title} · Agent Name</p>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Preferred date</label>
          <input type="date" className="input" required defaultValue="2026-11-14" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Preferred time</label>
          <input type="time" className="input" required defaultValue="10:00" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Your phone</label>
          <input type="tel" className="input" placeholder="+234…" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Message (optional)</label>
          <textarea className="input min-h-[80px]" placeholder="Hello, I'd like to see this room…" />
        </div>
        <p className="text-xs text-text-secondary">Not a reservation or payment.</p>
        <button type="submit" className="btn-primary w-full">Send request</button>
        <button type="button" onClick={() => router.back()} className="btn-secondary w-full">
          Cancel
        </button>
      </form>
    </div>
  );
}
