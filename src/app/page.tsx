"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { companyProfile, services, stats, projects, methodology } from "./data";

function ServiceIcon({ icon }: { icon: string }) {
  if (icon === "Building") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 012-2h4a2 2 0 012 2v2m-6-6h.01M12 10h.01M16 14h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (icon === "Water") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2C6 8.5 4 12 4 15a8 8 0 0016 0c0-3-2-6.5-8-13z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15v-4m0 0l-2 2m2-2l2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (icon === "Road") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M5 20L9 4M19 20L15 4M9 4h6M9 20h6M12 4v4m0 8v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 22V12M12 12C12 7 7 3 2 3c0 5 4 9 10 9zM12 12c0-5 5-9 10-9 0 5-4 9-10 9z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── NAVIGATION ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md py-3 shadow-md border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-pad flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm">
            <div className="relative w-14 h-14 overflow-hidden rounded-md bg-white/10 border border-white/20">
              <Image
                src="/new_logo.png"
                alt="Tekeste Tesfaye Building Contractor logo"
                width={144}
                height={144}
                className="object-contain w-full h-full scale-150"
                priority
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display font-bold text-xl md:text-2xl tracking-wide leading-none text-white">
                TEKESTE TESFAYE
              </span>
              <span className="font-ethiopic text-sm md:text-base leading-tight text-white/70">
                ተከሰተ ተስፋየ · Grade I Contractor
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold tracking-widest uppercase" aria-label="Main navigation">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-amber-400 px-3 py-3 text-sm font-bold uppercase tracking-widest border-b border-white/5 last:border-0 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>


      {/* ── HERO — DARK & DRAMATIC ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]" aria-label="Hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Major construction site with cranes and infrastructure"
            fill
            className="object-cover opacity-25"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-[#000000]/50" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="container-pad relative z-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-amber-500/30 bg-amber-500/10 rounded-full">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-amber-300 text-xs font-bold uppercase tracking-[0.25em]">
                Est. 1995 · Grade I Certified · 29+ Years
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.88] mb-8 text-white">
              BUILDING<br />
              <span className="text-amber-400">ETHIOPIA&apos;S</span><br />
              FUTURE
            </h1>

            <p className="text-white/65 text-lg max-w-xl mb-10 leading-relaxed">
              Ethiopia&apos;s trusted Grade I contractor since 1995. Delivering hospitals, schools,
              water systems, roads, and bridges across 7 regions with proven excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold uppercase tracking-widest text-sm hover:bg-amber-400 active:bg-amber-600 transition-all duration-200 rounded-sm shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-12 pt-10 border-t border-white/10">
              {[
                { value: "Grade I", label: "Ministry Certified" },
                { value: "40+", label: "Projects Completed" },
                { value: "7", label: "Regions Served" },
                { value: "15+", label: "Water Systems" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="text-center px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-amber-500/30 hover:bg-white/8 transition-colors"
                >
                  <div className="text-xl font-display font-bold text-amber-400">{badge.value}</div>
                  <div className="text-white/45 text-xs uppercase tracking-wider mt-0.5">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" aria-hidden="true" />
      </section>


      {/* ── STATS CARD ── */}
      <section className="relative z-20 bg-black pb-24" aria-label="Key statistics">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden shadow-2xl -mt-10 bg-white/5 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 text-center border-r border-white/10 last:border-0 group hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-white/55 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SERVICES — DARK ── */}
      <section id="services" className="py-28 bg-black relative overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

        <div className="container-pad relative z-10">
          <div className="mb-16">
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs font-bold block mb-3">
              What We Build
            </span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-display font-bold text-white">
              OUR <span className="text-amber-400">EXPERTISE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-7 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/9 hover:border-amber-500/35 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-amber-500/12 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all duration-300">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-base font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  Learn more <span aria-hidden="true">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── ABOUT — WHITE ── */}
      <section id="about" className="py-28 bg-white" aria-labelledby="about-heading">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#000000] uppercase tracking-[0.2em] text-xs font-bold block mb-3">Our Story</span>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                ENGINEERING <span className="text-[#000000]">EXCELLENCE</span><br />
                SINCE 1995
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">{companyProfile.intro}</p>

              <blockquote className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl mb-8">
                <p className="text-slate-700 italic leading-relaxed">
                  &ldquo;{companyProfile.mission}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 bg-[#000000] rounded-xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white font-display font-bold text-lg">I</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Grade I Certified Contractor</div>
                  <div className="text-slate-500 text-sm mt-0.5">
                    Ministry of Works &amp; Urban Development, Ethiopia
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-5">
                Operational Regions
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {companyProfile.regions.map((region, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-black/30 hover:bg-amber-50/40 transition-all group"
                  >
                    <span
                      className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-sm font-medium">{region}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ── PROJECTS — SLATE ── */}
      <section id="projects" className="py-28 bg-slate-50" aria-labelledby="projects-heading">
        <div className="container-pad">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#000000] uppercase tracking-[0.2em] text-xs font-bold block mb-3">Portfolio</span>
              <h2 id="projects-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                FEATURED <span className="text-[#000000]">WORKS</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Selected highlights from 40+ completed infrastructure projects across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#000000]/20 hover:-translate-y-1 cursor-default"
              >
                <div className="relative h-52 bg-[#0A0A0A] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wide rounded-sm shadow-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="px-3 py-1.5 bg-black/55 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                      {project.value}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-display font-bold text-slate-900 mb-2 group-hover:text-[#000000] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ── METHODOLOGY — DARK ── */}
      <section id="methodology" className="py-28 bg-[#000000] relative overflow-hidden" aria-labelledby="methodology-heading">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="container-pad relative z-10">
          <div className="mb-16 text-center">
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs font-bold block mb-3">Our Process</span>
            <h2 id="methodology-heading" className="text-4xl md:text-5xl font-display font-bold text-white">
              HOW WE <span className="text-amber-400">BUILD</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {methodology.map((phase, i) => (
              <div key={i} className="relative">
                {i < methodology.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-amber-500/30"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-amber-500/20"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white/35 text-xs uppercase tracking-widest mb-1">Phase {i + 1}</div>
                    <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
                  </div>
                </div>
                <ul className="space-y-3 pl-16">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="text-white/55 text-sm flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full flex-shrink-0" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA BAND ── */}
      <div className="bg-amber-500 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)",
          }}
          aria-hidden="true"
        />
        <div className="container-pad relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Ready to Start Building?
            </h2>
            <p className="text-white/75 text-lg">
              Contact us for a consultation on your next project.
            </p>
          </div>
          <a
            href="tel:+251116299824"
            className="flex-shrink-0 px-8 py-4 bg-white text-amber-600 font-bold uppercase tracking-widest text-sm hover:bg-amber-50 active:bg-amber-100 transition-colors rounded-sm shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            Call Us Now
          </a>
        </div>
      </div>


      {/* ── FOOTER / CONTACT ── */}
      <footer id="contact" className="bg-[#000000] pt-20 pb-10" aria-labelledby="contact-heading">
        <div className="container-pad">
          <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/8">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-14 h-14 overflow-hidden bg-white/8 rounded-md flex-shrink-0">
                  <Image src="/new_logo.png" alt="Tekeste Tesfaye Building Contractor logo" width={144} height={144} className="object-contain w-full h-full scale-150" loading="lazy" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-sm">TEKESTE TESFAYE</div>
                  <div className="text-white/35 text-xs">Building Contractor</div>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Grade I certified contractor delivering infrastructure excellence across Ethiopia since 1995.
              </p>
              <a
                href="https://www.linkedin.com/company/tekeste-tesfaye-construction/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tekeste Tesfaye Building Contractor on LinkedIn"
                className="inline-flex items-center gap-2 text-white/40 hover:text-amber-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div>
              <h2 id="contact-heading" className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                Contact
              </h2>
              <div className="space-y-5">
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-wider mb-2">Phone</div>
                  <a href="tel:+251116299824" className="text-amber-400 text-lg font-bold hover:text-amber-300 transition-colors block leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm">
                    +251 116 29 98 24
                  </a>
                  <a href="tel:+251116299825" className="text-amber-400 text-lg font-bold hover:text-amber-300 transition-colors block leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm">
                    +251 116 29 98 25
                  </a>
                </div>
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a
                    href={`mailto:${companyProfile.email}`}
                    className="text-white/55 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                  >
                    {companyProfile.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Office</h3>
              <address className="not-italic text-white/45 text-sm leading-relaxed mb-6">
                {companyProfile.address}<br />
                P.O. Box {companyProfile.box}<br />
                Addis Ababa, Ethiopia
              </address>
              <div className="inline-block px-4 py-2.5 bg-amber-500/12 border border-amber-500/25 rounded-xl">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">
                  ✓ Grade I Certified Contractor
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} {companyProfile.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
