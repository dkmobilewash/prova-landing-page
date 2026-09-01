import { Eyebrow, H2, Section } from "./ui";

const faqs = [
  {
    q: "We're open shop. Is this still for us?",
    a: "Yes. The union side — CBAs, locals, effective-dated fringes, certified payroll — is there when you need it and out of the way when you don't. The estimate-to-pay-app spine is the same either way.",
  },
  {
    q: "Do we have to leave QuickBooks?",
    a: "No. Straight answer: today you can connect your QuickBooks Online account, but two-way sync isn't built yet. Prova isn't your general ledger. It's where the job lives — estimate, contract, budget, job cost, billing.",
  },
  {
    q: "Is there an app for the field?",
    a: "Not a native one. Prova is a responsive web app, so a foreman can enter time from a phone browser, but we won't call it a field app when it isn't. A safety and field operations module is being built right now.",
  },
  {
    q: "How long until we're running?",
    a: "Days, by your own office staff. The first person to sign up becomes the owner and invites the rest — no IT setup, no implementation consultant. Most of the work is loading your scope catalog and your GC list, and that pays for itself on the first bid.",
  },
  {
    q: "You're early. Why would we take that bet?",
    a: "Because being early is the only reason the one-line-item spine exists. Every mature product in this space was built assuming an estimate, a contract and a budget are separate documents, and that isn't something you retrofit. What you shouldn't expect is a decade of polish — and you won't find us claiming otherwise anywhere on this page.",
  },
];

export function Faq() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>Straight answers</Eyebrow>
          <H2>The five questions we get on every first call.</H2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold tracking-tight marker:content-['']">
                {f.q}
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-fg-dim transition-transform group-open:rotate-45"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
