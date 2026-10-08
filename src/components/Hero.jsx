import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#fbfbfa] py-8 md:py-14 border-b border-border" data-component="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
          <div className="lg:col-span-5 bg-[#5c716d] text-white px-7 py-12 sm:px-10 lg:px-12 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/75 mb-4">
              Factory-direct whiteboard manufacturer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.06] tracking-tight">
              Whiteboards built for work, learning and ideas.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-md leading-relaxed">
              Mobile, wall-mounted and custom writing boards for distributors, offices and schools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="min-h-12 px-6 bg-white text-primary font-bold inline-flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                Explore products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#rfq-inquiry" className="min-h-12 px-6 border border-white/60 text-white font-bold inline-flex items-center justify-center hover:bg-white/10 transition-colors">
                Request a quote
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> OEM/ODM</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> BSCI & ISO 9001:2015</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Trial MOQ available</span>
            </div>
          </div>

          <div className="lg:col-span-7 min-h-[340px] lg:min-h-[440px] bg-slate-100 overflow-hidden">
            <img
              src="/assets/images/scenario-meeting-collaboration.png"
              alt="Team collaborating around a magnetic whiteboard in a modern meeting room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
