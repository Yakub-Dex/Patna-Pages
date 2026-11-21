import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PATNA_CONFIG } from '../config/patnaConfig';
import { Language, TranslationDictionary } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  t: TranslationDictionary;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleDark,
  t,
}) => {
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pauseAutoScrollUntilRef = useRef<number>(0);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const navLinks = [
    { label: t.nav.howItWorks, href: '#how-it-works', id: 'how-it-works' },
    { label: t.nav.categories, href: '#categories', id: 'categories' },
    { label: t.nav.audiences, href: '#audiences', id: 'audiences' },
    { label: t.nav.forBusinesses, href: '#for-businesses', id: 'for-businesses' },
  ];

  useEffect(() => {
    let rafId = 0;

    const syncNavWithScroll = () => {
      rafId = 0;
      const navEl = navRef.current;
      const scrollY = window.scrollY;
      const triggerOffset = 120; // Sticky header height + comfortable reading offset

      const sectionPositions = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return null;
        return el.getBoundingClientRect().top + scrollY - triggerOffset;
      });

      // Determine which section is currently active
      let currentHref: string | null = null;
      for (let i = 0; i < sectionPositions.length; i++) {
        const pos = sectionPositions[i];
        if (pos !== null && scrollY >= pos) {
          currentHref = navLinks[i].href;
        }
      }
      const atBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 24;
      if (atBottom && currentHref !== null) {
        currentHref = navLinks[navLinks.length - 1].href;
      }
      setActiveHref((prev) => (prev === currentHref ? prev : currentHref));

      // Smoothly glide the mobile nav strip horizontally in sync with vertical scroll
      if (!navEl || Date.now() < pauseAutoScrollUntilRef.current) return;

      const maxScrollLeft = navEl.scrollWidth - navEl.clientWidth;
      if (maxScrollLeft <= 2) {
        if (navEl.scrollLeft !== 0) navEl.scrollLeft = 0;
        return;
      }

      const validIndices = sectionPositions
        .map((pos, idx) => (pos !== null ? idx : -1))
        .filter((idx) => idx !== -1);

      if (validIndices.length === 0) return;

      // Compute horizontal target scroll position for each nav link
      const linkTargets = navLinks.map((_, idx) => {
        if (idx === 0) return 0;
        if (idx === navLinks.length - 1) return maxScrollLeft;
        const anchor = linkRefs.current[idx];
        if (!anchor) return (maxScrollLeft * idx) / (navLinks.length - 1);
        const centered = anchor.offsetLeft - (navEl.clientWidth - anchor.offsetWidth) / 2;
        return Math.max(0, Math.min(maxScrollLeft, centered));
      });

      const firstIdx = validIndices[0];
      const lastIdx = validIndices[validIndices.length - 1];
      const firstPos = sectionPositions[firstIdx] ?? 0;
      const lastPos = sectionPositions[lastIdx] ?? 0;

      let targetScrollLeft = 0;
      if (scrollY <= firstPos) {
        targetScrollLeft = 0;
      } else if (scrollY >= lastPos || atBottom) {
        targetScrollLeft = maxScrollLeft;
      } else {
        for (let i = 0; i < validIndices.length - 1; i++) {
          const idxA = validIndices[i];
          const idxB = validIndices[i + 1];
          const posA = sectionPositions[idxA] ?? 0;
          const posB = sectionPositions[idxB] ?? 0;
          if (scrollY >= posA && scrollY <= posB) {
            const span = Math.max(1, posB - posA);
            const ratio = (scrollY - posA) / span;
            const startX = linkTargets[idxA];
            const endX = linkTargets[idxB];
            targetScrollLeft = startX + (endX - startX) * ratio;
            break;
          }
        }
      }

      navEl.scrollLeft = targetScrollLeft;
    };

    const scheduleSync = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(syncNavWithScroll);
    };

    syncNavWithScroll();
    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
    };
  }, [lang]);

  const handleNavManualTouch = () => {
    pauseAutoScrollUntilRef.current = Date.now() + 1400;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FBFBFA]/90 dark:bg-[#0C0E0D]/90 border-b hairline-border transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2.5 sm:gap-6">
        {/* Left: Brand Wordmark (pinned) */}
        <a href="#" className="flex items-baseline group whitespace-nowrap shrink-0">
          <span className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#2541b2] dark:text-[#5B7CF6] font-sans hover:opacity-90 transition-opacity">
            {PATNA_CONFIG.brandName}<span className="text-[#141716] dark:text-white">.</span>
          </span>
        </a>

        {/* Middle: Scroll-Synced Nav Links (glides horizontally on mobile as user scrolls down) */}
        <nav
          ref={navRef}
          onTouchStart={handleNavManualTouch}
          onPointerDown={handleNavManualTouch}
          aria-label="Primary navigation"
          className="relative flex-1 min-w-0 flex items-center md:justify-end gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-1.5 text-xs sm:text-sm font-medium text-[#5B615E] dark:text-[#9BA19E]"
        >
          {navLinks.map((link, idx) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                ref={(el) => {
                  linkRefs.current[idx] = el;
                }}
                href={link.href}
                onClick={() => {
                  pauseAutoScrollUntilRef.current = 0;
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#2541b2] dark:text-[#5B7CF6] font-semibold'
                    : 'hover:text-[#141716] dark:hover:text-[#E8EAE9]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#2541b2] dark:bg-[#5B7CF6]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language and Theme Toggles (pinned) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pl-2 sm:pl-3 border-l hairline-border">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs font-mono font-medium rounded-md border hairline-border bg-white/70 dark:bg-[#151817]/80 text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Switch language / Badili lugha"
            aria-label="Switch language"
          >
            <span className="text-neutral-400">🌐</span>
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDark}
            className="p-1.5 text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] rounded-md border hairline-border bg-white/70 dark:bg-[#151817]/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};

