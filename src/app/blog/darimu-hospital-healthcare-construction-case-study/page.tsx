import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Darimu Primary Hospital Case Study | Healthcare Construction Ethiopia',
  description: 'Detailed case study of Darimu Primary Hospital construction. 200+ bed LEED-certified healthcare facility in Ethiopia. Hospital construction challenges, solutions, and results.',
  keywords: 'hospital construction Ethiopia, healthcare facility design, LEED building Ethiopia, Darimu Hospital, medical facility construction',
}

export default function DarimuHospitalCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0047AB]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Darimu Hospital Case Study</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Case Study
            </span>
            <span className="text-sm text-white/70">12 min read</span>
            <span className="text-sm text-white/70">•</span>
            <span className="text-sm text-white/70">January 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Darimu Primary Hospital: From Concrete to Care
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            How we built Ethiopia's first LEED-certified healthcare facility—a 200+ bed hospital delivered ahead of schedule with zero safety incidents.
          </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container-pad max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Project Overview</h2>
            
            <div className="bg-slate-50 p-8 rounded-xl mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Project Details</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Facility:</strong> Darimu Primary Hospital</li>
                    <li><strong>Capacity:</strong> 200+ beds</li>
                    <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
                    <li><strong>Completion:</strong> 2023</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Key Achievements</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Timeline:</strong> Delivered 2 weeks early</li>
                    <li><strong>Safety:</strong> Zero incidents</li>
                    <li><strong>Certification:</strong> LEED Silver</li>
                    <li><strong>Budget:</strong> Within 3% of estimate</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">The Impact</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Darimu Primary Hospital now serves over 50,000 patients annually, adding critical healthcare capacity to Addis Ababa. The facility includes:
            </p>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#0047AB] text-xl">✓</span>
                <span><strong>ICU Ward:</strong> 24 beds with specialized HVAC and medical gas systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0047AB] text-xl">✓</span>
                <span><strong>Surgical Suites:</strong> 6 operating rooms with laminar flow air systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0047AB] text-xl">✓</span>
                <span><strong>Emergency Department:</strong> 12 trauma bays with direct ambulance access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0047AB] text-xl">✓</span>
                <span><strong>Diagnostic Imaging:</strong> X-ray, CT, and ultrasound facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0047AB] text-xl">✓</span>
                <span><strong>Laboratory:</strong> Full diagnostic lab with automated systems</span>
              </li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">The Challenge</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Healthcare facilities are among the most complex construction projects. Darimu Hospital presented unique challenges:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Timeline Constraints</h3>
              <p className="text-slate-700">
                The Ministry of Health required completion within 18 months to address urgent healthcare capacity needs in the region. Traditional hospital construction timelines average 24-30 months.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Specialized Equipment Coordination</h3>
              <p className="text-slate-700">
                Medical equipment installation required precise coordination with structural, electrical, and HVAC systems. CT scanners, surgical lights, and medical gas systems all had specific requirements that couldn't be compromised.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Infection Control Standards</h3>
              <p className="text-slate-700">
                Meeting international infection control standards required specialized materials, HVAC design, and construction sequencing to prevent contamination during build-out.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Our Solution</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Phased Construction Strategy</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We divided the project into three overlapping phases, allowing parallel work streams while maintaining quality control:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Phase 1 (Months 1-8):</strong> Foundation, structural frame, and building envelope</li>
              <li><strong>Phase 2 (Months 6-14):</strong> MEP systems, interior partitions, specialized rooms</li>
              <li><strong>Phase 3 (Months 12-18):</strong> Finishes, equipment installation, commissioning</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">2. BIM Coordination</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Building Information Modeling was critical for this complex project. We created a comprehensive 3D model integrating:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Structural elements (columns, beams, slabs)</li>
              <li>HVAC ductwork and equipment</li>
              <li>Electrical conduits and panels</li>
              <li>Plumbing and medical gas piping</li>
              <li>Medical equipment placement</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>Result:</strong> We identified and resolved 127 potential conflicts before construction, preventing costly rework and delays.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Quality Control Protocols</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Healthcare construction demands higher quality standards than typical buildings. Our protocols included:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Daily inspections by dedicated quality control team</li>
              <li>Material testing for all critical components</li>
              <li>Photographic documentation of all concealed work</li>
              <li>Third-party verification of medical gas systems</li>
              <li>Air quality testing in all patient areas</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Results & Lessons Learned</h2>
            
            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quantifiable Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">2 weeks</div>
                  <div className="text-slate-700">Ahead of schedule</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">0</div>
                  <div className="text-slate-700">Safety incidents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">97%</div>
                  <div className="text-slate-700">Budget accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">LEED Silver</div>
                  <div className="text-slate-700">Sustainability certification</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Key Lesson: Healthcare Requires 3x the Coordination</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our experience with Darimu Hospital reinforced a critical insight: healthcare facilities require approximately three times the coordination effort of standard commercial projects. The integration of medical equipment, specialized systems, and regulatory requirements demands:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Weekly coordination meetings with all stakeholders</li>
              <li>Detailed equipment shop drawings reviewed months in advance</li>
              <li>Close collaboration with medical staff on operational requirements</li>
              <li>Continuous communication with regulatory authorities</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Why This Matters for Ethiopia</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ethiopia faces a significant healthcare infrastructure gap. According to the Ministry of Health, the country has only 6% of the required hospital bed capacity. Projects like Darimu Hospital are critical to closing this gap.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By demonstrating that world-class healthcare facilities can be built on time and on budget in Ethiopia, we're helping pave the way for increased investment in the sector. The LEED certification also shows that sustainable, energy-efficient healthcare is achievable in our climate.
            </p>

            <div className="bg-[#0047AB] text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Planning a Healthcare Facility?</h3>
              <p className="text-white/90 mb-6">
                Contact our healthcare construction specialists for project planning and consultation. We bring 29+ years of experience and proven expertise in complex medical facilities.
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
