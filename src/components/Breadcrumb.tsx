'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export function Breadcrumb() {
  const pathname = usePathname()
  const baseUrl = 'https://tekestetesfayecon.com'

  // Build breadcrumb path from URL
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, idx, arr) => ({
      label: segment
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      href: '/' + arr.slice(0, idx + 1).join('/')
    }))

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...segments
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`
    }))
  }

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <nav aria-label="Breadcrumb" className="container-pad py-4">
        <ol className="flex items-center gap-2 text-sm text-slate-600">
          {breadcrumbs.map((crumb, idx) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {idx > 0 && <span className="text-slate-400">/</span>}
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-slate-900 font-medium">{crumb.label}</span>
              ) : (
                <Link 
                  href={crumb.href} 
                  className="hover:text-[#0047AB] transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
