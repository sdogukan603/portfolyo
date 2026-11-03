"use client";

import { useEffect, useRef, useState } from "react";
import { LocalTime } from "./LocalTime";
import { Icon } from "./Icon";

type Props = {
  handle: string;
  city: string;
  timeZone: string;
  available: boolean;
  links: { id: string; label: string }[];
};

// Süreç bölümü hizmetlerin parçası sayılır; orada "Hizmetler" aktif görünür.
const ALIAS: Record<string, string> = { surec: "hizmetler" };
const OBSERVED = ["isler", "hizmetler", "surec", "hakkimda", "iletisim"];

export function SiteHeader({ handle, city, timeZone, available, links }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Aktif bölümü takip et
  useEffect(() => {
    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        const current = OBSERVED.find((id) => visible.get(id)) ?? null;
        setActive(current ? (ALIAS[current] ?? current) : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of OBSERVED) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  // Mobil menü: Escape ile kapat, masaüstüne geçince kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/75 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-14 w-full max-w-[1100px] items-center gap-6 px-4 sm:px-8">
        <a
          href="#top"
          className="-mx-1 rounded px-1 font-mono text-sm text-fg transition-colors duration-200 hover:text-accent"
        >
          {handle}
        </a>

        <nav aria-label="Ana menü" className="hidden h-full md:block">
          <ul className="flex h-full items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative flex h-full items-center">
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded px-3 py-1.5 text-sm transition-colors duration-200 hover:text-fg ${
                      isActive ? "text-fg" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </a>
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4 font-mono text-sm text-muted">
          <span className="hidden lg:inline">
            {city} <LocalTime timeZone={timeZone} />
          </span>
          <Availability available={available} />
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobil-menu"
            className="-mr-2 grid size-10 place-items-center rounded text-fg transition-colors duration-200 hover:bg-surface md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        data-open={open}
        className="mobile-menu absolute inset-x-0 top-full border-b border-line bg-bg shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)] md:hidden"
      >
        <nav aria-label="Mobil menü" className="mx-auto max-w-[1100px] px-4 pb-6 pt-2 sm:px-8">
          <ul>
            {links.map((l) => (
              <li key={l.id} className="border-b border-line/70 last:border-0">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? "true" : undefined}
                  className="flex items-center justify-between py-4 text-lg text-fg"
                >
                  {l.label}
                  {active === l.id && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-sm text-muted">
            {city}, yerel saat <LocalTime timeZone={timeZone} />
          </p>
        </nav>
      </div>
    </header>
  );
}

function Availability({ available }: { available: boolean }) {
  if (!available) return <span>Şu an dolu</span>;
  return (
    <span className="flex items-center gap-2 text-fg">
      <span className="pulse relative size-2 rounded-full bg-accent" aria-hidden />
      <span className="sm:hidden">Müsait</span>
      <span className="hidden sm:inline">Yeni işe açık</span>
    </span>
  );
}
