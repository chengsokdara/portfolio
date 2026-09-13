import {
  experience,
  offers,
  openSource,
  projects,
  site,
  social,
  stack,
} from './data/site'
import { ArrowUpRight, Mail, Phone } from './components/Icon'

const nav = [
  { href: '#offers', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#open-source', label: 'Open source' },
  { href: '#contact', label: 'Contact' },
] as const

function HireButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? '' : 'sm:gap-4'}`}>
      <a
        href={`mailto:${site.email}?subject=Project%20inquiry%20—%20Sokdara%20Cheng`}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink no-underline transition hover:bg-gold-2"
      >
        <Mail className="h-4 w-4" />
        Email to hire
      </a>
      <a
        href={`tel:${site.phoneTel}`}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-5 py-2.5 text-sm font-semibold text-paper no-underline transition hover:border-gold/50 hover:text-gold-2"
      >
        <Phone className="h-4 w-4" />
        {site.phoneDisplay}
      </a>
      {!compact && (
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-mist no-underline transition hover:text-paper"
        >
          Resume
          <ArrowUpRight />
        </a>
      )}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl text-balance">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-mist">{body}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line/70 glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="no-underline">
            <span className="font-display text-lg font-semibold tracking-tight text-paper">
              Sokdara<span className="text-gold">.</span>
            </span>
            <span className="ml-2 hidden text-xs text-mist sm:inline">
              RN + React · Phnom Penh
            </span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mist no-underline transition hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}?subject=Project%20inquiry%20—%20Sokdara%20Cheng`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-ink no-underline sm:text-sm"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-fade opacity-60" />
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-3 py-1 text-xs text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Available for freelance · {site.location}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl text-balance">
            Senior React Native + React engineer who{' '}
            <span className="text-gold">ships to the stores</span> — and owns Khmer +
            English products end-to-end.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{site.tagline}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist/80">
            Ideal clients: {site.idealClients}
          </p>
          <div className="mt-8">
            <HireButtons />
          </div>
          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: 'Open source',
                value: 'use-whisper ~785★',
                href: openSource[0].href,
              },
              {
                label: 'Stores',
                value: 'Play + App Store releases',
              },
              {
                label: 'Timezone',
                value: 'ICT+7 · Cambodia',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line bg-panel/40 px-5 py-4"
              >
                <dt className="text-xs uppercase tracking-wider text-mist">{item.label}</dt>
                <dd className="mt-1 text-base font-semibold text-paper">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-paper no-underline hover:text-gold"
                    >
                      {item.value}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Offers */}
        <section id="offers" className="border-t border-line/80 bg-ink-2/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Productized offers"
              title="Clear ways to start — price scoped on a call"
              body="No invented day rates here. We align on outcome, timeline, and budget together."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {offers.map((offer, i) => (
                <article
                  key={offer.id}
                  className="group flex flex-col rounded-3xl border border-line bg-panel p-6 transition hover:border-gold/40"
                >
                  <span className="font-display text-4xl text-gold/40">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold text-paper">{offer.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{offer.blurb}</p>
                  <p className="mt-4 text-sm font-medium text-teal">{offer.outcome}</p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(offer.title + ' — inquiry')}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold no-underline group-hover:text-gold-2"
                  >
                    {offer.cta}
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Case studies"
              title="Recent work that maps to client outcomes"
              body="Company names and store links only — no fabricated testimonials or metrics."
            />
            <div className="space-y-5">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="rounded-3xl border border-line bg-panel/50 p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-paper">{job.company}</h3>
                      <p className="text-sm text-gold">{job.role}</p>
                    </div>
                    <p className="text-sm text-mist">
                      {job.period}
                      <span className="mx-2 text-line">·</span>
                      {job.place}
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-paper/90">{job.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-mist">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {job.links.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {job.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-paper no-underline hover:border-gold/50 hover:text-gold"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-line/80 bg-ink-2/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Selected products"
              title="Apps I built and shipped myself"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex flex-col rounded-3xl border border-line bg-panel p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-paper">{project.name}</h3>
                    <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-mist">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-teal">
                    {project.proof}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-panel-2 px-2 py-1 text-xs text-mist"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-gold no-underline hover:text-gold-2"
                      >
                        {link.label}
                        <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Open source */}
        <section id="open-source" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Open source"
              title="Real stars, real repos"
              body="Social proof limited to public GitHub metrics and store listings."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {openSource.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-line bg-panel/60 p-6 no-underline transition hover:border-gold/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-paper">{repo.name}</h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-gold">
                      {repo.stars}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{repo.summary}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-paper">
                    View on GitHub
                    <ArrowUpRight />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-t border-line/80 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Stack
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-panel/40 px-4 py-2 text-sm text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line/80 bg-panel/30 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-panel to-ink-2 p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Let&apos;s build
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl text-balance">
                Have a React Native or React product that needs a senior owner in ICT+7?
              </h2>
              <p className="mt-4 max-w-xl text-mist">
                Email or call. Resume is public. No Calendly invented here — we set a time
                when you reach out.
              </p>
              <div className="mt-8">
                <HireButtons />
              </div>
              <ul className="mt-8 flex flex-wrap gap-4 text-sm text-mist">
                <li>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist no-underline hover:text-paper"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist no-underline hover:text-paper"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={social.medium}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist no-underline hover:text-paper"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist no-underline hover:text-paper"
                  >
                    Resume v2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Vite + React 19 +
            TypeScript + Tailwind.
          </p>
          <p>
            <a href={site.siteUrl} className="text-mist no-underline hover:text-paper">
              chengsokdara.github.io
            </a>
          </p>
        </div>
      </footer>

      {/* Mobile sticky hire bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line glass p-3 md:hidden">
        <a
          href={`mailto:${site.email}?subject=Project%20inquiry%20—%20Sokdara%20Cheng`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-ink no-underline"
        >
          <Mail />
          Hire Sokdara
        </a>
      </div>
    </div>
  )
}
