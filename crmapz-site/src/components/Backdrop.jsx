export default function Backdrop({ src, opacity = 0.5, position = 'center', eager = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover"
        style={{ opacity, objectPosition: position }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-brand-950) 0%, rgba(5,10,6,0.55) 18%, rgba(5,10,6,0.55) 82%, var(--color-brand-950) 100%)',
        }}
      />
    </div>
  )
}
