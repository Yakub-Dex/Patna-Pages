import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Check } from 'lucide-react';
import { Language } from '../i18n/translations';
import { useTermsConsent } from '../utils/termsConsent';

interface CookieBannerProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  lang,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { isAccepted, acceptTerms } = useTermsConsent();
  const [agreeChecked, setAgreeChecked] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('patna_cookie_consent');
      if (!consent && !isAccepted) {
        // Small delay so it smoothly slides in without blocking initial paint
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage restrictions in private browsing modes
    }
  }, [isAccepted]);

  const handleAffirmativeAccept = () => {
    acceptTerms();
    try {
      localStorage.setItem('patna_cookie_consent', 'accepted');
    } catch {
      // storage fallback
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('patna_cookie_consent', 'dismissed');
    } catch {
      // fallback
    }
    setIsVisible(false);
  };

  if (!isVisible || isAccepted) return null;

  return (
    <div
      role="region"
      aria-label="Terms of Service and Privacy agreement banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-40 p-4 sm:p-5 rounded-2xl border hairline-border bg-white/95 dark:bg-[#121514]/95 text-[#141716] dark:text-[#E8EAE9] shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#2541b2]/10 dark:bg-[#2541b2]/20 text-[#2541b2] dark:text-[#5B7CF6] shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>

        <div className="flex-1 space-y-2.5">
          <div>
            <h4 className="text-sm font-bold text-[#141716] dark:text-[#E8EAE9]">
              {lang === 'sw' ? 'Masharti ya Huduma na Faragha' : 'Terms of Service & Privacy Acceptance'}
            </h4>
            <p className="text-xs text-[#5B615E] dark:text-[#9BA19E] leading-relaxed mt-0.5">
              {lang === 'sw'
                ? 'Ili kutumia huduma za Patna na kuwasiliana na watoa huduma, tafadhali thibitisha kukubaliana na Masharti yetu ya Huduma na Sera ya Faragha.'
                : 'To access Patna search and connect with independent Tanzanian merchants and providers, please review and affirmatively accept our Terms of Service.'}
            </p>
          </div>

          {/* Agreement Checkbox */}
          <div className="p-2.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918]">
            <label className="flex items-start gap-2.5 text-xs text-[#141716] dark:text-[#E8EAE9] cursor-pointer select-none">
              <input
                type="checkbox"
                id="banner-terms-agreement-checkbox"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-[#2541b2] focus:ring-[#2541b2] cursor-pointer shrink-0"
              />
              <span className="leading-snug">
                {lang === 'sw' ? (
                  <>
                    Nimesoma na kukubaliana na{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="font-semibold text-[#2541b2] dark:text-[#5B7CF6] underline underline-offset-2 hover:opacity-80"
                    >
                      Masharti ya Huduma
                    </button>{' '}
                    na{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="font-semibold text-[#2541b2] dark:text-[#5B7CF6] underline underline-offset-2 hover:opacity-80"
                    >
                      Sera ya Faragha
                    </button>{' '}
                    ya Patnacom Services.
                  </>
                ) : (
                  <>
                    I have read and affirmatively accept the{' '}
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="font-semibold text-[#2541b2] dark:text-[#5B7CF6] underline underline-offset-2 hover:opacity-80"
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="font-semibold text-[#2541b2] dark:text-[#5B7CF6] underline underline-offset-2 hover:opacity-80"
                    >
                      Privacy Policy
                    </button>{' '}
                    of Patnacom Services.
                  </>
                )}
              </span>
            </label>
          </div>

          <div className="pt-1 flex items-center gap-2 flex-wrap">
            <button
              onClick={handleAffirmativeAccept}
              disabled={!agreeChecked}
              className={`px-4 py-2 text-xs font-semibold rounded-lg text-white transition-all inline-flex items-center gap-1.5 ${
                agreeChecked
                  ? 'bg-[#2541b2] hover:bg-[#1D3394] shadow-sm'
                  : 'bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed text-neutral-500'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{lang === 'sw' ? 'Kubali na Endelea' : 'Affirmatively Accept & Continue'}</span>
            </button>
            <button
              onClick={onOpenTerms}
              className="px-2.5 py-1.5 text-xs font-mono text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] underline underline-offset-2 transition-colors"
            >
              {lang === 'sw' ? 'Soma Masharti' : 'View Terms'}
            </button>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
