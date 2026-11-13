import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Info, Building2, Check } from 'lucide-react';
import { PATNA_CONFIG } from '../config/patnaConfig';
import { AboutUsContent } from './AboutUsContent';
import { PrivacyPolicyContent } from './PrivacyPolicyContent';
import { TermsOfServiceContent } from './TermsOfServiceContent';
import { MerchantAgreementContent } from './MerchantAgreementContent';
import { useTermsConsent, useMerchantConsent } from '../utils/termsConsent';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'merchant' | 'about' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { isAccepted, acceptedAt, acceptTerms } = useTermsConsent();
  const { isMerchantAccepted, merchantAcceptedAt, acceptMerchantAgreement } = useMerchantConsent();
  const [modalCheckboxChecked, setModalCheckboxChecked] = useState<boolean>(false);

  useEffect(() => {
    setModalCheckboxChecked(false);
  }, [type]);

  if (!type) return null;

  const isAgreementModal = type === 'terms' || type === 'merchant';
  const currentAccepted = type === 'merchant' ? isMerchantAccepted : isAccepted;
  const currentAcceptedAt = type === 'merchant' ? merchantAcceptedAt : acceptedAt;

  const handleModalAccept = () => {
    if (type === 'merchant') {
      acceptMerchantAgreement();
    } else {
      acceptTerms();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl rounded-2xl border hairline-border bg-white dark:bg-[#121514] text-[#141716] dark:text-[#E8EAE9] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b hairline-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'about' ? (
              <Info className="w-5 h-5 text-[#2541b2] dark:text-[#5B7CF6]" />
            ) : type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#2541b2] dark:text-[#5B7CF6]" />
            ) : type === 'merchant' ? (
              <Building2 className="w-5 h-5 text-[#2541b2] dark:text-[#5B7CF6]" />
            ) : (
              <FileText className="w-5 h-5 text-[#2541b2] dark:text-[#5B7CF6]" />
            )}
            <h3 className="text-base font-semibold">
              {type === 'about'
                ? `About Us — ${PATNA_CONFIG.brandName}`
                : type === 'privacy'
                ? `Privacy Policy — ${PATNA_CONFIG.legalEntityName}`
                : type === 'merchant'
                ? `Merchant and Service Provider Agreement — ${PATNA_CONFIG.legalEntityName}`
                : `Terms of Service — ${PATNA_CONFIG.legalEntityName}`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
          {type === 'about' ? (
            <AboutUsContent />
          ) : type === 'privacy' ? (
            <PrivacyPolicyContent />
          ) : type === 'merchant' ? (
            <MerchantAgreementContent />
          ) : (
            <TermsOfServiceContent />
          )}
        </div>

        {/* Footer with Affirmative Acceptance */}
        <div className="px-6 py-4 border-t hairline-border bg-neutral-50 dark:bg-[#151817] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {isAgreementModal ? (
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
              {currentAccepted ? (
                <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1.5 rounded-lg">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {type === 'merchant'
                      ? 'Merchant Agreement Affirmatively Accepted'
                      : 'Terms Affirmatively Accepted'}
                    {currentAcceptedAt ? ` on ${new Date(currentAcceptedAt).toLocaleDateString()}` : ''}
                  </span>
                </div>
              ) : (
                <label className="flex items-start gap-2 text-xs text-[#5B615E] dark:text-[#9BA19E] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={modalCheckboxChecked}
                    onChange={(e) => setModalCheckboxChecked(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-[#2541b2] focus:ring-[#2541b2] cursor-pointer"
                  />
                  <span>
                    {type === 'merchant'
                      ? 'I confirm that I have read, understood, and affirmatively accept the Merchant and Service Provider Agreement.'
                      : 'I confirm that I have read, understood, and affirmatively accept the Terms of Service.'}
                  </span>
                </label>
              )}
            </div>
          ) : (
            <div className="text-xs text-[#717774] dark:text-[#8D9490]">
              Operated by {PATNA_CONFIG.legalEntityName} · Dar es Salaam, Tanzania
            </div>
          )}

          <div className="flex items-center gap-2 justify-end">
            {isAgreementModal && !currentAccepted ? (
              <button
                onClick={handleModalAccept}
                disabled={!modalCheckboxChecked}
                className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg text-white transition-all ${
                  modalCheckboxChecked
                    ? 'bg-[#2541b2] hover:bg-[#1D3394] shadow-sm'
                    : 'bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed text-neutral-500'
                }`}
              >
                {type === 'merchant' ? 'Accept Agreement' : 'Accept Terms'}
              </button>
            ) : null}
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border hairline-border bg-white dark:bg-[#1D211F] text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
