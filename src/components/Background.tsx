/**
 * Fixed ambient background: engineering grid + drifting glow orbs + vignette.
 * Purely decorative, sits behind all content (pointer-events: none).
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* radial vignette so edges fall to black */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,transparent_40%,var(--color-ink)_100%)]" />

      {/* glow orbs */}
      <div className="orb-1 absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-lime/10 blur-[130px]" />
      <div className="orb-2 absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-cyan/10 blur-[130px]" />
      <div className="orb-1 absolute bottom-[-10%] left-1/3 h-[34rem] w-[34rem] rounded-full bg-violet/10 blur-[140px]" />

      {/* faint scanline texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_3px] mix-blend-overlay" />
    </div>
  );
}
