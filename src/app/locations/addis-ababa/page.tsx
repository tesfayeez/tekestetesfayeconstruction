import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grade I Construction Contractor in Addis Ababa | Bole Sub City',
  description: 'Leading Grade I construction contractor in Addis Ababa since 1995. Headquartered in Bole Sub City. Expert in hospitals, schools, water systems, and commercial buildings across the capital.',
  keywords: 'Grade 1 contractors Addis Ababa, construction company Bole, building contractor Addis Ababa, Addis Ababa construction services',
  openGraph: {
    title: 'Construction Services in Addis Ababa | Tekeste Tesfaye',
    description: 'Grade I contractor headquartered in Bole Sub City serving all of Addis Ababa',
  },
}

export default function AddisAbabaPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#0047AB]">Locations</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Addis Ababa</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] via-[#0052BD] to-[#0066DD] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Headquarters
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Grade I Contractor in Addis Ababa
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Headquartered in Bole Sub City since 1995, Tekeste Tesfaye has built Addis Ababa's hospitals, schools, offices, and water infrastructure. We understand the unique challenges of the capital: rapid urbanization, complex permitting, and demands for world-class quality.
            </p>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/70 mb-1">Office Location</div>
                  <div className="font-bold">Sami Building, Bole Sub City</div>
                  <div className="text-white/80">Woreda 13, Kebele 10, #502 B</div>
                </div>
                <div>
                  <div className="text-white/70 mb-1">Contact</div>
                  <div className="font-bold">+251 116 29 98 24</div>
                  <div className="text-white/80">tekestetesfaye2@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Why Choose Us for Addis Ababa Construction?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With nearly three decades in Addis Ababa, we've built relationships with city authorities, understand local zoning codes, and have proven expertise in navigating the capital's unique construction environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏥 Healthcare Facilities</h3>
              <p className="text-slate-600 mb-4">
                Extensive experience building hospitals and clinics in Addis Ababa, including the 200+ bed Darimu Primary Hospital.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• ICU and surgical suite construction</li>
                <li>• Medical imaging facilities</li>
                <li>• Outpatient clinics</li>
                <li>• Emergency departments</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🎓 Educational Institutions</h3>
              <p className="text-slate-600 mb-4">
                Schools, TVET centers, and educational facilities across Addis Ababa's sub-cities.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Primary and secondary schools</li>
                <li>• TVET training centers</li>
                <li>• University facilities</li>
                <li>• Educational laboratories</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">💧 Water Infrastructure</h3>
              <p className="text-slate-600 mb-4">
                Water supply systems, reservoirs, and distribution networks serving Addis Ababa communities.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Reservoir construction</li>
                <li>• Distribution pipe networks</li>
                <li>• Pump stations</li>
                <li>• Water treatment facilities</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏢 Commercial Buildings</h3>
              <p className="text-slate-600 mb-4">
                Office complexes and commercial facilities built to modern standards in Bole and other sub-cities.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Multi-story office buildings</li>
                <li>• Business centers</li>
                <li>• Retail facilities</li>
                <li>• Mixed-use developments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Local Expertise in Addis Ababa
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Zoning & Permits</h3>
              <p className="text-slate-600 text-sm">
                Deep understanding of Addis Ababa's zoning codes, building height restrictions in Bole, and woreda-level permitting requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">City Relationships</h3>
              <p className="text-slate-600 text-sm">
                Established relationships with Addis Ababa City Administration, sub-city offices, and regulatory authorities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Urban Logistics</h3>
              <p className="text-slate-600 text-sm">
                Experience managing construction in dense urban environments with traffic, noise restrictions, and site access challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Serving All Addis Ababa Sub-Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div className="bg-white/10 p-4 rounded-lg text-center">Bole</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Kirkos</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Arada</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Addis Ketema</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Lideta</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Yeka</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Nifas Silk-Lafto</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Kolfe Keranio</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Gulele</div>
              <div className="bg-white/10 p-4 rounded-lg text-center">Akaky Kaliti</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Start Your Addis Ababa Project
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our Bole office for construction services anywhere in Addis Ababa.
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
