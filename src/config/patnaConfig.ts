/**
 * Patna Configuration & Placeholders
 * 
 * Replace these placeholder values with your live production credentials,
 * official WhatsApp business number, SMS shortcodes, and contact emails.
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
  contactEmail: string;
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
  contactEmail: 'info@patnacom.co.tz', // Official contact & general information email
  infoEmail: 'info@patnacom.co.tz', // General information email
  businessEmail: 'support@patnacom.co.tz', // Merchant & provider inquiries email
  supportPhone: '+255 683 007005',
  webAppUrl: 'https://patna.co.tz',
  instagramUrl: 'https://www.instagram.com/use_patna?obrf=enZjY3VhYjd1aXg4',
  facebookUrl: 'https://www.facebook.com/Patnacom.Services',
  whatsappSocialUrl: 'https://wa.me/255683007005?text=Hi%20Patna',
  androidAppStatus: 'coming_soon',
  iosAppStatus: 'coming_soon',
  copyrightYear: 2026,
  googleAnalyticsId: '', // PLACEHOLDER: e.g., 'G-XXXXXXXXXX'. Leave empty for zero tracking.
};

/**
 * Generates an official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${PATNA_CONFIG.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Registry of placeholders for user handover checklist
 */
export const REQUIRED_PLACEHOLDERS = [
  {
    key: 'whatsappRaw',
    label: 'WhatsApp Business Phone Number',
    current: PATNA_CONFIG.whatsappRaw,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Directs all "Start on WhatsApp" and provider onboarding chats.',
  },
  {
    key: 'smsNumber',
    label: 'SMS Number',
    current: PATNA_CONFIG.smsNumber,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Enables basic feature phone users and offline search.',
  },
  {
    key: 'contactEmail / infoEmail',
    label: 'Official Contact & Info Email',
    current: PATNA_CONFIG.infoEmail,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Official contact and general company information requests.',
  },
  {
    key: 'businessEmail',
    label: 'Merchant & Provider Inquiries Email',
    current: PATNA_CONFIG.businessEmail,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Commercial provider inquiries, merchant onboarding, and support.',
  },
  {
    key: 'socialLinks (whatsappSocialUrl / instagramUrl / facebookUrl)',
    label: 'Social Media Profiles',
    current: `WhatsApp: ${PATNA_CONFIG.whatsappSocialUrl} · Instagram: ${PATNA_CONFIG.instagramUrl} · Facebook: ${PATNA_CONFIG.facebookUrl}`,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Official social media handles for Patnacom Services in Tanzania.',
  },
  {
    key: 'legalDocuments',
    label: 'Privacy Policy & Terms of Service URLs',
    current: 'In-app accessible modal dialogues with complete standard terms',
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Full regulatory compliance with Tanzanian communications standards.',
  },
  {
    key: 'googleAnalyticsId',
    label: 'Google Analytics 4 Measurement ID',
    current: PATNA_CONFIG.googleAnalyticsId || 'Not configured (privacy-first default: zero tracking)',
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Web traffic insights. Enter your G-XXXXXXXXXX ID to activate automatically, or leave blank to remain tracking-free.',
  },
];
