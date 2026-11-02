"use client";

import { useState } from "react";

type Project = {
  hash: string;
  year: string;
  name: string;
  summary: string;
  stack: string[];
  detail: string;
  links: { label: string; href: string }[];
};

export function ProjectLog({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<string | null>(projects[0]?.hash ?? null);

  return (
    <ol className="relative">
      {/* git log --graph çizgisi */}
      <span
        aria-hidden
        className="absolute left-[5px] top-3 bottom-3 w-px bg-line"
      />
      {projects.map((p) => {
        const isOpen = open === p.hash;
        const panelId = `proje-${p.hash}`;
        return (
          <li key={p.hash} className="relative pl-8">
            <span
              aria-hidden
              className={`absolute left-0 top-[1.4rem] size-[11px] rounded-full border-2 transition-colors ${
                isOpen ? "border-accent bg-accent" : "border-line bg-bg"
              }`}
            />
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : p.hash)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group grid w-full grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1 py-4 text-left sm:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-mono text-sm text-accent">{p.hash}</span>
              <span className="min-w-0">
                <span className="block text-lg font-medium text-fg group-hover:text-accent transition-colors">
                  {p.name}
                </span>
                <span className="block text-muted">{p.summary}</span>
              </span>
              <span className="col-start-2 font-mono text-sm text-muted sm:col-start-3">
                {p.year}
              </span>
            </button>

            <div id={panelId} className="log-panel" data-open={isOpen}>
              <div>
                <div className="mb-6 ml-0 max-w-2xl border-l border-line pl-5 sm:ml-[4.6rem]">
                  <p className="leading-relaxed text-fg/90">{p.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={isOpen ? 0 : -1}
                        className="text-sm text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
