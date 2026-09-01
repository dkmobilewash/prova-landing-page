import { Eyebrow, H2, Lede, Section } from "./ui";

const notYet = [
  "A native field app — it's responsive web, and it works on a phone",
  "GC-facing change order approvals — COs apply immediately",
  "Takeoff from drawings",
  "Card or ACH payment collection — payments are recorded, not processed",
  "Two-way QuickBooks sync — you can connect the account, that's it",
  "RFI log, submittals, drawing sets",
  "Materials, vendors, equipment, purchasing",
  "Punch list, closeout, warranty",
  "Notifications of any kind — you check the page, nothing chases you",
  "Granular roles — two today, Owner and Member",
];

const soon = [
  { thing: "Safety & field operations", note: "Incidents, toolbox talks, daily reports", active: true },
  { thing: "RFI log and submittal tracking", note: "Per job, with the documents you already store" },
  { thing: "Materials, vendors and equipment", note: "Purchasing and tool tracking" },
  { thing: "Punch lists, closeout and warranty", note: "The end of the job" },
  { thing: "Notifications and alerts", note: "Expirations and compliance dates that find you" },
  { thing: "Two-way QuickBooks sync", note: "Then more accounting integrations" },
  { thing: "Granular roles", note: "Estimator, PM, foreman, accounting" },
];

export function Honest() {
  return (
    <Section id="missing" className="border-t border-line">
      <Eyebrow>The part other landing pages leave out</Eyebrow>
      <H2>What Prova doesn&apos;t do yet.</H2>
      <Lede>
        You get this now instead of on a demo call in month two. If something on the left
        is how you run your business, say so — it moves the roadmap.
      </Lede>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
        <div className="bg-surface p-6 sm:p-8">
          <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-red">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red" />
            Not built today
          </p>
          <ul className="space-y-2.5">
            {notYet.map((n) => (
              <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-wash p-6 sm:p-8">
          <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-ink">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
            On the roadmap
          </p>
          <ul className="space-y-3">
            {soon.map((n) => (
              <li key={n.thing} className="flex flex-wrap items-baseline gap-x-2 text-sm leading-relaxed">
                <span className="font-semibold">{n.thing}</span>
                <span className="text-fg-muted">— {n.note}</span>
                {n.active && (
                  <span className="rounded border border-amber/60 bg-amber/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-amber-ink">
                    Building now
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
