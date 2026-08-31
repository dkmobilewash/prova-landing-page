import { Eyebrow, H2, Lede, Section } from "./ui";

const items = [
  {
    title: "Craft classifications, per local",
    body: "Journeyman, apprentice steps and foreman rates carried per union local — so a bid in a second state prices with that local's rates, not a blended guess.",
  },
  {
    title: "Fringe rates that respect the calendar",
    body: "Pension, vacation, health & welfare and training apply at the rate in effect on the date worked. When the CBA raises mid-project, last quarter's job costing doesn't silently rewrite itself.",
  },
  {
    title: "Hiring hall dispatch",
    body: "Track dispatch slips against the job and the man, so who was called for what is a record, not a text thread.",
  },
  {
    title: "Field time that feeds everything",
    body: "Straight, overtime, double time and shift differential by employee, job and cost code — the same entries that drive job costing, certified payroll and your WIP.",
  },
  {
    title: "Per diem and travel",
    body: "Tracked on the job it belongs to, so out-of-town work shows its real cost instead of disappearing into overhead.",
  },
  {
    title: "Certified payroll reporting",
    body: "Generate a certified-payroll summary of hours, craft and wages by employee straight from field time — no re-keying from a separate payroll system.",
    caveat: "Honest note: this is a report you work from, not yet a pixel-exact WH-347 government form export.",
  },
];

export function Union() {
  return (
    <Section id="union" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>Union &amp; prevailing wage</Eyebrow>
          <H2>Most tools in this price range quietly assume you&apos;re open shop.</H2>
          <Lede>
            If you work under one or more collective bargaining agreements — possibly
            across several states and locals — you already know the drill: the software
            handles the easy 80%, and the union part becomes a spreadsheet somebody
            maintains alone. Prova puts it in the same system as everything else.
          </Lede>
          <p className="mt-6 max-w-xl rounded-lg border border-line bg-surface p-5 text-sm leading-relaxed text-fg-muted">
            <span className="font-semibold text-fg">Why effective-dating matters:</span>{" "}
            a June rate increase applied retroactively to April hours doesn&apos;t just
            make payroll wrong — it changes the job cost on a month you already billed and
            already reported to your bonding company. Prova prices the hour at the rate
            that was real when it was worked.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.title} className="bg-surface p-5">
              <h3 className="text-sm font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-fg-muted">{it.body}</p>
              {it.caveat && (
                <p className="mt-3 border-t border-line pt-3 text-[12px] leading-relaxed text-fg-dim">
                  {it.caveat}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
