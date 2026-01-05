import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Tekeste Tesfaye Building Contractor',
  description: 'Contact Tekeste Tesfaye Building Contractor for construction services. Office in Bole, Addis Ababa. Phone: +251 116 29 98 24. Email: tekestetesfaye2@gmail.com',
  keywords: 'contact construction company, Tekeste Tesfaye contact, construction quote Ethiopia, building contractor Addis Ababa',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Get in touch with our team to discuss your construction project. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    Addis Ababa Office
                  </h3>
                  <p className="text-slate-700">
                    Sami Building<br />
                    Bole Sub City, Woreda 13, Kebele 10, #502 B<br />
                    P.O. Box 12274<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    Phone
                  </h3>
                  <p className="text-slate-700">
                    Office: <a href="tel:+251116299824" className="text-[#0047AB] hover:underline">+251 116 29 98 24</a><br />
                    Office: <a href="tel:+251116299825" className="text-[#0047AB] hover:underline">+251 116 29 98 25</a>
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✉️</span>
                    Email
                  </h3>
                  <p className="text-slate-700">
                    <a href="mailto:tekestetesfaye2@gmail.com" className="text-[#0047AB] hover:underline">
                      tekestetesfaye2@gmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕐</span>
                    Business Hours
                  </h3>
                  <p className="text-slate-700">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Our Services</h2>
              <div className="space-y-4">
                <Link href="/services/water-systems" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-1">Water Supply Systems</h3>
                  <p className="text-sm text-slate-600">Reservoirs, wells, and distribution networks</p>
                </Link>
                <Link href="/services/healthcare-infrastructure" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-1">Healthcare Facilities</h3>
                  <p className="text-sm text-slate-600">Hospitals, clinics, and medical centers</p>
                </Link>
                <Link href="/services/educational-facilities" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-1">Educational Buildings</h3>
                  <p className="text-sm text-slate-600">Schools and TVET training centers</p>
                </Link>
                <Link href="/services/roads-and-bridges" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-1">Roads & Bridges</h3>
                  <p className="text-sm text-slate-600">Gravel roads and bridge construction</p>
                </Link>
                <Link href="/services/bim-design" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-1">BIM Design Services</h3>
                  <p className="text-sm text-slate-600">Digital construction technology</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">
            Regional Coverage
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We serve clients across 7 Ethiopian regions with local expertise and understanding.
          </p>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Addis Ababa</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Dire Dawa</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Oromia</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Somali</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Afar</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">Tigray</span>
            <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium">North Shewa</span>
          </div>
        </div>
      </section>
    </main>
  )
}
