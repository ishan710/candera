export type BlogEntry = {
  slug: string;
  category: 'tool' | 'tip';
  title: string;
  summary: string;
  label: string;
  date?: string;
  paragraphs: string[];
};

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    slug: 'pre-launch-checklist',
    category: 'tool',
    title: 'Pre-launch AI checklist',
    summary: 'Twelve yes/no questions before customers touch your AI feature.',
    label: 'Checklist',
    paragraphs: [
      'Run this before any AI feature goes live — internal demo, beta, or customer-facing.',
      'Can a user complete the core task without the AI? If not, what happens when the model fails?',
      'Do you have five real inputs saved from actual users — not made-up examples?',
      'Can you explain in one sentence what data the model sees on each request?',
      'Is there a human fallback when confidence is low or the answer is empty?',
      'Did someone outside the team try it and hit a confusing dead end?',
      'If the answer is wrong, how will the user know — and what can they do next?',
      'Print it, walk the room, mark every “no.” Fix those before launch.',
    ],
  },
  {
    slug: 'model-picker-worksheet',
    category: 'tool',
    title: 'Model picker worksheet',
    summary: 'Pick ChatGPT, Claude, or neither — based on your task, not the hype cycle.',
    label: 'Worksheet',
    paragraphs: [
      'Most teams do not need four subscriptions. This worksheet forces the decision on paper.',
      'List your top three recurring tasks. For each: how long, how often, how sensitive is the data?',
      'Mark whether the task needs long documents, code, images, or live web search.',
      'Note your budget ceiling per month and who will own maintenance.',
      'Score each model family on fit — not benchmark scores. The winner is often “the one your team already uses.”',
      'If two models tie, pick one for thirty days. Splitting habits across tools costs more than the license fee.',
    ],
  },
  {
    slug: 'weekly-review-template',
    category: 'tool',
    title: 'Weekly AI review template',
    summary: 'Fifteen minutes every Friday — what worked, what broke, what to turn off.',
    label: 'Template',
    paragraphs: [
      'AI pilots fail quietly. This template makes failure visible before it becomes expensive.',
      'What did we ship or change this week that touches AI?',
      'What did users complain about or ignore?',
      'What did we spend (time, money, attention) versus what we got back?',
      'One thing to keep, one thing to fix, one thing to stop.',
      'Assign an owner and a date for the fix. If there is no owner, stop the pilot.',
    ],
  },
  {
    slug: 'customer-disclaimer-snippet',
    category: 'tool',
    title: 'Customer-facing disclaimer snippet',
    summary: 'Plain-language lines you can paste under any AI-generated answer.',
    label: 'Copy',
    paragraphs: [
      'Use this when AI output might reach customers, patients, tenants, or the public.',
      'Suggested line: “This answer was drafted with AI and reviewed by [role]. It may be incomplete — contact us if something looks wrong.”',
      'Adjust the reviewer role to match your business: owner, paralegal, office manager, etc.',
      'Do not promise perfection. Do promise a human path when the machine is unsure.',
      'Keep it visible, not buried in terms of service.',
    ],
  },
  {
    slug: 'choosing-a-model-2026',
    category: 'tip',
    title: 'Choosing a model in 2026',
    summary: 'What each major option is good at — and when the answer is no model at all.',
    label: 'Tip',
    date: 'April 2026',
    paragraphs: [
      'The market sorted into a few families: general chat, long-document, code-heavy, and search-augmented.',
      'For most small businesses, the right question is not “which is smartest” but “which fits the workflow we already have.”',
      'Chat tools excel at drafting, summarizing, and brainstorming. They are weak at being a system of record.',
      'If your work is mostly email, proposals, and spreadsheets — one well-configured chat tool is enough.',
      'If you need AI inside your product, that is a build decision, not a subscription decision.',
      'When none of the families fit, the honest answer is often a simple form, a checklist, or a human — not another login.',
    ],
  },
  {
    slug: 'test-before-launch',
    category: 'tip',
    title: 'A quick test before things go wrong',
    summary: 'Catch embarrassing failures before customers do.',
    label: 'Tip',
    date: 'March 2026',
    paragraphs: [
      'Write down ten questions real users will ask — pulled from support tickets, sales calls, or front-desk notes.',
      'Run each question three times. Note when answers contradict each other.',
      'Try inputs with typos, missing context, and angry tone. Models behave differently under stress.',
      'Have someone who did not build the feature grade the answers: helpful, confusing, or harmful.',
      'If two of ten are harmful or confusing, you are not ready — regardless of how good the demo felt.',
    ],
  },
  {
    slug: 'connect-ai-to-documents',
    category: 'tip',
    title: 'How to connect AI to your documents',
    summary: 'What to upload, what to exclude, and how to keep answers honest.',
    label: 'Tip',
    date: 'January 2026',
    paragraphs: [
      'Start with one folder, not the whole drive. Pick documents that answer the same questions repeatedly.',
      'Remove drafts, superseded policies, and anything you would not hand a new hire on day one.',
      'Name files clearly — the model uses filenames as hints.',
      'Tell users what the system can see and what it cannot. Surprise erodes trust faster than wrong answers.',
      'Review answers weekly for the first month. Retrieval setups drift as files change.',
    ],
  },
  {
    slug: 'when-not-a-chatbot',
    category: 'tip',
    title: 'When the answer is not a chatbot',
    summary: 'The most useful AI features often do not talk back.',
    label: 'Tip',
    date: 'November 2025',
    paragraphs: [
      'Classification, extraction, routing, and drafting behind the scenes beat another chat window for most ops work.',
      'If the task has a defined input and output — invoice in, fields out — you want a pipeline, not a conversation.',
      'Chat shines when the problem is fuzzy and the human stays in the loop.',
      'Before building a bot, ask: would a button, a filter, or a one-line suggestion solve eighty percent of it?',
    ],
  },
  {
    slug: 'first-principles-prompting',
    category: 'tip',
    title: 'First-principles prompting',
    summary: 'A small set of habits that age better than copy-paste templates.',
    label: 'Tip',
    date: 'September 2025',
    paragraphs: [
      'State the role, the audience, and the format before you state the task.',
      'Give one good example instead of five mediocre ones — examples steer harder than adjectives.',
      'Ask the model to show its assumptions and to say when it is guessing.',
      'End with how you will judge success: length, tone, must-include, must-avoid.',
      'Save what worked in a shared doc. Prompt libraries rot when only one person maintains them.',
    ],
  },
];

export const BLOG_TOOLS = BLOG_ENTRIES.filter((e) => e.category === 'tool');
export const BLOG_TIPS = BLOG_ENTRIES.filter((e) => e.category === 'tip');

export function getBlogEntry(slug: string): BlogEntry | undefined {
  return BLOG_ENTRIES.find((e) => e.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_ENTRIES.map((e) => e.slug);
}
