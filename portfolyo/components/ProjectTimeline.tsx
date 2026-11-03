// Projeler: git log görünümü. Server component; açma/kapama tarayıcının
// yerleşik <details> öğesiyle yapılır, JavaScript gerekmez.
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Icon } from "./Icon";

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-muted" aria-hidden>
        <span className="text-accent">$</span> git log --oneline
      </p>
      <ol className="timeline relative">
        {projects.map((p, i) => (
          <li key={p.hash} className="relative">
            <details name="projeler" open={i === 0} className="tl group">
              <summary className="tl-summary grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-x-3 sm:grid-cols-[4.5rem_1fr_auto] rounded-md py-4 pl-8 pr-2 sm:gap-x-4 sm:pr-3">
                <span aria-hidden className="tl-node" />
                <span className="tl-hash col-start-1 row-start-1 mb-1 font-mono text-xs sm:mb-0 sm:text-sm">{p.hash}</span>
                <span className="col-start-1 row-start-2 min-w-0 sm:col-start-2 sm:row-start-1">
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="tl-name text-lg font-medium text-fg">{p.name}</span>
                    {p.demo && (
                      <span
                        title="Örnek içerik"
                        className="rounded-sm border border-accent/35 px-1.5 py-px font-mono text-[11px] leading-4 text-accent"
                      >
                        demo
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-muted">{p.summary}</span>
                </span>
                <span className="col-start-2 row-span-2 row-start-1 flex items-center gap-2 self-start font-mono text-sm text-muted sm:col-start-3 sm:row-span-1 sm:self-auto">
                  <span className="hidden sm:inline">{p.year}</span>
                  <Icon name="chevron" className="tl-chevron size-4" />
                </span>
              </summary>

              <div className="tl-body">
                <div className="pb-8 pl-8 pr-2 sm:pl-[calc(2rem+4.5rem+1rem)] sm:pr-3">
                  <p className="max-w-[62ch] leading-relaxed text-fg/90">{p.detail}</p>

                  {p.image ? (
                    <figure className="relative mt-5 aspect-[16/10] max-w-2xl overflow-hidden rounded-md border border-line bg-surface">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(min-width: 1024px) 672px, 100vw"
                        className="object-cover object-top"
                      />
                    </figure>
                  ) : p.demo ? (
                    <div className="shot-placeholder mt-5 grid h-24 max-w-2xl place-items-center rounded-md border border-dashed border-line">
                      <span className="px-4 text-center font-mono text-xs text-muted">
                        Ekran görüntüsü buraya gelecek
                      </span>
                    </div>
                  ) : null}

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Kullanılan teknolojiler">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-line bg-surface px-2 py-1 font-mono text-xs leading-none text-fg/85"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  {p.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link inline-flex items-center gap-1 text-sm text-fg"
                        >
                          {l.label}
                          <Icon name="external" className="size-3.5 text-muted" />
                          <span className="sr-only">(yeni sekmede açılır)</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </details>
          </li>
        ))}
      </ol>
      <p className="mt-2 pl-8 font-mono text-xs text-muted" aria-hidden>
        <span className="text-fg/60">(root)</span> ilk commit
      </p>
    </div>
  );
}
