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
    'AI sessions for individuals — students, professionals, families, and friends. Life and career packages from $50.',
};

export default function PersonalPage() {
  return (
    <div className="page page--home page--personal">
      <ServiceNav active="personal" />

      <ServicePageHero
        eyebrow="Personal"
        title={
          <>
            AI for your <span className="highlight highlight-green">everyday life.</span>
          </>
        }
        lede="For individuals — students, professionals, families, and friends."
      />

      <ServiceCategory id="life" eyebrow="Life" title="AI in your daily routine." layout="list">
        {PERSONAL_LIFE.map((s) => (
          <PersonalServiceRow key={s.id} service={s} />
        ))}
      </ServiceCategory>

      <ServiceCategory id="career" eyebrow="Career" title="AI for your next move." layout="list">
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
