import { Eyebrow, H2, Lede, Section } from "./ui";

const moments = [
  {
    when: "Thursday, 4:00 pm",
    title: "Three bids due tomorrow",
    now: "You open last spring's job, save-as, and start deleting. Half the pricing is stale, the labor hours are somebody's memory, and you don't remember what you bid this GC last time.",
    prova:
      "Build from your own scope catalog of previously-priced work. Labor hours come in by classification — foreman, journeyman, apprentice, per local. Pull up every bid you've ever sent this GC, what you bid, and whether you won.",
    proof: "Scope catalogs · bid history by GC · AI-drafted line items from a scope narrative",
  },
  {
    when: "Tuesday, 8:12 am",
    title: "\"You got it — send us a sub agreement\"",
    now: "Somebody retypes the estimate into the contract, then retypes it again into a budget tab. Two chances to fat-finger a number that follows you for eighteen months.",
    prova:
      "Mark the estimate won. It becomes the contract, and the contract is the budget. Send it for signature and keep a timestamped snapshot of exactly what was signed.",
    proof: "Estimate → contract with no re-entry · e-signature · versioned amendments",
  },
  {
    when: "Wednesday, 1:30 pm",
    title: "The GC adds soffits in Area B",
    now: "The CO gets signed. The field builds it. Six weeks later nobody put it in the budget, it's not on the SOV, and you're arguing about $36,000 you already spent.",
    prova:
      "Write the change order into the same lines. Contract sum, budget, forecast, percent complete and next month's continuation sheet all move at once. There is nothing to reconcile.",
    proof: "Change orders write to the live budget — no regenerate step",
  },
  {
    when: "The 25th",
    title: "Pay app day, eleven jobs",
    now: "Office staff rebuilds a G703 per job in Excel, hand-checks previous-vs-this-period, chases what's stored on site but not installed, and prays the retainage math ties out.",
    prova:
      "The continuation sheet is already the job's line items — previous, this period, materials stored, total to date, balance to finish. The G702 summary comes off the same numbers. Retainage is tracked, not recalculated.",
    proof: "G703 continuation sheets · G702 summaries · materials stored · payment status per app",
  },
  {
    when: "Friday, payroll",
    title: "Certified payroll and fringes",
    now: "Field time comes in on paper. Someone keys it in, looks up which fringe rates were in effect back in June, and hopes the wrong rate didn't quietly wreck the job cost on a closed month.",
    prova:
      "Field time is entered by employee, job and cost code with straight, OT, DT and shift differential. Fringes apply at the rate that was actually in effect on the date worked, per craft and per local — so a mid-project raise doesn't rewrite last quarter's job costing.",
    proof: "Effective-dated fringe schedules · per diem + travel · dispatch slips · certified payroll summaries",
  },
  {
    when: "Month-end",
    title: "The banker wants WIP",
    now: "A weekend rebuilding percent-complete by hand across every open job, then explaining over/under billing to somebody who doesn't build walls.",
    prova:
      "Percent complete is computed line by line from real costs against real budgets. Over- and under-billing falls out of it. Cash flow projects forward from actual due dates and payment terms on file — never a guess.",
    proof: "Cost-to-cost WIP · over/under billing · AR aging · retainage receivable · cash forecast",
  },
];

export function Workflows() {
  return (
    <Section id="workflow" className="border-t border-line">
      <Eyebrow>Your week, not a feature list</Eyebrow>
      <H2>The six moments where the money actually leaks.</H2>
      <Lede>
        Nobody buys software because it has modules. You buy it because bid day, the 25th
        and payroll Friday stop being a fire drill. Here&apos;s what changes.
      </Lede>

      <div className="mt-14 space-y-4">
        {moments.map((m, i) => (
          <article
            key={m.title}
            className="overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
              <span className="font-mono text-xs text-amber-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">{m.title}</h3>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                {m.when}
              </span>
            </div>

            <div className="grid gap-px bg-line md:grid-cols-2">
              <div className="bg-surface p-5">
                <p className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-red">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red" />
                  How it goes today
                </p>
                <p className="text-sm leading-relaxed text-fg-muted">{m.now}</p>
              </div>
              <div className="bg-amber-wash p-5">
                <p className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-green">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green" />
                  In Prova
                </p>
                <p className="text-sm leading-relaxed text-fg">{m.prova}</p>
                <p className="mt-3.5 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">
                  {m.proof}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
