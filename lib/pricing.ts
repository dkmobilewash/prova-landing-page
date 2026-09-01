// ---------------------------------------------------------------------------
// TODO(launch): THESE PRICES ARE PLACEHOLDERS. Replace every `price` and every
// `scale` limit below with your real numbers before this page goes live.
//
// Two things to keep in mind when you set them:
//
//  1. Tiers are scaled by COMPANY SIZE, not by feature. Every plan includes the
//     whole product. That's deliberate — the app has no plan gating built (two
//     roles, no billing tiers), so a page that gated features by tier would be
//     advertising something that doesn't exist. It also happens to be the right
//     position against ERPs that sell you billing and job costing separately.
//     If you ever do gate features, this file and `included` below both change.
//
//  2. The ROI section directly above this one frames the decision against one
//     missed change order (~$7,900 of profit). Keep the tiers in a range where
//     that comparison still lands.
// ---------------------------------------------------------------------------

export type Tier = {
  name: string;
  who: string;
  price: string;
  cadence: string;
  note: string;
  scale: string[];
  cta: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Crew",
    who: "One office, one local, a handful of jobs at a time.",
    price: "$1,200",
    cadence: "/ month",
    note: "Billed monthly. Cancel any time.",
    scale: [
      "Up to 10 active jobs",
      "Up to 25 in the field",
      "1 office, 1 union local",
      "Email support",
    ],
    cta: "Get early access",
  },
  {
    name: "Shop",
    who: "The size most wall-and-ceiling subs actually run at.",
    price: "$2,400",
    cadence: "/ month",
    note: "Billed monthly or annually.",
    scale: [
      "Up to 40 active jobs",
      "Up to 100 in the field",
      "2 offices, up to 3 union locals",
      "Onboarding call + priority support",
    ],
    cta: "Get early access",
    featured: true,
  },
  {
    name: "Multi-Yard",
    who: "Several yards, several states, several agreements.",
    price: "From $4,500",
    cadence: "/ month",
    note: "Priced on jobs, headcount and locals.",
    scale: [
      "Unlimited active jobs",
      "Unlimited field headcount",
      "Unlimited offices and union locals",
      "Named contact + data migration help",
    ],
    cta: "Talk to us",
  },
];

/** Shown once under the tiers — the whole product, on every plan. */
export const included = [
  "Estimating, bid tracking and scope catalogs",
  "Contracts and e-signature",
  "Live budgets and line-item job costing",
  "Change orders that write to the budget",
  "G702 / G703 pay applications",
  "Retainage tracking and release forecasting",
  "WIP, over/under billing and cash forecasting",
  "Field time, fringes and certified payroll",
  "Compliance documents and licensing",
  "GC directory and payment reliability scoring",
  "Client portal",
  "Unlimited users — no per-seat pricing",
];
