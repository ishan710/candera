import Link from 'next/link';
import { GET_IN_TOUCH_MAILTO } from '@/lib/contact';

export function SiteFooter() {
  return (
    <footer className="ftr dd-footer" id="contact">
      <div className="ftr-mark">Candera</div>
      <div className="dd-footer-col">
        <span className="dd-footer-label">Services</span>
        <Link href="/personal">Personal</Link>
        <Link href="/blog">Blog</Link>
        <a href="/#office-hours">Office hours</a>
      </div>
      <div className="dd-footer-col">
        <span className="dd-footer-label">Company</span>
        <a href="/agent">Summary for agents</a>
        <a href={GET_IN_TOUCH_MAILTO}>Get in touch</a>
        <a href="mailto:hello@candera.co">hello@candera.co</a>
      </div>
      <div className="ftr-meta dd-footer-meta">
        <span>Candera LLC · New York</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
