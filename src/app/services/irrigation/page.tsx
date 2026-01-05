import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Irrigation System Construction Ethiopia | Agricultural Infrastructure',
  description: 'Expert irrigation system construction in Ethiopia. Drip irrigation, sprinkler systems, canal construction, and agricultural water management infrastructure.',
  keywords: 'irrigation construction Ethiopia, agricultural irrigation, drip irrigation, sprinkler systems, farm infrastructure',
}

export default function IrrigationPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Irrigation Systems</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Irrigation System Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building agricultural productivity through efficient irrigation infrastructure. Modern irrigation systems, canal construction, and water management solutions for Ethiopian farms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🌾 Drip Irrigation Systems</h3>
              <p className="text-slate-600 mb-4">
                Water-efficient drip irrigation for high-value crops. Delivers water directly to plant roots, minimizing waste and maximizing yields.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Mainline and submain pipe installation</li>
                <li>• Drip tape or emitter systems</li>
                <li>• Filtration and fertigation equipment</li>
                <li>• Pressure regulation and control valves</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">💧 Sprinkler Systems</h3>
              <p className="text-slate-600 mb-4">
                Center pivot and lateral move sprinkler systems for large-scale farming. Uniform water distribution across extensive areas.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Center pivot irrigation installation</li>
                <li>• Traveling sprinkler systems</li>
                <li>• Pump stations and power supply</li>
                <li>• Automation and control systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Improve Your Agricultural Productivity
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us for irrigation system design and construction services.
          </p>
          <a href="tel:+251116299824" className="inline-block px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors rounded-sm">
            Call: +251 116 29 98 24
          </a>
        </div>
      </section>
    </main>
  )
}
