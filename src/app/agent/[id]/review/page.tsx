"use client";

import { useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { sampleAgent } from "@/lib/sample-data";

export default function WriteReviewPage() {
  const [rating, setRating] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-4">
        <p className="text-4xl">✓</p>
        <h1 className="mt-4 text-xl font-bold text-ink">Review submitted</h1>
        <Link href={`/agent/${sampleAgent.id}`} className="btn-primary mt-6">
          Back to profile
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-dvh max-w-lg">
      <AppHeader backHref={`/agent/${sampleAgent.id}`} title={`Review ${sampleAgent.name}`} />
      <form
        className="space-y-4 px-4 py-6"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <div className="text-center">
          <p className="text-sm text-text-secondary">Tap to rate</p>
          <div className="mt-2 flex justify-center gap-2 text-3xl">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                className={n <= rating ? "text-warning" : "text-border"}
                aria-label={`${n} stars`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Your review</label>
          <textarea className="input min-h-[120px]" placeholder="Share your experience…" required />
        </div>
        <button type="submit" className="btn-primary w-full" disabled={rating < 1}>
          Submit review
        </button>
        <Link href={`/agent/${sampleAgent.id}`} className="btn-secondary block w-full text-center">
          Cancel
        </Link>
      </form>
    </div>
  );
}
