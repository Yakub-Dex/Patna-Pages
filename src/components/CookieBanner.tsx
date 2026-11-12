import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Language } from '../i18n/translations';

interface CookieBannerProps {
  lang: Language;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang, onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('patna_cookie_consent');
      if (!consent) {
        // Small delay so it smoothly slides in without blocking initial paint
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage restrictions in private browsing modes
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('patna_cookie_consent', 'accepted');
    } catch {
      // storage unavailable fallback
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 sm:p-5 rounded-2xl border hairline-border bg-white/95 dark:bg-[#121514]/95 text-[#141716] dark:text-[#E8EAE9] shadow-xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#2541b2]/10 dark:bg-[#2541b2]/20 text-[#2541b2] dark:text-[#5B7CF6] shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="flex-1 space-y-1.5">
          <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            {lang === 'sw' ? 'Faragha na Mapendeleo' : 'Privacy & Essential Preferences'}
          </h4>
          <p className="text-xs text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
            {lang === 'sw'
              ? 'Tunaheshimu faragha yako. Patna inatumia mapendeleo muhimu (kama lugha na mwonekano wa giza) ili kuboresha matumizi yako bila kufuatilia data binafsi.'
              : 'We respect your privacy. Patna uses essential preferences (such as dark mode and language settings) to deliver our service without tracking your personal data.'}
          </p>

          <div className="pt-2 flex items-center gap-2 flex-wrap">
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
            >
              {lang === 'sw' ? 'Kubali' : 'Accept Essential'}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="px-3 py-2 text-xs font-mono text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] underline underline-offset-2 transition-colors"
            >
              {lang === 'sw' ? 'Sera ya Faragha' : 'Privacy Policy'}
            </button>
          </div>
        </div>

        <button
          onClick={handleAccept}
          className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
