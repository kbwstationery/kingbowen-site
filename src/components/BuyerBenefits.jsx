import React from 'react';
import { DollarSign, Truck, Sparkles, Clock, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export default function BuyerBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Direct Manufacturer Pricing',
      desc: 'Eliminate intermediate trading markups. Benefit from raw material bulk procurement advantages and vertical production efficiency.'
    },
    {
      icon: Sparkles,
      title: 'Flexible Trial MOQ (50-100 Pcs)',
      desc: 'Test your target market with low initial order quantities before committing to full 20ft/40ft container production runs.'
    },
    {
      icon: Truck,
      title: 'Complete Export Incoterms Support',
      desc: 'Seamless execution across FOB (Shenzhen/Guangzhou), CIF, or DDP direct to your commercial warehouse or 3PL center.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Full Private Label & Packaging',
      desc: 'Customized outer cartons with your brand barcode, multi-language instruction manuals, and retail-ready color sleeves.'
    },
    {
      icon: Clock,
      title: '4-Hour Rapid Response SLA',
      desc: 'Dedicated export sales engineers fluent in English to provide accurate CAD drawings, quotations, and freight estimates within 4 business hours.'
    },
    {
      icon: ShieldCheck,
      title: 'Commercial Warranty',
      desc: 'Comprehensive manufacturing defect coverage. Free replacement units included in subsequent shipments.'
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-20 bg-white border-b border-border" data-component="distributor-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-text mb-2">
            <span>Partnership Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Why Global Stationery & Office Distributors Choose Kingbowen
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            We operate not merely as a vendor, but as a strategic supply chain extension for established office brands, e-commerce leaders, and educational contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded bg-white border border-border flex items-center justify-center text-accent mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
