'use client';

import Link from 'next/link';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

function Header() {
  return (
    <header className="hdr">
      <a href="#top" className="wordmark">
        Candera
      </a>
      <nav aria-label="primary">
        <Link href="/personal">Personal</Link>
        <Link href="/enterprise">Enterprise</Link>
        <a href="#office-hours">Office hours</a>
        <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        AI for <em>everyone else.</em>
      </h1>
      <p className="lede">
        Candera is a small advisory practice in New York. We help small businesses and teams use AI
        without buying software they do not need.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-head">
        <span className="eyebrow">Services</span>
        <h2>
          Two tracks. <em>One goal.</em>
        </h2>
      </div>
      <div className="tier-grid">
        <Link className="tier-card" href="/personal">
          <div className="tier-card-top">
            <span className="eyebrow">Personal</span>
            <span className="tier-price-range">$50 – $149</span>
          </div>
          <h3 className="tier-title">For individuals</h3>
          <p className="tier-desc">
            Students, professionals, families, and friends. Life and career sessions via Zoom.
          </p>
          <span className="tier-cta">See personal services →</span>
        </Link>

        <Link className="tier-card tier-card--enterprise" href="/enterprise">
          <div className="tier-card-top">
            <span className="eyebrow">Enterprise</span>
            <span className="tier-price-range">$750 – $1,500</span>
          </div>
          <h3 className="tier-title">For founders & small businesses</h3>
          <p className="tier-desc">
            Structured sprints with clear deliverables — not retainers, not vague consulting.
          </p>
          <span className="tier-cta">See enterprise services →</span>
        </Link>
      </div>
    </section>
  );
}

function OfficeHours() {
  return (
    <section className="office" id="office-hours">
      <div className="office-grid">
        <div>
          <span className="eyebrow">Office hours</span>
          <h2 style={{ marginTop: 18 }}>
            Thirty minutes. <em>Free.</em>
          </h2>
        </div>
        <div>
          <p>Book a video call. Ask anything about AI for your business. No pitch, no obligation.</p>
          <a className="calendly" href="https://calendly.com/ishan710" rel="noopener noreferrer">
            Book on Calendly →
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="eyebrow">About</span>
        <h2>Who we are.</h2>
      </div>
      <div className="about-grid">
        <div>
          <span className="eyebrow">The team</span>
        </div>
        <div>
          <p>
            We&apos;re a team from Palantir, Anthropic, xAI, and a few startups in between. We help
            small businesses use AI in a practical way.
          </p>
          <p>
            <a href={GET_IN_TOUCH_MAILTO}>Email us</a> for paid work. Office hours stay free.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ftr" id="contact">
      <div className="ftr-mark">Candera</div>
      <div>
        <a href="/agent">Summary for agents</a>
        <span aria-hidden="true"> · </span>
        <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        <span aria-hidden="true"> · </span>
        <a href="mailto:hello@candera.co">hello@candera.co</a>
      </div>
      <div className="ftr-meta" style={{ textAlign: 'right' }}>
        Candera LLC · New York
      </div>
    </footer>
  );
}

export default function CanderaApp() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Services />
      <OfficeHours />
      <About />
      <Footer />
    </div>
  );
}
