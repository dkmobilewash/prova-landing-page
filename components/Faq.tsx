import { Eyebrow, H2, Section } from "./ui";

const faqs = [
  {
    q: "We're a drywall sub, but we're open shop. Is this still for us?",
    a: "Yes. The union side — CBAs, locals, effective-dated fringes, certified payroll — is there when you need it and out of the way when you don't. The core of Prova is the estimate-to-pay-app spine, and that's the same whether or not you're union. The data model was shaped by wall-and-ceiling work, but it fits any self-performing specialty trade sub billing a GC.",
  },
  {
    q: "Do we have to leave QuickBooks?",
    a: "No — and to be straight with you, today you can connect your QuickBooks Online account, but two-way data sync isn't built yet. Prova isn't trying to be your general ledger. It's where the job lives: estimate, contract, budget, job cost, billing. Your accountant keeps doing what they do.",
  },
  {
    q: "Is there an app for the field?",
    a: "Not a native one. Prova is a responsive web app, so a foreman can enter time from a phone browser, but we're not going to tell you it's a field app when it isn't. A dedicated safety and field operations module is in active development right now.",
  },
  {
    q: "How long does it take to get running?",
    a: "Days, by your own office staff. The first person to sign up becomes the owner and invites the rest — there's no IT setup, no admin provisioning, and no implementation consultant. You'll spend most of your time entering your scope catalog and your GC list, and that pays for itself on the first bid.",
  },
  {
    q: "Can the GC see our margins in the client portal?",
    a: "No. The portal is a secure link — no login required for them — showing their contract, their invoices and job status. Job costing, budgets, forecasts and margin never appear there. That separation is built into the portal, not a setting somebody can flip by accident.",
  },
  {
    q: "We run out of three offices in two states. Does that work?",
    a: "Yes. Multiple offices and yards across states are supported, along with licensing tracked per jurisdiction and union rates per local — so a bid in your second state prices with that local's classifications and fringes.",
  },
  {
    q: "How many people can we put on it?",
    a: "As many as you need. Multi-user is included with a simple invite flow. Fair warning: there are only two roles today, Owner and Member — no separate estimator, PM, foreman or accounting permissions yet. More granular roles are on the roadmap.",
  },
  {
    q: "You're early. Why would we take that bet?",
    a: "Because being early is the only reason the one-line-item spine exists at all — every mature product in this space was built on the assumption that an estimate, a contract and a budget are separate documents, and that's not something you retrofit. Early also means the roadmap is genuinely shaped by the first shops on it. What you shouldn't expect is a decade of polish, and you won't find us claiming otherwise anywhere on this page.",
  },
];

export function Faq() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>Straight answers</Eyebrow>
          <H2>Questions we get on the first call.</H2>
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
