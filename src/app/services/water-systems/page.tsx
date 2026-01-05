import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Supply System Construction Ethiopia | Reservoirs & Distribution Networks',
  description: 'Expert water supply system construction in Ethiopia. Reservoir design, well drilling, distribution networks, and water treatment facilities. Serving 500,000+ Ethiopians with clean water infrastructure.',
  keywords: 'water supply system construction Ethiopia, reservoir construction, well drilling Ethiopia, water distribution networks, water infrastructure',
  openGraph: {
    title: 'Water Supply System Construction | Tekeste Tesfaye',
    description: 'Grade I contractor specializing in water infrastructure across Ethiopia',
  },
}

export default function WaterSystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Water Systems</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Water Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Water Supply System Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Building Ethiopia's water security through expertly designed reservoir systems, well drilling, and distribution networks. Our water infrastructure projects serve over 500,000 Ethiopians with reliable, clean water access.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-white text-[#0047AB] font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm">
                Request Quote
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0047AB] transition-colors rounded-sm">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Comprehensive Water Infrastructure Solutions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With 29+ years of experience in water system construction, Tekeste Tesfaye delivers complete water infrastructure from initial hydrological surveys through final commissioning. Our expertise spans rural and urban water supply projects across 7 Ethiopian regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">💧 Reservoir Construction</h3>
              <p className="text-slate-600 mb-4">
                Design and construction of water storage reservoirs with capacities from 50,000 to 5,000,000 liters. Includes concrete reservoirs, elevated tanks, and underground storage facilities.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Hydrological surveys and site analysis using GIS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Structural design meeting international standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Waterproofing and leak prevention systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Automated level monitoring and control</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🚰 Distribution Networks</h3>
              <p className="text-slate-600 mb-4">
                Complete pipe network design and installation connecting water sources to end users. Pressure management, valve systems, and maintenance access points.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Pipe sizing calculations and hydraulic modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>HDPE, PVC, and steel pipe installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Pressure reducing valves and control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Leak detection and prevention infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">⛲ Well Drilling & Development</h3>
              <p className="text-slate-600 mb-4">
                Deep well drilling, borehole development, and groundwater extraction systems. Includes pump installation and water quality testing.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Geophysical surveys for optimal well placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Drilling depths up to 300 meters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Submersible pump installation and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Water quality analysis and treatment recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🔬 Water Treatment Facilities</h3>
              <p className="text-slate-600 mb-4">
                Basic and advanced water treatment systems ensuring safe drinking water. Filtration, chlorination, and quality monitoring infrastructure.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Sand filtration and sedimentation tanks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Chlorination systems and dosing equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Water quality testing laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Operator training and maintenance protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
              Our Technical Approach
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
                <h3 className="text-xl font-bold mb-3 text-slate-900">GIS-Based Site Analysis</h3>
                <p className="text-slate-600">
                  We utilize Geographic Information System (GIS) technology to analyze topography, population distribution, and existing infrastructure. This ensures optimal placement of water sources and distribution networks for maximum efficiency and coverage.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Sustainable Design Principles</h3>
                <p className="text-slate-600">
                  Our water systems are designed for 25+ year operational life with minimal maintenance requirements. We incorporate renewable energy options (solar pumping), water conservation features, and climate-resilient infrastructure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0047AB]">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Community Engagement</h3>
                <p className="text-slate-600">
                  Every water project includes community consultation, operator training, and establishment of water committees for long-term sustainability. We transfer knowledge to ensure communities can maintain their water systems independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">
            Our Water Infrastructure Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">500K+</div>
              <div className="text-white/80 uppercase tracking-wider text-sm">People Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">50+</div>
              <div className="text-white/80 uppercase tracking-wider text-sm">Water Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">7</div>
              <div className="text-white/80 uppercase tracking-wider text-sm">Regions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-bold mb-2">25+</div>
              <div className="text-white/80 uppercase tracking-wider text-sm">Years Lifespan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Start Your Water Infrastructure Project
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Contact our water systems specialists for feasibility studies, project planning, and construction services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+251116299824" className="px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
                Call: +251 116 29 98 24
              </a>
              <a href="mailto:tekestetesfaye2@gmail.com" className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-bold uppercase tracking-widest hover:border-[#0047AB] hover:text-[#0047AB] transition-colors rounded-sm">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
