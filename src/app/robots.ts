import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/'],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/'
      }
    ],
    sitemap: 'https://tekestetesfayecon.com/sitemap.xml',
    host: 'https://tekestetesfayecon.com'
  }
}
