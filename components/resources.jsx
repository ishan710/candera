'use client';

import { useState } from 'react';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

const RESOURCES = [
  // ── TIER 1: Non-Technical / Business ──
  {
    tier: 1,
    title: 'AI Daily Brief',
    type: 'Podcast',
    url: 'https://www.youtube.com/@AIDailyBrief',
    description:
      'Short daily episodes distilling the most important AI news and business implications. Perfect starting point for founders who want to stay current without deep technical background.',
    tags: ['News', 'Business', 'Daily'],
  },
  {
    tier: 1,
    title: 'Lex Fridman Podcast',
    type: 'Podcast / YouTube',
    url: 'https://www.youtube.com/@lexfridman',
    description:
      'Long-form conversations with AI pioneers like Sam Altman, Andrej Karpathy, Geoffrey Hinton, and Elon Musk. Gets at the philosophy, stakes, and trajectory of AI in an accessible format.',
    tags: ['Interviews', 'Long-form', 'Visionary'],
  },
  {
    tier: 1,
    title: 'No Priors',
    type: 'Podcast',
    url: 'https://www.nopriorsai.com',
    description:
      'Hosted by investors Elad Gil and Sarah Guo (Conviction), this show sits down with top AI engineers, researchers, and founders to explore how AI is shaking up industries and where it\'s headed.',
    tags: ['Founders', 'Investors', 'Strategy'],
  },
  {
    tier: 1,
    title: 'Matt Wolfe',
    type: 'YouTube',
    url: 'https://www.youtube.com/@mreflow',
    description:
      'Approachable reviews and walkthroughs of new AI tools as they launch. Great for non-technical founders who want to understand what\'s available and how to use it.',
    tags: ['Tools', 'Walkthroughs', 'News'],
  },
  {
    tier: 1,
    title: 'a16z AI Blog',
    type: 'Blog',
    url: 'https://a16z.com/ai/',
    description:
      'Andreessen Horowitz\'s writing on AI markets, business models, and technology trends. Explores how AI is eating software from a VC strategy perspective — excellent for understanding the macro picture.',
    tags: ['Strategy', 'VC', 'Market'],
  },
  {
    tier: 1,
    title: 'VentureBeat AI',
    type: 'Blog / News',
    url: 'https://venturebeat.com/category/ai/',
    description:
      'Comprehensive coverage of AI business trends, startup funding rounds, product launches, and commercial deployment. Best for understanding the broader strategic landscape.',
    tags: ['News', 'Business', 'Funding'],
  },
  {
    tier: 1,
    title: 'Google DeepMind: The Podcast',
    type: 'Podcast',
    url: 'https://www.deepmind.com/the-podcast',
    description:
      'Multi-award-winning podcast hosted by mathematician Hannah Fry. Features scientists, engineers, and ethicists at the frontier of safe and responsible AI. Great for understanding AI\'s societal stakes.',
    tags: ['Safety', 'Science', 'Ethics'],
  },
  {
    tier: 1,
    title: 'TechCrunch AI',
    type: 'Blog / News',
    url: 'https://techcrunch.com/category/artificial-intelligence/',
    description:
      'Daily updates on AI funding rounds, product launches, and startup moves. Essential for tracking what\'s happening in the ecosystem without needing deep technical context.',
    tags: ['News', 'Startups', 'Funding'],
  },

  // ── TIER 2: Practitioner / Builder ──
  {
    tier: 2,
    title: 'Practical AI Podcast',
    type: 'Podcast',
    url: 'https://changelog.com/practicalai',
    description:
      'Covers real-world applications of machine learning, LLMs, and AI engineering. Bridges the gap between hype and actual deployment — built for AI engineers and tech leaders.',
    tags: ['LLMs', 'Engineering', 'Applied'],
  },
  {
    tier: 2,
    title: 'DeepLearning.AI YouTube',
    type: 'YouTube',
    url: 'https://www.youtube.com/@Deeplearningai',
    description:
      'Founded by Andrew Ng, this channel delivers expert interviews, short lessons, and breakdowns of AI trends. Like TED Talks for applied AI — crisp, current, and highly practical.',
    tags: ['Courses', 'Experts', 'LLMs'],
  },
  {
    tier: 2,
    title: 'AI Explained',
    type: 'YouTube',
    url: 'https://www.youtube.com/@aiexplained-official',
    description:
      'Breaks down cutting-edge AI research — LLMs, AGI debates, OpenAI and Anthropic releases — into clear, watchable episodes. Sharp, skeptical, grounded analysis without needing a PhD.',
    tags: ['Research', 'Analysis', 'Models'],
  },
  {
    tier: 2,
    title: 'Latent Space',
    type: 'Newsletter / Podcast',
    url: 'https://www.latent.space',
    description:
      'The flagship resource for AI engineers. Over 10M readers/listeners in 2025. Covers foundation models, agents, GPU infra, and coding tools directly from the people building them. Essential reading.',
    tags: ['Agents', 'Infrastructure', 'Engineering'],
  },
  {
    tier: 2,
    title: 'Sabrina Ramonov',
    type: 'YouTube',
    url: 'https://www.youtube.com/@SabrinaRamonov',
    description:
      '1.4M+ followers. Former NLP startup founder. Focuses on AI prompts, agent systems, and automation workflows for solopreneurs and business owners — real technical depth made accessible.',
    tags: ['Prompting', 'Agents', 'Automation'],
  },
  {
    tier: 2,
    title: 'OpenAI Blog',
    type: 'Blog',
    url: 'https://openai.com/news/',
    description:
      'Primary source for model releases, safety research, API updates, and deployment strategies from OpenAI. Good entry point for understanding what the frontier models can actually do.',
    tags: ['Models', 'API', 'Research'],
  },
  {
    tier: 2,
    title: 'Anthropic Blog',
    type: 'Blog',
    url: 'https://www.anthropic.com/news',
    description:
      'Research and product updates from Anthropic — creators of Claude. Covers AI safety, model capabilities, and interpretability. Crucial reading for understanding the responsible AI frontier.',
    tags: ['Safety', 'Models', 'Research'],
  },
  {
    tier: 2,
    title: 'The AI Corner',
    type: 'Newsletter',
    url: 'https://www.the-ai-corner.com',
    description:
      'Curated roadmap of AI agent projects, document-search workflows, tool integrations, memory apps, and multi-agent systems. Comes with GitHub repos and hands-on tutorials — great for teams starting to build.',
    tags: ['Agents', 'Projects', 'Tutorials'],
  },
  {
    tier: 2,
    title: 'Turing Post',
    type: 'Newsletter',
    url: 'https://www.turingpost.com',
    description:
      'Explores AI and ML with a focus on agentic workflows and business insights. Covers ML history through to modern trends, making complex topics digestible for technical non-specialists.',
    tags: ['Agents', 'Business', 'ML'],
  },

  // ── TIER 3: Technical / Engineering ──
  {
    tier: 3,
    title: 'Andrej Karpathy',
    type: 'YouTube',
    url: 'https://www.youtube.com/@AndrejKarpathy',
    description:
      'Former Tesla AI Director and OpenAI founding member. Teaches you not just how but why AI works — from building GPT from scratch to dissecting LLMs in plain language. No-BS, engineer-to-engineer.',
    tags: ['LLMs', 'Deep Learning', 'From Scratch'],
  },
  {
    tier: 3,
    title: '3Blue1Brown',
    type: 'YouTube',
    url: 'https://www.youtube.com/@3blue1brown',
    description:
      'Grant Sanderson turns abstract math into hypnotic animations. His neural network series is possibly the best visual intro to how deep learning actually works — great for intuition-building.',
    tags: ['Math', 'Neural Networks', 'Visual'],
  },
  {
    tier: 3,
    title: 'Daily Dose of Data Science',
    type: 'Newsletter',
    url: 'https://blog.dailydoseofds.com',
    description:
      'Hands-on AI engineering newsletter with 70+ open-source tutorials on LLMs, document search, and agent tools. Covers real-world agent applications with code you can run and adapt.',
    tags: ['Code', 'Tutorials', 'Agents'],
  },
  {
    tier: 3,
    title: 'GitHub Blog: AI & Engineering',
    type: 'Blog',
    url: 'https://github.blog/ai-and-ml/',
    description:
      'GitHub\'s in-house coverage of agentic AI, tool protocols, and spec-driven development. Includes technical guides on multi-agent reliability, CI/CD with AI, and building production-grade agent systems.',
    tags: ['Agents', 'Production', 'Engineering'],
  },
  {
    tier: 3,
    title: 'The New Stack: AI Engineering',
    type: 'Blog',
    url: 'https://thenewstack.io/category/ai/',
    description:
      'Deep technical coverage of AI engineering trends — agentic systems, tool adoption, vibe coding, and AI infrastructure. Written for engineers building and deploying real systems.',
    tags: ['Agents', 'Infrastructure', 'Engineering'],
  },
  {
    tier: 3,
    title: 'LangChain Blog',
    type: 'Blog / YouTube',
    url: 'https://blog.langchain.dev',
    description:
      'Official blog of LangChain — the framework powering many production AI agent systems. Tutorials on document search, tool use, memory, and LangGraph for building stateful multi-agent workflows.',
    tags: ['Agents', 'Frameworks', 'LangGraph'],
  },
  {
    tier: 3,
    title: 'AssemblyAI',
    type: 'YouTube',
    url: 'https://www.youtube.com/@AssemblyAI',
    description:
      'Hands-on tutorials for building voice agents, real-time speech-to-text, document search apps, and AI integrations in Python and JavaScript. Best for developers actually shipping AI features.',
    tags: ['Voice', 'Tutorials', 'Python'],
  },
  {
    tier: 3,
    title: 'MarkTechPost',
    type: 'Blog',
    url: 'https://www.marktechpost.com',
    description:
      'California-based AI platform covering agents, AI infrastructure, machine learning, and data science. Bite-sized updates on new model releases, developer tools, and technical interviews.',
    tags: ['Models', 'Research', 'Tools'],
  },
];

const TIER_CONFIG = {
  1: {
    color: 'var(--sage)',
    label: 'Non-Technical',
    sublabel: 'Concepts & Business Context',
    no: 'I',
  },
  2: {
    color: 'var(--accent)',
    label: 'Practitioner',
    sublabel: 'Builder & Product Mindset',
    no: 'II',
  },
  3: {
    color: 'var(--ink)',
    label: 'Technical',
    sublabel: 'Engineering & Implementation',
    no: 'III',
  },
};

const TYPE_ICONS = {
  Podcast: '🎙',
  'Podcast / YouTube': '🎙',
  YouTube: '▶',
  'Blog / News': '◻',
  Blog: '◻',
  Newsletter: '✉',
  'Newsletter / Podcast': '✉',
  'Blog / YouTube': '◻',
};

function ResourceCard({ r, accentColor }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="res-card"
      style={{ borderTopColor: accentColor }}
    >
      <div className="res-card-top">
        <span className="res-type-icon" aria-hidden="true">{TYPE_ICONS[r.type] || '◻'}</span>
        <span className="res-type-pill">{r.type}</span>
      </div>
      <h3 className="res-card-title">{r.title}</h3>
      <p className="res-card-desc">{r.description}</p>
      <div className="res-tag-row">
        {r.tags.map((tag) => (
          <span key={tag} className="res-tag">{tag}</span>
        ))}
      </div>
      <span className="res-visit" style={{ color: accentColor }}>Visit →</span>
    </a>
  );
}

export default function CanderaResources() {
  const [activeTier, setActiveTier] = useState(0);
  const [search, setSearch] = useState('');

  const filtered = RESOURCES.filter((r) => {
    const tierMatch = activeTier === 0 || r.tier === activeTier;
    const q = search.toLowerCase();
    const textMatch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q));
    return tierMatch && textMatch;
  });

  return (
    <div className="page">
      <header className="hdr">
        <a href="/" className="wordmark">Candera</a>
        <nav aria-label="primary">
          <a href="/">Full site</a>
          <a href="/resources">Resources</a>
          <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
          <a href="mailto:hello@candera.co">hello@candera.co</a>
        </nav>
      </header>

      <section className="res-hero">
        <span className="eyebrow">§ VI · Resources</span>
        <h1>What we <em>read.</em></h1>
        <p className="res-lede">
          Curated resources across every level — from business context to deep engineering.
          Something useful for founders, operators, and builders.
        </p>
      </section>

      <div className="res-filter-bar">
        <button
          className={`res-tier-btn${activeTier === 0 ? ' is-active' : ''}`}
          onClick={() => setActiveTier(0)}
        >
          All ({RESOURCES.length})
        </button>
        {[1, 2, 3].map((t) => {
          const m = TIER_CONFIG[t];
          const count = RESOURCES.filter((r) => r.tier === t).length;
          return (
            <button
              key={t}
              className={`res-tier-btn${activeTier === t ? ' is-active' : ''}`}
              style={activeTier === t ? { background: m.color, borderColor: m.color } : {}}
              onClick={() => setActiveTier(activeTier === t ? 0 : t)}
            >
              {m.label} ({count})
            </button>
          );
        })}
        <input
          className="res-search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search resources"
        />
      </div>

      {[1, 2, 3].map((tier) => {
        const tierResources = filtered.filter((r) => r.tier === tier);
        if (!tierResources.length) return null;
        const m = TIER_CONFIG[tier];
        return (
          <div key={tier} className="res-tier-block">
            <div className="res-tier-head">
              <span className="eyebrow" style={{ color: m.color }}>
                Tier {m.no} · {m.label}
              </span>
              <h2>{m.sublabel}</h2>
            </div>
            <div className="res-grid">
              {tierResources.map((r, i) => (
                <ResourceCard key={i} r={r} accentColor={m.color} />
              ))}
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p className="res-empty">No resources match your search.</p>
      )}

      <footer className="ftr" id="contact">
        <div className="ftr-mark">Candera</div>
        <div>
          <a href="mailto:hello@candera.co">hello@candera.co</a>
        </div>
        <div className="ftr-meta" style={{ textAlign: 'right' }}>
          {RESOURCES.length} resources · Updated May 2026
        </div>
      </footer>
    </div>
  );
}
