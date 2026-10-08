import React, { useState } from 'react';
import { ArrowRight, Layers, Sliders, X } from 'lucide-react';

export default function ProductMatrix({ onSelectProductForRfq }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories (16)' },
    { id: 'mobile', name: 'Mobile Rolling Boards' },
    { id: 'flipchart', name: 'Flip Chart & Easels' },
    { id: 'wall', name: 'Wall-Mounted Boards' },
    { id: 'glass', name: 'Glass & Desktop Boards' },
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
      name: '20" Large LED Drawing Board & 16"x12" Light-Up Acrylic Dry Erase Board',
      code: 'KBW-LED-1612',
      image: '/assets/images/product-led-acrylic-board.jpg',
      moq: '50 pcs (OEM custom branding & packaging)',
      leadTime: '15-20 Days',
      features: [
        'Dynamic Lighting with 7 Vibrant RGB Colors & 6 Lighting Modes',
        'Shatter-Resistant Optical Acrylic Panel with Polished Edges',
        'Dual Placement: Desktop Invisible Stands & Hanging Chain Kit',
        'Includes 7 Liquid Chalk Pens, Cleaning Cloth & Spray Bottle'
      ],
      specs: {
        'Standard Dimensions': '16" x 12" (40 x 30 cm) / 20" Diagonal Screen',
        'Panel Material': 'Premium optical shatter-resistant acrylic with smooth polished edges',
        'Lighting Modes': '7 vibrant RGB color options & 6 dynamic light sequences with blinking control',
        'Multi-Purpose Application': 'Office memo board, home message sign, café/retail menu board, night light, kids creative drawing pad',
        'Dual Mounting Setup': '2 invisible acrylic desktop stands + stainless hanging chain and hooks',
        'Included Accessories': '7 vibrant liquid chalk pens, 2 microfiber cleaning cloths, spray bottle, USB power cable',
        'Power Supply': 'Low-voltage 5V USB powered with in-line controller buttons',
        'OEM / ODM Customization': 'Custom logo printing, bespoke gift box packaging, custom sizes and lighting colors'
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
    },
    {
      id: 'kbw-mini-desktop-pack',
      category: 'glass',
      categoryName: 'Desktop & Portable Board',
      name: '11"x8" Double-Sided Portable Desktop Whiteboard with Stand (2-Pack)',
      code: 'KBW-MINI-1108',
      image: '/assets/images/product-mini-desktop-whiteboard.jpg',
      moq: '100 sets (Retail 2-Pack ready)',
      leadTime: '15-20 Days',
      features: [
        '360° Adjustable Aluminum Stand for Versatile Angle Viewing',
        'Double-Sided Magnetic Dry-Erase Surface with Zero-Ghosting Coating',
        'Compact 11" x 8" Portable Size for Desks, Students & Daily Task Planning',
        'Complete Kit: Includes 2 Lapboards, Dry-Erase Markers & Magnetic Eraser'
      ],
      specs: {
        'Standard Dimensions': '11" x 8" (28 x 21 cm) per board',
        'Panel Core': 'Double-sided multi-layer coated magnetic dry-erase plate',
        'Stand Bracket': '360-degree rotating silver aluminum alloy desktop stand',
        'Included Set': '2 boards, 2 dry-erase markers, 2 mini magnetic erasers, 4 anti-slip pads',
        'Packaging': 'Compact e-commerce mail-order box with protective bubble cushioning'
      }
    },
    {
      id: 'kbw-lapboard-portable',
      category: 'glass',
      categoryName: 'Desktop & Portable Lapboard',
      name: '11"x8" Double-Sided Magnetic Portable Mini Whiteboard Lapboard',
      code: 'KBW-LAP-1108',
      image: '/assets/images/product-mini-lapboard-portable.jpg',
      moq: '100 pcs (Custom OEM printing & color retail packaging)',
      leadTime: '15-20 Days',
      features: [
        'Double-Sided Multi-Layer Coated Magnetic Whiteboard Writing Surfaces',
        'Smooth Scratch-Resistant Surface Erases Cleanly with Zero Ghosting or Stains',
        'Ultra-Lightweight & Slim Profile for Students, Classrooms, Desks & Lockers',
        'Includes Magnetic Dry-Erase Pen with Cap Eraser & Snap-On Pen Clip'
      ],
      specs: {
        'Standard Dimensions': '11" x 8" (A4: 28 x 21 cm)',
        'Board Core': 'Double-sided magnetic lacquered steel surface with rigid lightweight core',
        'Mounting & Use': 'Handheld lapboard, magnetic adherence to metal desks/fridges, horizontal or vertical wall hanging',
        'Included Accessories': '1 fine-tip dry-erase marker with eraser cap, 1 detachable pen clip',
        'Packaging': 'Individual retail sleeve or multi-pack master export carton'
      }
    },
    {
      id: 'kbw-notice-cork-outdoor',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: '36"x24" Weatherproof Outdoor Enclosed Cork Bulletin Board with Locking Door',
      code: 'KBW-ENC-3624-C',
      image: '/assets/images/product-notice-cork-outdoor.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Weatherproof Outdoor Design with EPDM Gasket Moisture Seal',
        'High-Density Self-Healing Natural Cork Recovers from Pinholes',
        'Shatter-Resistant Polycarbonate Door with Cylinder Lock & 2 Keys',
        'Reinforced Heavy-Gauge Matte Black Aluminum Alloy Casing'
      ],
      specs: {
        'Standard Dimensions': '36" x 24" (90 x 60 cm) / 4 A4 sheet capacity',
        'Board Core': '100% natural premium dense self-healing cork board',
        'Door Construction': 'Heavy-duty UV-stabilized shatter-resistant optical window',
        'Locking Mechanism': 'Zinc-alloy cylinder lock with 2 security keys',
        'Mounting Kit': 'Full stainless concealed anchor bolts and wall bracket hardware'
      }
    },
    {
      id: 'kbw-notice-cork-outdoor-f',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: '36"x24" Weatherproof Outdoor Enclosed Cork Bulletin Board with Locking Door',
      code: 'KBW-ENC-3624-F',
      image: '/assets/images/product-notice-silver-cork.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Self-Healing Dense Natural Cork Pinboard Surface Stays Flawless',
        'Lockable Tempered Glass Door with 2 Keys Protects from Weather & Tampering',
        'Weatherproof Aluminum Frame Construction for Indoor and Outdoor Use',
        'Flexible Mounting: Can Be Installed Horizontally or Vertically'
      ],
      specs: {
        'Standard Dimensions': '36" x 24" (approx. 90 x 60 cm)',
        'Core Surface': '100% premium dense self-healing natural cork board',
        'Door Construction': 'Tempered safety glass door on continuous hinge with dual cylinder keys',
        'Frame Construction': 'Weatherproof heavy-duty aluminum frame with perimeter weather-seal gaskets',
        'Mounting Kit': 'Complete wall-mounting hardware included (horizontal/vertical orientation)'
      }
    },
    {
      id: 'kbw-notice-slideout-whiteboard',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: '36"x24" Enclosed Bulletin Board with Hidden Slide-Out Magnetic Whiteboard',
      code: 'KBW-ENC-SLIDE-3624',
      image: '/assets/images/product-notice-slideout-whiteboard.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Dual Functionality: 36"x24" Enclosed Noticeboard + Hidden Slide-Out Whiteboard',
        'Slide-Out 36"x22" Magnetic Dry-Erase Panel Doubles Active Brainstorming Area',
        'Brushed Metal Aluminum Frame with Clear Polycarbonate Locking Window',
        'Complete Commercial Set: Magnets, Push Pins, Eraser & Wall Mounting System'
      ],
      specs: {
        'Standard Dimensions': '36" x 24" closed / extends to 58" total working width',
        'Bulletin Area': 'Self-healing dense bulletin surface with key-lock protective door',
        'Slide-Out Board': 'Magnetic dry-erase steel surface on precision side-glide tracks',
        'Frame Material': 'Architectural brushed silver anodized aluminum profile',
        'Included Accessories': 'Assorted push pins, dry-erase board magnets, magnetic eraser'
      }
    },
    {
      id: 'kbw-notice-led-illuminated',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: '36"x24" Concealed LED Enclosed Bulletin Board with Locking Tempered Glass Door',
      code: 'KBW-LED-ENC-3624',
      image: '/assets/images/product-notice-led-illuminated.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      features: [
        'Concealed Seamless Frame LED Lighting with Power Cord & Plug (No Electrician Needed)',
        'Dense Self-Healing Natural Cork Board Seamlessly Conceals Repeated Pin Holes',
        'Lockable Tempered Glass Door with 2 Keys to Deter Vandalism & Tampering',
        'Durable Silver Aluminum Frame with Sleek Mitered Corners & Hidden Hanging System'
      ],
      specs: {
        'Standard Dimensions': '36" x 24" (approx. 90 x 60 cm)',
        'Lighting System': 'Concealed frame-integrated LED lighting with plug-and-play power cord',
        'Door Construction': 'Tempered safety glass door panel with precision cylinder lock & 2 keys',
        'Surface Material': 'Self-healing dense natural cork resilient pin surface',
        'Installation': 'Hidden hanging bracket system with complete mounting hardware included'
      }
    },
    {
      id: 'kbw-notice-acrylic-door',
      category: 'notice',
      categoryName: 'Notice Case & Showcase',
      name: '36"x24" Wall-Mounted Enclosed Cork Noticeboard with Clear Acrylic Locking Door (5 x A4)',
      code: 'KBW-ENC-3624-ACRYLIC',
      image: '/assets/images/product-notice-acrylic-door.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      features: [
        'Sturdy Self-Healing Cork Surface Seamlessly Conceals Pin & Tack Holes',
        'Durable Clear Acrylic Swinging Door with Precision Key-Locking Mechanism (2 Keys)',
        'Generous 34" x 22" Usable Interior Space Accommodating Up to 5 Standard A4 Sheets',
        '0.4" Thick Felt-Backed Cork Core in a Sleek, Lightweight Aluminum Frame'
      ],
      specs: {
        'Total Frame Dimensions': '36" x 24" (90 x 60 cm)',
        'Usable Display Area': '34" x 22" (86 x 56 cm) / 5 x A4 sheet capacity',
        'Door Construction': 'Durable shatterproof clear optical acrylic swinging door with key lock',
        'Core Thickness': 'Up to 0.4" (10mm) dense self-healing cork with resilient felt backing',
        'Mounting Kit': 'Included comprehensive mounting tools and anchors for simple installation'
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
