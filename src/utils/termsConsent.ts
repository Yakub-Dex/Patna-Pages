import { useState, useEffect } from 'react';

export interface TermsConsentState {
  accepted: boolean;
  acceptedAt: string | null;
  version: string;
}

const STORAGE_KEY = 'patna_terms_affirmative_acceptance';
const CURRENT_VERSION = '2026-11-12';

export const getStoredTermsConsent = (): TermsConsentState => {
  if (typeof window === 'undefined') {
    return { accepted: false, acceptedAt: null, version: CURRENT_VERSION };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { accepted: false, acceptedAt: null, version: CURRENT_VERSION };
    const parsed = JSON.parse(raw);
    return {
      accepted: Boolean(parsed.accepted),
      acceptedAt: parsed.acceptedAt || null,
      version: parsed.version || CURRENT_VERSION,
    };
  } catch {
    return { accepted: false, acceptedAt: null, version: CURRENT_VERSION };
  }
};

export const setStoredTermsConsent = (accepted: boolean): TermsConsentState => {
  const state: TermsConsentState = {
    accepted,
    acceptedAt: accepted ? new Date().toISOString() : null,
    version: CURRENT_VERSION,
  };
  try {
    if (accepted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      // Also mark cookie consent as accepted for convenience
      localStorage.setItem('patna_cookie_consent', 'accepted');
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    window.dispatchEvent(new CustomEvent('patna_terms_changed', { detail: state }));
  } catch {
    // localStorage unavailable
  }
  return state;
};

export const useTermsConsent = () => {
  const [consent, setConsent] = useState<TermsConsentState>(() => getStoredTermsConsent());

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<TermsConsentState>;
      if (customEvent.detail) {
        setConsent(customEvent.detail);
      } else {
        setConsent(getStoredTermsConsent());
      }
    };
    window.addEventListener('patna_terms_changed', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('patna_terms_changed', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const acceptTerms = () => {
    const next = setStoredTermsConsent(true);
    setConsent(next);
  };

  const revokeTerms = () => {
    const next = setStoredTermsConsent(false);
    setConsent(next);
  };

  return {
    isAccepted: consent.accepted,
    acceptedAt: consent.acceptedAt,
    acceptTerms,
    revokeTerms,
  };
};

const MERCHANT_STORAGE_KEY = 'patna_merchant_agreement_acceptance';
const MERCHANT_VERSION = '2026-11-11';

export const getStoredMerchantConsent = (): TermsConsentState => {
  if (typeof window === 'undefined') {
    return { accepted: false, acceptedAt: null, version: MERCHANT_VERSION };
  }
  try {
    const raw = localStorage.getItem(MERCHANT_STORAGE_KEY);
    if (!raw) return { accepted: false, acceptedAt: null, version: MERCHANT_VERSION };
    const parsed = JSON.parse(raw);
    return {
      accepted: Boolean(parsed.accepted),
      acceptedAt: parsed.acceptedAt || null,
      version: parsed.version || MERCHANT_VERSION,
    };
  } catch {
    return { accepted: false, acceptedAt: null, version: MERCHANT_VERSION };
  }
};

export const setStoredMerchantConsent = (accepted: boolean): TermsConsentState => {
  const state: TermsConsentState = {
    accepted,
    acceptedAt: accepted ? new Date().toISOString() : null,
    version: MERCHANT_VERSION,
  };
  try {
    if (accepted) {
      localStorage.setItem(MERCHANT_STORAGE_KEY, JSON.stringify(state));
    } else {
      localStorage.removeItem(MERCHANT_STORAGE_KEY);
    }
    window.dispatchEvent(new CustomEvent('patna_merchant_changed', { detail: state }));
  } catch {
    // localStorage unavailable
  }
  return state;
};

export const useMerchantConsent = () => {
  const [consent, setConsent] = useState<TermsConsentState>(() => getStoredMerchantConsent());

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<TermsConsentState>;
      if (customEvent.detail) {
        setConsent(customEvent.detail);
      } else {
        setConsent(getStoredMerchantConsent());
      }
    };
    window.addEventListener('patna_merchant_changed', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('patna_merchant_changed', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const acceptMerchantAgreement = () => {
    const next = setStoredMerchantConsent(true);
    setConsent(next);
  };

  const revokeMerchantAgreement = () => {
    const next = setStoredMerchantConsent(false);
    setConsent(next);
  };

  return {
    isMerchantAccepted: consent.accepted,
    merchantAcceptedAt: consent.acceptedAt,
    acceptMerchantAgreement,
    revokeMerchantAgreement,
  };
};
