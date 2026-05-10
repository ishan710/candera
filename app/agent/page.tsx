import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Candera does — factual summary',
  description:
    'Candera is an advisory practice that helps small businesses use AI responsibly. They offer AI strategy, education, custom development, free playbooks, design review of AI features, and talent hiring help. Free office hours and public playbooks.',
};

export default function AgentPage() {
  return (
    <div className="page">
      <header className="hdr">
        <a href="/" className="wordmark">
          Candera
        </a>
        <nav aria-label="primary">
          <a href="/">Full site</a>
          <a href="mailto:hello@candera.co">hello@candera.co</a>
        </nav>
      </header>

      <main id="top">
        <article className="agent-summary">
          <p className="eyebrow" style={{ marginBottom: 10 }}>
            Factual overview
          </p>
          <h1 style={{ marginTop: 0 }}>What Candera does</h1>
          <p className="lede" style={{ maxWidth: 'var(--measure)' }}>
            Candera helps small businesses and teams apply AI without buying tools they do not need. They
            publish free playbooks, run open office hours, and take on selective paid work across strategy,
            education, implementation, reviews, and hiring.
          </p>

          <section className="practice" aria-labelledby="svc-heading" style={{ marginTop: 48 }}>
            <div className="section-head">
              <h2 id="svc-heading">Services and practice areas</h2>
            </div>
            <dl className="agent-facts">
              <div className="fact-row">
                <dt>AI Strategy</dt>
                <dd>Plans where AI should and should not fit; engagements such as intensives and roadmap reviews.</dd>
              </div>
              <div className="fact-row">
                <dt>Education</dt>
                <dd>Workshops and seminars on how AI systems actually work, delivered without jargon or hype.</dd>
              </div>
              <div className="fact-row">
                <dt>Custom development</dt>
                <dd>Short builds when off-the-shelf products do not fit: internal tools, search features, and testing.</dd>
              </div>
              <div className="fact-row">
                <dt>Playbooks</dt>
                <dd>
                  Written guides to common decisions (models, testing, connecting AI to documents, prompting), free to
                  use.
                </dd>
              </div>
              <div className="fact-row">
                <dt>Design review</dt>
                <dd>Reviews of AI-related product surfaces for trust, failure modes, and scope — delivered as written feedback.</dd>
              </div>
              <div className="fact-row">
                <dt>Talent and hiring</dt>
                <dd>Support for interviewing and onboarding early AI hires.</dd>
              </div>
            </dl>
          </section>

          <section className="about" aria-labelledby="aud-heading" style={{ marginTop: 56 }}>
            <div className="section-head">
              <h2 id="aud-heading">Who they work with</h2>
            </div>
            <p style={{ maxWidth: 'var(--measure)' }}>
              The main site emphasizes practical help for operators and small organizations: founders, freelancers,
              local businesses, educators, creatives, athletes, parents juggling logistics, job seekers, and similar
              roles — not only &ldquo;enterprise AI.&rdquo;
            </p>
          </section>

          <section className="office" aria-labelledby="oh-heading" style={{ marginTop: 56 }}>
            <div className="office-grid">
              <div>
                <h2 id="oh-heading" style={{ marginTop: 18 }}>
                  Office hours
                </h2>
                <p className="eyebrow" style={{ marginTop: 8 }}>
                  Free 30-minute calls
                </p>
              </div>
              <div>
                <p>Book via Calendly; described as no pitch and no obligation to buy.</p>
                <p style={{ marginTop: 14 }}>
                  <a href="https://calendly.com/ishan710" rel="noopener">
                    Book — calendly.com/ishan710
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="about" aria-labelledby="org-heading" style={{ marginTop: 56, paddingBottom: 24 }}>
            <div className="section-head">
              <h2 id="org-heading">Organization</h2>
            </div>
            <p style={{ maxWidth: 'var(--measure)' }}>
              Candera LLC, New York. The team has built AI products and internal tools inside
              operating businesses—shipping work, not only advising on it. Contact:{' '}
              <a href="mailto:hello@candera.co">hello@candera.co</a>.
            </p>
            <p style={{ marginTop: 18 }}>
              <a href="/">Return to the main Candera site</a>
            </p>
          </section>
        </article>
      </main>

      <footer className="ftr">
        <div className="ftr-mark">Candera</div>
        <div>
          <a href="mailto:hello@candera.co">hello@candera.co</a>
        </div>
        <div className="ftr-meta" style={{ textAlign: 'right' }}>
          Candera LLC · New York · MMXXVI
        </div>
      </footer>
    </div>
  );
}
