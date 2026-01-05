import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gravel Roads That Last: Engineering Durable Road Networks for Ethiopia',
  description: 'Technical guide to gravel road construction in Ethiopia. Proper compaction, drainage design, material selection, and maintenance for long-lasting rural roads.',
  keywords: 'gravel road construction, road construction methods Ethiopia, rural infrastructure, road engineering, compaction',
}

export default function GravelRoadBlog() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container-pad">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0047AB]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Gravel Road Construction</span>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-[#0047AB] to-[#003380] text-white">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Technical Guide
            </span>
            <span className="text-sm text-white/70">13 min read</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Gravel Roads That Last: Engineering Durable Road Networks
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Why gravel roads fail and how proper engineering creates rural infrastructure that serves communities for decades.
          </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container-pad max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">The Backbone of Rural Development</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In Ethiopia, gravel roads connect rural communities to markets, schools, and healthcare. They're not glamorous—but they're essential. A well-built gravel road:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Reduces transport costs by 40-60%</li>
              <li>Enables year-round market access for farmers</li>
              <li>Improves school attendance (children can walk safely)</li>
              <li>Facilitates emergency medical transport</li>
              <li>Attracts investment and economic development</li>
            </ul>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Yet poorly built gravel roads fail within 2-3 years, wasting resources and leaving communities isolated. The difference between success and failure lies in engineering fundamentals.
            </p>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Why Gravel Roads Fail</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              After building hundreds of kilometers of gravel roads, we've identified the three primary failure modes:
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Poor Drainage (60% of Failures)</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Water is the enemy of gravel roads. When water accumulates on or under the road surface:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Gravel becomes saturated and loses strength</li>
              <li>Traffic creates ruts and potholes</li>
              <li>Erosion washes away material</li>
              <li>Sub-base softens, causing settlement</li>
            </ul>

            <div className="bg-red-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Common Drainage Mistakes</h4>
              <ul className="space-y-2 text-slate-700">
                <li>✗ Flat road surface (no camber for water runoff)</li>
                <li>✗ Missing or inadequate side drains</li>
                <li>✗ Culverts too small for peak flow</li>
                <li>✗ No mitre drains on slopes</li>
                <li>✗ Drains not maintained (vegetation blocks flow)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Inadequate Compaction (25% of Failures)</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Loose gravel compresses under traffic, creating ruts and corrugations. Proper compaction requires:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Optimal moisture:</strong> Material must be at correct water content (usually 8-12%)</li>
              <li><strong>Proper equipment:</strong> Vibratory rollers, not just graders</li>
              <li><strong>Layer thickness:</strong> Maximum 150mm per lift</li>
              <li><strong>Sufficient passes:</strong> Minimum 6-8 passes with roller</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Wrong Material Selection (15% of Failures)</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Not all gravel is suitable for roads. Material must meet specific criteria:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Gradation:</strong> Mix of sizes from fine to coarse (prevents segregation)</li>
              <li><strong>Plasticity:</strong> Some clay content for binding (but not too much)</li>
              <li><strong>Strength:</strong> California Bearing Ratio (CBR) {'>'} 30%</li>
              <li><strong>Durability:</strong> Resistant to weathering and abrasion</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Our Method: The 7-Step Process</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 1: Geotechnical Survey</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Before design, we test the existing soil to understand:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Soil type and bearing capacity</li>
              <li>Groundwater level</li>
              <li>Expansive clay presence</li>
              <li>Rock depth (for cut sections)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 2: Drainage Design</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Comprehensive drainage system including:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li><strong>Road Camber:</strong> 4-6% cross-slope for water runoff</li>
              <li><strong>Side Drains:</strong> Trapezoidal channels 0.5m deep minimum</li>
              <li><strong>Culverts:</strong> Sized for 25-year flood event</li>
              <li><strong>Mitre Drains:</strong> Every 50m on slopes {'>'} 5%</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 3: Sub-Base Preparation</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The foundation determines road longevity:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Remove topsoil and organic material</li>
              <li>Scarify existing surface to 150mm depth</li>
              <li>Add moisture to optimal level</li>
              <li>Compact to 95% maximum dry density</li>
              <li>Proof-roll with loaded truck to verify strength</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 4: Material Selection & Testing</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We test potential gravel sources for:
            </p>
            <div className="bg-slate-100 p-6 rounded-xl mb-8">
              <ul className="space-y-2 text-slate-700">
                <li><strong>Gradation:</strong> Sieve analysis (must meet specification curve)</li>
                <li><strong>Plasticity Index:</strong> 4-9% ideal (provides binding without swelling)</li>
                <li><strong>CBR:</strong> {'>'} 30% minimum (measures bearing strength)</li>
                <li><strong>Los Angeles Abrasion:</strong> {'<'} 50% (durability test)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 5: Gravel Placement & Compaction</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Critical execution phase:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Spread gravel in 150mm lifts (not thicker)</li>
              <li>Add water to achieve optimal moisture</li>
              <li>Compact with vibratory roller (8 passes minimum)</li>
              <li>Test density every 100m (must achieve 98% max dry density)</li>
              <li>Shape final surface with motor grader</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 6: Quality Control</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Continuous testing ensures standards are met:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Nuclear density gauge tests every 100m</li>
              <li>Camber verification with level</li>
              <li>Drainage flow testing after rain</li>
              <li>Surface smoothness measurement</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">Step 7: Maintenance Planning</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Even well-built roads need maintenance. We train local communities on:
            </p>
            <ul className="space-y-2 text-slate-700 mb-8 ml-6">
              <li>Monthly drain cleaning (remove vegetation/sediment)</li>
              <li>Pothole patching (compact new material properly)</li>
              <li>Grading schedule (reshape surface annually)</li>
              <li>Culvert inspection after heavy rains</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Case Study: 45km Regional Road</h2>
            
            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-slate-900 mb-4">Project Details</h4>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li><strong>Location:</strong> Oromia Region</li>
                <li><strong>Length:</strong> 45 kilometers</li>
                <li><strong>Completion:</strong> 2020</li>
                <li><strong>Budget:</strong> ETB 120 million</li>
              </ul>
              <h4 className="font-bold text-slate-900 mb-3">Results (4 Years Later)</h4>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Road still in excellent condition</li>
                <li>✓ Only minor maintenance required (drain cleaning)</li>
                <li>✓ Connects 8 villages to regional market</li>
                <li>✓ Reduced transport costs by 55%</li>
                <li>✓ School attendance increased 40%</li>
              </ul>
            </div>

            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 mt-12">Gravel Roads Are the Backbone of Rural Development</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              While paved highways get attention, gravel roads quietly transform rural economies. They're cost-effective (1/10 the cost of asphalt), use local materials, and can be maintained by communities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              But they must be built right. Cutting corners on drainage, compaction, or materials guarantees failure. Investing in proper engineering creates infrastructure that serves communities for 15-20 years with minimal maintenance.
            </p>

            <div className="bg-[#0047AB] text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Planning a Road Project?</h3>
              <p className="text-white/90 mb-6">
                Our road construction team brings 29+ years of experience building durable gravel roads across Ethiopia's diverse terrain. From feasibility studies to final commissioning, we deliver infrastructure that lasts.
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
