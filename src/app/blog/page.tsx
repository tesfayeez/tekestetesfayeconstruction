import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Industry Blog | Tekeste Tesfaye Building Contractor',
  description: 'Expert insights on construction in Ethiopia. BIM/GIS technology, water systems, healthcare facilities, TVET construction, and infrastructure development.',
  keywords: 'construction blog Ethiopia, building industry insights, construction technology, infrastructure development',
}

const blogPosts = [
  {
    title: 'Darimu Primary Hospital: From Concrete to Care',
    slug: 'darimu-hospital-healthcare-construction-case-study',
    excerpt: 'How we built Ethiopia\'s first LEED-certified healthcare facility. A detailed case study of 200+ bed hospital construction.',
    category: 'Case Study',
    readTime: '12 min read',
    date: 'January 2026',
    keywords: 'hospital construction, healthcare facility, LEED certification'
  },
  {
    title: 'Building Water Security: Reservoir Systems Serving 500,000 Ethiopians',
    slug: 'water-supply-system-construction-ethiopia',
    excerpt: 'Technical deep-dive into water infrastructure design. How our reservoir systems bring clean water to half a million people.',
    category: 'Technical Guide',
    readTime: '15 min read',
    date: 'January 2026',
    keywords: 'water supply systems, reservoir construction, water infrastructure'
  },
  {
    title: 'From TVET Dream to Reality: Constructing Ethiopia\'s Technical Education Future',
    slug: 'tvet-facility-construction-case-study',
    excerpt: 'Building modern technical training centers for Ethiopia\'s education expansion. TVET facility design and construction insights.',
    category: 'Case Study',
    readTime: '10 min read',
    date: 'January 2026',
    keywords: 'TVET construction, technical education, vocational training facilities'
  },
  {
    title: 'BIM + GIS = Better Infrastructure: Digital Design for Complex Projects',
    slug: 'bim-gis-construction-technology-ethiopia',
    excerpt: 'How Building Information Modeling and GIS integration saves time and money. Real examples from our projects.',
    category: 'Technology',
    readTime: '11 min read',
    date: 'January 2026',
    keywords: 'BIM construction, GIS analysis, construction technology'
  },
  {
    title: 'Gravel Roads That Last: Engineering Durable Road Networks',
    slug: 'gravel-road-construction-methods-ethiopia',
    excerpt: 'Technical guide to building gravel roads that withstand Ethiopia\'s climate. Compaction, drainage, and material selection.',
    category: 'Technical Guide',
    readTime: '13 min read',
    date: 'January 2026',
    keywords: 'gravel road construction, road engineering, rural infrastructure'
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Construction Insights & Case Studies
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Expert knowledge from 29+ years of building Ethiopia's infrastructure. Technical guides, project case studies, and industry insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-[#0047AB] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#0047AB] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <span className="text-sm text-slate-500">•</span>
                    <span className="text-sm text-slate-500">{post.date}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-slate-900 group-hover:text-[#0047AB] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Keywords:</strong> {post.keywords}
                  </div>
                  <div className="flex items-center gap-2 text-[#0047AB] font-bold">
                    Read Full Article
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Have a Construction Question?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our team for expert advice on your construction project.
          </p>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
