import { site, nav, hero, services, steps, about, contact } from "@/lib/content";
import { projects } from "@/lib/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { CopyEmail } from "@/components/CopyEmail";
import { Icon } from "@/components/Icon";

const wrap = "mx-auto w-full max-w-[1100px] px-4 sm:px-8";

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-baslik`} className="scroll-mt-14">
      <div className={`${wrap}`}>
        <div className="grid gap-8 border-t border-line py-20 sm:py-24 lg:grid-cols-[200px_1fr] lg:gap-12">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <h2 id={`${id}-baslik`} className="font-mono text-sm text-muted">
              <span className="text-accent" aria-hidden>
                #{" "}
              </span>
              {title}
            </h2>
            {note && <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted">{note}</p>}
          </div>
          <div className="reveal min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const words = hero.headline.split(" ");
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(contact.subject)}`;
  const hasDemo = projects.some((p) => p.demo);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "TR" },
    sameAs: site.links.map((l) => l.href),
  };

  return (
    <>
      <a
        href="#icerik"
        className="fixed left-4 top-3 z-50 -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg focus:translate-y-0"
      >
        İçeriğe geç
      </a>

      <SiteHeader
        handle={site.handle}
        city={site.city}
        timeZone={site.timeZone}
        available={site.available}
        links={nav}
      />

      <main id="icerik">
        {/* Giriş */}
        <section id="top" aria-label="Giriş" className="relative isolate overflow-hidden">
          <div aria-hidden className="hero-grid absolute inset-0 -z-10" />
          <div
            className={`${wrap} flex min-h-[calc(100svh-3.5rem)] flex-col pb-8 pt-16 sm:pt-24 [@media(min-height:1000px)]:min-h-[760px]`}
          >
            <div className="my-auto">
              <p className="hero-fade font-mono text-sm text-muted" style={{ "--d": "0ms" } as React.CSSProperties}>
                {site.name}, {site.role.toLocaleLowerCase("tr")}
              </p>
              <h1 className="mt-6 max-w-[17ch] text-balance text-[clamp(2.25rem,7.2vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
                {words.map((w, i) => (
                  <span key={i}>
                    <span className="hero-word" style={{ "--i": i } as React.CSSProperties}>
                      {w}
                    </span>
                    {i < words.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p
                className="hero-fade mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg"
                style={{ "--d": "420ms" } as React.CSSProperties}
              >
                {hero.intro}
              </p>
              <div
                className="hero-fade mt-10 flex flex-wrap items-center gap-3"
                style={{ "--d": "520ms" } as React.CSSProperties}
              >
                <a href={mailto} className="btn btn-primary">
                  Proje başlat
                </a>
                <a href="#isler" className="btn btn-secondary">
                  İşlerimi gör
                </a>
              </div>
            </div>

            <a
              href="#isler"
              className="scroll-cue hero-fade mt-16 flex w-fit items-center gap-3 rounded font-mono text-xs text-muted transition-colors duration-200 hover:text-fg [@media(max-height:620px)]:hidden"
              style={{ "--d": "900ms" } as React.CSSProperties}
            >
              <span aria-hidden className="scroll-track">
                <span className="scroll-dot" />
              </span>
              Projelere kaydır
            </a>
          </div>
        </section>

        <Section
          id="isler"
          title="işler"
          note={`Ayrıntılar için bir projeye tıkla.${hasDemo ? " Demo etiketli projeler örnek içeriktir." : ""}`}
        >
          <ProjectTimeline projects={projects} />
        </Section>

        <Section id="hizmetler" title="neler yapıyorum">
          <ul className="-mx-4 grid gap-2 sm:-mx-5 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.title}
                className="service group rounded-lg border border-transparent p-4 transition-colors duration-200 hover:border-line hover:bg-surface/60 sm:p-5"
              >
                <span className="grid size-9 place-items-center rounded-md border border-line text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                <p className="mt-3 font-mono text-xs text-muted">
                  <span className="sr-only">Örnek teknolojiler: </span>
                  {s.tags.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="surec" title="nasıl çalışıyorum">
          <ol className="steps grid gap-0 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="step group relative pb-10 pl-14 last:pb-0 md:pb-0 md:pl-0 md:pt-14">
                <span aria-hidden className="step-line" />
                <span className="step-node absolute left-0 top-0 grid size-9 place-items-center rounded-full border border-line bg-bg font-mono text-sm text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  {i + 1}
                </span>
                <h3 className="pt-1.5 font-medium transition-colors duration-200 md:pt-0 md:group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-200 group-hover:text-fg/80">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="hakkimda" title="hakkımda">
          <div className="max-w-[60ch]">
            <p className="text-balance text-[clamp(1.375rem,2.6vw,1.75rem)] font-medium leading-snug tracking-[-0.015em] text-fg">
              {about.lead}
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <h3 className="mt-14 font-mono text-sm text-muted">Kullandığım teknolojiler</h3>
          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 xl:grid-cols-4">
            {about.stack.map((g) => (
              <div key={g.group} className="border-t border-line pt-4">
                <dt className="text-sm font-medium text-fg">{g.group}</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 font-mono text-sm text-muted">
                    {g.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* İletişim */}
        <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-14">
          <div className={wrap}>
            <div className="reveal border-t border-line py-24 sm:py-32">
              <h2 id="iletisim-baslik" className="font-mono text-sm text-muted">
                <span className="text-accent" aria-hidden>
                  #{" "}
                </span>
                iletişim
              </h2>
              <p className="mt-6 max-w-[30ch] text-balance text-2xl font-medium leading-snug tracking-[-0.015em] sm:text-3xl">
                {contact.heading}
              </p>
              <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">{contact.body}</p>

              <a
                href={mailto}
                className="email-link mt-10 block w-fit max-w-full text-[clamp(1.2rem,5.3vw,4rem)] font-semibold leading-tight tracking-[-0.03em]"
              >
                {site.email}
              </a>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={mailto} className="btn btn-primary">
                  <Icon name="mail" className="size-4" />
                  E-posta gönder
                </a>
                <CopyEmail email={site.email} />
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Sosyal bağlantılar">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link inline-flex items-center gap-1 text-muted hover:text-fg"
                    >
                      {l.label}
                      <Icon name="external" className="size-3.5" />
                      <span className="sr-only">(yeni sekmede açılır)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={wrap}>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line py-6 font-mono text-xs text-muted">
          <span>
            © {year} {site.name}
          </span>
          <span>Next.js ile yapıldı, Vercel&apos;de yayında</span>
          <a href="#top" className="link hover:text-fg">
            Başa dön
          </a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
