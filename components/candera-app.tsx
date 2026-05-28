'use client';

import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

const OFFERINGS = [
  {
    title: 'AI strategy',
    desc: 'Figure out where AI helps your business—and where it does not.',
  },
  {
    title: 'Education',
    desc: 'Workshops and seminars on how AI systems work, without hype.',
  },
  {
    title: 'Custom development',
    desc: 'Short builds when nothing off the shelf fits.',
  },
  {
    title: 'Playbooks',
    desc: 'Free written guides on models, testing, and practical setup.',
  },
  {
    title: 'Design review',
    desc: 'Written feedback on AI features in your product.',
  },
  {
    title: 'Hiring help',
    desc: 'Support interviewing and onboarding early AI hires.',
  },
] as const;

function Header() {
  return (
    <header className="hdr">
      <a href="#top" className="wordmark">
        Candera
      </a>
      <nav aria-label="primary">
        <a href="#what">What we do</a>
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

function WhatWeDo() {
  return (
    <section className="practice" id="what">
      <div className="section-head">
        <span className="eyebrow">What we do</span>
        <h2>Practical help. <em>No tool pitch.</em></h2>
      </div>
      <div className="practice-grid">
        {OFFERINGS.map((item) => (
          <div className="item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
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
      <WhatWeDo />
      <OfficeHours />
      <About />
      <Footer />
    </div>
  );
}
