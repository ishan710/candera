'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { HOW_IT_WORKS, SESSION_NOTE, AVAILABILITY_NOTE } from '@/lib/services';
import { GET_IN_TOUCH_MAILTO, bookServiceMailto } from '@/lib/contact';
import type { PersonalService, EnterpriseService } from '@/lib/services';
import { FadeUp, Stagger, StaggerItem } from '@/components/motion-ui';

export function ServiceNav({ active }: { active?: 'personal' | 'enterprise' }) {
  return (
    <FadeUp>
    <header className="hdr">
      <Link href="/" className="wordmark">
        Candera
      </Link>
      <nav aria-label="primary">
        <Link href="/">Home</Link>
        <Link href="/personal" aria-current={active === 'personal' ? 'page' : undefined}>
          Personal
        </Link>
        <Link href="/enterprise" aria-current={active === 'enterprise' ? 'page' : undefined}>
          Enterprise
        </Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#office-hours">Office hours</Link>
        <Link href={GET_IN_TOUCH_MAILTO}>Get in touch</Link>
      </nav>
      <a
        className="hdr-cta"
        href="https://calendly.com/ishan710"
        rel="noopener noreferrer"
      >
        Book a call
      </a>
    </header>
    </FadeUp>
  );
}

export function ServicePageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <section className="svc-page-hero dd-hero">
      <FadeUp>
        <span className="eyebrow">{eyebrow}</span>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h1>{title}</h1>
      </FadeUp>
      <FadeUp delay={0.16}>
        <p className="lede">{lede}</p>
      </FadeUp>
    </section>
  );
}

export function ServiceCategory({
  id,
  eyebrow,
  title,
  children,
  layout = 'grid',
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  layout?: 'grid' | 'list';
}) {
  return (
    <section className={`svc-category${layout === 'list' ? ' svc-category--list' : ''}`} id={id}>
      <FadeUp onView>
        <div className="svc-category-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
      </FadeUp>
      {layout === 'list' ? (
        <FadeUp onView delay={0.06}>
          <div className="svc-list">{children}</div>
        </FadeUp>
      ) : (
        <Stagger className="svc-detail-grid">{children}</Stagger>
      )}
    </section>
  );
}

export function EnterpriseServiceGrid({ children }: { children: ReactNode }) {
  return (
    <section className="svc-enterprise-section">
      <Stagger className="svc-enterprise-grid">{children}</Stagger>
    </section>
  );
}

export function PersonalServiceRow({ service }: { service: PersonalService }) {
  return (
    <article className="svc-row">
      <div className="svc-row-main">
        <div className="svc-row-head">
          <h3 className="svc-row-title">{service.title}</h3>
          <span className="svc-row-price">{service.price}</span>
        </div>
        <p className="svc-row-schedule">{service.schedule}</p>
        <p className="svc-row-desc">{service.description}</p>
        <p className="svc-row-outcome">
          <span className="svc-row-outcome-label">Includes</span> {service.deliverable}
        </p>
      </div>
      <a className="svc-row-book" href={bookServiceMailto(service.title)}>
        Book →
      </a>
    </article>
  );
}

export function EnterpriseServiceCard({ service }: { service: EnterpriseService }) {
  return (
    <div className="svc-enterprise-card">
      <div className="svc-detail-top">
        <h3 className="svc-detail-title">{service.title}</h3>
        <span className="svc-detail-price">{service.price}</span>
      </div>
      <p className="svc-schedule-tag">{service.schedule}</p>
      <div className="svc-weeks-table" role="table" aria-label={`${service.title} timeline`}>
        <div className="svc-week-row" role="row" style={{ background: 'var(--paper-2)' }}>
          <span className="svc-week-label eyebrow" role="columnheader">
            Week
          </span>
          <span className="svc-week-activity eyebrow" role="columnheader">
            Activity
          </span>
        </div>
        {service.weeks.map((w) => (
          <div className="svc-week-row" key={w.week} role="row">
            <span className="svc-week-label eyebrow">{w.week}</span>
            <span className="svc-week-activity">{w.activity}</span>
          </div>
        ))}
      </div>
      <div className="svc-deliverable">
        <span className="eyebrow">Includes</span>
        <span>{service.deliverable}</span>
      </div>
      <a className="svc-cta" href={bookServiceMailto(service.title)}>
        Book this →
      </a>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="how-section">
      <FadeUp onView>
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>
            How engagements run.
          </h2>
        </div>
      </FadeUp>
      <Stagger className="how-steps">
        {HOW_IT_WORKS.map((h) => (
          <StaggerItem key={h.step}>
            <div className="how-step">
              <span className="how-num eyebrow">{h.step}</span>
              <h3 className="how-title">{h.title}</h3>
              <p className="how-desc">{h.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function SessionAndAvailability() {
  return (
    <>
      <section className="about" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <FadeUp onView>
          <p style={{ maxWidth: 'var(--measure)', margin: 0, color: 'var(--ink-2)' }}>{SESSION_NOTE}</p>
        </FadeUp>
      </section>
      <section className="about" style={{ paddingTop: 0, paddingBottom: 72, borderBottom: 'none' }}>
        <FadeUp onView>
          <div className="section-head">
            <span className="eyebrow">Availability</span>
            <h2>When we can start.</h2>
          </div>
        </FadeUp>
        <FadeUp onView delay={0.08}>
          <p style={{ maxWidth: 'var(--measure)', marginTop: 24, color: 'var(--ink-2)' }}>
            {AVAILABILITY_NOTE}
          </p>
        </FadeUp>
      </section>
    </>
  );
}

export function ServiceFooter() {
  return (
    <footer className="ftr">
      <div className="ftr-mark">Candera</div>
      <div>
        <Link href="/">Home</Link>
        <span aria-hidden="true"> · </span>
        <Link href={GET_IN_TOUCH_MAILTO}>Get in touch</Link>
      </div>
      <div className="ftr-meta" style={{ textAlign: 'right' }}>
        Candera LLC · New York
      </div>
    </footer>
  );
}
