import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hospital Construction Ethiopia | Healthcare Facility Contractors',
  description: 'Expert hospital and healthcare facility construction in Ethiopia. ICU wards, surgical suites, clinics, and medical centers. Grade I contractor with 29+ years experience in healthcare infrastructure.',
  keywords: 'hospital construction Ethiopia, healthcare facility construction, clinic building, medical center construction, TVET health facilities',
}

export default function HealthcareInfrastructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0047AB]">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Healthcare Infrastructure</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Healthcare Construction
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Hospital & Healthcare Facility Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Building Ethiopia's healthcare future with world-class hospitals, clinics, and medical facilities. Our specialized expertise ensures compliance with international healthcare standards and Ethiopian Ministry of Health regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Specialized Healthcare Construction
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Healthcare facilities require specialized knowledge of infection control, medical gas systems, emergency egress, and regulatory compliance. With experience building 200+ bed hospitals and numerous clinics, we understand the unique demands of medical construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏥 Hospitals</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>ICU and critical care wards with specialized HVAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Surgical suites with laminar flow systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Emergency departments with trauma bays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Medical imaging facilities (X-ray, CT, MRI rooms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Laboratory and diagnostic centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Pharmacy and medical supply storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🏨 Clinics & Health Centers</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Primary care clinics and health posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Maternal and child health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Dental clinics with specialized plumbing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Outpatient consultation rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Vaccination and immunization facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1">✓</span>
                  <span>Medical office buildings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <h2 className="text-4xl font-display font-bold mb-12 text-slate-900 text-center">
            Healthcare-Specific Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Infection Control Standards</h3>
              <p className="text-slate-600 text-sm">
                Negative pressure rooms, antimicrobial surfaces, hand hygiene stations, and proper zoning to prevent hospital-acquired infections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Medical Gas Systems</h3>
              <p className="text-slate-600 text-sm">
                Oxygen, medical air, vacuum, and nitrous oxide piping systems meeting international standards with alarm systems and backup supplies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Emergency Egress</h3>
              <p className="text-slate-600 text-sm">
                Fire-rated corridors, multiple exit routes, emergency lighting, and accessibility compliance for patient evacuation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Backup Power Systems</h3>
              <p className="text-slate-600 text-sm">
                Generator systems with automatic transfer switches ensuring uninterrupted power to critical areas like ICU and operating rooms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Regulatory Compliance</h3>
              <p className="text-slate-600 text-sm">
                Full compliance with Ethiopian Ministry of Health facility standards and international healthcare building codes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-slate-900">Specialized HVAC</h3>
              <p className="text-slate-600 text-sm">
                Temperature and humidity control, air filtration (HEPA), and positive/negative pressure systems for sterile environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Featured Project: Darimu Primary Hospital
            </h2>
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-white/70 mb-1">Capacity</div>
                  <div className="text-2xl font-bold">200+ Beds</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Completion</div>
                  <div className="text-2xl font-bold">2023</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Certification</div>
                  <div className="text-2xl font-bold">LEED Certified</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Timeline</div>
                  <div className="text-2xl font-bold">Delivered Early</div>
                </div>
              </div>
              <p className="text-white/90">
                Our flagship healthcare project demonstrates our capability to deliver complex medical facilities on time and to international standards. The facility includes ICU wards, surgical suites, diagnostic imaging, and outpatient services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
            Ready to Build Your Healthcare Facility?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our healthcare construction specialists for project planning and consultation.
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
