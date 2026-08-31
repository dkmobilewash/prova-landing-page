"use client";

import { useState } from "react";
import { Eyebrow, H2, Lede, Section } from "./ui";

type Row = { label: string; value: string; note?: string; accent?: boolean };

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const TABS = ["Estimate", "Contract", "Budget", "Job cost", "Pay app"] as const;
type Tab = (typeof TABS)[number];

function rowsFor(tab: Tab, co: boolean): { rows: Row[]; caption: string } {
  const sf = co ? 14_200 : 12_400;
  const value = co ? 284_000 : 248_000;
  const cost = co ? 221_520 : 193_440;
  const hours = co ? 513 : 448;
  const forecast = co ? 227_180 : 199_100;
  const actual = 138_240;
  const pct = actual / forecast;
  const thisPeriod = co ? 43_000 : 35_000;
  const toDate = 126_000 + thisPeriod;

  switch (tab) {
    case "Estimate":
      return {
        caption:
          "Priced off your own catalog of previously-bid work, with labor hours broken out by craft classification.",
        rows: [
          { label: "Quantity", value: `${sf.toLocaleString()} SF` },
          { label: "Unit price", value: "$20.00 / SF" },
          { label: "Labor hours", value: `${hours} hrs`, note: co ? "Foreman 46 · JW 339 · App 128" : "Foreman 40 · JW 296 · App 112" },
          { label: "Extended", value: usd(value), accent: true },
        ],
      };
    case "Contract":
      return {
        caption:
          "You won the bid. Prova turns the winning estimate into the subcontract — the same line, not a retyped copy. What the client e-signs is snapshotted and timestamped.",
        rows: [
          { label: "Original contract sum", value: usd(248_000) },
          { label: "Approved change orders", value: co ? usd(36_000) : usd(0), note: co ? "CO #3 · Area B infill" : "None to date" },
          { label: "Revised contract sum", value: usd(value), accent: true },
          { label: "Retainage held", value: "10%", note: "Per this GC's standing terms" },
        ],
      };
    case "Budget":
      return {
        caption:
          "There is no 'build the budget' step. The budget is the sum of the same line items — so an approved change order is in the budget the second it's approved.",
        rows: [
          { label: "Budgeted cost", value: usd(cost), note: "$15.60 / SF" },
          { label: "Budgeted margin", value: usd(value - cost), note: `${(((value - cost) / value) * 100).toFixed(1)}%` },
          { label: "PM forecast at completion", value: usd(forecast) },
          { label: "Forecast vs. budget", value: `−${usd(forecast - cost)}`, note: "Running over — visible now, not at closeout", accent: true },
        ],
      };
    case "Job cost":
      return {
        caption:
          "Every receipt and every field hour is coded to the line it was spent against — so you know which line is bleeding, not just that the job is.",
        rows: [
          { label: "Actual cost to date", value: usd(actual), note: "Labor $98,410 · Material $39,830" },
          { label: "Percent complete", value: `${(pct * 100).toFixed(1)}%`, note: "Cost-to-cost" },
          { label: "Revenue earned", value: usd(Math.round(pct * value)) },
          {
            label: co ? "Billed vs. earned" : "Billed vs. earned",
            value: usd(toDate - Math.round(pct * value)),
            note: toDate - Math.round(pct * value) > 0 ? "Overbilled on this line" : "Underbilled on this line",
            accent: true,
          },
        ],
      };
    case "Pay app":
      return {
        caption:
          "The G703 continuation sheet is generated from these same lines. Nobody rebuilds a schedule of values on the 25th.",
        rows: [
          { label: "Scheduled value", value: usd(value) },
          { label: "From previous applications", value: usd(126_000) },
          { label: "This period", value: usd(thisPeriod), note: co ? "Includes 400 SF of CO #3 already installed" : undefined, accent: true },
          { label: "Total completed to date", value: usd(toDate), note: `${((toDate / value) * 100).toFixed(1)}% · Balance to finish ${usd(value - toDate)}` },
          { label: "Retainage @ 10%", value: usd(Math.round(toDate * 0.1)) },
        ],
      };
  }
}

export function Spine() {
  const [tab, setTab] = useState<Tab>("Estimate");
  const [co, setCo] = useState(false);
  const { rows, caption } = rowsFor(tab, co);

  return (
    <Section id="how" className="border-t border-line">
      <Eyebrow>How Prova is different</Eyebrow>
      <H2>
        One line item. <span className="text-amber">Five documents.</span> Zero re-entry.
      </H2>
      <Lede>
        This isn&apos;t &ldquo;integration&rdquo; and it isn&apos;t sync. There is exactly
        one place your line-item data lives. The estimate line, the contract line, the
        budget line, the job cost line and the G703 line are the same row — so they can
        never disagree.
      </Lede>

      <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface">
        {/* Pinned spine header — the facts that never change between tabs. */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2 px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
              Job 2418 · Mercy Health MOB · Line 04
            </p>
            <p className="mt-1 text-sm font-semibold">
              09-22-16 &middot; Metal stud framing, Level 3
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCo((v) => !v)}
            aria-pressed={co}
            className={`inline-flex items-center gap-2.5 rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors ${
              co
                ? "border-amber bg-amber/10 text-amber"
                : "border-line-bright text-fg-muted hover:border-fg-dim hover:text-fg"
            }`}
          >
            <span
              aria-hidden
              className={`h-2 w-2 rounded-full ${co ? "bg-amber" : "bg-fg-dim"}`}
            />
            {co ? "CO #3 approved — +1,800 SF, Area B" : "Approve CO #3 (+1,800 SF, Area B)"}
          </button>
        </div>

        {/* Stage tabs */}
        <div role="tablist" aria-label="Document stage" className="flex overflow-x-auto border-b border-line">
          {TABS.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`relative shrink-0 px-5 py-3.5 text-sm font-medium transition-colors ${
                tab === t ? "text-amber" : "text-fg-dim hover:text-fg-muted"
              }`}
            >
              <span className="font-mono text-[10px] text-fg-dim">
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              {t}
              {tab === t && (
                <span aria-hidden className="absolute inset-x-3 bottom-0 h-0.5 bg-amber" />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="max-w-xl text-sm leading-relaxed text-fg-muted">{caption}</p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm text-fg-muted">
                    {r.label}
                    {r.note && (
                      <span className="mt-0.5 block font-mono text-[11px] text-fg-dim">
                        {r.note}
                      </span>
                    )}
                  </dt>
                  <dd
                    className={`shrink-0 font-mono text-base font-semibold tabular-nums ${
                      r.accent ? "text-amber" : "text-fg"
                    }`}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:w-64">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
              What just happened
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              {co ? (
                <>
                  You approved a change order once. The contract sum, the budget, the
                  forecast, the percent complete and this month&apos;s G703 all moved at
                  the same instant.{" "}
                  <span className="text-fg">
                    Nothing was regenerated, because nothing was ever a separate copy.
                  </span>
                </>
              ) : (
                <>
                  Flip the change order above and watch every tab move at once — including
                  this month&apos;s pay app.{" "}
                  <span className="text-fg">
                    That $8,000 of Area B you already built gets billed this month instead
                    of found in November.
                  </span>
                </>
              )}
            </p>
          </aside>
        </div>
      </div>

      <p className="mt-4 font-mono text-[11px] text-fg-dim">
        Illustrative figures on a sample job.
      </p>
    </Section>
  );
}
