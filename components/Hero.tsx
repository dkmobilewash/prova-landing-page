import Link from "next/link";

const stamps = [
  { label: "Estimate", value: "$248,000" },
  { label: "Contract", value: "$248,000" },
  { label: "Budget", value: "$248,000" },
  { label: "Job cost", value: "$248,000" },
  { label: "Pay app", value: "$248,000" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(245,163,0,0.20),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-bright bg-surface/80 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          Built for union wall &amp; ceiling and specialty trade subs
        </p>

        <h1 className="max-w-4xl text-balance text-[2.6rem] font-bold leading-[1.03] tracking-[-0.02em] sm:text-6xl md:text-[4.25rem]">
          Stop retyping the same numbers into{" "}
          <span className="text-amber-ink">four different tools.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted sm:text-xl">
          You price the job once. Then you type it into the sub agreement. Then into a
          budget spreadsheet. Then again on the 25th when the pay app is due. Prova is
          the contractor OS where the estimate line{" "}
          <em className="not-italic text-fg">is</em> the contract line{" "}
          <em className="not-italic text-fg">is</em> the budget line{" "}
          <em className="not-italic text-fg">is</em> the job cost line.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#early-access"
            className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#dd9200]"
          >
            Get early access
          </Link>
          <Link
            href="#compare"
            className="inline-flex items-center justify-center rounded-md border border-line-bright px-6 py-3.5 text-sm font-semibold transition-colors hover:border-fg-dim hover:bg-surface-2"
          >
            See how it compares
          </Link>
        </div>

        {/* One row, five documents. */}
        <div className="mt-14 rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur-sm sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
              Line 04 · 09-22-16 · Metal stud framing, Level 3
            </p>
            <p className="font-mono text-[11px] text-fg-dim">12,400 SF @ $20.00</p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3 lg:grid-cols-5">
            {stamps.map((s, i) => (
              <div key={s.label} className="bg-surface-2 px-4 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                  {i === 0 ? "①" : "→"} {s.label}
                </p>
                <p className="mt-2 font-mono text-lg font-semibold tabular-nums text-amber-ink">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-fg-muted">
            <span className="font-semibold text-fg">Typed once.</span> Not five copies kept
            in sync by a person at 9pm.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
          <li>AIA-style G702 / G703 billing</li>
          <li>Certified payroll</li>
          <li>Multi-local CBA fringe rates</li>
          <li>Retainage &amp; WIP</li>
        </ul>
      </div>
    </section>
  );
}
