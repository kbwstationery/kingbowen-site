import React from 'react';
import { ShieldCheck, Factory, Award, Globe, FileCheck, CheckCircle, Cpu } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    {
      icon: Factory,
      title: '19,000+ m² Production Base',
      subtitle: 'Modern Standardized Facility',
      desc: 'Located in Heshan industrial belt, equipped with advanced aluminum extrusion, automated cutting, and assembly lines.'
    },
    {
      icon: ShieldCheck,
      title: 'BSCI & ISO 9001:2015',
      subtitle: 'Social Compliance & Quality Audit',
      desc: 'Certified social responsibility management and ISO 9001:2015 quality management system, meeting strict European B2B procurement standards.'
    },
    {
      icon: Award,
      title: 'Nearly 100 Patents',
      subtitle: 'Proprietary IP & R&D Excellence',
      desc: 'Independent intellectual property portfolio covering utility models, structural lock designs, and ergonomic easel mechanisms.'
    },
    {
      icon: Globe,
      title: '30 Years OEM/ODM',
      subtitle: 'Global Export to 50+ Countries',
      desc: 'Long-term manufacturing partner for major stationery distributors, educational furniture brands, and retail chains in Europe & North America.'
    }
  ];

  return (
    <section id="trust-bar" className="bg-primary text-white py-12 md:py-16 border-y border-slate-800" data-component="trust-credentials-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-accent-on-dark text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Manufacturer Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Trust & Manufacturing Rigor
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Direct audited factory compliance ensuring complete peace of mind for international contract tenders, brand licensing, and volume supply chains.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="bg-primary-soft/60 hover:bg-primary-soft p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-accent-on-dark mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-on-dark transition-colors">
                    {cred.title}
                  </h3>
                  <div className="text-xs font-semibold text-accent-signal uppercase tracking-wider mb-2">
                    {cred.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cred.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                  <span>Traceable Official Audit</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Badges Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-slate-300 font-bold uppercase">Accreditations & Compliance:</span>
            <span>BSCI Social Audit</span>
            <span>•</span>
            <span>ISO 9001:2015 Quality System</span>
            <span>•</span>
            <span>REACH & RoHS Compliant Materials</span>
            <span>•</span>
            <span>EN 71 Safe Coatings</span>
          </div>
          <div className="text-slate-400">
            Audit Documentation available upon request with signed NDA
          </div>
        </div>

      </div>
    </section>
  );
}
