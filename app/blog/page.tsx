import type { Metadata } from 'next';
import { BLOG_TOOLS, BLOG_TIPS } from '@/lib/blog';
import { BlogIndexPage } from '@/components/blog-page';

export const metadata: Metadata = {
  title: 'Blog — Candera',
  description: 'Free AI tools, checklists, and practical tips for small businesses and individuals.',
};

export default function BlogPage() {
  return <BlogIndexPage tools={BLOG_TOOLS} tips={BLOG_TIPS} />;
}
