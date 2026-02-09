import type { MetadataRoute } from 'next';
import { getFamilySlugs } from '@/lib/products';
import { SITE_URL } from '@/lib/constants';

const baseDate = new Date('2026-02-09');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/tools', '/resources', '/about', '/contact'];
  const familyRoutes = getFamilySlugs().map((slug) => `/tools/${slug}`);

  return [...staticRoutes, ...familyRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: baseDate,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
