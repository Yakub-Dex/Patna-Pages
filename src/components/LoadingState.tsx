import React from 'react';
import { Loader2 } from 'lucide-react';
import { Language } from '../i18n/translations';

interface LoadingStateProps {
  lang?: Language;
  label?: string;
  fullScreen?: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  lang = 'en',
  label,
  fullScreen = false,
}) => {
  const isSw = lang === 'sw';
  const resolvedLabel =
    label ?? (isSw ? 'Inapakia...' : 'Loading...');

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`w-full flex flex-col items-center justify-center gap-3 text-center ${
        fullScreen
          ? 'min-h-[60vh] p-6 bg-[#FBFBFA] dark:bg-[#0C0E0D]'
          : 'p-8 min-h-[180px]'
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#2541b2]/10 dark:bg-[#2541b2]/20 text-[#2541b2] dark:text-[#5B7CF6] flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
      <p className="text-xs sm:text-sm font-mono text-[#5B615E] dark:text-[#9BA19E]">
        {resolvedLabel}
      </p>
    </div>
  );
};
