/**
 * Site-wide values shared by the navbar, footer and pages.
 */

export const SITE_NAME = 'Karishma Hegde';

export interface NavLink {
  label: string;
  href: string;
}

/** Main pages, in navbar order. Labels are from CLAUDE.md "Navbar". */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Research & Open Source', href: '/research' },
  { label: 'Toolkit', href: '/toolkit' },
  { label: 'Recognition', href: '/recognition' },
];

/**
 * Resume: a direct-download link to the PDF on Google Drive.
 * The PDF itself is never stored in this repo.
 */
export const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1306-8vu2e6YewoKmB2hTOuJtaCNfmCpO';
