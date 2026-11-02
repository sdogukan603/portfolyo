import { site, hero, services, projects, steps, about } from "@/lib/content";
import { LocalTime } from "@/components/LocalTime";
import { ProjectLog } from "@/components/ProjectLog";
import { CopyEmail } from "@/components/CopyEmail";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-mono text-sm text-muted">
      <span className="text-accent">#</span> {children}
    </h2>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
      {/* Üst bar */}
      <header className="flex items-center justify-between gap-4 border-b border-line py-5 font-mono text-sm">
        <a href="#" className="text-fg">
          {site.handle}
        </a>
        <div className="flex items-center gap-4 text-muted sm:gap-6">
          <span className="hidden sm:inline">
            {site.city} <LocalTime timeZone={site.timeZone} />
          </span>
          {site.available ? (
            <span className="flex items-center gap-2 text-fg">
              <span className="pulse relative size-2 rounded-full bg-accent" aria-hidden />
              Yeni işe açık
            </span>
          ) : (
            <span>Şu an dolu</span>
          )}
        </div>
      </header>

      <main>
        {/* Giriş */}
        <section className="pb-24 pt-20 sm:pb-32 sm:pt-28">
          <p className="font-mono text-sm text-muted">
            {site.name}, {site.role.toLocaleLowerCase("tr")}
          </p>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {hero.headline}
          </h1>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted">{hero.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Proje%20hakk%C4%B1nda`}
              className="rounded bg-accent px-5 py-3 font-medium text-bg transition-opacity hover:opacity-90"
            >
              Proje başlat
            </a>
            <a
              href="#isler"
              className="rounded border border-line px-5 py-3 font-medium text-fg transition-colors hover:border-fg"
            >
              İşlerimi gör
            </a>
          </div>
        </section>

        {/* Projeler */}
        <section id="isler" aria-labelledby="isler-baslik" className="border-t border-line py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <div>
              <SectionHeading id="isler-baslik">işler</SectionHeading>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-muted">
                Ayrıntıları görmek için bir projeye tıkla.
              </p>
            </div>
            <ProjectLog projects={projects} />
          </div>
        </section>

        {/* Hizmetler */}
        <section aria-labelledby="hizmetler-baslik" className="border-t border-line py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <SectionHeading id="hizmetler-baslik">neler yapıyorum</SectionHeading>
            <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title}>
                  <dt className="text-lg font-medium">{s.title}</dt>
                  <dd className="mt-2 leading-relaxed text-muted">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Süreç */}
        <section aria-labelledby="surec-baslik" className="border-t border-line py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <SectionHeading id="surec-baslik">nasıl çalışıyorum</SectionHeading>
            <ol className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="bg-bg p-5">
                  <span className="font-mono text-sm text-accent">{i + 1}</span>
                  <h3 className="mt-3 font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Hakkımda */}
        <section aria-labelledby="hakkimda-baslik" className="border-t border-line py-20">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <SectionHeading id="hakkimda-baslik">hakkımda</SectionHeading>
            <div className="grid gap-10 md:grid-cols-[1fr_220px]">
              <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
                {about.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-fg" : "text-muted"}>
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-mono text-sm text-muted">Kullandığım araçlar</h3>
                <ul className="mt-3 space-y-1.5 font-mono text-sm">
                  {about.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section aria-labelledby="iletisim-baslik" className="border-t border-line py-24 sm:py-32">
          <SectionHeading id="iletisim-baslik">iletişim</SectionHeading>
          <p className="mt-6 max-w-[40ch] text-lg text-muted">
            Aklında bir proje varsa kısaca anlat, 24 saat içinde dönüş yaparım.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 block w-fit break-all text-[clamp(1.75rem,5.5vw,4rem)] font-semibold tracking-[-0.03em] underline decoration-line decoration-2 underline-offset-[0.15em] transition-colors hover:decoration-accent"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CopyEmail email={site.email} />
            {site.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline decoration-line underline-offset-4 hover:text-fg hover:decoration-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-6 font-mono text-xs text-muted">
        <span>
          © {year} {site.name}
        </span>
        <span>Next.js ile yapıldı, Vercel&apos;de yayında</span>
      </footer>
    </div>
  );
}
