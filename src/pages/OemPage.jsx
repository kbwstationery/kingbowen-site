import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Palette, Stamp, Printer, PackageCheck, Settings } from 'lucide-react';
import Seo from '../components/Seo';
import TrustBar from '../components/TrustBar';
import RfqFunnel from '../components/RfqFunnel';

const capabilities = [
  { icon: Ruler, title: 'Bespoke dimensions', desc: 'Custom board sizes and aspect ratios to match your market or retail planogram.' },
  { icon: Palette, title: 'Frame profiles & finishes', desc: 'Custom aluminum frame profiles with anodized or powder-coated color finishes.' },
  { icon: Stamp, title: 'Laser logo engraving', desc: 'Permanent laser-engraved branding on frames, corner protectors and packaging.' },
  { icon: Printer, title: 'Silk-screen printing', desc: 'Custom grid lines, planner layouts and printed surface graphics.' },
  { icon: PackageCheck, title: 'Retail packaging', desc: 'ISTA-3A drop-tested export and retail packaging designed for your channel.' },
  { icon: Settings, title: 'Full ODM development', desc: 'From concept and sampling to mass production under one roof.' }
];

const steps = [
  { n: '01', title: 'Design & sampling', desc: 'Share drawings or a concept; we produce samples for approval.' },
  { n: '02', title: 'Tooling & customization', desc: 'Custom profiles, finishes, printing and packaging are tooled.' },
  { n: '03', title: 'Mass production', desc: 'In-house panel fabrication, lamination and assembly at 19,000+ m².' },
  { n: '04', title: 'QC & export packing', desc: 'Final inspection and ISTA-3A export packing on the 4th-floor line.' }
];

export default function OemPage() {
  return (
    <>
      <Seo
        title="OEM / ODM Whiteboard Manufacturing | Kingbowen"
        description="Kingbowen provides full OEM/ODM whiteboard manufacturing: bespoke dimensions, custom aluminum frame profiles and anodized finishes, laser logo engraving, silk-screen grid printing and ISTA-3A drop-tested retail packaging."
        canonicalPath="/oem-odm"
      />
      <TrustBar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">OEM / ODM</div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">Custom whiteboard manufacturing, in-house</h1>
          <p className="mt-4 text-secondary leading-relaxed">
            Kingbowen provides full OEM/ODM services including bespoke dimensions, custom aluminum frame
            profiles and anodized finishes, laser logo engraving, custom silk-screen grid and planner
            printing, and ISTA-3A drop-tested retail packaging. Every step is handled inside our
            19,000+ m² facility in Heshan City, Guangdong.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-white border border-border p-6">
              <c.icon className="w-7 h-7 text-accent mb-4" />
              <h2 className="text-base font-bold text-primary">{c.title}</h2>
              <p className="mt-2 text-sm text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">How an OEM project runs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-slate-50 border border-border p-6">
                <div className="text-3xl font-bold text-accent/30">{s.n}</div>
                <h3 className="mt-2 text-base font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#334247] transition-colors">
            Start an OEM project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <RfqFunnel />
    </>
  );
}
