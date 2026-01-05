import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Grade I Construction Contractor Since 1995',
  description: 'Tekeste Tesfaye Building Contractor - Grade I certified general contractor in Ethiopia since 1995. 29+ years of excellence in construction across 7 regions.',
  keywords: 'about Tekeste Tesfaye, Grade I contractor Ethiopia, construction company history, building contractor Addis Ababa',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About Tekeste Tesfaye Building Contractor
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building Ethiopia's infrastructure since 1995. Grade I certified general contractor with 29+ years of excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Founded in 1995, Tekeste Tesfaye Building Contractor has grown from a small construction firm to one of Ethiopia's leading Grade I general contractors. For nearly three decades, we've built the infrastructure that connects communities, improves healthcare, advances education, and drives economic development.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our journey began in Addis Ababa with a simple mission: deliver quality construction that stands the test of time. Today, we operate across 7 Ethiopian regions, employ 150+ skilled professionals, and own a fleet of 20+ pieces of heavy equipment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Our Credentials
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Grade I License</h3>
              <p className="text-slate-600">
                Highest contractor classification in Ethiopia, qualified for large-scale government and private projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">29+ Years</h3>
              <p className="text-slate-600">
                Nearly three decades of construction excellence and continuous operation since 1995.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">7 Regions</h3>
              <p className="text-slate-600">
                Operations across Addis Ababa, Dire Dawa, Oromia, Somali, Afar, Tigray, and North Shewa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Our Values</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#0047AB] pl-6">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Quality First</h3>
              <p className="text-lg text-slate-700">
                We never compromise on quality. Every project is built to last 25+ years with proper maintenance.
              </p>
            </div>
            <div className="border-l-4 border-[#0047AB] pl-6">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Safety Always</h3>
              <p className="text-lg text-slate-700">
                Zero incidents is our standard. We invest in safety training, equipment, and protocols to protect every worker.
              </p>
            </div>
            <div className="border-l-4 border-[#0047AB] pl-6">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Community Impact</h3>
              <p className="text-lg text-slate-700">
                Our projects transform communities. We measure success not just in buildings, but in lives improved.
              </p>
            </div>
            <div className="border-l-4 border-[#0047AB] pl-6">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Innovation</h3>
              <p className="text-lg text-slate-700">
                We embrace modern technology—BIM, GIS, digital project management—while respecting proven construction fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your construction project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+251116299824" className="px-8 py-4 bg-white text-[#0047AB] font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm">
              Call: +251 116 29 98 24
            </a>
            <a href="mailto:tekestetesfaye2@gmail.com" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0047AB] transition-colors rounded-sm">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
