import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Services Oromia Region | Schools, Water Systems & Infrastructure',
  description: 'Grade I construction contractor serving Oromia region. Educational facilities, water systems, and rural infrastructure development across Oromia.',
  keywords: 'construction Oromia, contractors Oromia region, school construction Oromia, water infrastructure Oromia',
}

export default function OromiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#0047AB]">Locations</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Oromia</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] via-[#0052BD] to-[#0066DD] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Construction Services in Oromia
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Serving Oromia region with comprehensive construction services. Educational facilities, water systems, and rural infrastructure development across Ethiopia's largest region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-slate-900">🎓 Educational Facilities</h3>
              <p className="text-slate-600">Schools, TVET centers, and educational infrastructure supporting Oromia's education goals.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-slate-900">💧 Water Projects</h3>
              <p className="text-slate-600">Water supply systems and infrastructure serving rural and urban Oromia communities.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-slate-900">🛣️ Infrastructure</h3>
              <p className="text-slate-600">Roads, bridges, and connectivity projects improving Oromia's infrastructure network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Build in Oromia Region
          </h2>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
