import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Contractor Dire Dawa | Grade I Building Services',
  description: 'Grade I construction services in Dire Dawa, Ethiopia. Water systems, infrastructure, hospitals, and institutional projects. Regional hub serving eastern Ethiopia.',
  keywords: 'construction company Dire Dawa, general contractor Dire Dawa, building services Dire Dawa, infrastructure Dire Dawa',
}

export default function DireDawaPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#0047AB]">Locations</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Dire Dawa</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] via-[#0052BD] to-[#0066DD] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Regional Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Construction Services in Dire Dawa
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Our Dire Dawa operations serve as a regional hub for eastern Ethiopia. Specializing in water infrastructure, government projects, and institutional facilities across Dire Dawa and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900">
            Our Dire Dawa Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">💧 Water Infrastructure</h3>
              <p className="text-slate-600">
                Water supply systems, reservoirs, and distribution networks serving Dire Dawa communities and surrounding rural areas.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏛️ Government Facilities</h3>
              <p className="text-slate-600">
                Institutional buildings, administrative offices, and public facilities for Dire Dawa Administration.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏥 Healthcare Projects</h3>
              <p className="text-slate-600">
                Hospitals, health centers, and medical facilities improving healthcare access in Dire Dawa.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🎓 Educational Buildings</h3>
              <p className="text-slate-600">
                Schools and TVET centers supporting Dire Dawa's education expansion initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Contact Us for Dire Dawa Projects
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Reach out to discuss construction services in Dire Dawa and eastern Ethiopia.
          </p>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
