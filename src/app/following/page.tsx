import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const metadata = { title: "Following" };

export default function FollowingPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Following" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-4">
        <h2 className="text-sm font-semibold text-ink">Agents you follow</h2>
        <ul className="mt-3 space-y-2">
          {["Agent Name", "Agent Two"].map((name) => (
            <li key={name} className="card flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-ink">{name}</p>
                  <p className="text-xs text-text-secondary">Sample agent</p>
                </div>
              </div>
              <span className="text-xs font-medium text-primary">Following ✓</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-text-secondary">
          New listings from agents you follow appear in{" "}
          <Link href="/alerts" className="text-primary">
            Alerts
          </Link>
          .
        </p>
      </div>
      <BottomNav />
    </div>
  );
}
