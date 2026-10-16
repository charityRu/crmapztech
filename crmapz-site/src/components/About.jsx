import { useRef } from 'react'
import Backdrop from './Backdrop'
import useReveal from '../useReveal'
import { SOCIAL } from '../config'

const PRINCIPLES = [
  { id: '01', title: 'Practical problem-solving', text: 'We focus on real customer needs rather than technology for its own sake.' },
  { id: '02', title: 'Personal attention', text: 'We listen first and tailor each solution to what you actually require.' },
  { id: '03', title: 'Continuous learning', text: 'We keep developing our skills and improving our solutions as technology evolves.' },
  { id: '04', title: 'Transparent communication', text: 'We communicate honestly about services, capabilities, costs and outcomes.' },
]

export default function About() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="about" ref={ref} className="relative isolate overflow-hidden">
      <Backdrop src="/images/bg-code.webp" opacity={0.3} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <p className="reveal opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// about us</p>
            <h2 className="reveal opacity-0 text-4xl font-bold leading-tight text-white md:text-5xl">
              A practical <span className="text-brand-300">technology partner</span>
            </h2>
            <p className="reveal opacity-0 mt-6 text-lg leading-relaxed text-brand-100/80">
              CR Mapz Technologies is a technology business based in Rustenburg, South
              Africa, helping individuals, entrepreneurs and businesses make better use of
              technology. Previously known as CR Tech Solutions, we bring together software
              development, website creation, AI-powered solutions, computer support and
              digital services.
            </p>
            <p className="reveal opacity-0 mt-4 leading-relaxed text-ink-400">
              Our approach is practical: understand the problem, identify an appropriate
              solution, and use technology to help address it.
            </p>
          </div>

          <aside className="reveal opacity-0 rounded-md border border-brand-600/30 bg-brand-900/90 p-6 lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-400">Founder</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Charity R. Mapfudza</h3>
            <p className="text-sm text-brand-300">Founder · Software Developer · Technology Entrepreneur</p>

            <div className="my-5 h-px bg-brand-800/70" />

            <p className="text-sm leading-relaxed text-brand-100/80">
              Charity is working towards completing the Software Engineering Mentorship
              Programme with Tech4Dev, with graduation scheduled for 22 October 2026. Her
              experience spans collaborative software engineering, frontend development and
              AI integration, including Anchor Agent and Pangolin Loop.
            </p>

            <a
              href={SOCIAL[0].href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-brand-300 transition hover:text-white"
            >
              View developer portfolio →
            </a>
          </aside>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div key={p.id} className="reveal opacity-0 border-t border-brand-600/40 pt-5">
              <span className="font-mono text-xs tracking-widest text-brand-300">{p.id}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
