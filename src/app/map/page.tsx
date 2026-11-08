import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { sampleProperties } from "@/lib/sample-data";

export const metadata = { title: "Map" };

export default function MapPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader
        title="Map"
        right={
          <div className="flex gap-1 rounded-md border border-border p-0.5 text-xs">
            <span className="rounded bg-primary px-2 py-1 text-white">Normal</span>
            <span className="px-2 py-1 text-text-secondary">Satellite</span>
          </div>
        }
      />

      <div className="relative mx-auto w-full max-w-lg flex-1 min-h-[60vh]">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#c8d9f0]">
          <p className="text-sm font-medium text-ink">Map view</p>
          <p className="mt-1 max-w-xs text-center text-xs text-text-secondary">
            Google Maps loads when NEXT_PUBLIC_GOOGLE_MAPS_KEY is set.
          </p>
          <div className="relative mt-8 h-48 w-64">
            <span className="absolute left-1/3 top-1/4 text-2xl text-primary">📍</span>
            <span className="absolute left-1/2 top-1/2 text-2xl text-primary">📍</span>
            <span className="absolute left-2/3 top-1/3 text-2xl text-primary">📍</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 rounded-t-xl border border-border bg-surface p-4 shadow-lg">
          <p className="text-xs text-text-secondary">Sample · not real data</p>
          <Link href={`/property/${sampleProperties[0].id}`} className="mt-2 block">
            <h2 className="font-semibold text-ink">{sampleProperties[0].title}</h2>
            <p className="text-xs text-text-secondary">{sampleProperties[0].address}</p>
            <p className="mt-1 text-sm text-primary">
              {sampleProperties[0].roomsAvailable} available · View rooms →
            </p>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
