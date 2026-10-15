import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, BadgeCheck, Leaf, PackageCheck } from 'lucide-react';
import Seo from '../components/Seo';
import TrustBar from '../components/TrustBar';
import RfqFunnel from '../components/RfqFunnel';

const certs = [
  { icon: BadgeCheck, title: 'ISO 9001:2015', desc: 'Certified quality management system governing every stage of production, from raw material to export packing.' },
  { icon: ShieldCheck, title: 'BSCI social compliance', desc: 'Audited occupational health, safety and social compliance aligned with European procurement requirements.' },
  { icon: Leaf, title: 'REACH & RoHS', desc: 'Raw materials comply with EU REACH and RoHS chemical and hazardous-substance regulations.' },
  { icon: PackageCheck, title: 'ISTA-3A packaging', desc: 'Export and retail packaging is ISTA-3A drop-tested to survive international transit.' }
];

export default function CertificationsPage() {
  return (
    <>
      <Seo
        title="Certifications & Compliance | ISO 9001, BSCI, REACH | Kingbowen"
        description="Kingbowen holds ISO 9001:2015 quality management certification and passes BSCI social compliance audits. All products use REACH and RoHS compliant raw materials with ISTA-3A drop-tested export packaging."
        canonicalPath="/certifications"
      />
      <TrustBar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">Certifications</div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">Certified, audited and export-ready</h1>
          <p className="mt-4 text-secondary leading-relaxed">
            The Kingbowen factory holds ISO 9001:2015 quality management certification and passes
            BSCI social compliance audits. All products are manufactured with REACH and RoHS
            compliant raw materials and ship in ISTA-3A drop-tested export packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certs.map((c) => (
            <div key={c.title} className="bg-white border border-border p-6 flex gap-4">
              <c.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h2 className="text-base font-bold text-primary">{c.title}</h2>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 border border-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-primary mb-4">Factory at a glance</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div><dt className="text-3xl font-bold text-accent">2003</dt><dd className="text-xs text-secondary mt-1">Established</dd></div>
            <div><dt className="text-3xl font-bold text-accent">19,000+</dt><dd className="text-xs text-secondary mt-1">m² facility</dd></div>
            <div><dt className="text-3xl font-bold text-accent">50+</dt><dd className="text-xs text-secondary mt-1">Export markets</dd></div>
            <div><dt className="text-3xl font-bold text-accent">ISO</dt><dd className="text-xs text-secondary mt-1">9001:2015</dd></div>
          </dl>
        </div>

        <div className="mt-12 text-center">
          <Link to="/factory" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#334247] transition-colors">
            Tour the factory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <RfqFunnel />
    </>
  );
}
