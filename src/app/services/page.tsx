import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Construction Services',
  description: 'Comprehensive construction services from Grade I contractor in Ethiopia. Water systems, healthcare facilities, educational buildings, roads, bridges, and infrastructure development.',
  keywords: 'construction services Ethiopia, general contractor services, building services Addis Ababa',
}

const services = [
  {
    title: 'Water Systems',
    slug: 'water-systems',
    description: 'Comprehensive water supply system construction including reservoirs, wells, and distribution networks.',
    icon: '💧',
    keywords: 'Water supply, Reservoirs, Distribution networks'
  },
  {
    title: 'Healthcare Infrastructure',
    slug: 'healthcare-infrastructure',
    description: 'Hospital and clinic construction meeting international standards with specialized medical facility expertise.',
    icon: '🏥',
    keywords: 'Hospitals, Clinics, Medical facilities'
  },
  {
    title: 'Educational Facilities',
    slug: 'educational-facilities',
    description: 'Schools and TVET centers designed for modern learning environments and technical training.',
    icon: '🎓',
    keywords: 'Schools, TVET centers, Educational buildings'
  },
  {
    title: 'Roads & Bridges',
    slug: 'roads-and-bridges',
    description: 'Durable road networks and bridge construction for improved connectivity and infrastructure.',
    icon: '🛣️',
    keywords: 'Gravel roads, Bridges, Highway construction'
  },
  {
    title: 'BIM Design',
    slug: 'bim-design',
    description: 'Building Information Modeling for precise coordination and cost-effective project delivery.',
    icon: '📐',
    keywords: 'BIM modeling, Digital design, 3D coordination'
  },
  {
    title: 'GIS Services',
    slug: 'gis-services',
    description: 'Geographic Information System analysis for optimal site selection and project planning.',
    icon: '🗺️',
    keywords: 'GIS analysis, Site assessment, Geospatial planning'
  },
  {
    title: 'Irrigation Systems',
    slug: 'irrigation',
    description: 'Agricultural irrigation infrastructure for improved crop yields and water management.',
    icon: '🌾',
    keywords: 'Irrigation, Agricultural systems, Water management'
  },
  {
    title: 'Commercial Buildings',
    slug: 'commercial-buildings',
    description: 'Office complexes and commercial facilities built to modern standards.',
    icon: '🏢',
    keywords: 'Office buildings, Commercial complexes, Business facilities'
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-24">
        <div className="container-pad">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              As a Grade I certified general contractor, Tekeste Tesfaye Building Contractor delivers comprehensive construction services across Ethiopia. With 29+ years of experience and expertise in water systems, healthcare, education, and infrastructure, we bring world-class quality to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-pad">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-[#0047AB] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 group-hover:text-[#0047AB] transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-slate-500 mb-4">
                  <strong>Specialties:</strong> {service.keywords}
                </div>
                <div className="flex items-center gap-2 text-[#0047AB] font-bold">
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Why Choose Tekeste Tesfaye?
            </h2>
            <p className="text-lg text-slate-600">
              Our Grade I certification, owned equipment fleet, and proven track record make us Ethiopia's trusted construction partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Grade I Certified</h3>
              <p className="text-slate-600">
                Highest contractor classification in Ethiopia, qualified for large-scale government and private projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Owned Equipment</h3>
              <p className="text-slate-600">
                20+ pieces of heavy machinery including dozers, excavators, and concrete mixers for rapid project execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">7 Regions Served</h3>
              <p className="text-slate-600">
                Operations across Addis Ababa, Dire Dawa, Oromia, Somali, Afar, Tigray, and North Shewa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and discover how our expertise can bring your construction vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+251116299824"
              className="px-8 py-4 bg-white text-[#0047AB] font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm"
            >
              Call: +251 116 29 98 24
            </a>
            <a
              href="mailto:tekestetesfaye2@gmail.com"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0047AB] transition-colors rounded-sm"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
