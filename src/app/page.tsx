"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { companyProfile, services, stats, projects, equipment, methodology } from "./data";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}>
        <div className="container-pad flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded bg-slate-50 border border-slate-200 p-1">
              <Image 
                src="/logo.svg" 
                alt="Tekeste Tesfaye Building Contractor Logo - Grade I Construction Company Ethiopia" 
                width={48} 
                height={48} 
                className="object-contain w-full h-full rounded-sm"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-lg tracking-wide leading-none text-slate-900">
                TEKESTE TESFAYE CONSTRUCTION
              </span>
              <span className="font-ethiopic font-bold text-sm text-slate-800 leading-tight my-0.5">
                ተከሰተ ተስፋየ ህነጽ ሰራ ተቑራጭ
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            {['About', 'Services', 'Projects', 'Methodology', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-[#0047AB] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0047AB] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION - LIGHT */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 grid-pattern">
        <div className="container-pad relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#0047AB]"></span>
              <span className="text-[#0047AB] uppercase tracking-[0.2em] text-sm font-bold">Est. 1995</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 text-slate-900">
              BUILDING <br />
              <span className="text-[#0047AB]">ETHIOPIA'S</span> <br />
              FUTURE
            </h1>
            <p className="text-slate-600 text-lg max-w-xl mb-10 leading-relaxed font-medium">
              Tekeste Tesfaye Building Contractor (Grade I) combines 29+ years of craftsmanship with modern engineering to deliver resilient infrastructure across Ethiopia. Specializing in water systems, hospitals, schools, roads, and bridges.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-8 py-4 bg-[#0047AB] text-white font-bold uppercase tracking-widest hover:bg-[#003380] transition-colors shadow-lg hover:shadow-xl rounded-sm">
                View Projects
              </a>
              <a href="#about" className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-widest hover:border-[#0047AB] hover:text-[#0047AB] bg-white transition-colors rounded-sm">
                Our Legacy
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute top-4 right-4 w-full h-full border-2 border-[#0047AB]/20 rounded-lg z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg shadow-2xl z-10 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                alt="Modern construction architecture in Ethiopia - Tekeste Tesfaye Building Contractor projects"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl rounded-tr-3xl z-20 border-l-4 border-[#0047AB]">
              <div className="text-5xl font-display font-bold text-[#0047AB]">29+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-[#0047AB] text-white py-16">
        <div className="container-pad grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center border-r border-white/20 last:border-0">
              <div className="text-4xl lg:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative bg-white" aria-labelledby="about-heading">
        <div className="container-pad">
          <div className="mb-16 text-center">
            <span className="text-[#0047AB] uppercase tracking-widest text-sm font-bold block mb-2">Our Story</span>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">ENGINEERING <span className="text-[#0047AB]">EXCELLENCE</span></h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {companyProfile.intro}
                </p>
                <div className="bg-slate-50 p-8 border-l-4 border-[#0047AB] rounded-r-lg">
                  <h4 className="text-slate-900 font-bold mb-2 uppercase tracking-wide text-sm">Our Mission</h4>
                  <p className="text-slate-600 italic">"{companyProfile.mission}"</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-slate-900">Operational Regions</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {companyProfile.regions.map((region, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0047AB] transition-all rounded">
                      <span className="w-2 h-2 bg-[#0047AB] rounded-full"></span>
                      <span className="text-slate-600 font-medium">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50 relative" aria-labelledby="services-heading">
        <div className="container-pad relative z-10">
          <div className="mb-16 text-center">
            <span className="text-[#0047AB] uppercase tracking-widest text-sm font-bold block mb-2">Capabilities</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">OUR EXPERTISE</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative border border-transparent hover:border-[#0047AB]/20">
                <div className="w-14 h-14 mb-6 rounded-lg bg-slate-50 text-[#0047AB] p-3 group-hover:bg-[#0047AB] group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    {service.icon === 'Building' && <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 012-2h4a2 2 0 012 2v2m-6-5h6" strokeLinecap="round" strokeLinejoin="round" />}
                    {service.icon === 'Water' && <path d="M12 2L2 22h20L12 2zm0 6v6m0 4v2" strokeLinecap="round" strokeLinejoin="round" />}
                    {service.icon === 'Road' && <path d="M16 4h4a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h4M9 22V4m6 18V4" strokeLinecap="round" strokeLinejoin="round" />}
                    {service.icon === 'Sprout' && <path d="M12 22v-8m0-6V2a10 10 0 00-10 10c0 5.5 4.5 10 10 10h10a10 10 0 00-10-10z" strokeLinecap="round" strokeLinejoin="round" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white" aria-labelledby="projects-heading">
        <div className="container-pad">
          <div className="mb-16 text-center">
            <span className="text-[#0047AB] uppercase tracking-widest text-sm font-bold block mb-2">Portfolio</span>
            <h2 id="projects-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">FEATURED WORKS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="p-6 bg-white">
                  <div className="mb-3">
                    <span className="bg-slate-100 px-3 py-1 text-xs text-slate-900 font-bold uppercase tracking-wider rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-slate-900 group-hover:text-[#0047AB] transition-colors">{project.title}</h3>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY - LIGHT VERSION */}
      <section id="methodology" className="py-24 bg-slate-50" aria-labelledby="methodology-heading">
        <div className="container-pad">
          <div className="mb-16 text-center">
            <span className="text-[#0047AB] uppercase tracking-widest text-sm font-bold block mb-2">Our Process</span>
            <h2 id="methodology-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">HOW WE BUILD</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {methodology.map((phase, i) => (
                <div key={i} className="relative pl-10 border-l border-slate-200 pb-8 last:pb-0 last:border-0">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0047AB] rounded-full ring-4 ring-slate-50"></span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.phase}</h3>
                  <ul className="space-y-3">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="text-slate-600 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#0047AB] rounded-full"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200" aria-labelledby="contact-heading">
        <div className="container-pad">
          <div className="mb-16 text-center">
            <span className="text-[#0047AB] uppercase tracking-widest text-sm font-bold block mb-2">Get In Touch</span>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              READY TO <span className="text-[#0047AB]">BUILD?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-6 text-lg">
              Contact us today for a consultation on your next construction or infrastructure project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h4 className="text-slate-900 uppercase tracking-widest text-sm font-bold mb-4">Phone</h4>
              <a href="tel:+251116299824" className="text-xl font-bold text-[#0047AB] hover:text-slate-900 transition-colors block mb-2">
                +251 116 29 98 24
              </a>
              <a href="tel:+251116299825" className="text-xl font-bold text-[#0047AB] hover:text-slate-900 transition-colors block mb-4">
                +251 116 29 98 25
              </a>
              <a href={`mailto:${companyProfile.email}`} className="text-lg text-slate-600 hover:text-[#0047AB] transition-colors">
                {companyProfile.email}
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-slate-900 uppercase tracking-widest text-sm font-bold mb-4">Office</h4>
              <p className="text-slate-600 leading-relaxed">
                {companyProfile.address}<br />
                {companyProfile.box}<br />
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.svg" 
                alt="Tekeste Tesfaye Building Contractor Logo" 
                width={32} 
                height={32} 
                className="rounded-sm opacity-80"
                loading="lazy"
              />
              <p>&copy; {new Date().getFullYear()} {companyProfile.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/tekeste-tesfaye-construction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#0047AB] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <p className="font-bold text-[#0047AB]">Grade I Certified Contractor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
