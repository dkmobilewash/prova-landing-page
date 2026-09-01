import { Eyebrow, H2, Lede, Section } from "./ui";

const groups = [
  {
    name: "Estimating & bidding",
    items: [
      "Scope catalogs of previously-priced work",
      "Bid tracking and searchable history by GC",
      "Labor hours by craft classification",
      "AI-drafted line items from a scope narrative",
    ],
  },
  {
    name: "Contracts",
    items: [
      "Winning estimate becomes the contract",
      "Client e-signature on the initial contract",
      "Timestamped snapshot of what was signed",
      "Versioned amendments per job",
    ],
  },
  {
    name: "Billing & retainage",
    items: [
      "G703-style continuation sheets",
      "G702-style monthly summaries",
      "Materials stored, tracked separately",
      "Retainage withheld, released and forecast",
    ],
  },
  {
    name: "WIP & cash",
    items: [
      "Cost-to-cost percent complete per line",
      "Over- and under-billing detection",
      "AR aging and retainage receivable",
      "Cash projection from real terms on file",
    ],
  },
  {
    name: "Compliance & records",
    items: [
      "COIs, lien waivers, payroll submissions",
      "AI extraction from uploaded documents",
      "Licensing per state, insurance and bonding",
      "CBAs by local with dated rate schedules",
    ],
  },
  {
    name: "GCs, team & access",
    items: [
      "GC directory with project history",
      "Standing per-GC terms and forms",
      "Client portal — no margin data exposed",
      "Multi-user, multi-office, QuickBooks connection",
    ],
  },
];

export function Everything() {
  return (
    <Section className="border-t border-line">
      <Eyebrow>Working today</Eyebrow>
      <H2>Everything else it does.</H2>
      <Lede>
        The line-item spine is why you&apos;d switch. This is the rest of what&apos;s in
        the product right now — not a roadmap dressed up as a feature list.
      </Lede>

      <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.name}>
            <h3 className="border-b border-line pb-2.5 text-sm font-semibold tracking-tight text-amber-ink">
              {g.name}
            </h3>
            <ul className="mt-3.5 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-[13px] leading-relaxed text-fg-muted">
                  <span aria-hidden className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
        <div className="bg-amber-wash p-6">
          <h3 className="text-lg font-semibold tracking-tight">
            Union work isn&apos;t an afterthought here.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            Craft classifications per local. Fringes applied at the rate in effect on the
            day worked, so a mid-project CBA raise doesn&apos;t rewrite last quarter&apos;s
            job costing. Hiring hall dispatch slips, per diem and travel, and certified
            payroll generated off the same field time that drives your job costs.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-fg-dim">
            Straight answer: certified payroll is a report you work from, not yet a
            pixel-exact WH-347 form export.
          </p>
        </div>

        <div className="bg-surface p-6">
          <h3 className="text-lg font-semibold tracking-tight">
            The AI never does your math.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            Every dollar figure in Prova comes from a deterministic formula running on
            your line items. The AI drafts estimates, reads your compliance paperwork,
            and explains what your WIP means in plain language — after the numbers are
            already computed. It is never in the calculation path.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-fg-dim">
            When your CPA, your banker or your surety asks where a number came from, the
            answer is a formula and a line item. Never a model.
          </p>
        </div>
      </div>
    </Section>
  );
}
