import { useEffect, useRef } from 'react'
import { animate, stagger, svg } from 'animejs'
import Backdrop from './Backdrop'

const TRACES = [
  'M210 260 H140 L110 230 H20',
  'M210 300 H20',
  'M210 340 H140 L110 370 H20',
  'M390 260 H460 L490 230 H580',
  'M390 300 H580',
  'M390 340 H460 L490 370 H580',
  'M260 210 V140 L230 110 V20',
  'M300 210 V20',
  'M340 210 V140 L370 110 V20',
  'M260 390 V460 L230 490 V580',
  'M300 390 V580',
  'M340 390 V460 L370 490 V580',
]

const ENDS = [
  [20, 230], [20, 300], [20, 370],
  [580, 230], [580, 300], [580, 370],
  [230, 20], [300, 20], [370, 20],
  [230, 580], [300, 580], [370, 580],
]

const PINS = [236, 268, 300, 332, 364]
const TRACE = '#3a8a3f'
const PIN = '#7dbb80'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    const items = root.querySelectorAll('.hero-item')
    const traces = root.querySelectorAll('.trace')
    const nodes = root.querySelectorAll('.node')
    const chip = root.querySelector('.chip')
    const glow = root.querySelector('.chip-glow')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => (el.style.opacity = 1))
      nodes.forEach((el) => (el.style.opacity = 1))
      chip.style.opacity = 1
      return
    }

    const running = []
    running.push(animate(items, { opacity: [0, 1], translateY: [28, 0], delay: stagger(130), duration: 900, ease: 'outExpo' }))
    running.push(animate(svg.createDrawable(traces), { draw: ['0 0', '0 1'], delay: stagger(110, { start: 300 }), duration: 2000, ease: 'inOutQuad' }))
    running.push(animate(chip, { opacity: [0, 1], scale: [0.85, 1], duration: 1200, ease: 'outExpo' }))
    running.push(animate(nodes, { opacity: [0, 1], delay: stagger(100, { start: 1600 }), duration: 600, ease: 'outQuad' }))
    running.push(animate(glow, { opacity: [0.3, 1], duration: 1500, delay: 1200, loop: true, alternate: true, ease: 'inOutSine' }))
    running.push(animate(traces, { opacity: [1, 0.5], duration: 1700, delay: stagger(180, { from: 'center', start: 2600 }), loop: true, alternate: true, ease: 'inOutSine' }))

    return () => running.forEach((a) => a.revert())
  }, [])

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
      <Backdrop src="/images/bg-circuit.webp" opacity={0.35} position="center" eager />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="hero-item opacity-0 mb-5 font-mono text-xs uppercase tracking-[0.3em] text-brand-300">
            CR Mapz Technologies · Rustenburg, South Africa
          </p>

          <h1 className="hero-item opacity-0 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Technology Solutions That{' '}
            <span className="text-brand-300">Move Your Ideas Forward.</span>
          </h1>

          <p className="hero-item opacity-0 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80 lg:mx-0">
            We help individuals, entrepreneurs and businesses build their digital
            presence, explore AI-powered solutions and address everyday technology
            challenges through practical digital services.
          </p>

          <div className="hero-item opacity-0 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#services" className="rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500">
              Explore Our Services
            </a>
            <a href="#projects" className="rounded-md border border-brand-300/40 px-6 py-3 font-semibold text-brand-100 transition hover:border-brand-300 hover:text-brand-300">
              View Our Projects
            </a>
          </div>

          <p className="hero-item opacity-0 mt-10 font-mono text-xs text-ink-400">
            Software · Web · AI · Support · Digital Services
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <svg viewBox="0 0 600 600" className="h-auto w-full" aria-hidden="true">
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
                <path key={i} className="trace" d={d} fill="none" stroke={TRACE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ))}
            </g>

            {ENDS.map(([x, y]) => (
              <circle key={x + '-' + y} className="node" cx={x} cy={y} r="6" fill={PIN} style={{ opacity: 0 }} />
            ))}

            <g className="chip" style={{ opacity: 0, transformBox: 'fill-box', transformOrigin: 'center' }}>
              <rect className="chip-glow" x="206" y="206" width="188" height="188" rx="18" fill="none" stroke={PIN} strokeWidth="2" filter="url(#glow)" />
              <rect x="210" y="210" width="180" height="180" rx="14" fill="#07100a" stroke={TRACE} strokeWidth="2" />
              <rect x="250" y="250" width="100" height="100" rx="6" fill="#0d1a0f" stroke={TRACE} strokeOpacity="0.8" />

              {PINS.map((p) => (
                <g key={p} stroke={PIN} strokeWidth="3" strokeLinecap="round">
                  <line x1="198" y1={p} x2="210" y2={p} />
                  <line x1="390" y1={p} x2="402" y2={p} />
                  <line x1={p} y1="198" x2={p} y2="210" />
                  <line x1={p} y1="390" x2={p} y2="402" />
                </g>
              ))}

              <text x="300" y="308" textAnchor="middle" fontSize="36" fontWeight="700" fill={PIN} fontFamily="Poppins, system-ui, sans-serif">CR</text>
              <text x="300" y="330" textAnchor="middle" fontSize="10" letterSpacing="4" fill="#8f9a90" fontFamily="'JetBrains Mono', monospace">MAPZ</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
