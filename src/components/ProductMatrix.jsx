import React, { useState } from 'react';
import { ArrowRight, Layers, Sliders, X } from 'lucide-react';

export default function ProductMatrix({ onSelectProductForRfq }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories (9)' },
    { id: 'mobile', name: 'Mobile Rolling Boards' },
    { id: 'flipchart', name: 'Flip Chart & Easels' },
    { id: 'wall', name: 'Wall-Mounted Boards' },
    { id: 'glass', name: 'Glass & LED Note Boards' },
    { id: 'notice', name: 'Notice Cases & Showcases' },
  ];

  const products = [
    {
      id: 'kbw-rolling-pro',
      category: 'mobile',
      categoryName: 'Mobile Rolling Board',
      name: 'Double-Sided Mobile Rolling Magnetic Whiteboard',
      code: 'KBW-4836-M',
      image: '/assets/images/double-sided-rolling-whiteboard.jpg',
      moq: '50-100 pcs (Trial batch accepted)',
      leadTime: '20-25 Days',
      features: [
        '360° Rotatable with Heavy-Duty Lock Mechanism',
        'Honeycomb Anti-Warping Core Backing',
        'Four 360° Mute Casters with Foot Brakes',
        'Integrated Full-Length Aluminum Pen Tray'
      ],
      specs: {
        'Standard Dimensions': '48"x36", 48"x32", 60"x40", 72"x48"',
        'Frame Material': '15mm Anodized Matte Silver Aluminum Alloy',
        'Board Surface': 'Double-sided 3-layer baked magnetic dry-erase enamel',
        'Core Infill': 'High-density rigid paper honeycomb (anti-dent)',
        'Base Structure': 'Heavy gauge steel tubing with anti-scratch powder coating',
        'Packaging': 'Drop-tested 5-layer export master carton with EPS corner protectors'
      }
    },
    {
      id: 'kbw-x7',
      category: 'mobile',
      categoryName: 'Mobile Rolling Board',
      name: 'Height-Adjustable Commercial Mobile Whiteboard with Dual Lock Bar',
      code: 'KBW-X7',
      image: '/assets/images/kbw-x7.jpg',
      moq: '100 pcs',
      leadTime: '20-25 Days',
      features: [
        'Stepless Height-Adjustable Frame (48"x60" / Multi-Size)',
        'Reinforced Crossbeam for High-Stability Commercial Use',
        'Reversible Dual Surfaces (Lined Planner + Blank)',
        'Heavy-Duty Industrial Wheels for Carpet & Hardwood'
      ],
      specs: {
        'Standard Dimensions': '48"x60" (120x150 cm), 120x90 cm, 150x100 cm',
        'Frame Thickness': '18mm Heavy-Gauge Anodized Aluminum',
        'Adjustment Mechanism': 'Vertical sliding track with dual quick-lock knobs',
        'Wheel Spec': 'Industrial 2-inch dual-wheel mute casters with locks',
        'Testing Standards': 'EN 71-3, REACH non-toxic compliance'
      }
    },
    {
      id: 'kbw-flip-easel',
      category: 'flipchart',
      categoryName: 'Flip Chart & Easel',
      name: 'Height-Adjustable Telescopic Flip Chart Easel Stand',
      code: 'KBW-FC-70100',
      image: '/assets/images/flip-chart-easel-stand.jpg',
      moq: '50 pcs (Custom logo available)',
      leadTime: '20-25 Days',
      features: [
        'Stepless Height Adjustment (110cm - 190cm)',
        'Universal Spring-Loaded Paper Clamp with Movable Hooks',
        'Anti-Slip Tripod Legs with Rubber End Caps',
        'Magnetic Dry-Erase Backboard Surface'
      ],
      specs: {
        'Standard Dimensions': '100 x 70 cm (Board size)',
        'Adjustable Height': '105 cm to 195 cm (Ergonomic for sitting/standing)',
        'Paper Holder': 'Steel spring clamp compatible with all Euro/US flipchart pads',
        'Frame & Legs': 'Powder-coated tubular steel with aluminum frame surround',
        'Foldability': 'Folds flat in 10 seconds for compact storage & transport',
        'Accessories Included': 'Magnetic marker tray, pad hooks'
      }
    },
    {
      id: 'kbw-round-flipchart',
      category: 'flipchart',
      categoryName: 'Flip Chart & Easel',
      name: 'Mobile Round-Base Executive Flip Chart with Wheels',
      code: 'KBW-RB-10070',
      image: '/assets/images/round-base-flipchart.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Stable Circular Weighted Base with 5 Castors',
        '360° Smooth Gliding for Dynamic Meeting Rooms',
        'Integrated Marker Basin & Eraser Caddy',
        'Magnetic Dry-Erase Writing Panel'
      ],
      specs: {
        'Standard Dimensions': '100 x 70 cm Writing Board',
        'Base Diameter': '68 cm Weighted Steel Base with 5 Lockable Nylon Wheels',
        'Height Range': '160 cm to 205 cm adjustable',
        'Finish': 'Satin Silver / Matte Black Electrostatic Powder Coating',
        'Stability Test': 'Passed 15-degree tilt anti-tip test'
      }
    },
    {
      id: 'kbw-wall-board',
      category: 'wall',
      categoryName: 'Wall-Mounted Board',
      name: 'Architectural Ultra-Slim Wall Magnetic Whiteboard',
      code: 'KBW-WALL-9060',
      image: '/assets/images/wall-mounted-magnetic-whiteboard.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      features: [
        'Minimalist 10mm Ultra-Slim Bezel Profile',
        'Galvanized Steel Backplate for Moisture Proofing',
        'Concealed Four-Corner Mounting Hardware',
        'Smooth Erase Guaranteed Without Ghosting'
      ],
      specs: {
        'Available Sizes': '90x60cm, 120x90cm, 150x100cm, 180x120cm, 240x120cm',
        'Surface Material': 'Polymer-coated magnetic steel sheet (0.25mm - 0.4mm)',
        'Corners': 'Impact-resistant ABS engineered safety corners with screw cap covers',
        'Backing': '0.2mm anti-rust galvanized zinc steel sheet',
        'Mounting': 'Horizontal or vertical dual-orientation wall fixings'
      }
    },
    {
      id: 'kbw-desktop-glass',
      category: 'glass',
      categoryName: 'Glass & Desktop Pad',
      name: 'Tempered Glass Desktop Whiteboard with Storage Drawer',
      code: 'KBW-GLASS-DESK',
      image: '/assets/images/desktop-glass-whiteboard.jpg',
      moq: '50 pcs (Ideal for E-commerce & Retail)',
      leadTime: '15-20 Days',
      features: [
        '4mm High-Definition Shatter-Resistant Tempered Glass',
        'Integrated Slide-Out Desk Organizer Drawer for Pens & Clips',
        'Ergonomic Angled Keyboard Stand Profile',
        'Zero-Ghosting Surface & Works with Any Dry Erase Marker'
      ],
      specs: {
        'Dimensions': '45 x 20 x 5 cm (Desktop footprint)',
        'Glass Spec': '4mm ultra-clear tempered glass with polished pencil edge',
        'Drawer Material': 'Heavy-duty ABS chassis with partition compartments',
        'Anti-Slip Base': '6 high-friction silicone pads for desk stability',
        'Packaging': 'Full color gift box with drop-tested internal EPE foam'
      }
    },
    {
      id: 'kbw-led-acrylic-1612',
      category: 'glass',
      categoryName: 'LED Acrylic & Message Board',
      name: '20" Light-Up Acrylic LED Dry-Erase Board with 7 RGB Modes',
      code: 'KBW-LED-1612 (ASIN: B0GVJBB35V)',
      image: '/assets/images/product-led-acrylic-board.jpg',
      moq: '50 pcs (OEM custom branding & packaging)',
      leadTime: '15-20 Days',
      features: [
        '7 Vibrant RGB Colors & 6 Dynamic Flashing Light Modes',
        'Optical Shatter-Resistant Acrylic Surface with Polished Edges',
        'Dual Placement: Desktop Invisible Stands & Stainless Hanging Chain',
        'Multi-Purpose: Creative Drawing, Office Memo, Café & Retail Menu Sign'
      ],
      specs: {
        'Standard Dimensions': '16" x 12" (40 x 30 cm) / 20" Diagonal Screen',
        'Panel Material': 'High-clarity optical grade scratch-resistant acrylic',
        'Illumination': 'Side-lit edge LED strip, 7 RGB colors + 6 flashing effects',
        'Mounting & Placement': 'Dual transparent acrylic easel stands + hanging hooks & chain',
        'Included Accessories': '7-color liquid chalk pens, micro-fiber cleaning cloth, USB cable',
        'Power Supply': 'Low-voltage 5V USB powered with in-line switch controller',
        'Certifications': 'CE, RoHS, FCC compliant'
      }
    },
    {
      id: 'kbw-notice-case',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: 'Lockable Tamperproof Glass Door Enclosed Bulletin Board',
      code: 'KBW-NOTICE-3624',
      image: '/assets/images/enclosed-notice-board.png',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Sliding/Hinged Tempered Glass Door with Cylinder Lock & Keys',
        'Self-Healing Natural Cork or Felt Pinboard Infill',
        'Reinforced Heavy-Gauge Aluminum Extruded Enclosure',
        'Weather-Resistant Seal for Indoor & Corridor Usage'
      ],
      specs: {
        'Dimensions': '36"x24", 48"x36", 60"x36"',
        'Door Type': 'Sliding or hinged shatter-resistant safety glass',
        'Locking System': 'Zinc alloy cylinder lock with 2 unique keys',
        'Backing Core': 'High-density LDF board with premium self-healing natural cork',
        'Frame Depth': '45mm interior clearance for multi-layer memos & badges'
      }
    },
    {
      id: 'kbw-showcase-deluxe',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: 'Wall-Mount Aluminum Showcase with Lockable Tempered Glass',
      code: 'KBW-SHOW-WALL',
      image: '/assets/images/glass-door-showcase.jpg',
      moq: '100 pcs',
      leadTime: '20-25 Days',
      features: [
        'Dual Key Security Locking Mechanism',
        'Anodized Heavy Aluminum Extrusion with Rounded Safety Corners',
        'Pin-Friendly Felt/Fabric or Natural Cork Board',
        'Full Concealed Wall Installation Kit'
      ],
      specs: {
        'Dimensions': '90x60cm, 120x90cm, 150x100cm',
        'Glass Material': '3.2mm shatterproof automotive-grade tempered glass',
        'Applications': 'Schools, hotels, corporate lobbies, hospitals, community centers',
        'Security': 'Tamper-resistant lock system preventing unauthorized memo removal'
      }
    }
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  const handleSelect = (product) => {
    if (onSelectProductForRfq) {
      onSelectProductForRfq(product.name);
    }
    const rfqElement = document.getElementById('rfq-inquiry');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="products" className="py-14 md:py-24 bg-white border-b border-border" data-component="product-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
            <Layers className="w-4 h-4" />
            <span>Product collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            Whiteboards for every space
          </h2>
          <p className="text-secondary text-sm mt-3">
            Compare mobile, wall-mounted, flip chart, glass and notice-board models.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-border overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-secondary hover:text-primary hover:bg-slate-100 border border-border'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-border hover:border-slate-400 transition-colors duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-primary px-2 py-0.5 rounded border border-border">
                    {product.categoryName}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-primary/80 text-white text-[10px] font-mono font-medium px-1.5 py-0.5 rounded">
                    {product.code}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                    {product.name}
                  </h3>

                  {/* Commercial Terms Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px]">
                    <span className="bg-slate-100 text-secondary px-1.5 py-0.5 rounded font-medium">
                      MOQ: {product.moq.split(' ')[0]}
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-medium">
                      {product.leadTime}
                    </span>
                  </div>

                  <p className="text-xs text-secondary line-clamp-1 mb-4">
                    {product.features[0]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 border-t border-slate-100 grid grid-cols-2 gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedSpecProduct(product)}
                  className="w-full py-2 px-2 bg-slate-50 hover:bg-slate-100 text-primary text-[11px] font-semibold rounded border border-border text-center transition-colors flex items-center justify-center gap-1"
                >
                  <Sliders className="w-3 h-3 text-slate-500" />
                  <span>Specs</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(product)}
                  className="w-full py-2 px-2 bg-accent hover:bg-accent-hover text-white text-[11px] font-semibold rounded text-center transition-all flex items-center justify-center gap-1 shadow-2xs"
                >
                  <span>Select RFQ</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Engineering Spec Sheet Modal */}
      {selectedSpecProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl p-6 relative">
            <button
              type="button"
              onClick={() => setSelectedSpecProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-1">
              <span>Engineering Specification Sheet</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              {selectedSpecProduct.name}
            </h3>

            {/* Spec Table */}
            <div className="border border-border rounded overflow-hidden mb-6">
              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-border">
                  {Object.entries(selectedSpecProduct.specs).map(([key, val]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="px-4 py-2.5 font-semibold text-secondary w-1/3 bg-slate-50 border-r border-border">
                        {key}
                      </td>
                      <td className="px-4 py-2.5 text-primary font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-border">
              <button
                type="button"
                onClick={() => setSelectedSpecProduct(null)}
                className="px-4 py-2 text-xs font-semibold text-secondary hover:text-primary rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSelect(selectedSpecProduct);
                  setSelectedSpecProduct(null);
                }}
                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded flex items-center gap-1.5"
              >
                <span>Add to RFQ Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
