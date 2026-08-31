import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Prova is the contractor operating system for union specialty trade subcontractors. Your estimate line becomes your contract line, your budget line and your job cost line — automatically, because it is the same line. Stop retyping the same numbers into four different tools.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Prova — One line item. Estimate to pay app.",
    template: "%s · Prova",
  },
  description,
  keywords: [
    "contractor software",
    "subcontractor software",
    "drywall contractor software",
    "wall and ceiling contractor",
    "union contractor software",
    "certified payroll software",
    "AIA G702 G703 billing software",
    "construction job costing",
    "retainage tracking",
    "WIP reporting for subcontractors",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Prova — One line item. Estimate to pay app.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prova — One line item. Estimate to pay app.",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
