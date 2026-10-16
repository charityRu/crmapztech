import { useRef } from 'react'
import Backdrop from './Backdrop'
import LogoMark from './LogoMark'
import useReveal from '../useReveal'
import { CONTACT, COMPANY, SOCIAL, MAILTO, WHATSAPP } from '../config'

const EXPLORE = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#qualifications', label: 'Qualifications' },
]

const heading = 'mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand-300'
const link = 'text-ink-400 transition hover:text-white'

export default function Footer() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <footer id="contact" ref={ref} className="relative isolate overflow-hidden border-t border-brand-800/70">
      <Backdrop src="/images/bg-fibre.webp" opacity={0.45} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="reveal opacity-0 py-20 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// contact</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-400">
            Email us first with a few details, then send a quick message on WhatsApp so we can get back to you faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={MAILTO} className="rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500">
              Email Us
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-md border border-brand-300/40 px-6 py-3 font-semibold text-brand-100 transition hover:border-brand-300 hover:text-brand-300">
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="reveal opacity-0 grid gap-10 border-t border-brand-800/70 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <LogoMark className="h-8 w-auto" />
              <span className="text-sm font-semibold tracking-[0.18em] text-white">
                MAPZ <span className="font-medium text-brand-300">TECHNOLOGIES</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              Software, AI and digital services for individuals, entrepreneurs and businesses.
            </p>
          </div>

          <div>
            <p className={heading}>Explore</p>
            <ul className="space-y-3 text-sm">
              {EXPLORE.map((l) => (
                <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={heading}>Contact</p>
            <ul className="space-y-3 text-sm text-ink-400">
              <li><a href={MAILTO} className={link}>{CONTACT.email}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className={link}>WhatsApp {CONTACT.whatsappDisplay}</a></li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>

          <div>
            <p className={heading}>Connect</p>
            <ul className="space-y-3 text-sm">
              {SOCIAL.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className={link}>{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal opacity-0 flex flex-col items-center justify-between gap-2 border-t border-brand-800/70 py-6 text-xs text-ink-400 sm:flex-row">
          <p>© {COMPANY.year} {COMPANY.name}. All rights reserved.</p>
          <p className="font-mono">{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
