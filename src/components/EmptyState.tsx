import React from 'react';
import { Inbox, RotateCcw } from 'lucide-react';
import { Language } from '../i18n/translations';

interface EmptyStateProps {
  lang?: Language;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  compact?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  lang = 'en',
  title,
  description,
  actionLabel,
  onAction,
  compact = false,
}) => {
  const isSw = lang === 'sw';

  const resolvedTitle =
    title ?? (isSw ? 'Hakuna taarifa za kuonyesha' : 'Nothing to show here yet');
  const resolvedDescription =
    description ??
    (isSw
      ? 'Hakuna maudhui au matokeo yanayopatikana kwa sasa. Jaribu kuweka upya au kurudi nyuma.'
      : 'There are no items or results available at the moment. Try resetting or refreshing your view.');
  const resolvedAction =
    actionLabel ?? (isSw ? 'Weka upya' : 'Reset view');

  return (
    <div
      role="status"
      aria-live="polite"
      className={`w-full rounded-2xl border border-dashed hairline-border bg-white dark:bg-[#121514] flex flex-col items-center justify-center text-center ${
        compact ? 'p-6 min-h-[260px]' : 'p-8 sm:p-10 min-h-[220px]'
      }`}
    >
      <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-[#1A1E1C] text-[#717774] dark:text-[#8D9490] flex items-center justify-center mb-3">
        <Inbox className="w-5 h-5" />
      </div>

      <h3 className="text-sm sm:text-base font-bold text-[#141716] dark:text-[#E8EAE9] mb-1">
        {resolvedTitle}
      </h3>

      <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] max-w-sm leading-relaxed">
        {resolvedDescription}
      </p>

      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{resolvedAction}</span>
        </button>
      )}
    </div>
  );
};
