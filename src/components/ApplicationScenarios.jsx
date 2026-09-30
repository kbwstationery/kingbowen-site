import React from 'react';
import { Briefcase, GraduationCap, Factory, HeartPulse, ArrowRight } from 'lucide-react';

export default function ApplicationScenarios() {
  const sectors = [
    {
      icon: Briefcase,
      title: 'Corporate & Agile Workspaces',
      headline: 'Mobile Ideation & Scrum Rooms',
      desc: 'Mobile double-sided rolling boards allow agile engineering teams to reconfigure meeting spaces instantly, conduct sprint standups, and partition collaboration pods.',
      keyBenefit: 'Double-sided dry erase & 360° quiet casters'
    },
    {
      icon: GraduationCap,
      title: 'Higher Education & Schools',
      headline: 'Classroom & Lecture Hall Durability',
      desc: 'High-traffic teaching surfaces engineered with scratch-resistant porcelain or baked enamel steel that withstands continuous marker friction without ghosting.',
      keyBenefit: 'ABS safety rounded corners & anti-dent core'
    },
    {
      icon: Factory,
      title: 'Lean 5S Manufacturing & Logistics',
      headline: 'Shop-Floor Visual Management',
      desc: 'Lockable showcase bulletin boards and wall-mounted boards designed for production shift schedules, safety notices, and lean continuous improvement displays.',
      keyBenefit: 'Tamperproof locks & moisture-proof galvanized backing'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Executive Suites',
      headline: 'Ultra-Hygienic Tempered Glass Systems',
      desc: 'Non-porous tempered glass boards offer zero bacterial penetration, easy sterilization with medical wipes, and sleek architectural elegance.',
      keyBenefit: '100% non-porous surface & shatterproof glass'
    }
  ];

  return (
    <section id="applications" className="py-16 md:py-24 bg-surface-sunken border-b border-border" data-component="application-scenarios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-text mb-2">
            <span>Versatile Commercial Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Tailored Visual Solutions by Industry
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            Engineered to meet specific ergonomic, safety, and durability standards across international business, education, and institutional sectors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-border p-6 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-slate-50 border border-border flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-xs font-bold text-accent-text uppercase tracking-wider mb-1">
                    {sec.title}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {sec.headline}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed mb-4">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-primary">
                    Core Edge:
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    {sec.keyBenefit}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
