import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Road & Bridge Construction Ethiopia | Gravel Roads & Infrastructure',
  description: 'Expert road and bridge construction in Ethiopia. Gravel roads, highway construction, bridge engineering, and rural connectivity infrastructure. Grade I contractor serving 7 regions.',
  keywords: 'road construction Ethiopia, gravel road construction, bridge construction, highway contractors Ethiopia, rural infrastructure',
}

export default function RoadsAndBridgesPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Roads & Bridges</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Transportation Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Road & Bridge Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Building Ethiopia's connectivity through durable road networks and engineered bridges. Our expertise spans gravel roads, paved highways, and bridge construction across challenging terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🛣️ Gravel Road Construction</h3>
              <p className="text-slate-600 mb-4">
                Engineered gravel roads designed for long-term durability and minimal maintenance. Proper compaction, drainage, and material selection ensure roads that last.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Geotechnical surveys and soil analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Proper sub-base preparation and compaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Drainage systems (culverts, side drains)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Quality aggregate selection and grading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Road camber and cross-slope design</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🌉 Bridge Construction</h3>
              <p className="text-slate-600 mb-4">
                Structural bridge engineering for river crossings, valley spans, and elevated roadways. Concrete and steel bridge construction.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Hydrological studies and flood analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Foundation design (piles, caissons)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Reinforced concrete deck construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Steel girder and truss bridges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Safety barriers and approach roads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Why Gravel Roads Fail (And How We Prevent It)
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Poor Drainage</h3>
              <p className="text-slate-600">
                Water is the enemy of gravel roads. We design comprehensive drainage systems with proper road camber, side drains, and culverts to prevent water accumulation and erosion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Inadequate Compaction</h3>
              <p className="text-slate-600">
                Loose material leads to rutting and potholes. Our heavy equipment fleet ensures proper compaction at optimal moisture content for maximum density and strength.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Wrong Material Selection</h3>
              <p className="text-slate-600">
                Not all gravel is suitable for roads. We conduct material testing to ensure proper gradation, plasticity index, and bearing capacity for long-lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Our Equipment Fleet
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🚜</div>
              <div className="font-bold mb-2">Dozers</div>
              <div className="text-sm text-white/80">Land clearing & grading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <div className="font-bold mb-2">Graders</div>
              <div className="text-sm text-white/80">Surface finishing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔨</div>
              <div className="font-bold mb-2">Compactors</div>
              <div className="text-sm text-white/80">Soil & aggregate compaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚛</div>
              <div className="font-bold mb-2">Dump Trucks</div>
              <div className="text-sm text-white/80">Material transport</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Start Your Road or Bridge Project
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us for feasibility studies, engineering design, and construction services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+251116299824" className="px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
              Call: +251 116 29 98 24
            </a>
            <a href="mailto:tekestetesfaye2@gmail.com" className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-bold uppercase tracking-widest hover:border-[#0047AB] transition-colors rounded-sm">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
