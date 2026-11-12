import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { PATNA_CONFIG, getWhatsAppUrl } from '../config/patnaConfig';

interface NotFoundPageProps {
  onGoHome?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-[#FBFBFA] dark:bg-[#0C0E0D] text-[#141716] dark:text-[#E8EAE9] flex flex-col justify-between selection:bg-[#2541b2]/20 selection:text-[#2541b2]">
      {/* Top Header */}
      <header className="w-full border-b hairline-border px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-baseline">
          <span className="text-2xl font-extrabold tracking-tight text-[#2541b2] dark:text-[#5B7CF6]">
            {PATNA_CONFIG.brandName}<span className="text-[#141716] dark:text-white">.</span>
          </span>
        </a>
        <span className="text-xs font-mono text-[#717774] dark:text-[#8D9490]">
          HTTP 404 // Not Found
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2541b2]/10 dark:bg-[#2541b2]/20 text-[#2541b2] dark:text-[#5B7CF6] font-mono text-2xl font-bold">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141716] dark:text-[#E8EAE9]">
          Page Not Found
        </h1>

        <p className="text-base text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
          The page or enquiry link you are looking for does not exist or has been moved. You can return to the main search portal or ask Patna directly on WhatsApp.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              if (onGoHome) {
                e.preventDefault();
                onGoHome();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </a>

          <a
            href={getWhatsAppUrl('Hi Patna, I landed on an unknown page and need assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-base border hairline-border bg-white dark:bg-[#151817] text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#2541b2]" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t hairline-border px-6 py-6 text-center text-xs text-[#717774] dark:text-[#8D9490]">
        <p>© {PATNA_CONFIG.copyrightYear} {PATNA_CONFIG.companyName}. All rights reserved.</p>
      </footer>
    </div>
  );
};
