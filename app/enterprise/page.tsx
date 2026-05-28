import type { Metadata } from 'next';
import { ENTERPRISE_SERVICES } from '@/lib/services';
import {
  ServiceNav,
  EnterpriseServiceCard,
  HowItWorksSection,
  SessionAndAvailability,
  ServiceFooter,
} from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Enterprise — Candera',
  description:
    'AI strategy and build engagements for founders and small businesses. Sprints from $750.',
};

export default function EnterprisePage() {
  return (
    <div className="page">
      <ServiceNav active="enterprise" />

      <section className="svc-page-hero">
        <span className="eyebrow">Enterprise</span>
        <h1>
          AI for your <span className="highlight highlight-green">business.</span>
        </h1>
        <p className="lede">For founders and small businesses.</p>
      </section>

      <section className="svc-enterprise-section">
        <div className="svc-enterprise-grid">
          {ENTERPRISE_SERVICES.map((svc) => (
            <EnterpriseServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </section>

      <HowItWorksSection />
      <SessionAndAvailability />
      <ServiceFooter />
    </div>
  );
}
