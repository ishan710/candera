'use client';

import Link from 'next/link';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';
import { FadeUp } from '@/components/motion-ui';

export function SiteHeader({
  active,
}: {
  active?: 'home' | 'personal' | 'enterprise' | 'blog';
}) {
  return (
    <FadeUp>
      <header className="hdr">
        <Link href="/" className="wordmark">
          Candera
        </Link>
        <nav aria-label="primary">
          <Link href="/" aria-current={active === 'home' ? 'page' : undefined}>
            Home
          </Link>
          <Link href="/personal" aria-current={active === 'personal' ? 'page' : undefined}>
            Personal
          </Link>
          <Link href="/enterprise" aria-current={active === 'enterprise' ? 'page' : undefined}>
            Enterprise
          </Link>
          <Link href="/blog" aria-current={active === 'blog' ? 'page' : undefined}>
            Blog
          </Link>
          <a href="/#office-hours">Office hours</a>
          <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        </nav>
      </header>
    </FadeUp>
  );
}
