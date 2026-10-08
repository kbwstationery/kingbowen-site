import React from 'react';
import { Factory, ShieldCheck, Settings2, Globe2 } from 'lucide-react';

export default function TrustBar() {
  const proofPoints = [
    { icon: Factory, value: '19,000+ m²', label: 'Production base' },
    { icon: ShieldCheck, value: 'BSCI & ISO', label: 'Audited systems' },
    { icon: Settings2, value: 'OEM / ODM', label: 'Custom manufacturing' },
    { icon: Globe2, value: '50+ markets', label: 'Export experience' }
  ];

  return (
    <section id="trust-bar" className="bg-white border-b border-border" data-component="trust-credentials-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:divide-x divide-border">
          {proofPoints.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center gap-3 lg:px-6 first:pl-0">
              <Icon className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <div className="text-sm sm:text-base font-bold text-primary">{value}</div>
                <div className="text-xs text-secondary mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
