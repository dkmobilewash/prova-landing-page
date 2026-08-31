import { Eyebrow, H2, Lede, Section } from "./ui";

const does = [
  {
    title: "Drafts an estimate from a scope narrative",
    body: "Paste the GC's scope-of-work paragraph and get draft line items back to check, price and edit. You approve every line before it's anything.",
  },
  {
    title: "Reads your compliance paperwork",
    body: "Upload a COI, a lien waiver or a certified payroll submission and the party, amounts and dates get pulled out for you to confirm.",
  },
  {
    title: "Explains your WIP in plain language",
    body: "It tells you what over-billed by $41,000 on job 2418 actually means and what to do about it — after the number has already been computed.",
  },
];

const doesnt = [
  "Calculate a percent complete",
  "Decide how much to bill",
  "Compute earned revenue or margin",
  "Set a retainage or fringe amount",
  "Touch a single figure on a G702 or G703",
];

export function AiTrust() {
  return (
    <Section className="border-t border-line">
      <div className="rounded-2xl border border-line bg-surface-2 p-6 sm:p-10">
        <Eyebrow>The AI question, answered straight</Eyebrow>
        <H2>
          Prova&apos;s AI never does your math.
          <br className="hidden sm:block" />{" "}
          <span className="text-amber">It explains math you can trace.</span>
        </H2>
        <Lede>
          Every dollar figure in Prova is produced by a deterministic formula running on
          your line items. The AI reads those numbers and writes about them. It is never
          in the calculation path. When your CPA, your banker or your surety asks where a
          number came from, the answer is a formula and a line item — never a model.
        </Lede>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
          <div className="bg-surface p-6">
            <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-green">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green" />
              What the AI does
            </p>
            <ul className="space-y-5">
              {does.map((d) => (
                <li key={d.title}>
                  <h3 className="text-sm font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-6">
            <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-red">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red" />
              What the AI is not allowed to do
            </p>
            <ul className="space-y-3">
              {doesnt.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-md border border-line bg-surface-2 px-4 py-3 text-sm text-fg-muted"
                >
                  <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5 shrink-0 text-red/70" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-relaxed text-fg-dim">
              Cash flow forecasting works the same way: the projection is built strictly
              from real due dates and payment terms on file. If we don&apos;t have a date,
              we don&apos;t invent one.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
