import { useRef } from 'react'
import Backdrop from './Backdrop'
import useReveal from '../useReveal'
import { QUALIFICATIONS, SKILLS } from '../data'

function spanFor(i, total) {
  if (i < 3) return 'lg:col-span-2'
  if (i === total - 1) return 'md:col-span-2 lg:col-span-3'
  return 'lg:col-span-3'
}

export default function Qualifications() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="qualifications" ref={ref} className="relative isolate overflow-hidden">
      <Backdrop src="/images/bg-desk.webp" opacity={0.22} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="reveal opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// qualifications</p>
          <h2 className="reveal opacity-0 text-4xl font-bold leading-tight text-white md:text-5xl">
            Qualifications &amp; <span className="text-brand-300">Professional Development</span>
          </h2>
          <p className="reveal opacity-0 mx-auto mt-4 max-w-2xl text-ink-400">
            The training and continuous learning behind our work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {QUALIFICATIONS.map((q, i) => (
            <article
              key={q.title}
              className={`reveal flex flex-col rounded-md border border-brand-600/30 bg-brand-900/90 p-6 opacity-0 ${spanFor(i, QUALIFICATIONS.length)}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">{q.category}</span>
                <span className="font-mono text-xs tracking-widest text-ink-400">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{q.title}</h3>
              {q.provider && <p className="mt-1 text-sm text-brand-300">{q.provider}</p>}
              <p className="mt-4 text-sm leading-relaxed text-ink-400">{q.text}</p>
            </article>
          ))}
        </div>

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
