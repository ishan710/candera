import type { Metadata } from 'next';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'What Candera does — factual summary',
  description:
    'Candera is an advisory practice that helps small businesses use AI responsibly. AI strategy, education, custom development, free playbooks, design review, and hiring help. Free office hours.',
};

const SERVICES = [
  ['AI Strategy', 'Plans where AI should and should not fit.'],
  ['Education', 'Workshops and seminars on how AI systems work.'],
  ['Custom development', 'Short builds when off-the-shelf products do not fit.'],
  ['Playbooks', 'Free guides to common decisions.'],
  ['Design review', 'Reviews of AI product surfaces, delivered as written feedback.'],
  ['Talent and hiring', 'Support for early AI hires.'],
] as const;

export default function AgentPage() {
  return (
    <div className="page">
      <header className="hdr">
        <a href="/" className="wordmark">
          Candera
        </a>
        <nav aria-label="primary">
          <a href="/">Home</a>
          <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        </nav>
      </header>

      <main id="top" className="agent-summary" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <p className="eyebrow">Factual overview</p>
        <h1 style={{ marginTop: 0 }}>What Candera does</h1>
        <p className="lede" style={{ maxWidth: 'var(--measure)' }}>
          Candera helps small businesses and teams apply AI without buying tools they do not need.
          They publish free playbooks, run free office hours, and take on paid advisory work when it
          fits.
        </p>

        <section style={{ marginTop: 48 }}>
          <h2>Services</h2>
          <dl className="agent-facts">
            {SERVICES.map(([name, desc]) => (
              <div className="fact-row" key={name}>
                <dt>{name}</dt>
                <dd>{desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2>Contact</h2>
          <p style={{ maxWidth: 'var(--measure)' }}>
            Candera LLC, New York. Team backgrounds include Palantir, Anthropic, and xAI. Free office
            hours: <a href="https://calendly.com/ishan710">calendly.com/ishan710</a>. Email:{' '}
            <a href="mailto:hello@candera.co">hello@candera.co</a> or{' '}
            <a href={GET_IN_TOUCH_MAILTO}>ishan710@gmail.com</a>.
          </p>
        </section>

        <p style={{ marginTop: 32 }}>
          <a href="/">← Back to candera.ai</a>
        </p>
      </main>
    </div>
  );
}
