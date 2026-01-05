import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TVET Facility Construction Case Study | Technical Education Infrastructure Ethiopia',
  description: 'Building modern TVET centers for Ethiopia\'s technical education expansion. Case study of vocational training facility construction with workshops, labs, and modern learning spaces.',
  keywords: 'TVET facility construction, technical education infrastructure, vocational training centers, school construction Ethiopia',
}

export default function TVETFacilityBlog() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0047AB]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">TVET Construction</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Case Study
            </span>
            <span className="text-sm text-white/70">10 min read</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            From TVET Dream to Reality: Constructing Ethiopia's Technical Education Future
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            How we built modern technical training centers supporting Ethiopia's ambitious TVET integration policy.
          </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container-pad max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Ethiopia's TVET Revolution</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ethiopia's government has launched an ambitious initiative to integrate Technical and Vocational Education and Training (TVET) into the general education system. The goal: equip every student with practical skills alongside academic knowledge.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This policy shift requires hundreds of new TVET centers across the country—facilities that combine traditional classrooms with specialized workshops for automotive, construction, electrical, and manufacturing trades.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Our TVET Project: A Model Facility</h2>
            
            <div className="bg-slate-50 p-8 rounded-xl mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Project Specifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Capacity:</strong> 800 students</li>
                  <li><strong>Workshops:</strong> 6 specialized training bays</li>
                  <li><strong>Classrooms:</strong> 12 theory rooms</li>
                  <li><strong>Computer Labs:</strong> 3 digital learning spaces</li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Dormitories:</strong> 400 beds</li>
                  <li><strong>Cafeteria:</strong> 500-person capacity</li>
                  <li><strong>Timeline:</strong> 14 months</li>
                  <li><strong>Budget:</strong> ETB 85 million</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Design Challenges: More Than Just Classrooms</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              TVET facilities are fundamentally different from traditional schools. They require:
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Heavy Equipment Access</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Automotive and construction workshops need large doors, reinforced floors, and vehicle access. Our design included:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>4-meter-wide roll-up doors for vehicle entry</li>
              <li>Reinforced concrete floors (500 kg/m² load capacity)</li>
              <li>Overhead crane systems for engine lifting</li>
              <li>Dedicated tool storage and parts rooms</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Specialized Utilities</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Technical training requires more than standard electrical and plumbing:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Electrical:</strong> 3-phase power for machinery, individual workstation outlets</li>
              <li><strong>Compressed Air:</strong> Piped air systems for pneumatic tools</li>
              <li><strong>Ventilation:</strong> Exhaust systems for welding fumes and paint booths</li>
              <li><strong>Water:</strong> High-pressure wash bays and parts cleaning stations</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Safety Systems</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Workshops with power tools, welding equipment, and chemicals require enhanced safety:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Fire suppression systems in welding and painting areas</li>
              <li>Emergency shut-off switches for all machinery</li>
              <li>First aid stations in each workshop</li>
              <li>Safety equipment storage (goggles, gloves, respirators)</li>
              <li>Chemical storage rooms with proper ventilation</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Adapting International Standards to Local Context</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              International TVET standards (German dual system, Australian TAFE model) provide excellent frameworks, but they must be adapted to Ethiopian realities:
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Challenge: Equipment Availability</h4>
              <p className="text-slate-700 mb-4">
                International TVET centers use the latest machinery. In Ethiopia, students need to learn on equipment they'll actually encounter in local workshops.
              </p>
              <p className="text-slate-700">
                <strong>Our Solution:</strong> We designed workshops to accommodate both modern and traditional equipment, with flexible layouts allowing equipment upgrades over time.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Impact: Training Ethiopia's Skilled Workforce</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Since opening, the facility has trained over 2,000 students in:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Automotive mechanics and electrical systems</li>
              <li>Construction and carpentry</li>
              <li>Electrical installation and maintenance</li>
              <li>Welding and metal fabrication</li>
              <li>Plumbing and pipe fitting</li>
              <li>Computer hardware and networking</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>Employment Rate:</strong> 78% of graduates find employment within 6 months—significantly higher than traditional academic programs.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Why Construction Companies Must Understand Education Pedagogy</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Building TVET centers taught us an important lesson: construction companies can't just build what's on the drawings. We must understand how the space will be used.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We spent time with instructors understanding their teaching methods. We observed how students move through workshops. We learned that a well-designed TVET center isn't just about square meters—it's about creating an environment where hands-on learning thrives.
            </p>

            <div className="bg-[#0047AB] text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Planning an Educational Facility?</h3>
              <p className="text-white/90 mb-6">
                Whether you're building a TVET center, primary school, or university facility, our team brings educational construction expertise and understanding of learning environments.
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
