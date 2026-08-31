import { Eyebrow, H2, Lede, Section } from "./ui";

const notYet = [
  { thing: "A dedicated field app", note: "Everything is a responsive web app today — it works on a phone, it isn't a native app." },
  { thing: "GC-facing change order approvals", note: "Change orders apply immediately. There's no pending / approved review step with the GC yet." },
  { thing: "Takeoff from drawings", note: "No plan or drawing takeoff by computer vision." },
  { thing: "Card or ACH payment collection", note: "Payments are recorded, not processed in-app." },
  { thing: "Two-way QuickBooks sync", note: "You can connect your QuickBooks account today. Pushing invoices and pulling accounting data is not built." },
  { thing: "RFIs, submittals, drawing sets", note: "No RFI log, submittal tracking or drawing version storage." },
  { thing: "Materials, vendors, equipment", note: "No purchasing, vendor management or tool tracking." },
  { thing: "Punch list, closeout, warranty", note: "Not built." },
  { thing: "Notifications and alerts", note: "Nothing is pushed to anyone. Expirations and deadlines are on the page — you check it." },
  { thing: "Granular roles", note: "Two roles today: Owner and Member. No separate estimator, PM, foreman or accounting permissions." },
];

const soon = [
  { thing: "Safety & field operations", note: "Incident tracking, toolbox talks and daily field reports — actively being built right now.", active: true },
  { thing: "RFI log and submittal tracking", note: "Per job, alongside the documents you already store." },
  { thing: "Materials and vendor management", note: "Plus equipment tracking." },
  { thing: "Punch lists, closeout and warranty", note: "Closing the loop at the end of the job." },
  { thing: "Notifications and alerts", note: "Expirations, deadlines and compliance dates that come find you." },
  { thing: "Two-way QuickBooks sync", note: "Then additional accounting integrations." },
  { thing: "More granular roles and permissions", note: "Estimator, PM, foreman and accounting distinctions." },
];

export function Honest() {
  return (
    <Section className="border-t border-line">
      <Eyebrow>The part other landing pages leave out</Eyebrow>
      <H2>What Prova doesn&apos;t do yet.</H2>
      <Lede>
        Prova is early. You&apos;ll get a straight answer here rather than a demo call
        where it comes out in month two. If something on the left is how you run your
        business, tell us — it moves the roadmap.
      </Lede>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
        <div className="bg-surface p-6 sm:p-8">
          <p className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-red">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red" />
            Not built today
          </p>
          <ul className="space-y-4">
            {notYet.map((n) => (
              <li key={n.thing} className="border-l-2 border-line-bright pl-4">
                <h3 className="text-sm font-semibold">{n.thing}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-fg-dim">{n.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-wash p-6 sm:p-8">
          <p className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-ink">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
            On the roadmap
          </p>
          <ul className="space-y-4">
            {soon.map((n) => (
              <li key={n.thing} className="border-l-2 border-amber pl-4">
                <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                  {n.thing}
                  {n.active && (
                    <span className="rounded border border-amber/60 bg-amber/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-amber-ink">
                      In development
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-fg-muted">{n.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
