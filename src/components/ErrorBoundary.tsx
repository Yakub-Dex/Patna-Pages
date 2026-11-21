import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, MessageSquare } from 'lucide-react';
import { PATNA_CONFIG, getWhatsAppUrl } from '../config/patnaConfig';
import { Language } from '../i18n/translations';

interface ErrorBoundaryProps {
  children: ReactNode;
  lang?: Language;
  variant?: 'page' | 'inline';
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

function detectLanguage(propLang?: Language): Language {
  if (propLang) return propLang;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'sw') return 'sw';
  }
  return 'en';
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unexpected application error',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Patna ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, errorMessage: '' });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  private handleReload = (): void => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const lang = detectLanguage(this.props.lang);
    const isSw = lang === 'sw';
    const isInline = this.props.variant === 'inline';

    if (isInline) {
      return (
        <div
          role="alert"
          className="w-full max-w-md lg:max-w-lg rounded-2xl border hairline-border bg-white dark:bg-[#121514] p-6 sm:p-8 text-center space-y-4"
        >
          <div className="w-11 h-11 mx-auto rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
              {isSw ? 'Hitilafu imetokea' : 'Something went wrong'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
              {isSw
                ? 'Sehemu hii imeshindwa kupakia ipasavyo. Jaribu tena au wasiliana nasi kupitia WhatsApp.'
                : 'This section could not load properly. Try again or continue directly via WhatsApp.'}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isSw ? 'Jaribu Tena' : 'Try Again'}</span>
            </button>
            <a
              href={getWhatsAppUrl(
                isSw
                  ? 'Mambo Patna, nahitaji msaada wa utafutaji.'
                  : 'Hi Patna, I need help with a search.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium border hairline-border bg-neutral-50 dark:bg-[#161918] text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#2541b2] dark:text-[#5B7CF6]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      );
    }

    return (
      <div
        role="alert"
        className="min-h-screen bg-[#FBFBFA] dark:bg-[#0C0E0D] text-[#141716] dark:text-[#E8EAE9] flex flex-col justify-between selection:bg-[#2541b2]/20 selection:text-[#2541b2]"
      >
        <header className="w-full border-b hairline-border px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-baseline">
            <span className="text-2xl font-extrabold tracking-tight text-[#2541b2] dark:text-[#5B7CF6]">
              {PATNA_CONFIG.brandName}<span className="text-[#141716] dark:text-white">.</span>
            </span>
          </a>
          <span className="text-xs font-mono text-[#717774] dark:text-[#8D9490]">
            {isSw ? 'Hitilafu ya Mfumo' : 'Application Error'}
          </span>
        </header>

        <main className="max-w-xl mx-auto px-6 py-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141716] dark:text-[#E8EAE9]">
            {isSw ? 'Samahani, hitilafu imetokea' : 'Sorry, something went wrong'}
          </h1>

          <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
            {isSw
              ? 'Ukurasa umekumbana na hitilafu isiyotarajiwa. Tafadhali pakia upya ukurasa au uulize Patna moja kwa moja kupitia WhatsApp.'
              : 'The page encountered an unexpected error. Please reload the page or reach Patna directly on WhatsApp.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={this.handleReload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isSw ? 'Pakia Upya Ukurasa' : 'Reload Page'}</span>
            </button>

            <a
              href={getWhatsAppUrl(
                isSw
                  ? 'Mambo Patna, ukurasa wangu ulipata hitilafu na nahitaji msaada.'
                  : 'Hi Patna, I ran into a page error and need assistance.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-base border hairline-border bg-white dark:bg-[#151817] text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6]" />
              <span>{isSw ? 'Uliza kupitia WhatsApp' : 'Ask on WhatsApp'}</span>
            </a>
          </div>
        </main>

        <footer className="w-full border-t hairline-border px-6 py-6 text-center text-xs text-[#717774] dark:text-[#8D9490]">
          <p>
            © {PATNA_CONFIG.copyrightYear} {PATNA_CONFIG.companyName}.{' '}
            {isSw ? 'Haki zote zimehifadhiwa.' : 'All rights reserved.'}
          </p>
        </footer>
      </div>
    );
  }
}
