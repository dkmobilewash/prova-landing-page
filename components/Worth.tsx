import { Eyebrow, H2, Lede, Section } from "./ui";

const cases = [
  {
    label: "One missed change order",
    figure: "$7,900",
    sub: "profit on a $36,000 CO at 22%",
    body:
      "Most shops can name one from last year that got signed, got built, and never got billed. You already spent the labor to earn it.",
    fix: "In Prova an approved CO is on the next pay app automatically, because the budget and the schedule of values are the same data.",
  },
  {
    label: "One week a month in the office",
    figure: "40+ hrs",
    sub: "every month, on every job",
    body:
      "Rebuilding continuation sheets across eleven jobs. Chasing what's stored versus installed. Reconciling change orders by hand against a budget somebody rebuilt in March.",
    fix: "Put your office rate against that number. The pay apps generate from the line items you already have.",
  },
  {
    label: "One job that drifts quietly",
    figure: "6%",
    sub: "for three months before anyone sees it",
    body:
      "A line running 6% over for a quarter is a five-figure hole you meet at closeout, when the only thing left to do is write it off.",
    fix: "Seeing it in month two is the difference between a conversation with the GC and an entry in the loss column.",
  },
];

export function Worth() {
  return (
    <Section id="worth" className="border-t border-line">
      <Eyebrow>Is it worth it?</Eyebrow>
      <H2>Run these three against your own last twelve months.</H2>
      <Lede>
        We&apos;re not going to put a savings calculator on this page and pretend we
        know your business. Here&apos;s the arithmetic that actually decides it — use
        your numbers, not ours.
      </Lede>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.label} className="flex flex-col bg-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
              {c.label}
            </p>
            <p className="mt-4 font-mono text-4xl font-bold tracking-tight text-amber-ink">
              {c.figure}
            </p>
            <p className="mt-1 font-mono text-[11px] text-fg-dim">{c.sub}</p>
            <p className="mt-5 text-sm leading-relaxed text-fg-muted">{c.body}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-fg">
              {c.fix}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-5 font-mono text-[11px] text-fg-dim">
        Illustrative figures. The point is the shape of the math, not our numbers.
      </p>
    </Section>
  );
}
