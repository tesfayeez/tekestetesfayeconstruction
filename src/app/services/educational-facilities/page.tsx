import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'School & TVET Construction Ethiopia | Educational Facility Contractors',
  description: 'Expert construction of schools, TVET centers, and educational facilities in Ethiopia. Modern learning environments, technical training workshops, and safe educational infrastructure.',
  keywords: 'TVET facility construction, school construction Ethiopia, educational buildings, technical training centers, classroom construction',
}

export default function EducationalFacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Educational Facilities</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Education Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Schools & TVET Facility Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Building Ethiopia's educational future through modern schools and technical vocational training centers. Our facilities create safe, inspiring learning environments that support Ethiopia's education expansion goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Educational Facility Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With 15+ completed educational projects, we understand the unique requirements of learning environments: natural lighting, acoustics, safety, accessibility, and functional spaces for both traditional classrooms and technical workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🎓 TVET Centers</h3>
              <p className="text-slate-600 mb-4">
                Technical Vocational Education and Training facilities designed for hands-on learning and modern skill development.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Technical workshops with heavy equipment access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Computer labs and digital learning spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Automotive and mechanical training bays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Electrical and electronics laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Construction and carpentry workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Student dormitories and cafeterias</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏫 Primary & Secondary Schools</h3>
              <p className="text-slate-600 mb-4">
                Safe, accessible school buildings designed for optimal learning environments and student wellbeing.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Naturally lit classrooms with proper ventilation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Science laboratories and demonstration rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Libraries and resource centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Multi-purpose halls and assembly spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Playgrounds and sports facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Accessible facilities for students with disabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Design Principles for Learning Environments
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Safety First</h3>
              <p className="text-slate-600 text-sm">
                Fire-resistant materials, emergency exits, earthquake-resistant design, secure perimeters, and child-safe fixtures throughout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Natural Lighting</h3>
              <p className="text-slate-600 text-sm">
                Large windows positioned to maximize daylight while minimizing glare. Reduces energy costs and improves student concentration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Acoustic Design</h3>
              <p className="text-slate-600 text-sm">
                Sound-absorbing materials, proper room proportions, and noise isolation between classrooms for optimal learning conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Accessibility</h3>
              <p className="text-slate-600 text-sm">
                Ramps, wide doorways, accessible toilets, and barrier-free circulation ensuring all students can access education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Durability</h3>
              <p className="text-slate-600 text-sm">
                High-traffic materials, vandal-resistant fixtures, and low-maintenance finishes designed for decades of heavy use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Flexibility</h3>
              <p className="text-slate-600 text-sm">
                Adaptable spaces that can accommodate changing teaching methods and future technology integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Supporting Ethiopia's TVET Integration
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Ethiopia's ambitious TVET integration policy aims to provide technical education alongside general education. We're proud to support this national priority by building modern TVET facilities that meet international standards while remaining cost-effective.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Our TVET centers include specialized workshops for automotive, construction, electrical, and manufacturing trades—preparing Ethiopia's youth for skilled employment and entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Build Your Educational Facility
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us for school and TVET center construction planning, design, and execution.
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
