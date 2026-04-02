import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Keep your backend routes private
    },
    sitemap: 'https://filamreiva.com/sitemap.xml',
  }
}