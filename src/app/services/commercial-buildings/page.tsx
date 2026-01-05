import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Building Construction Ethiopia | Office & Business Facilities',
  description: 'Commercial building construction in Ethiopia. Office complexes, business centers, retail facilities, and commercial real estate development by Grade I contractor.',
  keywords: 'commercial building construction Ethiopia, office construction Addis Ababa, business facility construction, commercial real estate',
}

export default function CommercialBuildingsPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Commercial Buildings</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Commercial Building Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Modern office complexes and commercial facilities built to international standards. Creating professional business environments across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-slate-900">🏢 Office Buildings</h3>
              <p className="text-slate-600">
                Multi-story office complexes with modern amenities, efficient layouts, and professional finishes.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-slate-900">🏬 Retail Facilities</h3>
              <p className="text-slate-600">
                Shopping centers, retail stores, and commercial spaces designed for customer flow and business success.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-slate-900">🏭 Industrial Buildings</h3>
              <p className="text-slate-600">
                Warehouses, manufacturing facilities, and industrial parks with heavy-duty infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Build Your Commercial Facility
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us for commercial construction services.
          </p>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
