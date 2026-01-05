import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Services Across Ethiopia | 7 Regions Served',
  description: 'Tekeste Tesfaye Building Contractor serves Addis Ababa, Dire Dawa, Oromia, Somali, Afar, Tigray, and North Shewa. Grade I contractor with regional presence across Ethiopia.',
  keywords: 'construction services Ethiopia, contractors Addis Ababa, Dire Dawa construction, Oromia contractors, regional construction services',
}

const locations = [
  {
    name: 'Addis Ababa',
    slug: 'addis-ababa',
    description: 'Headquartered in Bole Sub City since 1995. Extensive experience in urban construction, hospitals, schools, and commercial facilities.',
    highlights: ['HQ Location', 'Urban Projects', 'Healthcare Facilities'],
    icon: '🏙️'
  },
  {
    name: 'Dire Dawa',
    slug: 'dire-dawa',
    description: 'Secondary hub serving eastern Ethiopia. Water systems, infrastructure, and institutional projects.',
    highlights: ['Regional Hub', 'Water Infrastructure', 'Government Projects'],
    icon: '🌆'
  },
  {
    name: 'Oromia',
    slug: 'oromia',
    description: 'Serving Oromia region with schools, water systems, and rural infrastructure development.',
    highlights: ['Educational Facilities', 'Rural Infrastructure', 'Water Projects'],
    icon: '🏞️'
  },
  {
    name: 'Somali State',
    slug: 'somali',
    description: 'Infrastructure development in Somali region including water supply systems and institutional buildings.',
    highlights: ['Water Supply', 'Institutional Buildings', 'Infrastructure'],
    icon: '🏜️'
  },
  {
    name: 'Afar',
    slug: 'afar',
    description: 'Construction services in Afar region focusing on water infrastructure and community facilities.',
    highlights: ['Water Systems', 'Community Facilities', 'Remote Projects'],
    icon: '⛰️'
  },
  {
    name: 'Tigray',
    slug: 'tigray',
    description: 'Building infrastructure in Tigray region with focus on healthcare and educational facilities.',
    highlights: ['Healthcare', 'Education', 'Reconstruction'],
    icon: '🏔️'
  },
  {
    name: 'North Shewa',
    slug: 'north-shewa',
    description: 'Serving North Shewa zone with comprehensive construction services and infrastructure development.',
    highlights: ['Mixed Projects', 'Infrastructure', 'Community Development'],
    icon: '🌄'
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-[#0047AB] via-[#0052BD] to-[#0066DD] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
              Serving Ethiopia's Regions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              With 29+ years of experience, Tekeste Tesfaye Building Contractor operates across 7 Ethiopian regions, delivering quality construction from Addis Ababa to remote rural areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Regional Presence & Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our regional operations enable us to understand local conditions, regulations, and community needs. We maintain relationships with regional governments, suppliers, and skilled workers across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-[#0047AB] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{location.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-slate-900 group-hover:text-[#0047AB] transition-colors">
                  {location.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {location.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {location.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#0047AB] font-bold">
                  View Projects
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Why Regional Experience Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Local Relationships</h3>
                <p className="text-slate-600 text-sm">
                  Established connections with regional governments, suppliers, and communities
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Local Knowledge</h3>
                <p className="text-slate-600 text-sm">
                  Understanding of regional regulations, climate, and construction challenges
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Rapid Response</h3>
                <p className="text-slate-600 text-sm">
                  Quick mobilization and support across all regions we serve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Start Your Regional Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss construction services in your region.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+251116299824" className="px-8 py-4 bg-white text-[#0047AB] font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm">
              Call: +251 116 29 98 24
            </a>
            <a href="mailto:tekestetesfaye2@gmail.com" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0047AB] transition-colors rounded-sm">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
