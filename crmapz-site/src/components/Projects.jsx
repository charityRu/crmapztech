import { useRef } from 'react'
import useReveal from '../useReveal'
import { PROJECTS } from '../data'
import { SOCIAL } from '../config'

export default function Projects() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="projects" ref={ref} className="relative border-t border-brand-800/50">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="reveal opacity-0 mb-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-300">// projects</p>
          <h2 className="reveal opacity-0 text-4xl font-bold text-white md:text-5xl">
            Selected <span className="text-brand-300">projects</span>
          </h2>
          <p className="reveal opacity-0 mx-auto mt-4 max-w-2xl text-ink-400">
            Practical applications, from AI hackathon prototypes to collaborative product work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className={`reveal flex flex-col rounded-md border bg-brand-900/90 p-6 opacity-0 ${
                p.featured ? 'border-brand-300/50' : 'border-brand-600/30'
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">{p.category}</span>
                <span className="rounded-sm border border-brand-600/50 px-2 py-1 font-mono text-xs text-brand-300">{p.status}</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
              {p.event && <p className="mt-1 font-mono text-xs text-brand-300">{p.event}</p>}

              <p className="mt-4 text-brand-100/80">{p.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                <span className="font-semibold text-brand-100">My role: </span>
                {p.role}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-sm border border-brand-600/50 px-2 py-1 font-mono text-xs text-brand-300">{t}</span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand-300 transition hover:text-white">
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="reveal opacity-0 mt-10 text-center text-sm text-ink-400">
          More front-end projects are in the{' '}
          <a href={SOCIAL[0].href} target="_blank" rel="noreferrer" className="font-semibold text-brand-300 transition hover:text-white">
            developer portfolio →
          </a>
        </p>
      </div>
    </section>
  )
}
