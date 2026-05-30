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
    title: 'AI Starter Intensive',
    price: '$299',
    schedule: '2-day intensive — Day 1 live session, Day 2 build + handoff',
    description:
      'A focused two-day introduction to ChatGPT and Claude for daily use. We map three workflows to your routine on Day 1, then build and configure them together on Day 2.',
    deliverable:
      'Configured prompt library and a one-page reference guide, delivered at end of Day 2.',
  },
  {
    id: 'personal-setup',
    title: 'AI Home Base',
    price: '$449',
    schedule: '2-day intensive — Day 1 discovery, Day 2 build + walkthrough',
    description:
      'A fully configured Claude Project for your household or personal admin — travel, scheduling, budgeting, or similar. Day 1 is scoping; Day 2 is build and live walkthrough.',
    deliverable: 'Configured project, prompt templates, and a short handoff document.',
  },
  {
    id: 'ai-learning',
    title: 'AI for Learning',
    price: '$499',
    schedule: '2-day intensive — Day 1 curriculum session, Day 2 tutor setup + study plan',
    description:
      'For coursework or self-directed study. Day 1 maps your goals and existing materials. Day 2 delivers a working AI tutor configured to your subject and learning style.',
    deliverable: 'Subject-specific tutoring assistant and a structured 4-week study outline.',
  },
];

export const PERSONAL_CAREER: PersonalService[] = [
  {
    id: 'resume-linkedin',
    title: 'Resume + LinkedIn Refresh',
    price: '$549',
    schedule: '2-day intensive — Day 1 intake + drafting, Day 2 review + finalization',
    description:
      'Revised resume and LinkedIn copy written with you, not for you — Day 1 is the intake and first drafts; Day 2 is live review and locking the final versions.',
    deliverable: 'Finalized resume, revised LinkedIn sections, and a small application assistant.',
  },
  {
    id: 'career-pivot',
    title: 'Career Pivot Workshop',
    price: '$699',
    schedule: '2-day intensive — Day 1 strategy session, Day 2 materials build + handoff',
    description:
      'For industry changes or return-to-work scenarios. Day 1 maps the target field and gaps; Day 2 delivers a written transition plan and a research assistant trained on that field.',
    deliverable: 'Written transition plan, positioning statement, and field-specific AI assistant.',
  },
  {
    id: 'job-search-system',
    title: 'Job Search System',
    price: '$849',
    schedule: '2-day intensive — Day 1 strategy + resume, Day 2 full build + live coaching',
    description:
      'The complete package: resume, LinkedIn, application assistant, interview prep notes, and a tracking system. Two full days of focused work so you leave ready to apply.',
    deliverable: 'Complete job-search folder — all materials built and ready to use.',
  },
];

export const ENTERPRISE_SERVICES: EnterpriseService[] = [
  {
    id: 'ai-audit',
    title: 'AI Audit Sprint',
    price: '$2,500',
    schedule: '2-day intensive engagement',
    weeks: [
      {
        week: 'Day 1',
        activity: 'Full business review, workflow mapping, and AI opportunity ranking across your operations',
      },
      {
        week: 'Day 2',
        activity: 'Strategy session, report walkthrough, and recommended implementation roadmap',
      },
    ],
    deliverable:
      'Written report: three AI opportunities ranked by effort and impact, with a 90-day action plan.',
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning Sprint',
    price: '$3,500',
    schedule: '2-day intensive engagement',
    weeks: [
      {
        week: 'Day 1',
        activity: 'Founder interview, existing content audit, voice extraction, and positioning drafts',
      },
      {
        week: 'Day 2',
        activity: 'Live review, profile updates, 30 post drafts, and drafting assistant build + handoff',
      },
    ],
    deliverable: 'Thirty ready-to-publish post drafts and a voice-trained drafting assistant.',
  },
  {
    id: 'solo-founder',
    title: 'Founder Intensive',
    price: '$4,500',
    schedule: '2-day intensive engagement',
    weeks: [
      {
        week: 'Day 1',
        activity: 'Full company audit — tools, workflows, and gaps across product, content, ops, and hiring',
      },
      {
        week: 'Day 2',
        activity: 'Build all workflows and assistants, live walkthroughs, 90-day roadmap delivery',
      },
    ],
    deliverable: 'Installed AI workflows across your business, full documentation, and a 90-day execution plan.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book',
    desc: 'Select a service. We confirm your two-day dates within 24 hours.',
  },
  {
    step: '02',
    title: 'Pre-work',
    desc: 'Short questionnaire sent the day before. No homework — just context.',
  },
  {
    step: '03',
    title: 'Two days',
    desc: 'Day 1 is discovery and strategy. Day 2 is build, review, and delivery.',
  },
  {
    step: '04',
    title: 'Handoff',
    desc: 'Everything documented so you can operate what we built without us.',
  },
] as const;

export const SESSION_NOTE =
  'Both days are conducted by video call. All deliverables are shared via Notion or email at the close of Day 2.';

export const AVAILABILITY_NOTE =
  'We run one to two intensives per week. Most bookings start within 5 business days. If your preferred dates are unavailable, you may join a short waitlist.';
