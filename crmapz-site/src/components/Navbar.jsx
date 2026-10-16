import { useState } from 'react'
import LogoMark from './LogoMark'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#qualifications', label: 'Qualifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-800/70 bg-brand-950/95">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-auto" />
          <span className="text-sm font-semibold tracking-[0.18em] text-white">
            MAPZ <span className="font-medium text-brand-300">TECHNOLOGIES</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-400 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500 lg:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="text-brand-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-brand-800/70 bg-brand-950 px-6 py-3 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-brand-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
