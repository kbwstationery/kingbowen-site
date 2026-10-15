import React from 'react';
import { HelpCircle } from 'lucide-react';

export const faqs = [
  {
    q: 'Does Kingbowen provide custom OEM/ODM whiteboard manufacturing?',
    a: 'Yes. Kingbowen provides full OEM/ODM services including bespoke dimensions, custom aluminum frame profiles and anodized finishes, laser logo engraving, custom silk-screen grid and planner printing, and ISTA-3A drop-tested retail packaging.'
  },
  {
    q: 'What certifications and audits does the Kingbowen factory hold?',
    a: 'Kingbowen is ISO 9001:2015 certified and has successfully passed the BSCI (Business Social Compliance Initiative) European social compliance audit. All products use REACH and RoHS compliant raw materials.'
  },
  {
    q: 'What is the minimum order quantity (MOQ) and production lead time?',
    a: 'Kingbowen supports trial orders starting from 50 to 100 units to facilitate distributor market testing. Standard production lead time is 15 to 25 days with flexible export terms including FOB Shenzhen/Guangzhou, CIF, and DDP.'
  },
  {
    q: 'Can I start with a trial order before committing to large volumes?',
    a: 'Yes. Kingbowen supports trial orders starting from 50 to 100 units to facilitate distributor market testing before you scale to larger volumes.'
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-14 md:py-24 bg-white border-b border-border" data-component="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Buyer Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary text-sm mt-3">
            Quick answers on OEM/ODM capability, compliance, minimum orders and lead time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-border rounded-lg p-5 bg-slate-50/50">
              <h3 className="text-sm font-bold text-primary mb-2">{item.q}</h3>
              <p className="text-xs text-secondary leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
