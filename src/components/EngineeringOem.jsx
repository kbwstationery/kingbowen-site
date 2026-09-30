import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Cog, Box, Flame, Sparkles, Layers } from 'lucide-react';

export default function EngineeringOem() {
  const capabilities = [
    {
      step: '01',
      title: 'Aviation-Grade Aluminum Extrusion & Anodizing',
      desc: 'In-house extrusion and surface matte satin anodizing. Provides structural deflection resistance, zero sharp burrs, and anti-corrosion endurance in coastal environments.'
    },
    {
      step: '02',
      title: 'Anti-Warping Honeycomb Core Lamination',
      desc: 'Automated continuous hot-melt PUR pressing with high-density paper honeycomb and galvanized backing steel sheet. Guaranteed flat and wobble-free under extreme temperature shifts.'
    },
    {
      step: '03',
      title: 'Triple-Baked Magnetic Lacquer Coating',
      desc: 'Specialized dry-erase lacquer cured at high temperatures. Verified 10,000+ writing and wiping cycles without ghosting or staining. Works with any standard alcohol-based dry-erase marker.'
    },
    {
      step: '04',
      title: 'Custom Laser Branding & Functional Ruling',
      desc: 'Precision laser-etched brand logos, custom silk-screened planning grids, music staves, coordinate axes, or corporate branding according to client CAD drawings.'
    },
    {
      step: '05',
      title: 'ISTA-3A Drop-Tested Mail Order Packaging',
      desc: 'Engineered packaging solutions for cross-border e-commerce and retail distribution. 5-layer heavy corrugated cartons with custom-molded EPS edge and corner buffers.'
    }
  ];

  const testProtocols = [
    { name: '10,000-Cycle Dry Erase Test', status: 'Passed / Zero Ghosting' },
    { name: '48h Salt Spray Anti-Corrosion', status: 'Passed / Grade 10' },
    { name: '1.2m Package Drop Test (ISTA-1A)', status: 'Passed / Zero Corner Dent' },
    { name: 'Magnet Retention Force Check', status: 'Verified High Adhesion' },
  ];

  return (
    <section id="engineering" className="py-16 md:py-24 bg-white border-b border-border" data-component="engineering-oem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-text mb-2">
            <Cog className="w-4 h-4" />
            <span>Industrial Manufacturing & Quality Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            30 Years of OEM/ODM Engineering Precision
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            From raw aluminum ingot processing to finished drop-tested carton, Heshan Jinbowen maintains complete vertical production control to guarantee international distributor reliability.
          </p>
        </div>

        {/* Content Layout: Left Capabilities List / Right Facility Image & Quality Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 5 Process Steps */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap) => (
              <div
                key={cap.step}
                className="p-5 rounded-lg border border-border bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded bg-white border border-border flex items-center justify-center font-mono font-bold text-accent text-sm flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  {cap.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Factory Workshop Visual & Testing Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Facility Card */}
            <div className="rounded-lg border border-border overflow-hidden bg-slate-100 shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="http://127.0.0.1:9999/assets/images/factory-gate.jpg"
                  alt="Jinbowen Standardized 19,000 m² Production Base"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="text-xs font-semibold text-accent-on-dark uppercase tracking-wider">
                      Heshan Production Base
                    </div>
                    <div className="text-base font-bold">
                      19,000+ m² Standardized Clean Assembly Line
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white text-xs text-secondary flex items-center justify-between border-t border-border">
                <span>Monthly Capacity: 150,000+ Units</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ISO9001 & BSCI Certified
                </span>
              </div>
            </div>

            {/* In-House Testing Laboratory Box */}
            <div className="p-5 bg-primary text-white rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-accent-on-dark" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  In-House Rigorous Inspection Standards
                </h4>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Every production lot undergoes statistical sampling before final container loading:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {testProtocols.map((test, tIdx) => (
                  <div key={tIdx} className="p-2.5 rounded bg-white/5 border border-white/10 flex flex-col justify-between">
                    <span className="text-slate-300 font-medium mb-1">{test.name}</span>
                    <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
