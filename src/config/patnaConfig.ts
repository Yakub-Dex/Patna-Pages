/**
 * Patna Configuration
 *
 * Official WhatsApp business number, SMS number, contact emails, and social URLs.
 */

export interface PatnaConfig {
  companyName: string;
  brandName: string;
  tagline: string;
  headquarters: string;
  country: string;
  whatsappNumber: string; // Display format, e.g., '+255 683 007005'
  whatsappRaw: string; // Digits only with country code for wa.me links, e.g., '255683007005'
  smsNumber: string;
  infoEmail: string;
  businessEmail: string;
  supportPhone: string;
  webAppUrl: string;
  androidAppStatus: 'coming_soon' | 'live';
  iosAppStatus: 'coming_soon' | 'live';
  instagramUrl: string;
  facebookUrl: string;
  whatsappSocialUrl: string;
  copyrightYear: number;
  solutionByline: string;
  legalEntityName: string;
  googleAnalyticsId: string;
}

export const PATNA_CONFIG: PatnaConfig = {
  legalEntityName: 'Patnacom Services',
  companyName: 'Patnacom Services. A Service Company',
  solutionByline: 'A Patnacom Services Solution',
  brandName: 'Patna',
  tagline: 'WhatsApp & Multi-Channel Search for Tanzania',
  headquarters: 'Dar es Salaam',
  country: 'Tanzania',
  whatsappNumber: '+255 683 007005',
  whatsappRaw: '255683007005',
  smsNumber: '+255 683 007005',
  infoEmail: 'info@patnacom.co.tz', // Official contact & general information email
  businessEmail: 'support@patnacom.co.tz', // Merchant & provider inquiries email
  supportPhone: '+255 683 007005',
  webAppUrl: 'https://www.patnacom.co.tz/',
  instagramUrl: 'https://www.instagram.com/use_patna?obrf=enZjY3VhYjd1aXg4',
  facebookUrl: 'https://www.facebook.com/Patnacom.Services',
  whatsappSocialUrl: 'https://wa.me/255683007005?text=Hi%20Patna',
  androidAppStatus: 'coming_soon',
  iosAppStatus: 'coming_soon',
  copyrightYear: 2026,
  googleAnalyticsId: '', // Optional: e.g., 'G-XXXXXXXXXX'. Leave empty for zero tracking.
};

/**
 * Generates an official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${PATNA_CONFIG.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

