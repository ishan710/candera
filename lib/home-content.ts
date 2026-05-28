export type OperatingStep = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export const OPERATING_MODEL: OperatingStep[] = [
  {
    id: 'experts',
    label: 'Bring practitioners in-house',
    title: 'Bring practitioners in-house',
    body:
      'We work from Palantir, Anthropic, xAI, and early-stage startups. You get people who have shipped AI in production — not slide decks.',
  },
  {
    id: 'method',
    label: 'Start with a clear method',
    title: 'Start with a clear method',
    body:
      'Every engagement has a scope, a schedule, and a deliverable. You know what you are buying before we start — sprints, not retainers.',
  },
  {
    id: 'build',
    label: 'Build only what you need',
    title: 'Build only what you need',
    body:
      'We help you use existing tools where they work and build custom only when they do not. Most teams need less software than vendors suggest.',
  },
  {
    id: 'loop',
    label: 'Close the feedback loop',
    title: 'Close the feedback loop',
    body:
      'We test with real workflows before launch and leave you with a plan to keep improving. No black-box demos that break in week two.',
  },
];

export type ExplorerItem = {
  id: string;
  question: string;
  category: string;
  answer: string;
  detail: string;
};

export const EXPLORER_ITEMS: ExplorerItem[] = [
  {
    id: 'need',
    question: 'Do we actually need AI for this?',
    category: 'Strategy',
    answer: 'We map where AI helps and where it does not.',
    detail:
      'A short audit of your workflows, ranked by effort vs. impact. You get a honest yes/no before anyone buys a subscription.',
  },
  {
    id: 'tools',
    question: 'Which tool should we use?',
    category: 'Tools',
    answer: 'We compare ChatGPT, Claude, and your stack.',
    detail:
      'Vendor-neutral guidance based on your data, budget, and team skill — not affiliate links.',
  },
  {
    id: 'files',
    question: 'How do we connect AI to our files?',
    category: 'Data',
    answer: 'We set up safe access to docs and systems.',
    detail:
      'Practical setup for spreadsheets, PDFs, and internal wikis — with clear limits on what the model should see.',
  },
  {
    id: 'build',
    question: 'What should we build first?',
    category: 'Build',
    answer: 'We pick one high-leverage pilot.',
    detail:
      'A two-week sprint with a single deliverable you can use Monday morning — not a six-month roadmap.',
  },
  {
    id: 'test',
    question: 'How do we test before launch?',
    category: 'Quality',
    answer: 'We run real tasks with your team.',
    detail:
      'Structured test scripts, failure modes documented, and a go/no-go checklist before customers see it.',
  },
  {
    id: 'team',
    question: 'Is our team ready?',
    category: 'People',
    answer: 'We train the people who will run it.',
    detail:
      'Hands-on workshops and office hours so your staff can maintain what we build — not depend on us forever.',
  },
];