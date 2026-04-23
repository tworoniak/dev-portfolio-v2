export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type CertificationItem = {
  issuer: string;
  name: string;
  period: string;
  url?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: 'WORONIAK.DEV',
    role: 'Freelance Front-End Engineer',
    period: '2025 — Present',
    description:
      'Independent front-end engineering practice focused on building production-quality React/TypeScript applications, personal tools, and portfolio projects.',
  },
  {
    company: 'EVERSANA INTOUCH',
    role: 'Front-End Developer',
    period: '2020 — 2025',
    description:
      'Developed and maintained responsive web applications in React and Angular for healthcare and pharmaceutical clients.',
  },
  {
    company: 'UMB BANK',
    role: 'Web Developer II',
    period: '2013 — 2020',
    description:
      'Designed and developed responsive enterprise web solutions for a major regional financial institution.',
  },
  {
    company: 'FISHNET SECURITY',
    role: 'Motion Graphics Designer',
    period: '2012 — 2013',
    description:
      'Created motion graphics, 3D animation, video, and audio for internal and online media.',
  },
  {
    company: 'VML',
    role: 'Interactive Web Developer',
    period: '2007 — 2012',
    description:
      'Developed client-facing websites using HTML, CSS, jQuery, and enterprise CMS platforms (Vignette, RedDot, OpenText).',
  },
  {
    company: 'MARTIN AUTOMATIC INC.',
    role: 'Multimedia Producer / Web Developer',
    period: '2000 — 2007',
    description:
      'Managed full website development lifecycle using HTML, CSS, JavaScript, PHP, and MySQL. Produced multimedia content, including 3D animations, videos, brochures, and trade show graphics.',
  },
];

export const certifications: CertificationItem[] = [
  {
    issuer: 'Anthropic',
    name: 'AI Fluency: Framework & Foundations',
    period: '2026',
    url: 'https://verify.skilljar.com/c/mx2gmx6zq9k9',
  },
  {
    issuer: 'Anthropic',
    name: 'Claude Code in Action',
    period: '2026',
    url: 'https://verify.skilljar.com/c/ykoos55xfxa9',
  },
  {
    issuer: 'Anthropic',
    name: 'Claude 101',
    period: '2026',
    url: 'https://verify.skilljar.com/c/o5jxr2eiukt6',
  },
  {
    issuer: 'Anthropic',
    name: 'Claude Code 101',
    period: '2026',
    url: 'https://verify.skilljar.com/c/cxhqoy7pradb',
  },
  {
    issuer: 'Anthropic',
    name: 'Introduction to Model Context Protocol',
    period: '2026',
    url: 'https://verify.skilljar.com/c/xvmkmu2rjhqf',
  },
  {
    issuer: 'Anthropic',
    name: 'Model Context Protocol: Advanced Topics',
    period: '2026',
    // url: 'https://verify.skilljar.com/c/mx2gmx6zq9k9',
  },
  {
    issuer: 'Anthropic',
    name: 'Introduction to Claude Cowork',
    period: '2026',
    url: 'https://verify.skilljar.com/c/e8hptyoaa8ge',
  },
  {
    issuer: 'Udemy',
    name: 'Coding With AI - Planning To Production',
    period: '2026',
    url: 'https://www.udemy.com/certificate/UC-f90cd785-f137-48c1-8dd3-874504cf9762/',
  },
  {
    issuer: 'Udemy',
    name: 'Modern React From The Beginning',
    period: '2026',
    url: 'https://www.udemy.com/certificate/UC-34895766-fa11-4029-9d7c-d0bebf86dfbd/',
  },
  {
    issuer: 'Udemy',
    name: 'React Front To Back',
    period: '2026',
    // url: 'https://www.udemy.com/certificate/UC-34895766-fa11-4029-9d7c-d0bebf86dfbd/',
  },
  {
    issuer: 'Udemy',
    name: 'MERN From Scratch',
    period: '2026',
    // url: 'https://www.udemy.com/certificate/UC-34895766-fa11-4029-9d7c-d0bebf86dfbd/',
  },
  {
    issuer: 'Udemy',
    name: 'Tailwind CSS From Scratch',
    period: '2026',
    url: 'https://www.udemy.com/certificate/UC-aad16d2d-206a-4006-8c6a-92a9b665e770/',
  },
  {
    issuer: 'Udemy',
    name: 'Creating Accessible Websites',
    period: '2026',
    url: 'https://www.udemy.com/certificate/UC-a108e7a5-3583-4dfb-975b-a84a968adfd3/',
  },
];
