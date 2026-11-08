"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { sampleAgent } from "@/lib/sample-data";

export default function ContactAgentPage() {
  const router = useRouter();
  const agent = sampleAgent;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 sm:items-center">
      <div className="w-full max-w-sm rounded-t-2xl bg-surface p-6 shadow-xl sm:rounded-2xl">
        <h2 className="text-lg font-semibold text-ink">Contact {agent.name}</h2>
        <p className="mt-1 text-sm text-text-secondary">About Room A1 · Sample Lodge</p>
        <div className="mt-6 space-y-3">
          <a href={`tel:${agent.phone}`} className="btn-primary flex w-full items-center justify-center gap-2">
            Call agent
          </a>
          <a
            href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
          <button type="button" onClick={() => router.back()} className="btn-secondary w-full">
            Cancel
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-text-secondary">
          Rent is paid directly to the agent, not this platform.
        </p>
        <Link href={`/agent/${agent.id}`} className="mt-2 block text-center text-sm text-primary">
          View full profile
        </Link>
      </div>
    </div>
  );
}
