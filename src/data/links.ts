export const profile = {
  name: 'Colin Domoney',
  tagline: 'The Diplomat of AI Security',
  roles: 'Author · Advisor · Speaker',
  bio: 'Thirty years in cybersecurity, now making the glass-half-full case for Secure Vibecoding — an honest, optimistic take on AI-assisted development.',
  title: 'CTO & Co-founder, LibertiTec',
};

export interface Link {
  id: string;
  label: string;
  sub: string;
  meta: string;
  icon: string;
  href: string;
  primary?: boolean;
}

export const links: Link[] = [
  { id: 'site',  label: 'My Blog',            sub: 'colindomoney.com',             meta: 'HOME',       icon: 'Globe',   href: 'https://colindomoney.com',               primary: true },
  { id: 'blog',  label: 'Defending Dev',    sub: 'Blog & podcast',               meta: 'WRITING',    icon: 'Signal',  href: 'https://defendingdev.com' },
  { id: 'work',  label: 'Work with me',     sub: 'Createk Design — advisory',    meta: 'CONSULTING', icon: 'Compass', href: 'https://createk-design.com' },
  { id: 'li',    label: 'LinkedIn',         sub: 'Connect & follow',             meta: 'SOCIAL',     icon: 'LinkedIn',href: 'https://linkedin.com/in/colindomoney' },
  { id: 'x',     label: 'X',               sub: '@colindomoney',                meta: 'SOCIAL',     icon: 'X',       href: 'https://x.com/colindomoney' },
  { id: 'cv',    label: 'CV',              sub: 'Online & PDF download',        meta: 'DOCUMENT',   icon: 'Doc',     href: '/cv' },
  { id: 'talks', label: 'Speaking & talks', sub: 'Upcoming and past',            meta: 'EVENTS',     icon: 'Mic',     href: 'https://colindomoney.com/speaking' },
  { id: 'book',  label: 'Defending APIs',   sub: 'The book — Packt, 2024',      meta: 'BOOK',       icon: 'Book',    href: 'https://www.packtpub.com/en-no/product/defending-apis-9781804613061' },
];

// SVG icon markup — monoline, stroke-based
export const icons: Record<string, string> = {
  Globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><path d="M3 12h18"/></svg>`,
  Book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 6h8"/><path d="M8 10h6"/></svg>`,
  Signal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h3l3-7 4 14 3-9 2 5h3"/></svg>`,
  Compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="15.5,8.5 11,11 8.5,15.5 13,13" fill="currentColor" stroke="none"/></svg>`,
  X: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M20 4L4 20"/></svg>`,
  LinkedIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M8 10v7M8 7.5v.01"/><path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7"/></svg>`,
  Doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>`,
  Mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4"/><path d="M9 21h6"/></svg>`,
  Chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,6 15,12 9,18"/></svg>`,
};
