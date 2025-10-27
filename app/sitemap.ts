import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arnapurnaevents.in'
  
  // Define your routes
  const routes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/contact',
    '/privacy-policy',
    '/refund-policy',
    '/terms-conditions',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  })) as MetadataRoute.Sitemap
}