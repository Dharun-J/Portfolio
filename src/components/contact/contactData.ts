export type ContactActionId = 'resume' | 'email' | 'linkedin';

export interface ContactLinkItem {
  id: ContactActionId;
  label: string;
  href: string;
  ariaLabel: string;
  isExternal: boolean;
}

/**
 * Contact link destinations & configuration.
 * Configured with clean placeholder destinations ready to be updated with final files/addresses.
 */
export const CONTACT_CONFIG = {
  resumeUrl: `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/resume.pdf`,
  emailAddress: 'jdharun2000@gmail.com', // Fill in final email address when provided
  linkedinUrl: 'https://www.linkedin.com/in/dharun-j-447264263', // Replace with final profile URL when provided
  copyrightOwner: 'Dharun J', // Matches reference: '© 2026 Name'
  year: 2026,
};

export const CONTACT_LINKS: ContactLinkItem[] = [
  {
    id: 'resume',
    label: 'Resume',
    href: CONTACT_CONFIG.resumeUrl,
    ariaLabel: 'View or download Resume',
    isExternal: true,
  },
  {
    id: 'email',
    label: 'E-Mail',
    href: CONTACT_CONFIG.emailAddress ? `mailto:${CONTACT_CONFIG.emailAddress}` : 'mailto:',
    ariaLabel: 'Send an email',
    isExternal: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: CONTACT_CONFIG.linkedinUrl,
    ariaLabel: 'Visit LinkedIn profile',
    isExternal: true,
  },
];
