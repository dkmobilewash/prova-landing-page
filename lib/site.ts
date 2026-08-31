// Single place to change site-wide constants before launch.
export const site = {
  name: "Prova",
  tagline: "The contractor OS for union specialty trade subs",
  // TODO: replace with the real production domain before launch.
  url: "https://prova.build",
  contactEmail: "hello@prova.build",
} as const;

export const nav = [
  { href: "#problem", label: "The problem" },
  { href: "#how", label: "How it works" },
  { href: "#workflow", label: "Your week" },
  { href: "#compare", label: "Compare" },
  { href: "#union", label: "Union" },
  { href: "#capabilities", label: "Capabilities" },
] as const;
