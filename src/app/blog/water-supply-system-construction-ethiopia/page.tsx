import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building Water Security: Reservoir Systems Serving 500,000 Ethiopians',
  description: 'Technical guide to water supply system construction in Ethiopia. Reservoir design, distribution networks, and sustainable water infrastructure serving half a million people.',
  keywords: 'water supply system construction, reservoir design Ethiopia, water distribution networks, water infrastructure, hydrological survey',
}

export default function WaterSupplySystemBlog() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0047AB]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Water Supply Systems</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Technical Guide
            </span>
            <span className="text-sm text-white/70">15 min read</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Building Water Security: How Our Reservoir Systems Serve 500,000 Ethiopians
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            A technical deep-dive into water infrastructure design, from hydrological surveys to sustainable distribution networks.
          </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container-pad max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">The Water Crisis in Ethiopia</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ethiopia faces one of the most severe water access challenges in Sub-Saharan Africa. According to recent data:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>77% of rural Ethiopia lacks access to clean water</li>
              <li>Only 42% of the population has access to improved water sources</li>
              <li>Water-related diseases account for 60% of hospital visits</li>
              <li>Women and children spend 6+ hours daily collecting water</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This isn't just a health crisis—it's an economic and educational crisis. Children miss school to fetch water. Women can't participate in income-generating activities. Communities remain trapped in poverty.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Our Solution: Multi-Stage Reservoir Systems</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Over 29 years, we've developed a proven approach to water infrastructure that combines engineering excellence with community sustainability. Our systems have brought clean water to over 500,000 Ethiopians across 7 regions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Stage 1: Hydrological Survey & GIS Analysis</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Every successful water project begins with understanding the water source and demand. We use Geographic Information System (GIS) technology to:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Map population distribution:</strong> Identify where people live and their water needs</li>
              <li><strong>Analyze terrain:</strong> Understand elevation changes for gravity-fed systems</li>
              <li><strong>Locate water sources:</strong> Springs, rivers, groundwater aquifers</li>
              <li><strong>Assess accessibility:</strong> Road access for construction and maintenance</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Case Example: Oromia Regional Water Project</h4>
              <p className="text-slate-700 mb-4">
                Using GIS analysis, we identified a spring source at 2,400m elevation serving a valley community at 2,100m. The 300m elevation difference enabled a gravity-fed system—no pumps required, zero operating costs.
              </p>
              <p className="text-slate-700">
                <strong>Result:</strong> System serves 15,000 people with maintenance-free operation for 15+ years.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Stage 2: Reservoir Design & Construction</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Reservoirs are the heart of any water system. Our design process considers:
            </p>

            <h4 className="text-xl font-bold mb-3 text-slate-900">Capacity Calculation</h4>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We size reservoirs based on peak demand plus emergency reserve:
            </p>
            <div className="bg-slate-100 p-6 rounded-lg mb-6 font-mono text-sm">
              <p>Daily Demand = Population × 20 liters/person/day</p>
              <p>Peak Hour Factor = 2.5× average demand</p>
              <p>Emergency Reserve = 2 days supply</p>
              <p className="mt-4 font-bold">Total Capacity = (Daily Demand × 2.5) + (Daily Demand × 2)</p>
            </div>

            <h4 className="text-xl font-bold mb-3 text-slate-900">Structural Design</h4>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our reservoirs use reinforced concrete with:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Waterproof concrete mix (W/C ratio 0.45)</li>
              <li>Steel reinforcement meeting seismic codes</li>
              <li>Crystalline waterproofing additives</li>
              <li>Inspection hatches and overflow systems</li>
              <li>Automated level sensors and alarms</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Stage 3: Distribution Network Design</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The distribution network delivers water from reservoirs to end users. Critical design elements include:
            </p>

            <h4 className="text-xl font-bold mb-3 text-slate-900">Pipe Sizing & Hydraulic Modeling</h4>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We use hydraulic modeling software to calculate optimal pipe diameters ensuring:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Minimum 10m water pressure at all taps</li>
              <li>Maximum 60m pressure (prevents pipe bursts)</li>
              <li>Flow velocity between 0.6-2.0 m/s (prevents sediment and erosion)</li>
              <li>Pressure reducing valves at elevation changes</li>
            </ul>

            <h4 className="text-xl font-bold mb-3 text-slate-900">Material Selection</h4>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We select pipe materials based on pressure, soil conditions, and budget:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>HDPE (High-Density Polyethylene):</strong> Flexible, corrosion-resistant, ideal for rocky terrain</li>
              <li><strong>PVC (Polyvinyl Chloride):</strong> Cost-effective for low-pressure applications</li>
              <li><strong>Galvanized Steel:</strong> High-pressure mains, river crossings</li>
              <li><strong>Ductile Iron:</strong> Urban areas with heavy traffic loads</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Stage 4: Leak Prevention & Water Loss Control</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Water loss in distribution systems can reach 40-60% without proper design. Our leak prevention strategy includes:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Pressure management zones to reduce stress on pipes</li>
              <li>Air release valves at high points (prevents air locks)</li>
              <li>Washout valves at low points (enables system flushing)</li>
              <li>Isolation valves every 500m (limits impact of breaks)</li>
              <li>Flow meters at key points (detect abnormal consumption)</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Sustainability & Community Ownership</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Technical excellence means nothing if systems fail after we leave. Our sustainability approach includes:
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Water Committee Training</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We establish and train local water committees responsible for:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Daily system inspections and monitoring</li>
              <li>Revenue collection from water fees</li>
              <li>Basic maintenance and repairs</li>
              <li>Conflict resolution among users</li>
              <li>Coordination with regional water authorities</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Renewable Energy Integration</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Where pumping is required, we increasingly integrate solar power:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Solar panels sized for peak pumping demand</li>
              <li>Battery storage for cloudy days</li>
              <li>Automatic pump controllers</li>
              <li>Grid connection as backup</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>Result:</strong> Operating costs drop from $500/month (diesel) to $50/month (maintenance only).
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">The Future of Water Infrastructure in Ethiopia</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ethiopia's water sector is at a turning point. Government investment is increasing. International donors are engaged. Technology is improving. But success requires:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Quality construction:</strong> Systems built to last 25+ years</li>
              <li><strong>Community ownership:</strong> Local management and maintenance</li>
              <li><strong>Sustainable financing:</strong> User fees covering operations</li>
              <li><strong>Climate resilience:</strong> Designs accounting for drought and flooding</li>
            </ul>

            <div className="bg-[#0047AB] text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Planning a Water Infrastructure Project?</h3>
              <p className="text-white/90 mb-6">
                Our water systems team brings 29+ years of experience across 50+ projects. From feasibility studies to final commissioning, we deliver sustainable water infrastructure that transforms communities.
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
