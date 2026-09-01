import Link from "next/link";
import { included, tiers } from "@/lib/pricing";
import { Check, Eyebrow, H2, Lede, Section } from "./ui";

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-line">
      <Eyebrow>Pricing</Eyebrow>
      <H2>Every plan is the whole product.</H2>
      <Lede>
        You scale by how big your shop is, not by which features we&apos;re willing to
        give you. Nobody pays extra to send a pay application. No per-seat pricing, no
        implementation fee, no six-month contract before you see it work.
      </Lede>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col p-6 sm:p-7 ${t.featured ? "bg-amber-wash" : "bg-surface"}`}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold tracking-tight">{t.name}</h3>
              {t.featured && (
                <span className="rounded border border-amber/60 bg-amber/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-amber-ink">
                  Most shops
                </span>
              )}
            </div>
            <p className="mt-2 min-h-10 text-sm leading-relaxed text-fg-muted">{t.who}</p>

            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="font-mono text-4xl font-bold tracking-tight">{t.price}</span>
              <span className="font-mono text-sm text-fg-dim">{t.cadence}</span>
            </p>
            <p className="mt-1.5 font-mono text-[11px] text-fg-dim">{t.note}</p>

            <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
              {t.scale.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <Check className="mt-0.5 text-amber-ink" />
                  {s}
                </li>
              ))}
            </ul>

            <Link
              href="#early-access"
              className={`mt-7 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                t.featured
                  ? "bg-amber text-black hover:bg-[#dd9200]"
                  : "border border-line-bright hover:border-fg-dim hover:bg-surface-2"
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-line bg-surface p-6 sm:p-7">
        <h3 className="text-sm font-semibold tracking-tight">
          On every plan, including the cheapest one:
        </h3>
        <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-fg-muted">
              <Check className="mt-0.5 text-green" />
              {i}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-fg-dim">
        Outgrow a tier mid-year and we move you up for the difference — no penalty, no
        renegotiation. Shrink and you move back down. Building is a cyclical business
        and the bill should act like it.
      </p>
    </Section>
  );
}
