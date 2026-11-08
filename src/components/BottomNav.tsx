"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const studentTabs = [
  { href: "/", label: "Explore", icon: "⌂" },
  { href: "/search", label: "Map", icon: "◎" },
  { href: "/following", label: "Following", icon: "♥" },
  { href: "/alerts", label: "Alerts", icon: "🔔" },
  { href: "/account", label: "Account", icon: "☺" },
];

const agentTabs = [
  { href: "/agent", label: "Home", icon: "⌂" },
  { href: "/agent/listings", label: "Listings", icon: "☰" },
  { href: "/agent/requests", label: "Requests", icon: "✉" },
  { href: "/account", label: "Profile", icon: "☺" },
];

export function BottomNav({ mode = "student" }: { mode?: "student" | "agent" }) {
  const pathname = usePathname();
  const tabs = mode === "agent" ? agentTabs : studentTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur safe-pb">
      <div className="mx-auto flex max-w-lg items-stretch justify-around">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(tab.href + "/");
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium ${
                active ? "text-primary" : "text-text-secondary"
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
