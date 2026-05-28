import Link from 'next/link';
import { HOW_IT_WORKS, SESSION_NOTE, AVAILABILITY_NOTE } from '@/lib/services';
import { GET_IN_TOUCH_MAILTO, bookServiceMailto } from '@/lib/contact';
import type { PersonalService, EnterpriseService } from '@/lib/services';

export function ServiceNav({ active }: { active?: 'personal' | 'enterprise' }) {
  return (
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
        <Link href="/#office-hours">Office hours</Link>
        <Link href={GET_IN_TOUCH_MAILTO}>Get in touch</Link>
      </nav>
    </header>
  );
}

export function PersonalServiceCard({ service }: { service: PersonalService }) {
  return (
    <div className="svc-detail-card">
      <div className="svc-detail-top">
        <h3 className="svc-detail-title">{service.title}</h3>
        <span className="svc-detail-price">{service.price}</span>
      </div>
      <p className="svc-schedule-tag">Schedule: {service.schedule}</p>
      <p className="svc-detail-desc">{service.description}</p>
      <div className="svc-deliverable">
        <span className="eyebrow">Deliverable</span>
        <span>{service.deliverable}</span>
      </div>
      <a className="svc-cta" href={bookServiceMailto(service.title)}>
        Book this →
      </a>
    </div>
  );
}

export function EnterpriseServiceCard({ service }: { service: EnterpriseService }) {
  return (
    <div className="svc-enterprise-card">
      <div className="svc-detail-top">
        <h3 className="svc-detail-title">{service.title}</h3>
        <span className="svc-detail-price">{service.price}</span>
      </div>
      <p className="svc-schedule-tag">Schedule: {service.schedule}</p>
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
        <span className="eyebrow">Deliverable</span>
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
      <div className="section-head">
        <span className="eyebrow">How it works</span>
        <h2>Structured. <em>Predictable.</em></h2>
      </div>
      <div className="how-steps">
        {HOW_IT_WORKS.map((h) => (
          <div className="how-step" key={h.step}>
            <span className="how-num eyebrow">{h.step}</span>
            <h3 className="how-title">{h.title}</h3>
            <p className="how-desc">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SessionAndAvailability() {
  return (
    <>
      <section className="about" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <p style={{ maxWidth: 'var(--measure)', margin: 0, color: 'var(--ink-2)' }}>{SESSION_NOTE}</p>
      </section>
      <section className="about" style={{ paddingTop: 0, paddingBottom: 72, borderBottom: 'none' }}>
        <div className="section-head">
          <span className="eyebrow">Availability</span>
          <h2>When we can start.</h2>
        </div>
        <p style={{ maxWidth: 'var(--measure)', marginTop: 24, color: 'var(--ink-2)' }}>
          {AVAILABILITY_NOTE}
        </p>
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
