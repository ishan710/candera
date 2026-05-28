'use client';

import Link from 'next/link';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';
import { BLOG_TOOLS, BLOG_TIPS } from '@/lib/blog';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FadeUp } from '@/components/motion-ui';

function Hero() {
  return (
    <section className="hero svc-page-hero" id="top">
      <FadeUp delay={0.05}>
        <h1>
          AI for <span className="highlight highlight-purple">everyone.</span>
        </h1>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="lede">
          Candera is a small advisory practice in New York. We sell two things: personal AI sessions
          for individuals, and fixed-scope sprints for founders and small businesses — each with a
          clear deliverable, not a retainer.
        </p>
      </FadeUp>
    </section>
  );
}

function Services() {
  return (
    <section className="home-section" id="services">
      <FadeUp onView>
        <div className="svc-category-head">
          <h2>For everyone.</h2>
        </div>
      </FadeUp>
      <FadeUp onView delay={0.06}>
        <div className="svc-list">
          <Link href="/personal" className="svc-row svc-row--link">
            <div className="svc-row-main">
              <h3 className="svc-row-title">Personal</h3>
              <p className="svc-row-desc">
                For students, professionals, families, and friends. Life and career help over Zoom —
                starter sessions, custom setups, job search systems.
              </p>
            </div>
            <span className="svc-row-book">View personal →</span>
          </Link>

          <Link href="/enterprise" className="svc-row svc-row--link">
            <div className="svc-row-main">
              <h3 className="svc-row-title">Enterprise</h3>
              <p className="svc-row-desc">
                For founders and small businesses. Two-week sprints — strategy audits, positioning,
                workflow builds — with a written deliverable at the end.
              </p>
            </div>
            <span className="svc-row-book">View enterprise →</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

function BlogTeaser() {
  const featured = [...BLOG_TOOLS.slice(0, 2), ...BLOG_TIPS.slice(0, 2)];

  return (
    <section className="home-section" id="blog">
      <FadeUp onView>
        <div className="svc-category-head">
          <span className="eyebrow">Blog</span>
          <h2>Free tools and tips.</h2>
        </div>
        <p className="home-prose">
          Checklists, templates, and short guides — no signup.
        </p>
      </FadeUp>
      <FadeUp onView delay={0.06}>
        <div className="svc-list">
          {featured.map((entry) => (
            <Link key={entry.slug} href={`/blog/${entry.slug}`} className="svc-row svc-row--link">
              <div className="svc-row-main">
                <div className="svc-row-head">
                  <h3 className="svc-row-title">{entry.title}</h3>
                  <span className="blog-entry-label">{entry.label}</span>
                </div>
                <p className="svc-row-desc">{entry.summary}</p>
              </div>
              <span className="svc-row-book">Read →</span>
            </Link>
          ))}
        </div>
        <p className="home-prose" style={{ marginTop: 20 }}>
          <Link href="/blog">Browse all tools and tips →</Link>
        </p>
      </FadeUp>
    </section>
  );
}

function OfficeHours() {
  return (
    <section className="home-section" id="office-hours">
      <FadeUp onView>
        <div className="svc-category-head">
          <span className="eyebrow">Office hours</span>
          <h2>Thirty minutes. Free.</h2>
        </div>
        <p className="home-prose">
          Ask anything about AI for your business. No pitch, no obligation.{' '}
          <a href={GET_IN_TOUCH_MAILTO}>Email us to book</a>.
        </p>
      </FadeUp>
    </section>
  );
}

function About() {
  return (
    <section className="home-section home-section--last" id="about">
      <FadeUp onView>
        <div className="svc-category-head">
          <span className="eyebrow">About</span>
          <h2>Who we are</h2>
        </div>
        <p className="home-prose">
          We&apos;re from Palantir, Anthropic, xAI, and a few startups in between. We help small
          businesses use AI in a practical way.
        </p>
        <p className="home-prose">
          <a href={GET_IN_TOUCH_MAILTO}>Email us</a> for paid work.
        </p>
      </FadeUp>
    </section>
  );
}

export default function CanderaApp() {
  return (
    <div className="page page--home">
      <SiteHeader active="home" />
      <Hero />
      <Services />
      <BlogTeaser />
      <OfficeHours />
      <About />
      <SiteFooter />
    </div>
  );
}
