import { Eyebrow, H2, Lede, Section } from "./ui";

const chain = [
  {
    stage: "Estimate",
    tool: "Excel",
    detail: "You take off the walls, price the studs, board and finish, and add your labor hours by classification.",
  },
  {
    stage: "Sub agreement",
    tool: "Word / PDF",
    detail: "You won it. Now retype the scope and the number into the GC's sub agreement, or into yours.",
  },
  {
    stage: "Budget",
    tool: "A second spreadsheet",
    detail: "The PM rebuilds the estimate as a budget, usually rounded, usually restructured, usually a little different.",
  },
  {
    stage: "Job cost",
    tool: "QuickBooks + memory",
    detail: "Actuals land as lump codes. Nobody can say which line is bleeding until the job is closed.",
  },
  {
    stage: "Pay app",
    tool: "The G703 template",
    detail: "On the 25th, someone rebuilds the schedule of values by hand and reconciles it to change orders.",
  },
];

const costs = [
  {
    n: "01",
    head: "The four numbers drift",
    body: "By month three the estimate, the contract, the budget and the billed SOV don't agree, and no one can tell you which one is right.",
  },
  {
    n: "02",
    head: "Change orders get lost",
    body: "The CO gets signed, the field builds it, and it never makes it into the budget or onto the next pay app. That's margin you gave away.",
  },
  {
    n: "03",
    head: "You find out too late",
    body: "Framing went over in month two. You see it at closeout, when the only thing left to do is write it off.",
  },
  {
    n: "04",
    head: "Billing day eats a week",
    body: "Pay app week is a manual rebuild every month, on every job, for the same numbers you already have.",
  },
];

export function Problem() {
  return (
    <Section id="problem" className="border-t border-line">
      <Eyebrow>The four-copy problem</Eyebrow>
      <H2>
        The same $248,000 lives in five places.
        <br className="hidden sm:block" /> A person keeps them in sync.
      </H2>
      <Lede>
        Every tool a specialty sub is sold treats the estimate, the contract, the budget
        and job costing as four separate documents. Nothing is wrong with any one of
        them. The problem is the seam between them — and there are four seams.
      </Lede>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {chain.map((step, i) => (
          <li
            key={step.stage}
            className={`relative bg-surface p-5 ${i > 0 ? "lg:pl-8" : ""} ${
              i < chain.length - 1 ? "lg:pr-8" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-fg-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold">{step.stage}</span>
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">
              {step.tool}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-fg-muted">{step.detail}</p>
            {i > 0 && (
              <span className="absolute -top-px left-5 z-10 -translate-y-1/2 rounded border border-red/40 bg-ink px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-red lg:left-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                retype
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
        Four hand-offs · four chances to be wrong · zero of them are your trade
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {costs.map((c) => (
          <div key={c.n} className="border-l-2 border-line-bright pl-5">
            <p className="font-mono text-xs text-amber">{c.n}</p>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{c.head}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
