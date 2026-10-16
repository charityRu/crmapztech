import { useRef } from 'react'
import Backdrop from './Backdrop'
import useReveal from '../useReveal'
import { QUALIFICATIONS, SKILLS } from '../data'

export default function Qualifications() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="qualifications" ref={ref} className="relative isolate overflow-hidden">
      <Backdrop src="/images/bg-desk.webp" opacity={0.22} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="reveal opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// qualifications</p>
          <h2 className="reveal opacity-0 text-4xl font-bold text-white md:text-5xl">
            Qualifications &amp; <span className="text-brand-300">certifications</span>
          </h2>
          <p className="reveal opacity-0 mx-auto mt-4 max-w-2xl text-ink-400">
            Structured training behind the work, shown with its current status.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {QUALIFICATIONS.map((q) => (
            <article key={q.title} className="reveal flex flex-col rounded-md border border-brand-600/30 bg-brand-900/90 p-6 opacity-0">
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">{q.category}</span>
                <span
                  className={`rounded-sm px-2 py-1 font-mono text-xs ${
                    q.status === 'Completed'
                      ? 'bg-brand-600 text-white'
                      : 'border border-brand-600/50 text-brand-300'
                  }`}
                >
                  {q.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{q.title}</h3>
              <p className="mt-1 text-sm text-brand-300">{q.issuer}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-400">{q.detail}</p>
            </article>
          ))}
        </div>

        <p className="reveal opacity-0 mt-6 text-center text-sm text-ink-400">
          Further AI and digital-skills certificates are added here as they are verified.
        </p>

        <div className="reveal opacity-0 mt-20 rounded-md border border-brand-600/30 bg-brand-900/90 p-6 md:p-8">
          <h3 className="mb-6 text-xl font-semibold text-white">Technical skills</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g) => (
              <div key={g.group}>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-400">{g.group}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-sm border border-brand-600/50 px-2 py-1 font-mono text-xs text-brand-300">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-400">
            Skills reflect hands-on project experience and continuing learning.
          </p>
        </div>
      </div>
    </section>
  )
}
