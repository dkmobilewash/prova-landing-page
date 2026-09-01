import { Check, Cross, Dash, Eyebrow, H2, Lede, Section } from "./ui";

type Mark = "yes" | "no" | "partial";

const columns = [
  { key: "prova", label: "Prova", sub: "Specialty sub OS" },
  { key: "sheets", label: "Spreadsheets\n+ accounting", sub: "What most shops run" },
  { key: "crm", label: "Generic\ncontractor CRM", sub: "Sales-first tools" },
  { key: "gc", label: "GC-first\nplatforms", sub: "For the GC's side" },
  { key: "erp", label: "Construction\nERP", sub: "Enterprise suites" },
] as const;

const rows: { feature: string; detail: string; marks: Record<string, Mark> }[] = [
  {
    feature: "Estimate becomes the contract",
    detail: "No re-entry between winning the bid and signing the sub agreement",
    marks: { prova: "yes", sheets: "no", crm: "partial", gc: "no", erp: "partial" },
  },
  {
    feature: "Budget is the same data as the estimate",
    detail: "Not an export, not a sync — the same line items",
    marks: { prova: "yes", sheets: "no", crm: "no", gc: "no", erp: "no" },
  },
  {
    feature: "Approved CO hits the budget and the pay app",
    detail: "Instantly, with no reconcile step and no 'regenerate' button",
    marks: { prova: "yes", sheets: "no", crm: "no", gc: "partial", erp: "partial" },
  },
  {
    feature: "Budget vs. forecast vs. actual, per line",
    detail: "See margin drift mid-job instead of at closeout",
    marks: { prova: "yes", sheets: "partial", crm: "no", gc: "no", erp: "partial" },
  },
  {
    feature: "Multi-local CBA fringes, effective-dated",
    detail: "The rate in effect on the day worked, per craft and local",
    marks: { prova: "yes", sheets: "no", crm: "no", gc: "no", erp: "partial" },
  },
  {
    feature: "Live in days, run by your own office staff",
    detail: "No implementation consultant, no IT department, no six-month rollout",
    marks: { prova: "yes", sheets: "yes", crm: "yes", gc: "partial", erp: "no" },
  },
];

function MarkCell({ mark }: { mark: Mark }) {
  if (mark === "yes")
    return (
      <span className="inline-flex text-green" title="Yes">
        <Check />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (mark === "partial")
    return (
      <span className="inline-flex text-fg-dim" title="Partial or varies by product">
        <Dash />
        <span className="sr-only">Partial or varies</span>
      </span>
    );
  return (
    <span className="inline-flex text-red" title="No">
      <Cross />
      <span className="sr-only">No</span>
    </span>
  );
}

export function Compare() {
  return (
    <Section id="compare" className="border-t border-line">
      <Eyebrow>Compared to what you run now</Eyebrow>
      <H2>Good tools. Built for somebody else&apos;s side of the job.</H2>
      <Lede>
        CRMs win work and stop there. GC platforms serve the general contractor&apos;s
        side of the table. ERPs do all of it, after six months and a headcount to run
        it. Prova is for a self-performing sub with an owner, an office and crews.
      </Lede>

      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim lg:hidden">
        Scroll the table sideways →
      </p>

      <div className="mt-4 overflow-x-auto lg:mt-12">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">
            Feature comparison between Prova and common alternatives
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-[34%] border-b border-line py-4 pr-6 align-bottom">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                  Capability
                </span>
              </th>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className={`border-b py-4 align-bottom text-center ${
                    c.key === "prova"
                      ? "border-amber bg-amber/[0.09]"
                      : "border-line"
                  }`}
                >
                  <span
                    className={`block whitespace-pre-line text-[13px] font-semibold leading-tight ${
                      c.key === "prova" ? "text-amber-ink" : "text-fg"
                    }`}
                  >
                    {c.label}
                  </span>
                  <span className="mx-auto mt-1.5 block max-w-[7.5rem] font-mono text-[9px] uppercase leading-[1.5] tracking-[0.12em] text-fg-dim">
                    {c.sub}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="align-top">
                <th scope="row" className="border-b border-line py-4 pr-6 font-normal">
                  <span className="block text-sm font-semibold text-fg">{r.feature}</span>
                  <span className="mt-1 block text-[12px] leading-snug text-fg-dim">
                    {r.detail}
                  </span>
                </th>
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className={`border-b py-4 text-center ${
                      c.key === "prova" ? "border-amber/40 bg-amber/[0.09]" : "border-line"
                    }`}
                  >
                    <span className="inline-flex justify-center">
                      <MarkCell mark={r.marks[c.key]} />
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">
        <span className="inline-flex items-center gap-1.5">
          <Check className="text-green" /> Built in
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Dash className="text-fg-dim" /> Partial or varies by product
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Cross className="text-red" /> Not what it&apos;s for
        </span>
      </div>

      <p className="mt-6 max-w-3xl text-[12px] leading-relaxed text-fg-dim">
        Columns describe categories of software, not any one vendor — the setups we
        actually find running at wall-and-ceiling shops. Individual products vary, and
        the good ones move fast. Check the specific tool you&apos;re evaluating against
        this list; the row that never changes is the second one.
      </p>
    </Section>
  );
}
