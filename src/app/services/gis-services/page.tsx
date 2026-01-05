import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GIS Services Ethiopia | Geographic Information System Construction Planning',
  description: 'GIS services for construction projects in Ethiopia. Site analysis, terrain modeling, infrastructure planning, and geospatial data integration for optimal project outcomes.',
  keywords: 'GIS services Ethiopia, geographic information system, site analysis, geospatial planning, construction GIS',
}

export default function GISServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">GIS Services</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              GIS Services for Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Geographic Information System (GIS) technology enables data-driven site selection, terrain analysis, and infrastructure planning. Make informed decisions backed by geospatial intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
                What is GIS in Construction?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                GIS combines maps, satellite imagery, terrain data, and project information to provide comprehensive site intelligence. It answers critical questions before construction begins.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0047AB] text-xl">✓</span>
                  <span>Where is the optimal location for this facility?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0047AB] text-xl">✓</span>
                  <span>What is the terrain slope and drainage pattern?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0047AB] text-xl">✓</span>
                  <span>Where are existing utilities and infrastructure?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0047AB] text-xl">✓</span>
                  <span>How will this project impact the surrounding area?</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Our GIS Capabilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">🗺️ Site Analysis</h4>
                  <p className="text-slate-600 text-sm">Topographic surveys, soil mapping, flood risk assessment</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">📍 Infrastructure Mapping</h4>
                  <p className="text-slate-600 text-sm">Existing utilities, road networks, service coverage</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">🌍 Environmental Analysis</h4>
                  <p className="text-slate-600 text-sm">Vegetation, water bodies, protected areas</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">📊 Data Integration</h4>
                  <p className="text-slate-600 text-sm">Combine multiple data sources for comprehensive insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            GIS Applications in Our Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Water System Planning</h3>
              <p className="text-slate-600">
                Analyze population distribution, elevation profiles, and water source locations to design optimal distribution networks. Minimize pipe lengths and pumping costs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Road Route Selection</h3>
              <p className="text-slate-600">
                Evaluate multiple route options considering terrain, existing infrastructure, environmental constraints, and construction costs. Choose the most efficient path.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Site Selection</h3>
              <p className="text-slate-600">
                Identify ideal locations for hospitals, schools, or facilities based on accessibility, population served, land availability, and zoning regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Request GIS Analysis
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us for GIS site analysis and infrastructure planning services.
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
