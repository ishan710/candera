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
    schedule: '30-min Zoom, delivered within 3 days of booking',
    description:
      "Learn how to actually use ChatGPT or Claude in your daily life. Walk away with three workflows you weren't using before.",
    deliverable:
      '1-page follow-up doc with prompts and tools covered (within 24 hours of session).',
  },
  {
    id: 'personal-setup',
    title: 'Personal AI Setup',
    price: '$89',
    schedule: '45-min Zoom + 2-day build, delivered within 5 days of booking',
    description:
      'Custom Claude Project built around your life — travel planning, family logistics, journaling, recipes, hobbies.',
    deliverable: 'Custom Claude Project + handoff doc.',
  },
  {
    id: 'ai-learning',
    title: 'AI for Learning',
    price: '$99',
    schedule: '45-min Zoom + 3-day build, delivered within 1 week of booking',
    description:
      'For students or anyone learning a new skill. Custom GPT that acts as a tutor with structured progress tracking.',
    deliverable: 'Subject-specific learning GPT + curriculum outline.',
  },
];

export const PERSONAL_CAREER: PersonalService[] = [
  {
    id: 'resume-linkedin',
    title: 'Resume + LinkedIn Refresh',
    price: '$99',
    schedule: '30-min intake + 3-day turnaround, delivered within 5 days of booking',
    description:
      'AI-rewritten resume and LinkedIn profile, plus a custom GPT trained on your target roles.',
    deliverable: 'Updated resume, updated LinkedIn, custom application GPT.',
  },
  {
    id: 'career-pivot',
    title: 'Career Pivot Workshop',
    price: '$125',
    schedule: '1-hour session + 4-day build, delivered within 1 week of booking',
    description:
      'For people changing industries or returning to work after a break. Map the transition, build a custom GPT trained on your target field.',
    deliverable: 'Transition plan + field-specific career GPT.',
  },
  {
    id: 'job-search-system',
    title: 'Job Search System',
    price: '$149',
    schedule: '1-hour session + 1-week build, delivered within 10 days of booking',
    description:
      'Resume, LinkedIn, custom application GPT, interview prep workspace, and a tracking system.',
    deliverable: 'Full job search workspace with all components.',
  },
];

export const ENTERPRISE_SERVICES: EnterpriseService[] = [
  {
    id: 'ai-audit',
    title: 'AI Audit / Strategy Sprint',
    price: '$750',
    schedule: '2-week engagement',
    weeks: [
      { week: 'Week 1', activity: '1-hour discovery session, workflow audit, opportunity mapping' },
      { week: 'Week 2', activity: 'Prioritized report drafting, 1-hour walkthrough call' },
    ],
    deliverable:
      'Strategic report with 3 high-leverage AI opportunities, ranked by effort vs. impact.',
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning Sprint',
    price: '$1,200',
    schedule: '2-week engagement',
    weeks: [
      {
        week: 'Week 1',
        activity:
          '1-hour founder interview, voice extraction from existing writing, profile audit',
      },
      {
        week: 'Week 2',
        activity:
          'LinkedIn/X optimization, custom ghostwriter GPT build, 30 draft posts, 1-hour handoff',
      },
    ],
    deliverable: '30 ready-to-post drafts + custom ghostwriter GPT trained on your voice.',
  },
  {
    id: 'solo-founder',
    title: 'Solo Founder Track',
    price: '$1,500',
    schedule: '3-week engagement',
    weeks: [
      {
        week: 'Week 1',
        activity: '1-hour intake, current tool audit, gap analysis, foundational setup',
      },
      {
        week: 'Week 2',
        activity:
          'Custom GPTs and workflows built for product, customer, content, ops, hiring',
      },
      {
        week: 'Week 3',
        activity: 'Final walkthrough, 60-day roadmap, Loom documentation',
      },
    ],
    deliverable: 'Working AI operating stack + 60-day execution roadmap.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book',
    desc: 'Pick a service and pay via Stripe Checkout.',
  },
  {
    step: '02',
    title: 'Intake',
    desc: 'Short questionnaire or call to understand your needs (within 48 hours).',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'I set up and deliver per the schedule above.',
  },
  {
    step: '04',
    title: 'Handoff',
    desc: 'Walkthrough call so you know how to use everything.',
  },
] as const;

export const SESSION_NOTE =
  'All sessions delivered via Zoom. Deliverables shared via Notion or email.';

export const AVAILABILITY_NOTE =
  'Most engagements start within 1 week of booking. Enterprise engagements are limited to 1–2 active at a time. If a particular service is unavailable, you\'ll be notified at checkout and can opt for a waitlist.';
