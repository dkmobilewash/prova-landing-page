// Single place to change site-wide constants before launch.
export const site = {
  name: "Prova",
  tagline: "The contractor OS for union specialty trade subs",
  // TODO: replace with the real production domain before launch.
  url: "https://prova.build",
  contactEmail: "hello@prova.build",
} as const;

export const nav = [
  { href: "#problems", label: "Problems" },
  { href: "#how", label: "How it works" },
  { href: "#worth", label: "Worth it?" },
  { href: "#pricing", label: "Pricing" },
  { href: "#compare", label: "Compare" },
  { href: "#missing", label: "What's missing" },
] as const;
