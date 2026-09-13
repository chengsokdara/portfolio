import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import {
  experience,
  offers,
  openSource,
  projects,
  site,
  social,
  stack,
} from './data/site'

type Line =
  | { kind: 'boot'; text: string; tone?: Tone }
  | { kind: 'input'; text: string }
  | { kind: 'output'; nodes: ReactNode; tone?: Tone }

type Tone = 'dim' | 'green' | 'cyan' | 'yellow' | 'magenta' | 'red' | 'fg'

const PROMPT = 'ra@phnom-penh'
const HOST_PATH = '~/portfolio'

const QUICK = [
  'whoami',
  'work',
  'projects',
  'oss',
  'stack',
  'hire',
  'contact',
  'help',
] as const

function toneClass(tone: Tone = 'fg') {
  switch (tone) {
    case 'dim':
      return 'text-dim'
    case 'green':
      return 'text-green'
    case 'cyan':
      return 'text-cyan'
    case 'yellow':
      return 'text-yellow'
    case 'magenta':
      return 'text-magenta'
    case 'red':
      return 'text-red'
    default:
      return 'text-fg'
  }
}

function A({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="text-cyan underline decoration-cyan/40 underline-offset-2 hover:text-green"
    >
      {children}
    </a>
  )
}

function Block({ children }: { children: ReactNode }) {
  return <div className="space-y-1 whitespace-pre-wrap break-words">{children}</div>
}

function CommandFrame({
  command,
  children,
}: {
  command: string
  children: ReactNode
}) {
  const label = command.trim().split(/\s+/)[0]?.toLowerCase() || 'cmd'
  return (
    <div data-cmd-frame className="my-3 overflow-hidden rounded-md border border-line/80 bg-bg-2/50">
      <div className="flex items-center gap-2 border-b border-line/80 bg-bg/80 px-3 py-1.5">
        <span className="text-dim">#</span>
        <span className="text-yellow font-semibold tracking-wide">{label}</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-dim">
          output
        </span>
      </div>
      <div className="px-3 py-3">{children}</div>
    </div>
  )
}

function runCommand(raw: string): ReactNode {
  const input = raw.trim()
  const [cmd, ...rest] = input.split(/\s+/)
  const arg = rest.join(' ').trim().toLowerCase()
  const key = (cmd || '').toLowerCase()

  if (!key) return null

  switch (key) {
    case 'help':
    case '?':
      return (
        <Block>
          <p className="text-yellow">available commands</p>
          <p>
            <span className="text-green">whoami</span>
            <span className="text-dim">     # bio + positioning</span>
          </p>
          <p>
            <span className="text-green">work</span>
            <span className="text-dim">       # client / employment history</span>
          </p>
          <p>
            <span className="text-green">projects</span>
            <span className="text-dim">   # shipped apps</span>
          </p>
          <p>
            <span className="text-green">oss</span>
            <span className="text-dim">        # open source</span>
          </p>
          <p>
            <span className="text-green">stack</span>
            <span className="text-dim">      # tools I use daily</span>
          </p>
          <p>
            <span className="text-green">hire</span>
            <span className="text-dim">       # how to work with me</span>
          </p>
          <p>
            <span className="text-green">contact</span>
            <span className="text-dim">    # email / phone / social</span>
          </p>
          <p>
            <span className="text-green">resume</span>
            <span className="text-dim">     # open resume v2</span>
          </p>
          <p>
            <span className="text-green">clear</span>
            <span className="text-dim">      # clear the screen</span>
          </p>
          <p>
            <span className="text-green">theme</span>
            <span className="text-dim">      # dark | matrix</span>
          </p>
          <p className="pt-2 text-dim">tip: tap a chip below, or type and hit enter.</p>
        </Block>
      )

    case 'whoami':
      return (
        <Block>
          <p>
            <span className="text-2xl font-bold text-green sm:text-3xl">{site.name}</span>
            <span className="text-dim"> aka ra</span>
          </p>
          <p className="text-fg">{site.role}</p>
          <p className="text-dim">{site.location}</p>
          <p className="pt-2">{site.tagline}</p>
          <p className="pt-2 text-dim">ideal clients → {site.idealClients}</p>
          <p className="pt-2">
            proof → <A href={openSource[0].href}>use-whisper {openSource[0].stars}</A>
            {' · '}
            Khmer Pride Keyboard 1K+ Play downloads
          </p>
        </Block>
      )

    case 'work':
    case 'experience':
    case 'jobs': {
      const rows = experience.map((job) => (
        <div key={job.company} className="border-l border-line pl-3">
          <p>
            <span className="text-cyan">{job.company}</span>
            <span className="text-dim"> / {job.role}</span>
          </p>
          <p className="text-dim text-xs">
            {job.period} · {job.place}
          </p>
          <p className="pt-1">{job.summary}</p>
          <ul className="mt-1 space-y-0.5 text-dim">
            {job.highlights.map((h) => (
              <li key={h}>› {h}</li>
            ))}
          </ul>
          {job.links.length > 0 ? (
            <p className="pt-1">
              {job.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 ? <span className="text-dim"> · </span> : null}
                  <A href={l.href}>{l.label}</A>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      ))
      return (
        <div className="space-y-4">
          <p className="text-dim text-xs">latest first</p>
          {rows}
        </div>
      )
    }

    case 'projects':
    case 'apps': {
      const filtered = arg
        ? projects.filter((p) => p.name.toLowerCase().includes(arg))
        : projects
      if (filtered.length === 0) {
        return <p className="text-red">no project match for “{arg}”</p>
      }
      return (
        <div className="space-y-4">
          {filtered.map((p) => (
            <div key={p.name} className="border-l border-line pl-3">
              <p>
                <span className="text-yellow">{p.name}</span>
                <span className="text-dim"> [{p.status}]</span>
              </p>
              <p>{p.summary}</p>
              <p className="text-green text-sm">{p.proof}</p>
              <p className="text-dim text-sm">{p.stack.join(' · ')}</p>
              <p className="pt-1">
                {p.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 ? <span className="text-dim"> · </span> : null}
                    <A href={l.href}>{l.label}</A>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      )
    }

    case 'oss':
    case 'opensource':
    case 'github':
      return (
        <div className="space-y-3">
          {openSource.map((r) => (
            <div key={r.name}>
              <p>
                <A href={r.href}>{r.name}</A>
                <span className="text-yellow"> {r.stars}</span>
              </p>
              <p className="text-dim">{r.summary}</p>
            </div>
          ))}
          <p className="text-dim">
            profile → <A href={social.github}>{social.github.replace('https://', '')}</A>
          </p>
        </div>
      )

    case 'stack':
    case 'skills':
      return (
        <Block>
          <p className="text-yellow">$ cat ~/.stack</p>
          <p className="pt-1">{stack.join('  ')}</p>
        </Block>
      )

    case 'hire':
    case 'services':
    case 'offers':
      return (
        <Block>
          <p className="text-green">available for freelance / contract</p>
          <p className="pt-1 text-dim">clear ways to start:</p>
          <div className="mt-3 space-y-3">
            {offers.map((o, i) => (
              <div key={o.id} className="border-l border-green/40 pl-3">
                <p>
                  <span className="text-dim">{i + 1}.</span>{' '}
                  <span className="text-cyan">{o.title}</span>
                </p>
                <p>{o.blurb}</p>
                <p className="text-dim">{o.outcome}</p>
              </div>
            ))}
          </div>
          <p className="pt-4">
            next step → <A href={`mailto:${site.email}?subject=Project%20inquiry%20-%20Sokdara%20Cheng`}>email me</A>
            {' or type '}
            <span className="text-green">contact</span>
          </p>
        </Block>
      )

    case 'contact':
      return (
        <Block>
          <p>
            email{'  '}
            <A href={`mailto:${site.email}`}>{site.email}</A>
          </p>
          <p>
            phone{'  '}
            <A href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</A>
          </p>
          <p>
            resume{' '}
            <A href={site.resumeUrl}>chengsokdara.github.io/resume/v2</A>
          </p>
          <p>
            github{' '}
            <A href={social.github}>@chengsokdara</A>
          </p>
          <p>
            linkedin{' '}
            <A href={social.linkedin}>/in/chengsokdara</A>
          </p>
          <p className="pt-2 text-dim">timezone {site.location}</p>
        </Block>
      )

    case 'resume':
    case 'cv':
      if (typeof window !== 'undefined') {
        window.open(site.resumeUrl, '_blank', 'noreferrer')
      }
      return (
        <p>
          opening resume → <A href={site.resumeUrl}>{site.resumeUrl}</A>
        </p>
      )

    case 'theme': {
      if (!arg || arg === 'list') {
        return (
          <p>
            themes: <span className="text-green">dark</span>,{' '}
            <span className="text-green">matrix</span>
            <span className="text-dim">  # usage: theme matrix</span>
          </p>
        )
      }
      if (arg === 'dark' || arg === 'matrix') {
        document.documentElement.dataset.theme = arg
        localStorage.setItem('portfolio-theme', arg)
        return <p className="text-green">theme set to {arg}</p>
      }
      return <p className="text-red">unknown theme. try: theme dark | theme matrix</p>
    }

    case 'ls':
      return (
        <p className="text-cyan">
          whoami  work  projects  oss  stack  hire  contact  resume  help
        </p>
      )

    case 'neofetch':
    case 'fetch':
      return (
        <Block>
          <pre className="text-green text-[11px] leading-tight sm:text-xs">{`       _____
      / ___/__  ______
     / /__/ _ \\/ __/
     \\___/\\___/_/   sokdara@github
`}</pre>
          <p>
            <span className="text-dim">OS</span>       PortfolioOS 2.0 (Vite + React 19)
          </p>
          <p>
            <span className="text-dim">Host</span>     {site.location}
          </p>
          <p>
            <span className="text-dim">Shell</span>    zsh-ish · IBM Plex Mono
          </p>
          <p>
            <span className="text-dim">Uptime</span>   7+ years shipping web + mobile
          </p>
          <p>
            <span className="text-dim">Packages</span> {stack.length} daily drivers
          </p>
          <p>
            <span className="text-dim">Stars</span>    use-whisper {openSource[0].stars}
          </p>
        </Block>
      )

    case 'sudo':
      return <p className="text-red">nice try. you&apos;re already root of this tab.</p>

    case 'echo':
      return <p>{rest.join(' ') || ''}</p>

    case 'date':
      return <p>{new Date().toString()}</p>

    default:
      return (
        <p className="text-red">
          command not found: {key}. type <span className="text-green">help</span>.
        </p>
      )
  }
}

const BOOT = [
  { text: 'PortfolioOS bootloader v2.0', tone: 'dim' as Tone },
  { text: '[ OK ] load profile: Sokdara Cheng', tone: 'green' as Tone },
  { text: '[ OK ] mount /work /projects /oss', tone: 'green' as Tone },
  { text: '[ OK ] hire channel online', tone: 'green' as Tone },
  { text: '', tone: 'dim' as Tone },
  {
    text: 'Welcome. I ship React Native + React products from Phnom Penh (ICT+7).',
    tone: 'fg' as Tone,
  },
  {
    text: 'Type help, or tap a command chip. For clients: start with hire.',
    tone: 'dim' as Tone,
  },
]

export default function App() {
  const [booting, setBooting] = useState(true)
  const [bootCount, setBootCount] = useState(0)
  const [lines, setLines] = useState<Line[]>([])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const reducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'matrix' || saved === 'dark') {
      document.documentElement.dataset.theme = saved
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setBootCount(BOOT.length)
      setBooting(false)
      return
    }
    if (bootCount >= BOOT.length) {
      const t = window.setTimeout(() => setBooting(false), 200)
      return () => window.clearTimeout(t)
    }
    const t = window.setTimeout(() => setBootCount((c) => c + 1), 180)
    return () => window.clearTimeout(t)
  }, [bootCount, reducedMotion])

  useEffect(() => {
    const behavior: ScrollBehavior = reducedMotion ? 'auto' : 'smooth'
    // Prefer the start of the latest command output so long lists (work) begin on-screen.
    const frames = document.querySelectorAll('[data-cmd-frame]')
    const last = frames[frames.length - 1]
    if (last) {
      last.scrollIntoView({ behavior, block: 'start' })
      return
    }
    bottomRef.current?.scrollIntoView({ behavior, block: 'end' })
  }, [lines, bootCount, booting, reducedMotion])

  const pushOutput = useCallback((nodes: ReactNode) => {
    if (nodes == null) return
    setLines((prev) => [...prev, { kind: 'output', nodes }])
  }, [])

  const execute = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      setLines((prev) => [...prev, { kind: 'input', text: trimmed }])
      if (!trimmed) return

      const key = trimmed.split(/\s+/)[0]?.toLowerCase()
      if (key === 'clear' || key === 'cls') {
        setLines([])
        return
      }

      setHistory((h) => (trimmed === h[0] ? h : [trimmed, ...h].slice(0, 50)))
      setHistIdx(-1)
      const out = runCommand(trimmed)
      if (out != null) {
        pushOutput(<CommandFrame command={trimmed}>{out}</CommandFrame>)
      }
    },
    [pushOutput],
  )

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    execute(value)
    setValue('')
  }

  const focusInput = () => inputRef.current?.focus()

  return (
    <div
      className="relative flex min-h-full flex-col px-3 py-4 sm:px-6 sm:py-8"
      data-theme-root
    >
      <style>{`
        html[data-theme='matrix'] body {
          --color-fg: #b6f5c6;
          --color-dim: #3f7a52;
          --color-green: #39ff14;
          --color-cyan: #7dffb3;
          --color-yellow: #b8ff62;
          --color-magenta: #9dffa8;
          --color-bg: #020805;
          --color-bg-2: #041008;
          --color-panel: #06140c;
          --color-line: #12351f;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col fade-up">
        <header className="mb-3 flex items-end justify-between gap-3 text-xs sm:text-sm">
          <div>
            <p className="text-2xl font-bold tracking-tight text-green sm:text-3xl">
              {site.name}
            </p>
            <p className="mt-0.5 text-xs text-dim sm:text-sm">
              <span className="text-dim">portfolio.sh</span>
              <span className="text-dim"> · </span>
              {site.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <A href={`mailto:${site.email}?subject=Project%20inquiry%20-%20Sokdara%20Cheng`}>
              hire →
            </A>
            <span className="text-dim">|</span>
            <A href={site.resumeUrl}>resume</A>
          </div>
        </header>

        <section
          className="crt-glow relative flex min-h-[70vh] flex-1 flex-col overflow-hidden rounded-xl border border-line bg-panel/90"
          onClick={focusInput}
          aria-label="Interactive terminal portfolio"
        >
          <div className="flex items-center gap-2 border-b border-line px-3 py-2 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-green/80" aria-hidden />
            <span className="ml-2 truncate text-xs text-dim">
              {PROMPT}:{HOST_PATH} / zsh
            </span>
            <span className="ml-auto hidden text-[10px] uppercase tracking-wider text-dim sm:inline">
              dark · type help
            </span>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-[13px] leading-relaxed sm:px-4 sm:text-sm">
            {BOOT.slice(0, bootCount).map((line, i) => (
              <p
                key={`boot-${i}`}
                className={`boot-line ${toneClass(line.tone)}`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {line.text || '\u00A0'}
              </p>
            ))}

            {!booting &&
              lines.map((line, i) => {
                if (line.kind === 'input') {
                  return (
                    <p key={`in-${i}`} className="pt-1">
                      <span className="text-green">{PROMPT}</span>
                      <span className="text-dim">:</span>
                      <span className="text-cyan">{HOST_PATH}</span>
                      <span className="text-dim">$ </span>
                      <span>{line.text}</span>
                    </p>
                  )
                }
                if (line.kind === 'output') {
                  return (
                    <div key={`out-${i}`} className="boot-line pl-0">
                      {line.nodes}
                    </div>
                  )
                }
                return null
              })}

            {!booting && (
              <form onSubmit={onSubmit} className="flex items-center gap-0 pt-1">
                <label className="sr-only" htmlFor="terminal-input">
                  Terminal command
                </label>
                <span className="shrink-0">
                  <span className="text-green">{PROMPT}</span>
                  <span className="text-dim">:</span>
                  <span className="text-cyan">{HOST_PATH}</span>
                  <span className="text-dim">$ </span>
                </span>
                <span className="relative flex min-w-0 flex-1 items-center overflow-x-auto">
                  {!value && !booting ? (
                    <span className="pointer-events-none absolute left-[0.85ch] whitespace-nowrap text-dim/50">
                      try hire or whoami
                    </span>
                  ) : null}
                  <input
                    id="terminal-input"
                    ref={inputRef}
                    value={value}
                    autoFocus
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        const next = Math.min(histIdx + 1, history.length - 1)
                        if (history[next] != null) {
                          setHistIdx(next)
                          setValue(history[next])
                        }
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        const next = histIdx - 1
                        if (next < 0) {
                          setHistIdx(-1)
                          setValue('')
                        } else {
                          setHistIdx(next)
                          setValue(history[next] ?? '')
                        }
                      } else if (e.key === 'Tab') {
                        e.preventDefault()
                        const match = QUICK.find((c) => c.startsWith(value.toLowerCase()))
                        if (match) setValue(match)
                      }
                    }}
                    style={{ width: `${Math.max(value.length, 0)}ch` }}
                    className="max-w-full bg-transparent text-fg caret-transparent outline-none"
                    disabled={booting}
                  />
                  <span
                    className="blink z-10 ml-px inline-block h-[1.1em] w-[0.65ch] shrink-0 bg-cursor align-middle"
                    aria-hidden
                  />
                </span>
              </form>
            )}
            <div ref={bottomRef} />
          </div>
        </section>

        <div className="mt-3 flex flex-wrap gap-2" aria-label="Quick commands">
          {QUICK.map((cmd) => (
            <button
              key={cmd}
              type="button"
              disabled={booting}
              onClick={() => {
                execute(cmd)
                focusInput()
              }}
              className="rounded border border-line bg-bg-2 px-2.5 py-1 text-xs text-cyan transition hover:border-green/50 hover:text-green disabled:opacity-40"
            >
              {cmd}
            </button>
          ))}
        </div>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-dim">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="flex gap-3">
            <A href={social.github}>github</A>
            <A href={social.linkedin}>linkedin</A>
            <A href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</A>
          </p>
        </footer>
      </div>
    </div>
  )
}
