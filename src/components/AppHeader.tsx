import Link from "next/link";

export function AppHeader({
  title,
  backHref,
  right,
}: {
  title?: string;
  backHref?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-lg items-center gap-3 px-4">
        {backHref ? (
          <Link href={backHref} className="min-w-tap text-sm font-medium text-primary">
            ← Back
          </Link>
        ) : (
          <Link href="/" className="text-lg font-bold text-primary">
            UNIPORT
          </Link>
        )}
        {title && (
          <h1 className="flex-1 truncate text-center text-sm font-semibold text-ink">
            {title}
          </h1>
        )}
        <div className="ml-auto flex items-center gap-2">{right}</div>
      </div>
    </header>
  );
}
