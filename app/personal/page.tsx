import type { Metadata } from 'next';
import { PERSONAL_LIFE, PERSONAL_CAREER } from '@/lib/services';
import {
  ServiceNav,
  PersonalServiceCard,
  HowItWorksSection,
  SessionAndAvailability,
  ServiceFooter,
} from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Personal — Candera',
  description:
    'AI sessions for individuals — students, professionals, families, and friends. Life and career packages from $50.',
};

export default function PersonalPage() {
  return (
    <div className="page">
      <ServiceNav active="personal" />

      <section className="svc-page-hero">
        <span className="eyebrow">Personal</span>
        <h1>
          AI for your <span className="highlight highlight-green">everyday life.</span>
        </h1>
        <p className="lede">
          For individuals — students, professionals, families, and friends.
        </p>
      </section>

      <section className="svc-category" id="life">
        <div className="svc-category-head">
          <span className="eyebrow">Life</span>
          <h2>AI in your daily routine.</h2>
        </div>
        <div className="svc-detail-grid">
          {PERSONAL_LIFE.map((s) => (
            <PersonalServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="svc-category" id="career">
        <div className="svc-category-head">
          <span className="eyebrow">Career</span>
          <h2>AI for your next move.</h2>
        </div>
        <div className="svc-detail-grid">
          {PERSONAL_CAREER.map((s) => (
            <PersonalServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <HowItWorksSection />
      <SessionAndAvailability />
      <ServiceFooter />
    </div>
  );
}
