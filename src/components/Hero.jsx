import React from 'react';
import { ArrowRight, ShieldCheck, Download, Award, CheckCircle2, Sparkles, Building2, Globe } from 'lucide-react';

export default function Hero({ onOpenCatalog }) {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border overflow-hidden" data-component="hero-section">
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Trust Pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-secondary"
              style={{
                textAlign: "left",
                justifyContent: "flex-start"
              }}>
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping"></span>
              <span className="text-primary font-bold">Jinbowen Industrial</span>
              <span className="text-slate-300">|</span>
              <span className="text-accent-signal">30 Years OEM/ODM Legacy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-primary tracking-tight leading-[1.12]">
              Precision-Engineered <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-slate-800 to-accent">
                Visual Presentation Systems
              </span> <br />
              for Global Workplaces & Schools.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
              Factory-direct manufacturer of heavy-duty mobile whiteboards, adjustable flip charts, architectural magnetic boards, and security showcase pin boards. Engineered with rigid honeycomb cores, aviation-grade aluminum profiles, and multi-layer magnetic lacquers.
            </p>

            {/* B2B Key Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl py-2">
              <div className="p-3 bg-white border border-border rounded shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-primary tabular-nums">19,000+<span className="text-accent text-sm font-bold">m²</span></div>
                <div className="text-xs text-secondary mt-0.5 font-medium">Standardized Base</div>
              </div>
              <div className="p-3 bg-white border border-border rounded shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-primary">BSCI <span className="text-emerald-600 text-sm font-bold">& ISO</span></div>
                <div className="text-xs text-secondary mt-0.5 font-medium">Social & Quality Audit</div>
              </div>
              <div className="p-3 bg-white border border-border rounded shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-primary tabular-nums">100+</div>
                <div className="text-xs text-secondary mt-0.5 font-medium">Proprietary Patents</div>
              </div>
              <div className="p-3 bg-white border border-border rounded shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-primary tabular-nums">50+</div>
                <div className="text-xs text-secondary mt-0.5 font-medium">Export Countries</div>
              </div>
            </div>

            {/* Dual CTAs & Guarantee */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#rfq-inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-base font-bold rounded shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Wholesale Catalog & Sample</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-primary border border-border rounded text-base font-semibold shadow-sm transition-all"
              >
                <span>View Product Matrix</span>
              </a>
            </div>

            {/* Security & Fast Turnaround Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-secondary pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Low Trial MOQ for Testing (50 pcs)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom Laser Logo & Packaging</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>4-Hour Fast Quotation Guarantee</span>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Engineering Hotspots */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Product Showcase Card */}
              <div className="relative rounded-lg bg-white p-3 border border-border shadow-xl">
                <div className="relative overflow-hidden rounded bg-slate-100 aspect-[4/3] flex items-center justify-center group">
                  <video
                    src="/assets/videos/factory-tour.mp4"
                    poster="/assets/images/factory-building.jpg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Floating Engineering Callout Badge 1 - Positioned at top-left to completely cover alibaba.com watermark */}
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded shadow-md flex items-center gap-2 text-xs pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0"></span>
                    <span className="font-bold text-primary tracking-wide">OFFICIAL FACTORY TOUR</span>
                  </div>
                  {/* Floating Engineering Callout Badge 2 */}

                </div>

                {/* Direct Factory Advantage Box (replacing/covering the 2 components under the video) */}
                <div className="mt-3 bg-primary text-white p-3.5 rounded-lg shadow-md border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded bg-accent text-white flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Direct Factory Advantage</div>
                    <div className="text-[11px] text-slate-300">19,000+ m² Facility • ISO 9001:2015 & BSCI Audited Workshop</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
