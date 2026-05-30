import type { Metadata } from 'next';
import { PERSONAL_LIFE, PERSONAL_CAREER } from '@/lib/services';
import {
  ServiceNav,
  ServicePageHero,
  ServiceCategory,
  PersonalServiceRow,
  HowItWorksSection,
  SessionAndAvailability,
  ServiceFooter,
} from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Personal — Candera',
  description:
    'One-on-one AI sessions for individuals. Life, learning, and career engagements with defined deliverables.',
};

export default function PersonalPage() {
  return (
    <div className="page page--home page--personal">
      <ServiceNav active="personal" />

      <ServicePageHero
        eyebrow="Personal"
        title={
          <>
            Personal <span className="highlight highlight-green">advisory.</span>
          </>
        }
        lede="Two-day intensives for individuals. Day 1 is strategy and scoping; Day 2 is build and handoff."
      />

      <ServiceCategory id="life" eyebrow="Life" title="Daily use." layout="list">
        {PERSONAL_LIFE.map((s) => (
          <PersonalServiceRow key={s.id} service={s} />
        ))}
      </ServiceCategory>

      <ServiceCategory id="career" eyebrow="Career" title="Career change and job search." layout="list">
        {PERSONAL_CAREER.map((s) => (
          <PersonalServiceRow key={s.id} service={s} />
        ))}
      </ServiceCategory>

      <HowItWorksSection />
      <SessionAndAvailability />
      <ServiceFooter />
    </div>
  );
}
