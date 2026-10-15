import React, { useEffect, useState } from 'react';
import { Factory, ShieldCheck, Film, Video, ArrowRight, X } from 'lucide-react';

export default function FactoryTour() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePhoto(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [activePhoto]);

  const factoryGallery = [
    {
      id: 'gate',
      title: 'Heshan Factory Main Gate',
      subtitle: 'Headquarters & Logistics Entrance',
      image: '/assets/images/factory-gate.webp',
      tag: 'Campus Entrance',
      desc: 'Located in the core industrial corridor of Heshan City, Guangdong, with direct highway access to Shenzhen and Guangzhou international shipping ports.'
    },
    {
      id: 'building',
      title: 'Standardized Industrial Facility',
      subtitle: 'Multi-Story Manufacturing Complex',
      image: '/assets/images/factory-building.jpg',
      tag: '19,000+ m² Footprint',
      desc: 'Purpose-built industrial plant housing automated raw material warehouses, precision extrusion workshops, and multi-tier assembly lines.'
    },
    {
      id: 'panel-fabrication',
      title: 'Raw Material Panel Fabrication Workshop',
      subtitle: 'Substrate Board Production & Leveling Line',
      image: '/assets/images/factory-assembly-1.jpg',
      tag: 'Panel Fabrication',
      desc: 'Dedicated production workshop for raw material panel core fabrication, steel surface preparation, and structural backing board processing.'
    },
    {
      id: 'warehouse-raw',
      title: 'Raw Material Coil Warehouse',
      subtitle: 'Heavy-Duty Steel & Lacquer Coils',
      image: '/assets/images/factory-warehouse-raw.webp',
      tag: 'Raw Materials',
      desc: 'Massive stock of premium cold-rolled steel coils, galvanized backing sheets, and aviation-grade aluminum profiles ensuring prompt delivery and price stability.'
    },
    {
      id: 'cutting',
      title: 'Whiteboard Panel Precision Cutting',
      subtitle: 'Steel Sheet & Panel Sizing Line',
      image: '/assets/images/factory-material-cutting.jpg',
      tag: 'Extrusion & Cutting',
      desc: 'Precision industrial shearing line for whiteboard lacquered steel surface panels and backing sheets, calibrated for zero-burr dimensional cutting.'
    },
    {
      id: 'warehouse-semi',
      title: 'Semi-finished Goods Warehouse',
      subtitle: '2nd Floor Packaging & Semi-Finished Storage',
      image: '/assets/images/factory-assembly-2.jpg',
      tag: 'Semi-Finished Warehouse',
      desc: 'Dedicated 2nd floor warehouse staging packaging raw materials, protective cartons, and semi-finished whiteboard panels ready for frame fitting.'
    },
    {
      id: 'workshop-2',
      title: 'Continuous PUR Panel Lamination',
      subtitle: 'Automated Adhesive Spraying & Roller Gluing Equipment',
      image: '/assets/images/factory-workshop-3.webp',
      video: '/assets/videos/honeycomb-gluing.mp4',
      tag: 'Automated Gluing',
      desc: 'Equipped with automated adhesive spraying and honeycomb core roller-gluing machinery, ensuring uniform PUR bonding for high-flatness whiteboard sandwich panels.'
    },
    {
      id: 'assembly-2',
      title: 'Standardized Assembly Workshop',
      subtitle: 'Clean & Safe Workplace Layout',
      image: '/assets/images/factory-workshop-1.jpg',
      tag: 'Assembly Workshop',
      desc: 'Maintained under 5S visual management standards and compliant with BSCI European occupational health and safety regulations.'
    },
    {
      id: 'assembly-1',
      title: 'Final Quality Inspection & Packing',
      subtitle: '4th Floor Quality Inspection & Export Packaging Line',
      image: '/assets/images/factory-workshop-2.jpg',
      tag: 'Final QC & Packing',
      desc: '4th floor quality inspection and export packaging staging line. Every completed unit passes surface wipe-testing and edge inspection before being packaged in drop-tested 5-layer corrugated cartons.'
    }
  ];

  return (
    <section id="factory-tour" className="py-14 md:py-24 bg-white border-b border-border" data-component="factory-tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
              <Factory className="w-4 h-4" />
              <span>Inside our factory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
              From raw material to finished board
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>BSCI & ISO 9001:2015 audited</span>
          </div>
        </div>

        {/* Complete Factory Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factoryGallery.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-border overflow-hidden hover:border-[#aeb5b3] transition-colors group flex flex-col"
              data-component="factory-card"
            >
              <button
                type="button"
                onClick={() => setActivePhoto(item)}
                className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                aria-label={`${item.video ? 'Watch video and view details for' : 'View details for'} ${item.title}`}
              >
                <div className="relative aspect-[4/3] bg-[#f2f3f1] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-200"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#42494c] text-[11px] font-semibold px-2.5 py-1 border border-white/80">
                    {item.tag}
                  </div>
                  {item.video && (
                    <div className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold px-2.5 py-1 flex items-center gap-1.5">
                      <Film className="w-3 h-3" />
                      <span>Video</span>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2 min-h-[2.5rem]">
                    {item.title}
                  </h3>
                  <div className="mt-3 min-h-11 inline-flex items-center gap-2 text-sm text-accent font-semibold">
                    <span>{item.video ? 'Video & Details' : 'Details'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Factory Video Feature Banner */}
        <div className="mt-10 border border-border bg-[#f2f3f1] p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-primary">Factory process videos available</h3>
              <p className="text-sm text-secondary mt-1">See panel cutting, automated gluing, lamination and assembly.</p>
            </div>
          </div>
          <a href="#rfq-inquiry" className="min-h-12 px-5 bg-primary hover:bg-[#334247] text-white text-sm font-bold flex items-center gap-2 transition-colors">
            Request factory files
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white max-w-4xl w-full overflow-hidden shadow-2xl relative border border-border"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="factory-detail-title"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 w-11 h-11 bg-primary/85 hover:bg-primary text-white rounded-full z-10 inline-flex items-center justify-center"
              aria-label="Close factory details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-slate-900 flex items-center justify-center overflow-hidden">
              {activePhoto.video ? (
                <video
                  src={activePhoto.video}
                  poster={activePhoto.image}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[75vh] w-full object-contain"
                />
              ) : (
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              )}
            </div>

            <div className="p-5 sm:p-7 bg-white">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.08em] mb-3">
                <span>{activePhoto.tag}</span>
                <span aria-hidden="true">•</span>
                <span>Heshan City Jinbowen Industrial</span>
              </div>
              <h3 id="factory-detail-title" className="text-xl sm:text-2xl font-semibold text-primary">
                {activePhoto.title}
              </h3>
              <div className="mt-2 text-sm font-semibold text-[#596164]">
                {activePhoto.subtitle}
              </div>
              <p className="mt-4 text-sm sm:text-base text-secondary leading-relaxed max-w-3xl">
                {activePhoto.desc}
              </p>
              {activePhoto.video && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-[#e4eff1] text-[#124c5c] text-xs font-semibold border border-[#c8dde1]">
                  <Film className="w-4 h-4" />
                  <span>On-site video: honeycomb core roller-gluing and lamination</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
