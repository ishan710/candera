import type { Metadata } from 'next';
import { BLOG_TOOLS, BLOG_TIPS } from '@/lib/blog';
import { BlogIndexPage } from '@/components/blog-page';

export const metadata: Metadata = {
  title: 'Blog — Candera',
  description: 'Guides, checklists, and short notes on practical AI use for small businesses.',
};

export default function BlogPage() {
  return <BlogIndexPage tools={BLOG_TOOLS} tips={BLOG_TIPS} />;
}
