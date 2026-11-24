/**
 * Custom cursor (owner's request). Self-contained so it is easy to remove:
 * delete this file, its one line in BaseLayout.astro, and the
 * "Custom cursor" block in global.css.
 *
 * - Loaded with client:media="(pointer: fine)", so touch devices never
 *   download it.
 * - A dot that follows the pointer exactly, and a 32px ring with a 1px
 *   stroke that trails it with a spring (useSpring). Both are driven by
 *   motion values and CSS transforms, never React state, so moving the
 *   mouse causes no re-renders.
 * - The ring grows over links and buttons. Over text inputs both fade out
 *   and the native text cursor comes back (CSS in global.css).
 * - Off-white with mix-blend-mode: difference, so it shows on dark and
 *   light sections alike (light on charcoal, dark on off-white).
 * - The ring's stroke is off-white at 50% (owner's choice, 2026-11-24) so it
 *   reads as a quieter mid-grey on both tones. It stays 1px: thinner lines
 *   blur or vanish on 1x screens and change weight when the ring scales.
 *   The dot stays at full strength so the pointer is easy to find.
 * - The native cursor is hidden only after mount (a class on <html>), and
 *   shown again if this unmounts.
 * - Hidden until the first mouse move and when the pointer leaves the window.
 * - Reduced motion: the ring follows exactly (no spring) and grows instantly.
 */
import { useEffect } from 'react';
import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], summary, label, select';
const TEXT_INPUT =
  'input:not([type="button"], [type="submit"], [type="reset"], [type="checkbox"], [type="radio"], [type="range"], [type="color"], [type="file"], [type="image"]), textarea, [contenteditable=""], [contenteditable="true"]';
const RING_HOVER_SCALE = 1.6;

export default function CustomCursor() {
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 450, damping: 38, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 450, damping: 38, mass: 0.6 });
  const scale = useMotionValue(1);
  const ringScale = useSpring(scale, { stiffness: 320, damping: 26 });
  const opacity = useMotionValue(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    // On the first move the ring jumps straight to the pointer, so it
    // doesn't spring in from off-screen.
    let placed = false;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x.set(event.clientX);
      y.set(event.clientY);
      if (!placed) {
        ringX.jump(event.clientX);
        ringY.jump(event.clientY);
        placed = true;
      }
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(TEXT_INPUT)) {
        opacity.set(0);
        scale.set(1);
        return;
      }
      opacity.set(1);
      scale.set(target?.closest(INTERACTIVE) ? RING_HOVER_SCALE : 1);
    };
    const onLeave = () => opacity.set(0);

    window.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('mouseleave', onLeave);
    return () => {
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y, ringX, ringY, scale, opacity]);

  const centre = { translateX: '-50%', translateY: '-50%' };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        aria-hidden="true"
        className="custom-cursor size-[32px] rounded-full border border-offwhite/50"
        style={{
          x: reduce ? x : ringX,
          y: reduce ? y : ringY,
          scale: reduce ? scale : ringScale,
          opacity,
          ...centre,
        }}
      />
      <m.div
        aria-hidden="true"
        className="custom-cursor size-[6px] rounded-full bg-offwhite"
        style={{ x, y, opacity, ...centre }}
      />
    </LazyMotion>
  );
}
