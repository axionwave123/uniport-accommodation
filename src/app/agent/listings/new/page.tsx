"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function CreateListingPage() {
  return (
    <div className="mx-auto min-h-dvh max-w-lg pb-8">
      <AppHeader backHref="/agent" title="New listing · 1/3" />
      <form className="space-y-4 px-4 py-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Property title</label>
          <input className="input" placeholder="Sample Lodge" defaultValue="Sample Lodge" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Address</label>
          <input className="input" defaultValue="Street, Choba, Port Harcourt" />
        </div>
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border bg-border/30 text-sm text-text-secondary">
          Map pin picker · requires Google Maps key
        </div>
        <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border text-sm text-text-secondary">
          Upload overview video (1 required)
        </div>
        <Link href="/agent/listings" className="btn-primary flex w-full justify-center">
          Next: add rooms
        </Link>
      </form>
    </div>
  );
}
