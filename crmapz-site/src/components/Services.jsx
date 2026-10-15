import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Backdrop from './Backdrop'
import { CONTACT } from '../config'

const BINARY =
  '01010011 01000101 01010010 01010110 01001001 01000011 01000101 01010011'

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const SERVICES = [
  {
    id: 'SRV-01',
    title: 'AI Solutions',
    text: 'Chatbots, smart assistants and automation that save you hours. Practical AI built into products people actually use.',
    tags: ['Chatbots', 'Automation', 'AI Apps'],
    icon: (
      <Icon>
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6l3 5M7 18l3-5M14 11l3-4M14 13l3 4" />
      </Icon>
    ),
  },
  {
    id: 'SRV-02',
    title: 'Web Development',
    text: 'Fast, responsive websites and web apps, built clean from scratch with React or on WordPress.',
    tags: ['React', 'Tailwind', 'WordPress'],
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 13l-2 2 2 2M15 13l2 2-2 2" />
      </Icon>
    ),
  },
  {
    id: 'SRV-03',
    title: 'Mobile Apps',
    text: 'Mobile-ready apps that feel smooth and work on any phone, from simple tools to full products.',
    tags: ['Responsive', 'PWA', 'Cross-platform'],
    icon: (
      <Icon>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </Icon>
    ),
  },
  {
    id: 'SRV-04',
    title: 'High-Performance Systems',
    text: 'Custom workstation and GPU rig builds, planned and configured for AI, rendering and heavy workloads.',
    tags: ['Workstations', 'GPU Rigs', 'Cooling'],
    icon: (
      <Icon>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9.5" y="9.5" width="5" height="5" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </Icon>
    ),
  },
  {
    id: 'SRV-05',
    title: 'Hardware Setup & Repair',
    text: 'Proper PC and phone setups: upgrades, repairs, networking and installs, done right with clean cable management.',
    tags: ['Upgrades', 'Repairs', 'Networking'],
    icon: (
      <Icon>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </Icon>
    ),
  },
  {
    id: 'SRV-06',
    title: 'Graphic Design',
    text: 'Logos, brand identity and social media visuals that make your business look as sharp as it works.',
    tags: ['Logos', 'Branding', 'Social'],
    icon: (
      <Icon>
        <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />
        <path d="M14 7l3 3" />
      </Icon>
    ),
  },
]

export default function Services() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const head = root.querySelectorAll('.svc-head')
    const cards = root.querySelectorAll('.svc-card')
    const binary = root.querySelector('.svc-binary')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      head.forEach((el) => (el.style.opacity = 1))
      cards.forEach((el) => (el.style.opacity = 1))
      return
    }

    const running = []

    running.push(
      animate(binary, {
        opacity: [0.25, 0.8],
        duration: 1400,
        loop: true,
        alternate: true,
        ease: 'inOutSine',
      })
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        running.push(
          animate(head, {
            opacity: [0, 1],
            translateY: [24, 0],
            delay: stagger(120),
            duration: 800,
            ease: 'outExpo',
          })
        )
        running.push(
          animate(cards, {
            opacity: [0, 1],
            translateY: [40, 0],
            delay: stagger(110, { start: 300 }),
            duration: 900,
            ease: 'outExpo',
          })
        )
      },
      { threshold: 0.15 }
    )
    observer.observe(root)

    return () => {
      observer.disconnect()
      running.forEach((a) => a.revert())
    }
  }, [])

  return (
    <section id="services" ref={rootRef} className="relative isolate overflow-hidden">
      <Backdrop src="/images/bg-binary.webp" opacity={0.4} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p
            className="svc-binary mb-6 font-mono text-xs tracking-widest text-brand-600"
            aria-hidden="true"
          >
            {BINARY}
          </p>
          <p className="svc-head cursor opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">
            // services
          </p>
          <h2 className="svc-head opacity-0 text-4xl font-bold text-white md:text-5xl">
            What I <span className="text-brand-300">build</span>
          </h2>
          <p className="svc-head opacity-0 mx-auto mt-4 max-w-2xl text-ink-400">
            From intelligent software to the machines that run it. One person,
            the whole stack.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="svc-card group relative overflow-hidden rounded-md border border-brand-600/30 bg-brand-900/90 p-6 opacity-0 transition duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-[0_0_30px_rgba(125,187,128,0.12)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-brand-300">{s.icon}</span>
                <span className="font-mono text-xs tracking-widest text-ink-400">
                  {s.id}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-ink-400">{s.text}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-brand-600/50 px-2 py-1 font-mono text-xs text-brand-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="absolute bottom-0 left-6 h-px w-0 bg-brand-300 transition-all duration-500 group-hover:w-[calc(100%-3rem)]" />
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-brand-100/80">
            Have a project or a machine in mind? Email me first, then message me
            on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${CONTACT.email}?subject=Project%20enquiry%20-%20CR%20Mapz%20Technologies`}
              className="rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500"
            >
              Email Me
            </a>
            <a
              href={`${CONTACT.whatsappLink}?text=Hi%20CR%20Mapz%20Technologies%2C%20I%20just%20sent%20you%20an%20email.`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-brand-300/40 px-6 py-3 font-semibold text-brand-100 transition hover:border-brand-300 hover:text-brand-300"
            >
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
