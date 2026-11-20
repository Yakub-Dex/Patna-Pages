import { useState, useEffect } from 'react';

export interface TermsConsentState {
  accepted: boolean;
  acceptedAt: string | null;
  version: string;
}

const STORAGE_KEY = 'patna_terms_affirmative_acceptance';
const CURRENT_VERSION = '2026-11-12';
const MERCHANT_STORAGE_KEY = 'patna_merchant_agreement_acceptance';
const MERCHANT_VERSION = '2026-11-11';

// Clear any previously persisted acceptance from earlier builds so refresh always resets checkboxes
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(MERCHANT_STORAGE_KEY);
  } catch {
    // localStorage unavailable
  }
}

let sessionTermsConsent: TermsConsentState = {
  accepted: false,
  acceptedAt: null,
  version: CURRENT_VERSION,
};

let sessionMerchantConsent: TermsConsentState = {
  accepted: false,
  acceptedAt: null,
  version: MERCHANT_VERSION,
};

export const getStoredTermsConsent = (): TermsConsentState => {
  return sessionTermsConsent;
};

export const setStoredTermsConsent = (accepted: boolean): TermsConsentState => {
  sessionTermsConsent = {
    accepted,
    acceptedAt: accepted ? new Date().toISOString() : null,
    version: CURRENT_VERSION,
  };
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('patna_terms_changed', { detail: sessionTermsConsent })
    );
  }
  return sessionTermsConsent;
};

export const useTermsConsent = () => {
  const [consent, setConsent] = useState<TermsConsentState>(() =>
    getStoredTermsConsent()
  );

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
    return () => {
      window.removeEventListener('patna_terms_changed', handler);
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

export const getStoredMerchantConsent = (): TermsConsentState => {
  return sessionMerchantConsent;
};

export const setStoredMerchantConsent = (
  accepted: boolean
): TermsConsentState => {
  sessionMerchantConsent = {
    accepted,
    acceptedAt: accepted ? new Date().toISOString() : null,
    version: MERCHANT_VERSION,
  };
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('patna_merchant_changed', {
        detail: sessionMerchantConsent,
      })
    );
  }
  return sessionMerchantConsent;
};

export const useMerchantConsent = () => {
  const [consent, setConsent] = useState<TermsConsentState>(() =>
    getStoredMerchantConsent()
  );

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
    return () => {
      window.removeEventListener('patna_merchant_changed', handler);
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

