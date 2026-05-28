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
    'AI strategy and build engagements for founders and small businesses. Sprints from $750.',
};

export default function EnterprisePage() {
  return (
    <div className="page page--home page--enterprise">
      <ServiceNav active="enterprise" />

      <ServicePageHero
        eyebrow="Enterprise"
        title={
          <>
            AI for your <span className="highlight highlight-green">business.</span>
          </>
        }
        lede="For founders and small businesses."
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
