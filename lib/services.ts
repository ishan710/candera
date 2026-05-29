export type PersonalService = {
  id: string;
  title: string;
  price: string;
  schedule: string;
  description: string;
  deliverable: string;
};

export type EnterpriseWeek = { week: string; activity: string };

export type EnterpriseService = {
  id: string;
  title: string;
  price: string;
  schedule: string;
  weeks: EnterpriseWeek[];
  deliverable: string;
};

export const PERSONAL_LIFE: PersonalService[] = [
  {
    id: 'ai-starter',
    title: 'AI Starter Session',
    price: '$50',
    schedule: '30-minute video call; follow-up within 3 business days of booking',
    description:
      'Introduction to ChatGPT or Claude for daily use. We cover three workflows matched to your routine.',
    deliverable:
      'One-page summary of tools and prompts discussed, sent within 24 hours of the session.',
  },
  {
    id: 'personal-setup',
    title: 'Personal AI Setup',
    price: '$89',
    schedule: '45-minute call plus 2-day build; delivery within 5 business days of booking',
    description:
      'A configured Claude Project for your household or personal admin — travel, scheduling, hobbies, or similar.',
    deliverable: 'Configured project and a short handoff document.',
  },
  {
    id: 'ai-learning',
    title: 'AI for Learning',
    price: '$99',
    schedule: '45-minute call plus 3-day build; delivery within 7 business days of booking',
    description:
      'For coursework or self-directed study. A tutoring setup with structured prompts and progress checkpoints.',
    deliverable: 'Subject-specific tutoring project and a one-page study outline.',
  },
];

export const PERSONAL_CAREER: PersonalService[] = [
  {
    id: 'resume-linkedin',
    title: 'Resume + LinkedIn Refresh',
    price: '$99',
    schedule: '30-minute intake; materials within 5 business days of booking',
    description:
      'Revised resume and LinkedIn copy, plus a small application assistant configured for your target roles.',
    deliverable: 'Updated resume, revised LinkedIn sections, and application assistant.',
  },
  {
    id: 'career-pivot',
    title: 'Career Pivot Workshop',
    price: '$125',
    schedule: '1-hour session plus 4-day build; delivery within 7 business days of booking',
    description:
      'For industry changes or return-to-work. Transition plan and a research assistant trained on your target field.',
    deliverable: 'Written transition plan and field-specific assistant.',
  },
  {
    id: 'job-search-system',
    title: 'Job Search System',
    price: '$149',
    schedule: '1-hour session plus 1-week build; delivery within 10 business days of booking',
    description:
      'Resume, LinkedIn, application assistant, interview prep notes, and a simple tracking sheet.',
    deliverable: 'Complete job-search folder with all components.',
  },
];

export const ENTERPRISE_SERVICES: EnterpriseService[] = [
  {
    id: 'ai-audit',
    title: 'AI Audit / Strategy Sprint',
    price: '$750',
    schedule: '2-week engagement',
    weeks: [
      { week: 'Week 1', activity: 'Discovery call, workflow review, opportunity mapping' },
      { week: 'Week 2', activity: 'Report drafting and review call' },
    ],
    deliverable:
      'Written report: three AI opportunities ranked by effort and impact, with recommended next steps.',
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning Sprint',
    price: '$1,200',
    schedule: '2-week engagement',
    weeks: [
      {
        week: 'Week 1',
        activity: 'Founder interview, review of existing writing, profile audit',
      },
      {
        week: 'Week 2',
        activity: 'Profile updates, drafting assistant build, 30 post drafts, handoff call',
      },
    ],
    deliverable: 'Thirty draft posts and a drafting assistant trained on your voice.',
  },
  {
    id: 'solo-founder',
    title: 'Solo Founder Track',
    price: '$1,500',
    schedule: '3-week engagement',
    weeks: [
      {
        week: 'Week 1',
        activity: 'Intake, tool audit, gap analysis, baseline setup',
      },
      {
        week: 'Week 2',
        activity: 'Workflows and assistants for product, customer, content, operations, hiring',
      },
      {
        week: 'Week 3',
        activity: 'Walkthrough, 60-day roadmap, recorded documentation',
      },
    ],
    deliverable: 'Installed workflows, documentation, and a 60-day execution plan.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book',
    desc: 'Select a service and complete checkout.',
  },
  {
    step: '02',
    title: 'Intake',
    desc: 'Brief questionnaire or call to confirm scope (within 48 hours).',
  },
  {
    step: '03',
    title: 'Delivery',
    desc: 'Build and review per the schedule listed for that service.',
  },
  {
    step: '04',
    title: 'Handoff',
    desc: 'Walkthrough so your team can operate what we delivered.',
  },
] as const;

export const SESSION_NOTE =
  'Sessions are held by video call. Written deliverables are shared via Notion or email.';

export const AVAILABILITY_NOTE =
  'Most projects begin within one week of booking. We run one to two enterprise engagements at a time. If a service is unavailable at checkout, you may join a waitlist.';
