import React, { useState, useEffect } from 'react';
import { WifiOff, Gauge, RefreshCw, X, MessageSquare } from 'lucide-react';
import { Language } from '../i18n/translations';
import { PATNA_CONFIG } from '../config/patnaConfig';
import { NetworkState } from '../hooks/useNetworkState';

interface NetworkStatusBannerProps {
  lang: Language;
  network: NetworkState;
}

export const NetworkStatusBanner: React.FC<NetworkStatusBannerProps> = ({
  lang,
  network,
}) => {
  const { isOffline, isSlowNetwork, isChecking, lastCheckFailed, checkConnection } = network;
  const [dismissedSlow, setDismissedSlow] = useState<boolean>(false);
  const [dismissedOffline, setDismissedOffline] = useState<boolean>(false);

  // Re-surface offline banner whenever connection transitions back to offline
  useEffect(() => {
    if (isOffline) {
      setDismissedOffline(false);
    }
  }, [isOffline]);

  const isSw = lang === 'sw';
  const showOffline = isOffline && !dismissedOffline;
  const showSlow = !isOffline && isSlowNetwork && !dismissedSlow;

  if (!showOffline && !showSlow) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`w-full border-b hairline-border transition-colors ${
        showOffline
          ? 'bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-200'
          : 'bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          {showOffline ? (
            <WifiOff className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
          ) : (
            <Gauge className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
          )}

          <p className="leading-snug">
            {showOffline ? (
              isSw ? (
                <>
                  <strong className="font-semibold">Hakuna intaneti.</strong>{' '}
                  {lastCheckFailed
                    ? 'Bado hujaunganishwa. '
                    : ''}
                  Bado unaweza kuuliza Patna kupitia SMS ({PATNA_CONFIG.smsNumber}) bila bando.
                </>
              ) : (
                <>
                  <strong className="font-semibold">No internet connection.</strong>{' '}
                  {lastCheckFailed
                    ? 'Still unable to reach the network. '
                    : ''}
                  You can still reach Patna via SMS ({PATNA_CONFIG.smsNumber}) without mobile data.
                </>
              )
            ) : isSw ? (
              <>
                <strong className="font-semibold">Mtandao uko taratibu.</strong>{' '}
                Kurasa au viungo vinaweza kuchelewa. Kwa haraka zaidi, tumia SMS kwenda {PATNA_CONFIG.smsNumber}.
              </>
            ) : (
              <>
                <strong className="font-semibold">Slow network detected.</strong>{' '}
                Pages and external links may take longer to respond. For faster access, use SMS to {PATNA_CONFIG.smsNumber}.
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-auto">
          {showOffline && (
            <>
              <a
                href={`sms:${PATNA_CONFIG.whatsappRaw}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#2541b2] text-white hover:bg-[#1D3394] transition-colors"
              >
                <MessageSquare className="w-3 h-3" />
                <span>{isSw ? 'Tuma SMS' : 'Send SMS'}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  void checkConnection();
                }}
                disabled={isChecking}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border border-red-300 dark:border-red-800 bg-white/80 dark:bg-[#151817] text-red-800 dark:text-red-200 hover:bg-white dark:hover:bg-[#1D211F] disabled:opacity-60 transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${isChecking ? 'animate-spin' : ''}`} />
                <span>
                  {isChecking
                    ? isSw
                      ? 'Inajaribu...'
                      : 'Checking...'
                    : isSw
                    ? 'Jaribu tena'
                    : 'Retry'}
                </span>
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => {
              if (showOffline) {
                setDismissedOffline(true);
              } else {
                setDismissedSlow(true);
              }
            }}
            aria-label={isSw ? 'Funga taarifa' : 'Dismiss notice'}
            className="p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
