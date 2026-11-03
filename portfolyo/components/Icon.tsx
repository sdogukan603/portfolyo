// Küçük, tutarlı çizgi ikonlar (20x20, 1.5 kalınlık). Server component.

const paths: Record<string, React.ReactNode> = {
  api: (
    <>
      <path d="M7 4.5c-1.5 0-2 .8-2 2v1.8c0 .9-.5 1.5-1.5 1.7 1 .2 1.5.8 1.5 1.7v1.8c0 1.2.5 2 2 2" />
      <path d="M13 4.5c1.5 0 2 .8 2 2v1.8c0 .9.5 1.5 1.5 1.7-1 .2-1.5.8-1.5 1.7v1.8c0 1.2-.5 2-2 2" />
      <path d="M8.5 10h.01M11.5 10h.01" strokeWidth="2.2" />
    </>
  ),
  plug: (
    <>
      <circle cx="5" cy="10" r="2.25" />
      <circle cx="15" cy="5" r="2.25" />
      <circle cx="15" cy="15" r="2.25" />
      <path d="M7.1 9 12.9 6M7.1 11l5.8 3" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.75" y="3.75" width="14.5" height="12.5" rx="2" />
      <path d="m6 8 2.25 2L6 12M10.5 12.25h3.5" />
    </>
  ),
  window: (
    <>
      <rect x="2.75" y="3.75" width="14.5" height="12.5" rx="2" />
      <path d="M2.75 7.5h14.5M5.25 5.65h.01M7.25 5.65h.01" />
    </>
  ),
  external: <path d="M7 13 13 7M8 7h5v5" />,
  copy: (
    <>
      <rect x="7" y="7" width="9" height="9" rx="1.75" />
      <path d="M13 7V5.75A1.75 1.75 0 0 0 11.25 4h-5.5A1.75 1.75 0 0 0 4 5.75v5.5A1.75 1.75 0 0 0 5.75 13H7" />
    </>
  ),
  check: <path d="m4.5 10.5 3.5 3.5 7.5-8" />,
  chevron: <path d="m6 8 4 4 4-4" />,
  menu: <path d="M3.5 7h13M3.5 13h13" />,
  close: <path d="m5 5 10 10M15 5 5 15" />,
  mail: (
    <>
      <rect x="2.75" y="4.25" width="14.5" height="11.5" rx="2" />
      <path d="m3.5 5.5 6.5 5 6.5-5" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-5" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
