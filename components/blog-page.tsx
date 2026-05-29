'use client';

import Link from 'next/link';
import type { BlogEntry } from '@/lib/blog';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FadeUp } from '@/components/motion-ui';

function BlogList({ entries }: { entries: BlogEntry[] }) {
  return (
    <div className="svc-list">
      {entries.map((entry) => (
        <Link key={entry.slug} href={`/blog/${entry.slug}`} className="svc-row svc-row--link">
          <div className="svc-row-main">
            <div className="svc-row-head">
              <h3 className="svc-row-title">{entry.title}</h3>
              <span className="blog-entry-label">{entry.label}</span>
            </div>
            <p className="svc-row-desc">{entry.summary}</p>
            {entry.date ? (
              <p className="svc-row-schedule">{entry.date}</p>
            ) : null}
          </div>
          <span className="svc-row-book">Read →</span>
        </Link>
      ))}
    </div>
  );
}

export function BlogIndexPage({
  tools,
  tips,
}: {
  tools: BlogEntry[];
  tips: BlogEntry[];
}) {
  return (
    <div className="page page--home">
      <SiteHeader active="blog" />

      <section className="hero svc-page-hero">
        <FadeUp>
          <span className="eyebrow">Blog</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h1>
            Guides and <span className="highlight highlight-green">worksheets.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="lede">
            Written for owners and operators. Short enough to use in a meeting; specific enough to
            act on the same week.
          </p>
        </FadeUp>
      </section>

      <section className="home-section svc-category--list">
        <FadeUp onView>
          <div className="svc-category-head">
            <span className="eyebrow">Tools</span>
            <h2>Worksheets and checklists.</h2>
          </div>
        </FadeUp>
        <FadeUp onView delay={0.06}>
          <BlogList entries={tools} />
        </FadeUp>
      </section>

      <section className="home-section home-section--last svc-category--list">
        <FadeUp onView>
          <div className="svc-category-head">
            <span className="eyebrow">Tips</span>
            <h2>Notes from the field.</h2>
          </div>
        </FadeUp>
        <FadeUp onView delay={0.06}>
          <BlogList entries={tips} />
        </FadeUp>
      </section>

      <SiteFooter />
    </div>
  );
}

export function BlogArticlePage({ entry }: { entry: BlogEntry }) {
  return (
    <div className="page page--home">
      <SiteHeader active="blog" />

      <article className="blog-article-wrap">
        <FadeUp>
          <Link href="/blog" className="blog-back">
            ← Blog
          </Link>
        </FadeUp>
        <FadeUp delay={0.06}>
          <span className="eyebrow">{entry.category === 'tool' ? 'Worksheet' : 'Note'}</span>
          <span className="blog-entry-label blog-entry-label--hero">{entry.label}</span>
          <h1 className="blog-article-title">{entry.title}</h1>
          {entry.date ? <p className="svc-row-schedule">{entry.date}</p> : null}
        </FadeUp>
        <FadeUp delay={0.12}>
          <div className="blog-article-body">
            {entry.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </FadeUp>
      </article>

      <SiteFooter />
    </div>
  );
}
