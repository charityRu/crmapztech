import { useEffect } from 'react'
import { animate, stagger } from 'animejs'

export default function useReveal(ref, selector = '.reveal') {
  useEffect(() => {
    const root = ref.current
    const items = root.querySelectorAll(selector)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => (el.style.opacity = 1))
      return
    }

    let anim
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        anim = animate(items, {
          opacity: [0, 1],
          translateY: [32, 0],
          delay: stagger(90),
          duration: 800,
          ease: 'outExpo',
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(root)

    return () => {
      observer.disconnect()
      if (anim) anim.revert()
    }
  }, [ref, selector])
}
