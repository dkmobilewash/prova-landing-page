/** Prova mark: a single line item threaded through four documents. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#ffb020" />
      <path
        d="M9 10h14M9 16h14M9 22h9"
        stroke="#07080a"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
