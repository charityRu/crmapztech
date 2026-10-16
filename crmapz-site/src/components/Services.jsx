import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import Backdrop from './Backdrop'
import useReveal from '../useReveal'

const BINARY = '01010011 01000101 01010010 01010110 01001001 01000011 01000101 01010011'

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
    {children}
  </svg>
)

const SERVICES = [
  {
    id: 'SRV-01',
    title: 'Website Development',
    text: 'Business websites, portfolio sites, landing pages and redesigns, built to be responsive and easy to maintain.',
    tags: ['Business sites', 'Landing pages', 'Redesigns', 'Maintenance'],
    icon: (<Icon><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 13l-2 2 2 2M15 13l2 2-2 2" /></Icon>),
  },
  {
    id: 'SRV-02',
    title: 'Software Development',
    text: 'Custom web applications, prototypes and frontend features, with suitable API integrations.',
    tags: ['Web apps', 'Prototypes', 'Frontend', 'APIs'],
    icon: (<Icon><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></Icon>),
  },
  {
    id: 'SRV-03',
    title: 'AI-Powered Solutions',
    text: 'Practical AI features, application prototypes and workflow ideas that help you explore what AI can do for your business.',
    tags: ['AI features', 'Prototypes', 'Workflows', 'Guidance'],
    icon: (<Icon><circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6l3 5M7 18l3-5M14 11l3-4M14 13l3 4" /></Icon>),
  },
  {
    id: 'SRV-04',
    title: 'Computer & Technical Support',
    text: 'Hardware and software troubleshooting, general computer support, computer lessons and basic digital skills help.',
    tags: ['Troubleshooting', 'Support', 'Lessons'],
    icon: (<Icon><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></Icon>),
  },
  {
    id: 'SRV-05',
    title: 'Graphic Design & Branding',
    text: 'Logos, flyers, digital promotional material and basic visual branding support.',
    tags: ['Logos', 'Flyers', 'Branding'],
    icon: (<Icon><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" /><path d="M14 7l3 3" /></Icon>),
  },
  {
    id: 'SRV-06',
    title: 'Digital Business Support',
    text: 'Google Business Profile setup, online-presence support, CVs and professional documents, and help with digital tools.',
    tags: ['Google Business', 'Online presence', 'CVs', 'Documents'],
    icon: (<Icon><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></Icon>),
  },
]

export default function Services() {
  const ref = useRef(null)
  const binaryRef = useRef(null)
  useReveal(ref)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const flicker = animate(binaryRef.current, { opacity: [0.25, 0.8], duration: 1400, loop: true, alternate: true, ease: 'inOutSine' })
    return () => flicker.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="relative isolate overflow-hidden">
      <Backdrop src="/images/bg-binary.webp" opacity={0.4} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p ref={binaryRef} className="mb-6 font-mono text-xs tracking-widest text-brand-600" aria-hidden="true">{BINARY}</p>
          <p className="reveal cursor opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// services</p>
          <h2 className="reveal opacity-0 text-4xl font-bold text-white md:text-5xl">
            What we <span className="text-brand-300">build</span>
          </h2>
          <p className="reveal opacity-0 mx-auto mt-4 max-w-2xl text-ink-400">
            Software, AI and everyday technology support, all under one roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="reveal group relative overflow-hidden rounded-md border border-brand-600/30 bg-brand-900/90 p-6 opacity-0 transition duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-[0_0_30px_rgba(125,187,128,0.12)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-brand-300">{s.icon}</span>
                <span className="font-mono text-xs tracking-widest text-ink-400">{s.id}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-ink-400">{s.text}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-sm border border-brand-600/50 px-2 py-1 font-mono text-xs text-brand-300">{t}</span>
                ))}
              </div>
              <span className="absolute bottom-0 left-6 h-px w-0 bg-brand-300 transition-all duration-500 group-hover:w-[calc(100%-3rem)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
