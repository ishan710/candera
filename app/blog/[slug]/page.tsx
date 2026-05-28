import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogEntry, getBlogSlugs } from '@/lib/blog';
import { BlogArticlePage } from '@/components/blog-page';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBlogEntry(slug);
  if (!entry) return { title: 'Not found — Candera' };
  return {
    title: `${entry.title} — Candera Blog`,
    description: entry.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = getBlogEntry(slug);
  if (!entry) notFound();
  return <BlogArticlePage entry={entry} />;
}
