import { useEffect, useRef } from 'react'
import { animate, stagger, svg } from 'animejs'
import Backdrop from './Backdrop'
import { CONTACT } from '../config'

const TRACES = [
  'M500 210 H420 L380 170 H200 L160 130 H0',
  'M500 260 H0',
  'M500 300 H300 L260 340 H0',
  'M500 350 H420 L380 390 H220 L180 430 H0',
  'M700 210 H780 L820 170 H1000 L1040 130 H1200',
  'M700 260 H1200',
  'M700 300 H900 L940 340 H1200',
  'M700 350 H780 L820 390 H980 L1020 430 H1200',
  'M560 180 V100 L520 60 V0',
  'M600 180 V0',
  'M640 180 V100 L680 60 V0',
  'M560 380 V460 L520 500 V800',
  'M600 380 V800',
  'M640 380 V460 L680 500 V800',
]

const PINS = Array.from({ length: 8 }, (_, i) => 200 + i * 22)
const PINS_X = Array.from({ length: 8 }, (_, i) => 520 + i * 22)

const TRACE = '#3a8a3f'
const PIN = '#7dbb80'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    const items = root.querySelectorAll('.hero-item')
    const traces = root.querySelectorAll('.trace')
    const chip = root.querySelector('.chip')
    const glow = root.querySelector('.chip-glow')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => {
        el.style.opacity = 1
      })
      chip.style.opacity = 1
      return
    }

    const running = []

    running.push(
      animate(svg.createDrawable(traces), {
        draw: ['0 0', '0 1'],
        delay: stagger(120),
        duration: 2200,
        ease: 'inOutQuad',
      })
    )

    running.push(
      animate(chip, {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 1200,
        ease: 'outExpo',
      })
    )

    running.push(
      animate(glow, {
        opacity: [0.35, 1],
        duration: 1400,
        delay: 1200,
        loop: true,
        alternate: true,
        ease: 'inOutSine',
      })
    )

    running.push(
      animate(traces, {
        opacity: [1, 0.45],
        duration: 1600,
        delay: stagger(180, { from: 'center', start: 2400 }),
        loop: true,
        alternate: true,
        ease: 'inOutSine',
      })
    )

    running.push(
      animate(items, {
        opacity: [0, 1],
        translateY: [32, 0],
        delay: stagger(150, { start: 900 }),
        duration: 900,
        ease: 'outExpo',
      })
    )

    return () => running.forEach((a) => a.revert())
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-screen flex-col items-center justify-end overflow-hidden px-6 pb-16 text-center"
    >
      <Backdrop src="/images/bg-circuit.webp" opacity={0.5} position="center top" eager />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow)">
          {TRACES.map((d, i) => (
            <path
              key={i}
              className="trace"
              d={d}
              fill="none"
              stroke={TRACE}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>

        <g
          className="chip"
          style={{ opacity: 0, transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <rect
            className="chip-glow"
            x="496"
            y="176"
            width="208"
            height="208"
            rx="18"
            fill="none"
            stroke={PIN}
            strokeWidth="2"
            filter="url(#glow)"
          />
          <rect x="500" y="180" width="200" height="200" rx="14" fill="#07100a" stroke={TRACE} strokeWidth="2" />
          <rect x="540" y="220" width="120" height="120" rx="6" fill="#0d1a0f" stroke={TRACE} strokeOpacity="0.8" />

          {PINS.map((y) => (
            <g key={'lr' + y} stroke={PIN} strokeWidth="3" strokeLinecap="round">
              <line x1="486" y1={y} x2="500" y2={y} />
              <line x1="700" y1={y} x2="714" y2={y} />
            </g>
          ))}
          {PINS_X.map((x) => (
            <g key={'tb' + x} stroke={PIN} strokeWidth="3" strokeLinecap="round">
              <line x1={x} y1="166" x2={x} y2="180" />
              <line x1={x} y1="380" x2={x} y2="394" />
            </g>
          ))}

          <text x="600" y="288" textAnchor="middle" fontSize="44" fontWeight="700" fill={PIN} fontFamily="Poppins, system-ui, sans-serif">
            CR
          </text>
          <text x="600" y="316" textAnchor="middle" fontSize="14" letterSpacing="6" fill="#8f9a90" fontFamily="'JetBrains Mono', monospace">
            MAPZ
          </text>
        </g>
      </svg>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--color-brand-950) 0%, rgba(5,10,6,0.85) 35%, transparent 65%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <p className="hero-item opacity-0 font-mono text-xs uppercase tracking-[0.3em] text-brand-300">
          CR Mapz Technologies
        </p>

        <h1 className="hero-item opacity-0 text-5xl font-bold leading-tight text-white md:text-7xl">
          Innovate. Code. <span className="text-brand-300">Transform.</span>
        </h1>

        <p className="hero-item opacity-0 max-w-2xl text-lg text-brand-100/80">
          Smart Tech. Real Solutions. Websites, web apps and digital systems
          built with modern technology, designed to help your business grow.
        </p>

        <p className="hero-item opacity-0 font-mono text-xs text-ink-400">
          AI · Web Development · Mobile Apps · High-Performance Systems · Hardware Setup
        </p>

        <div className="hero-item opacity-0 flex flex-wrap items-center justify-center gap-4">
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
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
