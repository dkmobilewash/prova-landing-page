"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Eyebrow, H2 } from "./ui";

type Status = "idle" | "sending" | "done" | "error";

const promises = [
  "A working account, not a slide deck",
  "Your scope catalog and GC list loaded with you",
  "A straight answer on anything that isn't built yet",
];

export function EarlyAccess() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(json.error ?? "Something went wrong. Try again.");
      }
      form.reset();
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="early-access" className="relative overflow-hidden border-t border-line px-5 py-20 sm:px-8 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_110%,rgba(245,163,0,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Early access</Eyebrow>
          <H2>
            Bring us your ugliest job.
            <br className="hidden sm:block" /> We&apos;ll build it in front of you.
          </H2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            Not a scripted demo. Pick a real job — the one with four change orders and a
            GC who pays in 62 days — and we&apos;ll run it from estimate to pay app while
            you watch.
          </p>

          <ul className="mt-8 space-y-3">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-fg-muted">
                <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-amber-ink" fill="none">
                  <path
                    d="M3 8.5 6.2 11.7 13 4.9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-fg-dim">
            Rather just email?{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-amber-ink underline underline-offset-4 hover:text-[#ffc451]"
            >
              {site.contactEmail}
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex h-full min-h-64 flex-col items-start justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-ink">
                Got it
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                We&apos;ll be in touch.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
                Someone who knows the trade will reach out — not a sales development rep
                working from a script. Have the job number ready.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-fg-dim underline underline-offset-4 hover:text-fg"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" required />
                <Field label="Work email" name="email" type="email" autoComplete="email" required />
              </div>
              <Field label="Company" name="company" autoComplete="organization" required />

              <div>
                <label
                  htmlFor="crews"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim"
                >
                  Field headcount
                </label>
                <select
                  id="crews"
                  name="crews"
                  defaultValue=""
                  className="w-full rounded-md border border-line bg-surface-2 px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-amber"
                >
                  <option value="">Select one</option>
                  <option value="1-10">1–10</option>
                  <option value="11-30">11–30</option>
                  <option value="31-75">31–75</option>
                  <option value="76-150">76–150</option>
                  <option value="150+">150+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim"
                >
                  What are you running today?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Trade, locals you work under, and what's currently held together with spreadsheets."
                  className="w-full resize-y rounded-md border border-line bg-surface-2 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-dim/70 outline-none transition-colors focus:border-amber"
                />
              </div>

              {/* Honeypot */}
              <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-red">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-amber px-5 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#dd9200] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request early access"}
              </button>
              <p className="text-center text-[12px] text-fg-dim">
                No card, no contract, no drip campaign.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim"
      >
        {label}
        {required && <span className="text-amber-ink"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-line bg-surface-2 px-3.5 py-2.5 text-sm text-fg outline-none transition-colors focus:border-amber"
      />
    </div>
  );
}
