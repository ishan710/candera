import type { Metadata } from 'next';
import { ENTERPRISE_SERVICES } from '@/lib/services';
import {
  ServiceNav,
  ServicePageHero,
  EnterpriseServiceGrid,
  EnterpriseServiceCard,
  HowItWorksSection,
  SessionAndAvailability,
  ServiceFooter,
} from '@/components/service-page';
import { StaggerItem } from '@/components/motion-ui';

export const metadata: Metadata = {
  title: 'Enterprise — Candera',
  description:
    'Fixed-scope AI engagements for founders and small businesses. Strategy, positioning, and workflow projects.',
};

export default function EnterprisePage() {
  return (
    <div className="page page--home page--enterprise">
      <ServiceNav active="enterprise" />

      <ServicePageHero
        eyebrow="Enterprise"
        title={
          <>
            Business <span className="highlight highlight-green">engagements.</span>
          </>
        }
        lede="Two-day intensives for founders and small teams. Scope and deliverable agreed before Day 1 begins."
      />

      <EnterpriseServiceGrid>
        {ENTERPRISE_SERVICES.map((svc) => (
          <StaggerItem key={svc.id}>
            <EnterpriseServiceCard service={svc} />
          </StaggerItem>
        ))}
      </EnterpriseServiceGrid>

      <HowItWorksSection />
      <SessionAndAvailability />
      <ServiceFooter />
    </div>
  );
}
