import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BIM + GIS = Better Infrastructure | Digital Construction Technology Ethiopia',
  description: 'How Building Information Modeling (BIM) and GIS integration saves time and money on complex construction projects. Real examples from Ethiopian infrastructure projects.',
  keywords: 'BIM construction Ethiopia, GIS analysis, construction technology, digital design, building information modeling',
}

export default function BIMGISBlog() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0047AB]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">BIM + GIS Technology</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Technology
            </span>
            <span className="text-sm text-white/70">11 min read</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            BIM + GIS = Better Infrastructure
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            How digital design technologies prevent costly mistakes and enable data-driven decision making in complex construction projects.
          </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container-pad max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">The Problem with Traditional 2D Drawings</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              For decades, construction relied on 2D drawings: floor plans, elevations, sections. But 2D drawings have fundamental limitations:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Coordination Errors:</strong> Structural beams clash with HVAC ducts—discovered only during construction</li>
              <li><strong>Quantity Estimation:</strong> Manual counting leads to 15-20% variance in material estimates</li>
              <li><strong>Change Management:</strong> One design change requires updating dozens of drawings manually</li>
              <li><strong>Visualization:</strong> Clients struggle to understand 2D representations of complex 3D spaces</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>Result:</strong> Cost overruns, delays, and rework consume 10-15% of project budgets.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Enter BIM: Building Information Modeling</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              BIM creates intelligent 3D models containing detailed information about every building component. It's not just a 3D drawing—it's a database of the entire building.
            </p>

            <div className="bg-slate-50 p-8 rounded-xl mb-8">
              <h3 className="font-bold text-slate-900 mb-4">What BIM Contains</h3>
              <p className="text-slate-700 mb-4">Every element in a BIM model includes:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Geometric data (size, shape, location)</li>
                <li>• Material specifications (concrete grade, steel type)</li>
                <li>• Cost information (unit prices, total cost)</li>
                <li>• Performance data (thermal properties, load capacity)</li>
                <li>• Manufacturer details (product codes, warranties)</li>
                <li>• Installation requirements (sequence, tools needed)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Real Example: Hospital Project Clash Detection</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              On our 200-bed hospital project, BIM clash detection identified 127 conflicts before construction:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Structural beams intersecting with HVAC ducts (42 instances)</li>
              <li>Electrical conduits conflicting with plumbing pipes (38 instances)</li>
              <li>Door swings blocking equipment access (23 instances)</li>
              <li>Ceiling height insufficient for medical equipment (14 instances)</li>
              <li>Fire sprinkler coverage gaps (10 instances)</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>Cost Savings:</strong> Resolving these digitally saved an estimated ETB 5 million in rework costs and prevented 3 months of delays.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Adding GIS: Geographic Context</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              While BIM handles detailed building design, Geographic Information Systems (GIS) provide site context:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Terrain and topography</li>
              <li>Existing infrastructure (roads, utilities)</li>
              <li>Population distribution</li>
              <li>Environmental features (rivers, vegetation)</li>
              <li>Property boundaries and zoning</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">BIM + GIS Integration: The Power Combination</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Combining BIM and GIS is particularly powerful for infrastructure projects:
            </p>

            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Case Study: Highway Bridge Project</h4>
              <p className="text-slate-700 mb-4">
                <strong>Challenge:</strong> Design a bridge crossing a river valley with minimal environmental impact.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>GIS Analysis:</strong> Mapped terrain, river flow patterns, flood zones, and traffic patterns. Identified optimal bridge location minimizing earthwork and environmental disruption.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>BIM Design:</strong> Created detailed 3D model of bridge structure, coordinating foundations, deck, barriers, and drainage systems.
              </p>
              <p className="text-slate-700">
                <strong>Result:</strong> 12% reduction in construction costs through optimized design. Environmental impact assessment approved in record time with comprehensive GIS data.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">ROI: Digital Design Saved This Project ETB 5 Million</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Let's break down the return on investment for BIM/GIS on a typical project:
            </p>

            <div className="bg-slate-100 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-4">Cost-Benefit Analysis</h4>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-bold">BIM/GIS Investment:</p>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Software licenses: ETB 200,000</li>
                    <li>• Training: ETB 150,000</li>
                    <li>• Modeling time: ETB 400,000</li>
                    <li><strong>Total Cost: ETB 750,000</strong></li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="font-bold">Savings Achieved:</p>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Clash detection (prevented rework): ETB 3,000,000</li>
                    <li>• Accurate quantities (reduced waste): ETB 1,500,000</li>
                    <li>• Faster approvals (time savings): ETB 800,000</li>
                    <li>• Optimized design (material efficiency): ETB 700,000</li>
                    <li><strong>Total Savings: ETB 6,000,000</strong></li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-slate-300">
                  <p className="text-xl font-bold text-[#0047AB]">Net Benefit: ETB 5,250,000 (700% ROI)</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">The Future: Digital Twins & Facility Management</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              BIM's value extends beyond construction. The final model becomes a "digital twin"—a virtual replica of the physical building used for:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Operations:</strong> Locate equipment, access maintenance manuals</li>
              <li><strong>Maintenance:</strong> Track service schedules, replacement parts</li>
              <li><strong>Renovations:</strong> Plan modifications with existing conditions documented</li>
              <li><strong>Energy Management:</strong> Monitor consumption, optimize systems</li>
            </ul>

            <div className="bg-[#0047AB] text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Request BIM/GIS Services</h3>
              <p className="text-white/90 mb-6">
                Whether you're planning a complex hospital, infrastructure project, or multi-building campus, our BIM/GIS team can help optimize your design and prevent costly mistakes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+251116299824" className="px-6 py-3 bg-white text-[#0047AB] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors rounded-sm text-sm">
                  Call: +251 116 29 98 24
                </a>
                <a href="mailto:tekestetesfaye2@gmail.com" className="px-6 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0047AB] transition-colors rounded-sm text-sm">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
