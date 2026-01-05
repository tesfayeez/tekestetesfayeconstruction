import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BIM Construction Services Ethiopia | Building Information Modeling',
  description: 'Advanced BIM (Building Information Modeling) services in Ethiopia. 3D modeling, clash detection, cost estimation, and digital construction coordination for complex projects.',
  keywords: 'BIM construction Ethiopia, building information modeling, 3D construction modeling, digital design Ethiopia, construction technology',
}

export default function BIMDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">BIM Design</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Digital Construction
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              BIM Design Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Building Information Modeling (BIM) brings precision, efficiency, and cost savings to complex construction projects. Our BIM services reduce errors, prevent conflicts, and enable data-driven decision making.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Why BIM Matters for Your Project
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Traditional 2D drawings can't capture the complexity of modern construction. BIM creates intelligent 3D models that contain detailed information about every building component—enabling better coordination, faster problem-solving, and significant cost savings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">12% Cost Savings</h3>
              <p className="text-slate-600">
                Clash detection prevents costly rework. Identify conflicts between structural, MEP, and architectural elements before construction begins.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3 Months Faster</h3>
              <p className="text-slate-600">
                Better coordination reduces delays. All stakeholders work from a single source of truth, eliminating miscommunication.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">95% Accuracy</h3>
              <p className="text-slate-600">
                Automated quantity takeoffs ensure accurate material estimates and budgeting. No more manual counting errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Our BIM Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">3D Modeling & Visualization</h3>
              <p className="text-slate-600 mb-4">
                Create detailed 3D models of your entire project. Visualize the finished building before breaking ground. Present designs to stakeholders with photorealistic renderings.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Software:</strong> Autodesk Revit, ArchiCAD, Navisworks
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Clash Detection & Coordination</h3>
              <p className="text-slate-600 mb-4">
                Identify conflicts between building systems before construction. Coordinate structural beams with HVAC ducts, electrical conduits, and plumbing pipes. Resolve issues digitally, not on-site.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Benefit:</strong> Eliminates 90% of coordination issues
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quantity Takeoffs & Cost Estimation</h3>
              <p className="text-slate-600 mb-4">
                Automatically extract material quantities from the BIM model. Generate accurate cost estimates linked directly to design elements. Update quantities instantly when design changes.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Accuracy:</strong> ±2% variance vs. ±15% traditional methods
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">4D Construction Sequencing</h3>
              <p className="text-slate-600 mb-4">
                Link the 3D model to project schedule. Visualize construction progress over time. Optimize logistics, identify bottlenecks, and plan resource allocation.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Use Case:</strong> Complex phased projects, tight sites
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">As-Built Documentation</h3>
              <p className="text-slate-600 mb-4">
                Deliver final BIM model reflecting actual construction. Provides building owners with complete facility information for operations and maintenance.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Value:</strong> Essential for facility management and future renovations
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              BIM + GIS Integration
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              We combine BIM with Geographic Information Systems (GIS) for infrastructure projects. GIS provides site context—terrain, utilities, traffic patterns—while BIM handles detailed building design. This integration is powerful for:
            </p>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Highway and bridge projects requiring terrain analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Water distribution networks spanning large areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Multi-building campuses (hospitals, schools, industrial parks)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Projects requiring environmental impact assessment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Request BIM Services for Your Project
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how BIM can improve your project outcomes and reduce costs.
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
