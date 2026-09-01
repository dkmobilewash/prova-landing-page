import Link from "next/link";

const stops = [
  {
    head: "Stop rebuilding the G703",
    body: "Every month, on every job, in Excel.",
  },
  {
    head: "Stop losing change orders",
    body: "Signed, built, and never billed.",
  },
  {
    head: "Stop finding blown lines at closeout",
    body: "When the only move left is a write-off.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(245,163,0,0.20),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-bright bg-surface/80 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          For union wall &amp; ceiling and specialty trade subs
        </p>

        <h1 className="max-w-5xl text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-[3.6rem]">
          Estimate. Contract. Budget. Pay app.
          <br />
          <span className="text-amber-ink">You type the same number four times.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted sm:text-xl">
          In Prova it&apos;s one line item. Price it once at bid time and it&apos;s still
          that same row on the G703 eighteen months later, change orders already in it.
          That&apos;s the whole product.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#early-access"
            className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#dd9200]"
          >
            Get early access
          </Link>
          <Link
            href="#how"
            className="inline-flex items-center justify-center rounded-md border border-line-bright px-6 py-3.5 text-sm font-semibold transition-colors hover:border-fg-dim hover:bg-surface-2"
          >
            Show me
          </Link>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {stops.map((s) => (
            <li key={s.head} className="bg-surface p-5">
              <h2 className="text-[15px] font-semibold tracking-tight">{s.head}</h2>
              <p className="mt-1.5 text-sm text-fg-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
