import { Eyebrow, H2, Lede, Section } from "./ui";

const problems = [
  {
    problem:
      "You type the same number into the estimate, the sub agreement, the budget tab and the pay app.",
    fix: "They're one line in Prova. Typed at bid time, still there on the G703.",
  },
  {
    problem:
      "A change order gets signed, the field builds it, and it never lands on a pay app.",
    fix: "An approved CO writes straight into the budget and next month's continuation sheet.",
  },
  {
    problem:
      "Framing went over in month two. You find out at closeout, when it's a write-off.",
    fix: "Budget vs. forecast vs. actual, per line, moving as the costs land.",
  },
  {
    problem:
      "Pay app week is one person rebuilding eleven G703s in Excel and praying the retainage ties out.",
    fix: "The continuation sheet is already the job's line items. Nothing to rebuild.",
  },
  {
    problem:
      "Your fringe rates live in a spreadsheet one person maintains and nobody else will touch.",
    fix: "CBA rates by local, effective-dated to the day worked. Certified payroll off the same field time.",
  },
  {
    problem:
      "You can't say which GC actually pays on time. You just have a feeling about it.",
    fix: "On-time rate and average days to pay, computed from your own invoice history.",
  },
];

export function Problems() {
  return (
    <Section id="problems" className="border-t border-line">
      <Eyebrow>Sound familiar?</Eyebrow>
      <H2>If four of these are true, you&apos;re already paying for Prova.</H2>
      <Lede>
        You&apos;re just paying for it in rework, in change orders that never got
        billed, and in margin you found out about too late to do anything.
      </Lede>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {problems.map((p, i) => (
          <li key={p.problem} className="grid gap-2 py-5 lg:grid-cols-[auto_1fr_1fr] lg:gap-8">
            <span className="font-mono text-xs text-fg-dim lg:pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[15px] font-semibold leading-snug tracking-tight sm:text-base">
              {p.problem}
            </p>
            <p className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber"
              />
              {p.fix}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
