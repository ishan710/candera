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
          Candera is an AI advisory practice in New York. We run two-day intensives for individuals
          and businesses — strategy and build, done in 48 hours, with a written deliverable at the
          end. No retainers.
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
          <h2>Personal and business.</h2>
        </div>
      </FadeUp>
      <FadeUp onView delay={0.06}>
        <div className="svc-list">
          <Link href="/personal" className="svc-row svc-row--link">
            <div className="svc-row-main">
              <h3 className="svc-row-title">Personal</h3>
              <p className="svc-row-desc">
                Two-day intensives for individuals — AI setup, career tools, and job search systems.
                Day 1 is strategy; Day 2 is build and handoff. From $299.
              </p>
            </div>
            <span className="svc-row-book">View personal →</span>
          </Link>

          <Link href="/enterprise" className="svc-row svc-row--link">
            <div className="svc-row-main">
              <h3 className="svc-row-title">Enterprise</h3>
              <p className="svc-row-desc">
                Two-day intensives for founders and small teams — AI audit, brand positioning, or a
                full founder build. Everything scoped and delivered in 48 hours. From $2,500.
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
          <h2>Guides and worksheets.</h2>
        </div>
        <p className="home-prose">
          Checklists and short notes from client work. Free to read; no account required.
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
          <Link href="/blog">View the full library →</Link>
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
          A free 30-minute call before you book. We'll confirm whether a 2-day intensive is the
          right fit and which one makes sense.{' '}
          <a href={GET_IN_TOUCH_MAILTO}>Email us to schedule</a>.
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
          Our backgrounds include Palantir, Anthropic, xAI, and early-stage startups. We advise small
          businesses on where AI belongs in their operations — and where it does not.
        </p>
        <p className="home-prose">
          <a href={GET_IN_TOUCH_MAILTO}>Email us</a> to discuss a project.
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
