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
    title: 'Pre-launch review checklist',
    summary: 'Yes/no questions to run before a customer-facing AI feature ships.',
    label: 'Checklist',
    paragraphs: [
      'Use this for internal pilots, betas, or anything customer-facing.',
      'Can the core task be completed without AI? If not, document what happens when the model fails.',
      'Do you have at least five real inputs from actual users — not demo scripts?',
      'Can you state in one sentence what data the model receives on each request?',
      'Is there a human path when the answer is empty or low-confidence?',
      'Has someone outside the build team used it and reported a dead end?',
      'If the answer is wrong, how will the user know — and what should they do next?',
      'Mark every “no” before launch. Those items are blockers, not backlog.',
    ],
  },
  {
    slug: 'model-picker-worksheet',
    category: 'tool',
    title: 'Model selection worksheet',
    summary: 'Choose the right AI tool based on the work — not vendor marketing.',
    label: 'Worksheet',
    paragraphs: [
      'Most small teams need one primary tool, not four subscriptions. In 2026 the main options are ChatGPT (GPT-5.5), Claude (Opus 4.7), Gemini (3.1 Pro), and Perplexity for search-heavy work.',
      'List your three most frequent tasks. For each, note duration, frequency, and data sensitivity.',
      'Match task type to model strength: long writing and proposals fit Claude best; research and reasoning fit Gemini; broad integrations and everyday chat fit ChatGPT; time-sensitive web lookups fit Perplexity.',
      'Indicate whether the task requires long documents, code, images, or live web results — these narrow the field further.',
      'Set a monthly budget cap and name who maintains prompts and access.',
      'Score fit to the workflow — not public benchmarks. The tool your team will actually open every day is the right one.',
      'If two options tie, standardize on one for thirty days before adding another.',
    ],
  },
  {
    slug: 'weekly-review-template',
    category: 'tool',
    title: 'Weekly AI review',
    summary: 'A fifteen-minute agenda for what to keep, fix, or stop.',
    label: 'Template',
    paragraphs: [
      'Pilots fail quietly. A fixed weekly review surfaces problems before they compound.',
      'What changed this week that touches AI — shipped features, policy, or spend?',
      'What did users report, ignore, or work around?',
      'Compare time and cost to the outcome received.',
      'Record one item to keep, one to fix, one to stop.',
      'Assign an owner and date for the fix. Without an owner, end the pilot.',
    ],
  },
  {
    slug: 'customer-disclaimer-snippet',
    category: 'tool',
    title: 'Disclosure language for customers',
    summary: 'Plain lines to place under AI-assisted responses.',
    label: 'Copy',
    paragraphs: [
      'Use when output may reach customers, patients, tenants, or the public.',
      'Suggested text: “This response was prepared with AI and reviewed by [role]. It may be incomplete — contact us if something looks wrong.”',
      'Replace [role] with your actual reviewer: owner, office manager, paralegal, etc.',
      'Do not imply infallibility. State how to reach a person when the system is uncertain.',
      'Place the disclosure near the answer, not only in terms of service.',
    ],
  },
  {
    slug: 'choosing-a-model-2026',
    category: 'tip',
    title: 'Selecting a model in 2026',
    summary: 'Which model fits which work — named, compared, and without the marketing.',
    label: 'Note',
    date: 'May 2026',
    paragraphs: [
      'In mid-2026, the leading general-purpose models are GPT-5.5 (OpenAI), Claude Opus 4.7 (Anthropic), Gemini 3.1 Pro (Google), and Grok 4 (xAI). No single model leads every category.',
      'For writing, editing, and long documents: Claude Opus 4.7 produces the most natural prose and handles the longest inputs. Use it for proposals, client-facing drafts, and anything that should sound like a person wrote it.',
      'For research, reasoning, and multi-step analysis: Gemini 3.1 Pro leads published reasoning benchmarks. Perplexity pairs Gemini-class reasoning with live web search — the better choice when information needs to be current.',
      'For general business use — email, summarizing, brainstorming, and software integrations: GPT-5.5 is the broadest tool and plugs into more third-party software than any other model family.',
      'For most small businesses the question is not which model scores highest on a benchmark. It is which tool fits your existing workflow with the least friction and retraining.',
      'If two options tie, standardize on one for thirty days before switching. Tool-switching has a hidden cost in lost prompts and relearning time.',
    ],
  },
  {
    slug: 'test-before-launch',
    category: 'tip',
    title: 'Testing before release',
    summary: 'A practical pass before external users see the feature.',
    label: 'Note',
    date: 'March 2026',
    paragraphs: [
      'Draft ten questions from support tickets, sales calls, or front-desk notes — not hypotheticals.',
      'Run each question three times. Record contradictions.',
      'Include typos, missing context, and adversarial tone. Behavior shifts under stress.',
      'Have someone who did not build the feature classify answers: acceptable, confusing, or harmful.',
      'If two of ten are confusing or harmful, delay release — regardless of demo quality.',
    ],
  },
  {
    slug: 'connect-ai-to-documents',
    category: 'tip',
    title: 'Connecting AI to your files',
    summary: 'What to include, what to exclude, and how to set expectations.',
    label: 'Note',
    date: 'January 2026',
    paragraphs: [
      'Begin with one folder, not the entire drive. Choose files that answer the same questions repeatedly.',
      'Remove drafts, superseded policies, and material you would not give a new hire on day one.',
      'Use clear filenames; models treat them as signals.',
      'Tell users what the system can access and what it cannot. Omissions damage trust faster than errors.',
      'Review sample answers weekly for the first month. File changes degrade retrieval over time.',
    ],
  },
  {
    slug: 'when-not-a-chatbot',
    category: 'tip',
    title: 'When a chatbot is the wrong interface',
    summary: 'Many useful AI features never hold a conversation.',
    label: 'Note',
    date: 'November 2025',
    paragraphs: [
      'Classification, extraction, routing, and background drafting suit most operations work better than another chat pane.',
      'Defined input and output — invoice in, fields out — calls for a pipeline, not dialogue.',
      'Chat fits fuzzy problems where a person remains in the loop.',
      'Before building a bot, ask whether a button, filter, or inline suggestion covers most of the need.',
    ],
  },
  {
    slug: 'first-principles-prompting',
    category: 'tip',
    title: 'Writing instructions that hold up',
    summary: 'Habits that outlast copied prompt templates.',
    label: 'Note',
    date: 'September 2025',
    paragraphs: [
      'State role, audience, and output format before the task.',
      'One strong example steers better than five weak ones.',
      'Require the model to list assumptions and flag uncertainty.',
      'Define success: length, tone, required elements, and exclusions.',
      'Document what worked in a shared file. Libraries decay when one person owns them.',
    ],
  },
  {
    slug: 'five-ai-mistakes',
    category: 'tip',
    title: 'Five mistakes to skip when starting with AI',
    summary: 'The patterns that waste money and time in the first ninety days.',
    label: 'Note',
    date: 'May 2026',
    paragraphs: [
      'Most teams overestimate the technology and underestimate the need for a clear target workflow. Pick one task before picking a tool.',
      'Mistake one: buying multiple subscriptions on day one. The median small business now runs five AI tools — most report using two. Master one for thirty days before adding another.',
      'Mistake two: skipping human review on anything customer-facing. Automated workflows miss their own errors at high rates. Keep a person in the loop until you have enough data to trust the output.',
      'Mistake three: using AI on a broken process. AI scales what is already there, including the problems. If the underlying workflow is unclear, fix it first.',
      'Mistake four: treating it as a one-time setup. Owners who get lasting value use AI daily and review what the tool produced weekly. Without an assigned owner and a fixed review, tools go unused within a month.',
      'Mistake five: pasting sensitive data without checking the terms. Most consumer chat tools use conversation data to train models unless you opt out or pay for a privacy tier. Verify before sharing anything confidential.',
    ],
  },
  {
    slug: 'what-are-ai-agents',
    category: 'tip',
    title: 'What AI agents are and when to use one',
    summary: 'Agents act, not just answer. Here is when that difference matters.',
    label: 'Note',
    date: 'May 2026',
    paragraphs: [
      'A standard AI tool responds to a prompt and waits. An agent is given a goal, breaks it into steps, executes those steps — sometimes using tools like web search or a database — and delivers a result without waiting for each next message.',
      'Practical examples in 2026: a support agent that reads an incoming ticket, checks order history, and drafts a reply; a research agent that searches the web, summarizes results, and files a weekly briefing. Neither requires a human touch in the middle.',
      'Good entry points are tasks with structured inputs, clear outputs, and low consequences when wrong. Tier-one customer support, meeting summaries, and lead qualification fit well.',
      'Poor fits: tasks that require judgment calls, regulatory approval, or client relationships where a mistake damages trust. Agents automate volume, not discretion.',
      'Before building one, ask: if this agent made a wrong call, what would happen? If the answer involves a lost account or a compliance issue, keep a human in the loop.',
      'Most small businesses do not need a custom-built agent in 2026. Most of what looks like an agent need is solved by a well-configured tool, a clear prompt, and a defined review step.',
    ],
  },
  {
    slug: 'ai-roi-tracker',
    category: 'tool',
    title: 'AI spend and ROI tracker',
    summary: 'A monthly worksheet to decide what to keep, scale, or cancel.',
    label: 'Worksheet',
    paragraphs: [
      'Use this monthly. If no one reviews the list, tools accumulate and ROI disappears.',
      'List every AI subscription and its monthly cost. Include per-seat licenses and any API usage billed separately.',
      'For each tool, estimate hours saved per month. Multiply by the hourly cost of the person who does that work without the tool.',
      'Note the error rate: how often does the output require correction, and how long does that correction take? Subtract correction time from your hours-saved figure.',
      'Classify each tool as: paying for itself (keep), breaking even (monitor for one more month), or costing more than it saves (cancel or replace).',
      'Assign one metric per tool — the single number that would make you cancel it if it declined. More than one metric per tool usually means no one is watching any of them.',
      'Review quarterly for tools you marked "keep." A tool that paid for itself in January may be redundant by April if a better option launched or your workflow changed.',
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
