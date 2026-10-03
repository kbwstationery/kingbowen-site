import React, { useState } from 'react';
import { Factory, Eye, CheckCircle2, ShieldCheck, Film, Video, ArrowRight, X } from 'lucide-react';

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
      id: 'warehouse-raw',
      title: 'Raw Material Coil Warehouse',
      subtitle: 'Heavy-Duty Steel & Lacquer Coils',
      image: '/assets/images/factory-warehouse-raw.png',
      tag: 'Raw Materials',
      desc: 'Massive stock of premium cold-rolled steel coils, galvanized backing sheets, and aviation-grade aluminum profiles ensuring prompt delivery and price stability.'
    },
    {
      id: 'workshop-2',
      title: 'Continuous PUR Panel Lamination',
      subtitle: 'Honeycomb Core Hot-Melt Bonding',
      image: '/assets/images/factory-workshop-2.jpg',
      tag: 'Lamination Line',
      desc: 'State-of-the-art continuous gluing and hydraulic pressing system that guarantees dead-flat whiteboard surfaces free from warping or delamination.'
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
      id: 'assembly-2',
      title: 'Component Assembly & Fitting Hall',
      subtitle: '4th Floor Assembly Division',
      image: '/assets/images/factory-workshop-1.jpg',
      tag: 'Frame Fitting',
      desc: 'Systematic assembly benches where technicians attach ergonomic locking levers, 360-degree silent casters, and protective safety corners.'
    },
    {
      id: 'assembly-1',
      title: 'Final Quality Inspection & Packing',
      subtitle: '1st Floor Export Staging Line',
      image: '/assets/images/factory-assembly-1.jpg',
      tag: 'Final QC & Packing',
      desc: 'Every completed unit passes surface wipe-testing and edge inspection before being packaged in drop-tested 5-layer corrugated cartons.'
    },
    {
      id: 'workshop-3',
      title: 'Standardized Assembly Workshop',
      subtitle: 'Clean & Safe Workplace Layout',
      image: '/assets/images/factory-workshop-3.png',
      tag: 'Assembly Workshop',
      desc: 'Maintained under 5S visual management standards and compliant with BSCI European occupational health and safety regulations.'
    }
  ];

  return (
    <section id="factory-tour" className="py-16 md:py-24 bg-white border-b border-border" data-component="factory-tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-text mb-2">
              <Factory className="w-4 h-4" />
              <span>Real Factory Production Floor Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Tour Our 19,000+ m² Manufacturing Base
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>BSCI & ISO9001 Audited Site</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
              <Film className="w-4 h-4 text-accent" />
              <span>Verified Video Audit Available</span>
            </div>
          </div>
        </div>

        {/* 8-Photo Gallery Grid */}
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
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="px-3 py-1 bg-black/60 rounded text-xs font-medium flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Resolution</span>
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
                <span>Inspect Facility Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Factory Video Feature Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-gradient-to-r from-primary to-slate-800 text-white border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-on-dark flex-shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Verified On-Site Factory Inspection Video
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Watch our raw materials coil slitting, PUR automatic gluing honeycomb lamination, and full-line assembly process audited by international third-party inspectors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#rfq-inquiry"
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Request Full Audit Video & Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
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
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
