/**
 * Site navbar (React island). Spec: CLAUDE.md "Navbar".
 *
 * Layout: logo left, page links centre, Resume (special button) right.
 * Sizes match the owner's previous site, as navbar exceptions to the
 * guide's scale: 12px Montserrat 500 links with 40px gaps, a 104px bar, a
 * 56px logo. Uses the site's .wrap container (1280px max, 28px side
 * padding, 24px on phones), so page content lines up under the logo.
 * Below 1024px the links and Resume move into a frosted panel opened by a
 * hamburger button.
 *
 * Why the frosted background is a separate layer and not on <header>:
 * an element with backdrop-filter becomes the "backdrop root" for its
 * children, so the mobile panel (a child) would stop blurring the page
 * behind it. Keeping the bar's background on a sibling layer lets the bar
 * and the panel each blur the page directly. It also means the 250ms
 * transition fades the layer's opacity instead of animating the blur.
 */
import { useEffect, useId, useRef, useState } from 'react';
import type { NavLink } from '../config/site';

interface Props {
  currentPath: string;
  links: NavLink[];
  resumeUrl: string;
  /** Optimised logo from astro:assets (56px, 1x to 3x). */
  logo: { src: string; srcSet: string };
}

/** Scroll distance before the bar turns frosted. */
const SCROLL_THRESHOLD = 24;
/** Safari < 18 only supports the prefixed property. Set inline because the
 * CSS build step removes -webkit-backdrop-filter from stylesheets. */
const SAFARI_BLUR = { WebkitBackdropFilter: 'blur(6px)' } as const;

/**
 * Soft bottom edge (dark bar): instead of a hairline, the bar's background
 * layer runs 24px past the bar and fades out over its last 40px (mask), so
 * the tint and blur dissolve into the page. Not used on the light bar,
 * which gets an unblurred veil instead (see nav-veil-light), or while the
 * mobile menu is open, where the bar sits directly on the panel.
 */
const SOFT_EDGE_FADE = 'linear-gradient(to bottom, #000 calc(100% - 40px), transparent)';
const SOFT_EDGE = { ...SAFARI_BLUR, maskImage: SOFT_EDGE_FADE, WebkitMaskImage: SOFT_EDGE_FADE } as const;

/** One bar of the menu icon, centred vertically in its 16px box. */
const BAR =
  'absolute left-0 top-[calc(50%-0.875px)] h-[1.75px] w-full rounded-full bg-current transition-[translate,rotate,scale,opacity] duration-250 ease-in-out';

/** Matches --breakpoint-nav in global.css. */
const NAV_QUERY = '(min-width: 1024px)';

function normalise(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

/** Home matches only "/". Other links also match their sub-pages (e.g. /works/petpals). */
function isCurrent(href: string, currentPath: string) {
  const path = normalise(currentPath);
  if (href === '/') return path === '/';
  return path === href || path.startsWith(`${href}/`);
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export default function Navbar({ currentPath, links, resumeUrl, logo }: Props) {
  const [scrolled, setScrolled] = useState(false);
  // True while the bar sits over a light section (Section tone="light");
  // the bar then switches to its light look.
  const [overLight, setOverLight] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  // Frosted after 24px of scroll. Also checks what is directly under the
  // middle of the bar, so the tint can strengthen over light sections.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      const bar = headerRef.current?.getBoundingClientRect();
      if (!bar) return;
      const under = document.elementsFromPoint(window.innerWidth / 2, bar.top + bar.height / 2);
      setOverLight(under.some((el) => el.closest('.tone-light') !== null));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the menu is open: lock page scroll, close on Escape (focus back to
  // the button), on a click outside the navbar, or when the window widens
  // past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia(NAV_QUERY);
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  // The bar is frosted when scrolled, and always while the menu is open so
  // the bar and the panel below it match.
  const frosted = scrolled || open;
  // Light look over light sections. The open mobile menu stays dark.
  const light = overLight && !open;

  // Link colours. Current page: electric blue, no underline (owner's choice,
  // as on the previous site). Note: electric on the dark bar is 3.1:1, below
  // 4.5:1 for 12px text, and colour is the only visual cue; aria-current
  // still marks it for screen readers. On the light bar electric is 4.7:1.
  // Hover: soft blue on the dark bar, deep blue on the light bar (soft blue
  // fails on off-white).
  const linkClass = (href: string, size: 'bar' | 'menu') => {
    const current = isCurrent(href, currentPath);
    const onLight = size === 'bar' && light;
    return [
      'whitespace-nowrap font-sans uppercase transition-colors duration-250',
      size === 'bar' ? 'text-[12px] font-medium' : 'block py-2 text-[18px] font-normal tracking-ui',
      current
        ? 'text-electric'
        : onLight
          ? 'text-charcoal hover:text-deep'
          : 'text-offwhite hover:text-soft',
    ].join(' ');
  };

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 isolate">
      {/* Bar background: transparent at the top, frosted after scrolling. */}
      <div
        aria-hidden="true"
        style={open || light ? SAFARI_BLUR : SOFT_EDGE}
        className={[
          'nav-frosted backdrop-blur-[6px] absolute inset-x-0 top-0 -z-10 transition-[opacity,background-color] duration-250 ease-in-out',
          open || light ? 'bottom-0' : '-bottom-[24px]',
          frosted ? 'opacity-100' : 'opacity-0',
          open ? 'nav-frosted-strong' : light ? 'nav-frosted-light' : '',
        ].join(' ')}
      />

      {/* Light bar only: unblurred off-white veil below the bar. */}
      <div
        aria-hidden="true"
        className={[
          'nav-veil-light pointer-events-none absolute inset-x-0 top-full -z-10 h-[24px] transition-opacity duration-250 ease-in-out',
          light && frosted ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />

      <nav aria-label="Main" className="wrap flex h-(--nav-height) items-center justify-between gap-4">
        <a href="/" aria-label="Karishma Hegde, home" className="shrink-0 rounded-full">
          <img src={logo.src} srcSet={logo.srcSet} width={56} height={56} alt="" className="block size-[56px]" />
        </a>

        <ul className="hidden items-center gap-[40px] nav:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href, 'bar')}
                aria-current={isCurrent(link.href, currentPath) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={resumeUrl} className="btn btn-special hidden shrink-0 nav:inline-flex">
          Resume
          <DownloadIcon />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={[
            'inline-flex size-[44px] items-center justify-center rounded-full transition-colors duration-250 nav:hidden',
            light ? 'text-charcoal' : 'text-offwhite',
          ].join(' ')}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {/* Menu icon, sized to balance the 56px logo (owner's request;
              larger than the guide's 24px nav icons): three 21px bars, 1.75px
              thick, 7px apart. Opening morphs it into a cross with CSS only:
              the outer bars slide to the middle and rotate 45deg, the middle
              bar fades. Diagonal lines anti-alias and look thinner than
              horizontal ones at the same 1.75px, so the cross bars are
              thickened 15% (scale-y) to match visually. 250ms, matching the
              bar's fade; instant with reduced
              motion (global rule). Tailwind v4 uses the separate translate /
              rotate properties, so those are what transition. */}
          <span aria-hidden="true" className="relative block h-[16px] w-[21px]">
            <span
              className={[
                BAR,
                open ? 'translate-y-0 rotate-45 scale-y-[1.15]' : '-translate-y-[7px]',
              ].join(' ')}
            />
            <span className={[BAR, open ? 'opacity-0' : 'opacity-100'].join(' ')} />
            <span
              className={[
                BAR,
                open ? 'translate-y-0 -rotate-45 scale-y-[1.15]' : 'translate-y-[7px]',
              ].join(' ')}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel (below 1024px). Always in the page so CSS can
          animate both opening and closing: it fades in and slides down 8px
          over 250ms, and reverses on close. While closed it is invisible and
          inert, so its links can't be focused or read. Reduced motion: the
          global rule makes it switch instantly. */}
      <div
        id={menuId}
        inert={!open}
        style={SAFARI_BLUR}
        className={[
          'nav-frosted nav-frosted-strong backdrop-blur-[6px] absolute inset-x-0 top-full max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto border-b border-hairline nav:hidden',
          'transition-[opacity,translate,visibility] duration-250 ease-in-out',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        ].join(' ')}
      >
        <div className="wrap py-5">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass(link.href, 'menu')}
                  aria-current={isCurrent(link.href, currentPath) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={resumeUrl} className="btn btn-special mt-5" onClick={() => setOpen(false)}>
            Resume
            <DownloadIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
