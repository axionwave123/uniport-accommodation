import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <div className="flex min-h-dvh flex-col pb-20">
      <AppHeader title="Account" />
      <div className="mx-auto w-full max-w-lg flex-1 px-4 py-6">
        <div className="card text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-border text-2xl">
            ☺
          </div>
          <p className="mt-3 font-semibold text-ink">Guest</p>
          <p className="text-sm text-text-secondary">
            Sign in to follow agents, request inspections, and leave reviews
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/auth/sign-in" className="btn-primary">
              Sign in
            </Link>
            <Link href="/auth/sign-up" className="btn-secondary">
              Create account
            </Link>
          </div>
        </div>

        <ul className="mt-6 space-y-1">
          <li>
            <Link href="/inspections" className="card block text-sm font-medium text-ink">
              My inspections →
            </Link>
          </li>
          <li>
            <Link href="/following" className="card block text-sm font-medium text-ink">
              Following →
            </Link>
          </li>
          <li>
            <Link href="/agent" className="card block text-sm font-medium text-ink">
              Agent dashboard (demo) →
            </Link>
          </li>
        </ul>
      </div>
      <BottomNav />
    </div>
  );
}
