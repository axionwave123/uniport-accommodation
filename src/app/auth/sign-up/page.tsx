"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultRole = searchParams.get("role") === "agent" ? "agent" : "student";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState<"student" | "agent">(defaultRole);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!supabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
          role,
        },
      },
    });

    if (signUpError) {
      setLoading(false);
      setError(signUpError.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: data.user.id,
        display_name: displayName || email.split("@")[0],
        role,
      });

      if (profileError) {
        console.warn("Profile upsert:", profileError.message);
      }

      if (role === "agent") {
        await supabase.from("agent_profiles").upsert({
          user_id: data.user.id,
          public_name: displayName || email.split("@")[0],
        });
      }
    }

    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="card text-center">
        <h2 className="text-lg font-semibold text-ink">Check your email</h2>
        <p className="mt-2 text-sm text-text-secondary">
          We sent a confirmation link to <strong>{email}</strong>. After confirming you can sign in.
        </p>
        <Link href="/auth/sign-in" className="btn-primary mt-6 inline-flex">
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">I am a…</label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
              role === "student"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-surface text-text-secondary"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("agent")}
            className={`flex-1 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
              role === "agent"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-surface text-text-secondary"
            }`}
          >
            Agent / Landlord
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
          Display name
        </label>
        <input
          id="name"
          type="text"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-ink">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="At least 8 characters"
        />
      </div>

      {error && (
        <p className="rounded-md bg-error/10 px-3 py-2 text-sm text-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}

export default function SignUpPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            UNIPORT
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-ink">Create account</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Students can follow agents and request inspections. Agents can list rooms.
          </p>
        </div>

        <Suspense fallback={<div className="card h-64 animate-pulse" />}>
          <SignUpForm />
        </Suspense>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
