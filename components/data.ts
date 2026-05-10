export type TreeSample = { num: string; title: string; year: string };

export type TreeLeaf = readonly [number, number, number, number, number];

export type TreeBranch = {
  id: string;
  no: string;
  name: string;
  short: string;
  description: string;
  samples: TreeSample[];
  path: string;
  twigs: string[];
  leaves: TreeLeaf[];
  label: { x: number; y: number; anchor: 'start' | 'middle' | 'end' };
};

export type TreeRoot = {
  id: string;
  label: string;
  path: string;
  pos: { x: number; y: number; anchor: 'start' | 'middle' | 'end' };
  tendrils: string[];
};

export type Audience = { no: string; role: string; note: string };

export type Playbook = { no: string; title: string; desc: string; year: string };

export const TREE_BRANCHES: TreeBranch[] = [
  {
    id: 'strategy',
    no: 'I',
    name: 'AI Strategy',
    short: "Where AI fits, where it doesn't.",
    description:
      'Two days with your team. We leave with a clear plan — what to build, what to buy, what to ignore. Usually the answer is smaller than you think.',
    samples: [
      { num: '01', title: 'Two-day strategy intensive', year: '—' },
      { num: '02', title: 'Quarterly roadmap reviews', year: '—' },
      { num: '03', title: 'Vendor & model selection memos', year: '—' },
    ],
    path: 'M 605 245 C 660 218 740 195 830 178 C 895 165 945 140 985 108',
    twigs: [
      'M 770 188 C 790 170 815 158 838 140',
      'M 870 165 C 882 150 895 138 905 118',
    ],
    leaves: [
      [820, 178, -34, 16, 0.9],
      [848, 162, -38, 18, 1.1],
      [890, 135, -50, 16, 1.0],
      [938, 116, -55, 17, 0.9],
      [978, 110, -65, 14, 1.0],
      [800, 175, 25, 13, 0.8],
      [728, 200, 18, 12, 0.7],
    ],
    label: { x: 1000, y: 92, anchor: 'start' },
  },
  {
    id: 'education',
    no: 'II',
    name: 'Education',
    short: 'Lectures, workshops, free reading.',
    description:
      'Workshops for teams who want to understand how this actually works. Prompting, retrieval, evals — no hype, no slides. Free for libraries and public schools.',
    samples: [
      { num: '01', title: 'Half-day team workshops', year: '—' },
      { num: '02', title: 'Reading list & syllabus', year: '—' },
      { num: '03', title: 'Open seminar, monthly', year: '—' },
    ],
    path: 'M 595 270 C 540 248 440 225 340 205 C 285 192 245 162 210 130',
    twigs: [
      'M 405 218 C 388 200 372 188 358 168',
      'M 290 178 C 278 162 268 148 258 130',
    ],
    leaves: [
      [365, 200, 200, 16, 0.9],
      [320, 188, 210, 17, 1.1],
      [275, 168, 220, 16, 1.0],
      [230, 140, 230, 17, 0.9],
      [205, 122, 240, 13, 0.85],
      [395, 215, 165, 13, 0.8],
      [470, 224, 162, 12, 0.7],
    ],
    label: { x: 195, y: 112, anchor: 'end' },
  },
  {
    id: 'custom-dev',
    no: 'III',
    name: 'Custom Development',
    short: 'We build the thing.',
    description:
      'When nothing off the shelf fits, we build it. Short engagements, real code, good docs. Internal tools, search features, testing. We ship and we leave.',
    samples: [
      { num: '01', title: 'Internal tool engagements', year: '—' },
      { num: '02', title: 'Search tools & testing', year: '—' },
      { num: '03', title: 'Light-touch maintenance', year: '—' },
    ],
    path: 'M 605 350 C 670 348 770 332 850 320 C 935 308 1000 298 1055 282',
    twigs: [
      'M 800 326 C 815 312 830 300 845 282',
      'M 935 308 C 950 295 962 285 968 270',
    ],
    leaves: [
      [820, 322, -26, 16, 1.0],
      [870, 314, -32, 17, 1.1],
      [930, 305, -38, 16, 1.0],
      [988, 296, -44, 17, 0.9],
      [1042, 286, -50, 14, 0.85],
      [810, 328, 22, 13, 0.8],
      [752, 340, 18, 12, 0.7],
    ],
    label: { x: 1068, y: 268, anchor: 'start' },
  },
  {
    id: 'playbooks',
    no: 'IV',
    name: 'Playbooks',
    short: 'Free, working, opinionated.',
    description:
      'The questions we keep getting asked, written down properly. How to pick a model. How to test before you launch. How to write a prompt that holds up. Free to read, free to use.',
    samples: [
      { num: '01', title: 'Choosing a model in 2026', year: '2026' },
      { num: '02', title: 'A quick test before things go wrong', year: '2026' },
      { num: '03', title: 'How to connect AI to your documents', year: '2025' },
    ],
    path: 'M 595 370 C 530 368 430 358 350 350 C 270 340 200 322 145 305',
    twigs: [
      'M 380 354 C 365 342 350 332 332 320',
      'M 240 332 C 226 320 210 312 198 295',
    ],
    leaves: [
      [380, 355, 198, 16, 1.0],
      [325, 348, 205, 17, 1.1],
      [268, 338, 212, 16, 1.0],
      [212, 326, 218, 17, 0.9],
      [158, 308, 224, 14, 0.85],
      [395, 360, 158, 13, 0.8],
      [462, 363, 156, 12, 0.7],
    ],
    label: { x: 132, y: 290, anchor: 'end' },
  },
  {
    id: 'design',
    no: 'V',
    name: 'Design Review',
    short: 'We read your AI features carefully.',
    description:
      "We read the AI parts of your product and tell you what's wrong. Where the model is doing too much, where users won't trust it, where it'll break. You get a memo. We don't redesign your app.",
    samples: [
      { num: '01', title: 'Single-feature design review', year: '—' },
      { num: '02', title: 'End-to-end product audit', year: '—' },
      { num: '03', title: 'Trust & disclosure pass', year: '—' },
    ],
    path: 'M 605 440 C 670 460 770 470 855 472 C 925 472 975 478 1015 484',
    twigs: [
      'M 780 472 C 800 488 818 498 830 512',
      'M 920 472 C 940 488 955 502 962 520',
    ],
    leaves: [
      [810, 480, 30, 16, 1.0],
      [860, 478, 36, 17, 1.1],
      [918, 478, 42, 16, 1.0],
      [970, 482, 48, 17, 0.9],
      [1010, 488, 52, 14, 0.85],
      [800, 466, -22, 13, 0.8],
      [738, 462, -18, 12, 0.7],
    ],
    label: { x: 1028, y: 504, anchor: 'start' },
  },
  {
    id: 'talent',
    no: 'VI',
    name: 'Talent & Hiring',
    short: 'The first AI hire is the hardest.',
    description:
      "The first AI hire is hard to get right. We help you find them, interview them, and set them up to actually succeed. We've done a lot of these interviews. We know what to ask.",
    samples: [
      { num: '01', title: 'Interview loop design', year: '—' },
      { num: '02', title: 'Candidate technical screens', year: '—' },
      { num: '03', title: 'First-90-days onboarding plan', year: '—' },
    ],
    path: 'M 595 460 C 530 480 430 492 340 490 C 275 488 220 488 175 488',
    twigs: [
      'M 410 491 C 392 504 378 514 365 528',
      'M 270 489 C 258 504 248 516 240 530',
    ],
    leaves: [
      [395, 498, 158, 16, 1.0],
      [340, 498, 152, 17, 1.1],
      [285, 498, 148, 16, 1.0],
      [230, 498, 145, 17, 0.9],
      [185, 498, 142, 14, 0.85],
      [385, 482, -28, 13, 0.8],
      [448, 488, -22, 12, 0.7],
    ],
    label: { x: 162, y: 510, anchor: 'end' },
  },
];

export const TREE_ROOTS: TreeRoot[] = [
  {
    id: 'clarity',
    label: 'CLARITY',
    path: 'M 600 660 C 580 695 510 718 410 728 C 320 736 250 748 180 770',
    pos: { x: 60, y: 778, anchor: 'start' },
    tendrils: [
      'M 460 723 C 450 740 444 752 442 768',
      'M 350 732 C 342 748 336 758 332 772',
    ],
  },
  {
    id: 'accessibility',
    label: 'ACCESSIBILITY',
    path: 'M 600 660 C 600 700 598 730 596 778',
    pos: { x: 600, y: 798, anchor: 'middle' },
    tendrils: [
      'M 596 720 C 580 738 568 752 558 768',
      'M 596 720 C 612 738 624 752 634 768',
    ],
  },
  {
    id: 'honest-work',
    label: 'HONEST WORK',
    path: 'M 600 660 C 620 695 690 718 790 728 C 880 736 950 748 1020 770',
    pos: { x: 1140, y: 778, anchor: 'end' },
    tendrils: [
      'M 740 723 C 750 740 756 752 758 768',
      'M 850 732 C 858 748 864 758 868 772',
    ],
  },
];

export const TRUNK_MAIN =
  'M 600 660 C 590 600 615 540 600 478 C 588 418 612 360 598 290 C 590 232 608 200 600 168';

export const TRUNK_HATCH_LEFT = [
  'M 588 612 C 580 580 588 552 583 522',
  'M 605 470 C 598 444 604 416 600 392',
  'M 590 360 C 584 332 588 308 586 282',
  'M 604 240 C 600 220 604 200 602 184',
];

export const TRUNK_HATCH_RIGHT = [
  'M 614 600 C 620 568 614 540 619 510',
  'M 596 458 C 604 432 598 410 602 388',
  'M 612 350 C 618 322 612 300 614 274',
];

export const AUDIENCES: Audience[] = [
  {
    no: '01',
    role: 'a coffee shop owner',
    note: "Menu costing, reviews, scheduling — without losing what makes the place yours.",
  },
  {
    no: '02',
    role: 'a teacher',
    note: 'Lesson planning, parent emails, the admin that eats your Sundays.',
  },
  { no: '03', role: 'an athlete', note: 'NIL, recovery, brand — the business side nobody prepares you for.' },
  { no: '04', role: 'an actor', note: "Auditions, self-tapes, the 1099 paperwork nobody teaches." },
  {
    no: '05',
    role: 'a founder',
    note: "Hiring, GTM, fundraising — and everything else that wasn't in the pitch.",
  },
  { no: '06', role: 'a real estate agent', note: 'Listings, leads, market analysis. Less time on the computer.' },
  { no: '07', role: 'a parent', note: 'Schedules, school emails, the research that never ends.' },
  {
    no: '08',
    role: 'a freelancer',
    note: "Proposals, deliverables, contracts. The parts that aren't the actual work.",
  },
  { no: '09', role: 'a job seeker', note: 'Resume, prep, the salary conversation everyone avoids.' },
];

export const PLAYBOOKS: Playbook[] = [
  {
    no: '01',
    title: 'Choosing a model in 2026',
    desc: "A short, opinionated tour of the four families worth your attention. What each is good at, what each costs you, and when none of them are the answer.",
    year: 'April 2026',
  },
  {
    no: '02',
    title: 'A quick test before things go wrong',
    desc: 'Most small-business AI failures happen because nobody tests before launch. A simple method for catching problems before customers do.',
    year: 'March 2026',
  },
  {
    no: '03',
    title: 'How to connect AI to your documents',
    desc: 'Connecting AI to your files is easier than it sounds — if you know what to avoid. Notes from twelve real projects.',
    year: 'January 2026',
  },
  {
    no: '04',
    title: 'When the answer is not a chatbot',
    desc: "A field guide to AI features that don't talk back — quietly the most useful kind for most small businesses.",
    year: 'November 2025',
  },
  {
    no: '05',
    title: 'First-principles prompting',
    desc: "Why most prompt advice ages badly, and a small set of habits that don't.",
    year: 'September 2025',
  },
];
