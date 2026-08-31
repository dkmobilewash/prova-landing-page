import { Eyebrow, H2, Lede, Section } from "./ui";

const groups = [
  {
    name: "Estimating & bidding",
    items: [
      "Reusable scope catalogs of previously-priced work",
      "Bid tracking: invited → submitted → won / lost",
      "Searchable bid history by GC, trade and project type",
      "Labor hours per line by craft classification and local",
      "Estimate versioning as scope moves pre-award",
      "AI-drafted line items from a scope narrative",
    ],
  },
  {
    name: "Contracts",
    items: [
      "Winning estimate becomes the contract automatically",
      "Subcontract agreement storage per job",
      "Document versioning and amendments",
      "Client e-signature on the initial contract",
      "Timestamped snapshot of exactly what was signed",
    ],
  },
  {
    name: "Budgets & job costing",
    items: [
      "Live budget — always the sum of the line items",
      "Budget vs. PM forecast vs. actual, tracked per line",
      "Cost entries coded to the budget line they hit",
      "Margin drift visible mid-job, not at closeout",
      "Change orders write straight into the live budget",
    ],
  },
  {
    name: "Billing & retainage",
    items: [
      "G703-style continuation sheets from your own lines",
      "G702-style monthly pay application summaries",
      "Materials stored tracked apart from work in place",
      "Payment status: submitted, approved, partial, paid, disputed",
      "Retainage % per job, withheld vs. released, running balance",
      "Release forecasting off expected substantial completion",
    ],
  },
  {
    name: "WIP & financials",
    items: [
      "Cost-to-cost percent complete per line and per job",
      "Revenue earned vs. billed — over/under billing detection",
      "Plain-language WIP narrative over computed figures",
      "AR aging and retainage receivable",
      "Forward monthly cash projection from real terms on file",
    ],
  },
  {
    name: "Labor & payroll",
    items: [
      "Field time by employee, job and cost code",
      "Straight, OT, DT and shift differential",
      "Per diem and travel pay",
      "Union hiring hall dispatch slips",
      "Certified payroll report generation",
      "Effective-dated fringe rates per craft and local",
    ],
  },
  {
    name: "Compliance & company records",
    items: [
      "COIs, lien waivers, certified payroll and fringe filings",
      "AI-assisted field extraction from uploaded documents",
      "Licensing per state or jurisdiction",
      "Your own insurance and bonding records",
      "CBAs by local with effective-dated rate schedules",
    ],
  },
  {
    name: "GCs, team & access",
    items: [
      "GC directory with full project history",
      "Payment reliability scoring: on-time rate, average days to pay",
      "Standing per-GC terms — retainage, payment terms, forms",
      "Multi-user companies with a simple invite flow",
      "Client portal — contract, invoices and status, no margin data",
      "Multiple offices and yards across states",
      "QuickBooks Online account connection",
    ],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-line">
      <Eyebrow>Working today</Eyebrow>
      <H2>What&apos;s actually built.</H2>
      <Lede>
        Not a roadmap dressed up as a feature list. Everything below is in the product
        right now. What isn&apos;t built is in the next section, by name.
      </Lede>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.name}>
            <h3 className="border-b border-line pb-2.5 text-sm font-semibold tracking-tight text-amber-ink">
              {g.name}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-[13px] leading-relaxed text-fg-muted">
                  <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
