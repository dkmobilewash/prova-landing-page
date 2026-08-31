# Prova — landing page

Marketing site for **Prova**, the contractor operating system for union specialty
trade subcontractors. Audience is owners and PMs at wall-and-ceiling / drywall /
EIFS shops evaluating Prova against what they run today.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Page structure

The page is one route (`app/page.tsx`) composed of section components in
`components/`, in scroll order:

| Section | Component | Job it does |
| --- | --- | --- |
| Hero | `Hero.tsx` | The headline pitch — one line item across five documents |
| The four-copy problem | `Problem.tsx` | Names the re-entry treadmill the reader lives in |
| How it works | `Spine.tsx` | Interactive: the same line item rendered as estimate → contract → budget → job cost → pay app, with a change-order toggle that moves all five at once |
| Your week | `Workflows.tsx` | Six daily moments, "how it goes today" vs. "in Prova" |
| Compare | `Compare.tsx` | Capability matrix against categories of alternatives |
| Union | `Union.tsx` | CBAs, effective-dated fringes, certified payroll |
| AI trust | `AiTrust.tsx` | The AI explains math, it never calculates it |
| Capabilities | `Capabilities.tsx` | Everything built today |
| What it doesn't do | `Honest.tsx` | Not-built-yet and roadmap, stated plainly |
| FAQ | `Faq.tsx` | First-call questions |
| Early access | `EarlyAccess.tsx` | Lead capture form |

## Theme

Light "paper" theme. Every colour is a token in the `@theme` block of
`app/globals.css` — components never hardcode a hex, so a future re-skin is
that one block plus the OG image.

Two rules worth knowing before you edit colours:

- **There are two ambers.** `amber` (`#f5a300`) is the brand *fill* — buttons,
  dots, rules, borders — and always carries black text. `amber-ink`
  (`#a75409`) is the only amber safe to set as *text* on a light surface; it
  clears 4.5:1. Never use `text-amber`.
- **`amber-wash` is opaque on purpose.** The panels it tints sit inside
  `gap-px` grids whose container paints the divider colour, so a translucent
  tint composites over that and turns muddy.

Surfaces get lighter as they come forward: `ink` (page) → `surface` (cards,
white) sits on top, `surface-2` recedes into panels and form fields. All
foreground, accent and status colours meet WCAG AA against the surfaces they
appear on.

## Before launch

Three things need a real value:

1. **Domain and contact email** — `lib/site.ts`. Everything that renders a URL or
   an address (metadata, OG tags, sitemap, robots, footer) reads from there.
2. **Where leads go** — `app/api/early-access/route.ts` currently validates the
   submission and logs it. Wire the `TODO(launch)` to a CRM, a transactional
   email provider, or a database. Nothing else needs to change; the form already
   posts JSON and handles error responses.
3. **Copy accuracy** — every claim on the page is scoped to what is actually
   built today, and `Honest.tsx` names what isn't. When a roadmap item ships,
   move it out of `Honest.tsx` and into `Capabilities.tsx` rather than adding it
   in both places.

## Copy rules this page follows

- No social proof that isn't true yet — no customer counts, logos or testimonials.
- Nothing from the roadmap is described as available. The safety module, two-way
  QuickBooks sync, a native field app, GC-facing CO approvals, RFIs/submittals,
  notifications and granular roles are all listed as *not built*.
- QuickBooks is "connect your account," never "syncs your books."
- Certified payroll is a report you work from, not a pixel-exact WH-347 export.
- Subcontractor-to-GC language throughout — never homeowner or consumer framing.
- Comparison columns describe categories of software, not named vendors, since
  no vendor-by-vendor feature audit backs them.
