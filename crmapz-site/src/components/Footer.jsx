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

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...strokeProps} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...strokeProps} aria-hidden="true">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <g transform="translate(6.6 6.6) scale(0.5)">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </g>
  </svg>
)

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
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500"
            >
              <MailIcon className="h-5 w-5" />
              Email Us
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-300/40 px-6 py-3 font-semibold text-brand-100 transition hover:border-brand-300 hover:text-brand-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
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
            <ul className="space-y-3 text-sm">
              <li>
                <a href={MAILTO} className={`${link} inline-flex items-center gap-2`}>
                  <MailIcon className="h-4 w-4 text-brand-300" />
                  Email us
                </a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`${link} inline-flex items-center gap-2`}>
                  <WhatsAppIcon className="h-4 w-4 text-brand-300" />
                  Message on WhatsApp
                </a>
              </li>
              <li className="text-ink-400">{CONTACT.location}</li>
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
