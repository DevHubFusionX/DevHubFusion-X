import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { posts } from '@/data/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devhubfusionx.github.io/DevHubFusion-X';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/services',
    '/strategy',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Blog post routes
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
