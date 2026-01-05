import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Services Afar Region | Water Systems & Community Facilities',
  description: 'Construction services in Afar region, Ethiopia. Water infrastructure and community facilities in remote areas.',
  keywords: 'construction Afar, water systems Afar, contractors Afar region Ethiopia',
}

export default function AfarPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#0047AB]">Locations</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Afar</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] via-[#0052BD] to-[#0066DD] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Construction Services in Afar
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building essential infrastructure in Afar region. Water systems and community facilities serving remote communities with challenging logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">💧 Water Infrastructure</h3>
              <p className="text-slate-600">Essential water systems bringing clean water access to Afar communities.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏘️ Community Facilities</h3>
              <p className="text-slate-600">Schools, health centers, and public buildings serving Afar region.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Build in Afar Region
          </h2>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
