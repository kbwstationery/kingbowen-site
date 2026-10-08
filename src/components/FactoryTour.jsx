import React, { useState } from 'react';
import { Factory, Eye, ShieldCheck, Film, Video, ArrowRight, X } from 'lucide-react';

export default function FactoryTour() {
  const [activePhoto, setActivePhoto] = useState(null);

  const factoryGallery = [
    {
      id: 'gate',
      title: 'Heshan Factory Main Gate',
      subtitle: 'Headquarters & Logistics Entrance',
      image: '/assets/images/factory-gate.jpg',
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
      image: '/assets/images/factory-warehouse-raw.png',
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
      image: '/assets/images/factory-workshop-3.png',
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
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="bg-slate-50 rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-slate-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-primary/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {item.tag}
                  </div>
                  {item.video && (
                    <div className="absolute top-2.5 right-2.5 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                      <Film className="w-3 h-3" />
                      <span>Video</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="px-3 py-1 bg-black/60 rounded text-xs font-medium flex items-center gap-1">
                      {item.video ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{item.video ? 'Watch Process Video' : 'View Full Resolution'}</span>
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-0 text-[11px] text-accent font-semibold flex items-center gap-1">
                <span>{item.video ? 'Watch Roller-Gluing Video' : 'Inspect Facility Details'}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
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
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
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

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-1">
                <span>{activePhoto.tag}</span>
                <span>•</span>
                <span>Heshan City Jinbowen Industrial</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {activePhoto.title} — {activePhoto.subtitle}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {activePhoto.desc}
              </p>
              {activePhoto.video && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
                  <Film className="w-4 h-4 text-amber-600" />
                  <span>On-Site Process Video: Automated Honeycomb Core Roller-Gluing & Lamination</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
