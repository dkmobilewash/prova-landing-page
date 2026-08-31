import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-bold tracking-tight">Prova</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              The contractor operating system for union specialty trade subcontractors.
              One line item, from the bid to the last retainage check.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                Product
              </p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-fg-muted hover:text-fg">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                Get started
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="#early-access" className="text-sm text-fg-muted hover:text-fg">
                    Early access
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="text-sm text-fg-muted hover:text-fg"
                  >
                    {site.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            AIA is a registered trademark of The American Institute of Architects. Prova
            generates G702- and G703-style documents from your data and is not affiliated
            with or endorsed by the AIA.
          </p>
        </div>
      </div>
    </footer>
  );
}
