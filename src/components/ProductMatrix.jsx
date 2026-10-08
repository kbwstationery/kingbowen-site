import React, { useState } from 'react';
import { ArrowRight, Layers, Sliders, X, Image as ImageIcon } from 'lucide-react';

export default function ProductMatrix({ onSelectProductForRfq }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);

  // Official categories directly from http://www.gd-jinbowen.com/protype.php
  const categories = [
    { id: 'all', name: 'All Products (16)' },
    { id: 'easel', name: 'Whiteboard Easel' },
    { id: 'flipchart', name: 'Flip Chart Stand' },
    { id: 'magnetic-board', name: 'Magnetic Writing Board' },
    { id: 'notice-board', name: 'Notice Board' },
    { id: 'showcase', name: 'Showcase' },
    { id: 'glass-board', name: 'Magnetic Glass Writing Board' },
    { id: 'desktop-iron', name: 'Iron Desktop Writing Board' },
  ];

  // Official Engineering Detail Galleries from Jinbowen factory specifications & ueditor archive
  const easelDetailGallery = [
    {
      title: 'Adjustable Width & Brake Casters (支架宽度调节与脚轮锁止)',
      image: '/assets/images/official-detail-bwe6-1.jpg',
      desc: 'Fits whiteboard length from 60cm to 90cm. Features heavy-duty mobile casters with individual foot brake locks.'
    },
    {
      title: '360° Board Flipping Mechanism (双面翻转旋钮锁紧)',
      image: '/assets/images/official-detail-bwe6-2.jpg',
      desc: 'Spring-loaded rotation locking bar allows quick 360-degree board turning and firm angle locking.'
    },
    {
      title: 'ABS Safety Corner Cap & Pen Tray (ABS防撞圆角与一体笔托)',
      image: '/assets/images/official-detail-bwv8-1.jpg',
      desc: 'Injection-molded rounded ABS corner caps with concealed screws and full-width aluminum pen tray.'
    },
    {
      title: 'Anodized Aluminum Frame Profile (加厚铝合金型材切面)',
      image: '/assets/images/official-detail-bwv8-2.jpg',
      desc: '15mm heavy-gauge anodized aluminum profile with rust-proof galvanized steel backing sheet.'
    }
  ];

  const flipchartDetailGallery = [
    {
      title: 'Universal Paper Clamp (顶置万用夹纸器)',
      image: '/assets/images/official-detail-bwe7-1.jpg',
      desc: 'Spring-loaded top clamp with adjustable hanging hooks compatible with all standard flip chart paper pads.'
    },
    {
      title: 'Telescopic Height Adjuster (伸缩升降高度调节)',
      image: '/assets/images/detail-mobile-stand.jpg',
      desc: 'Quick-release ergonomic locking levers supporting stepless height adjustment from 105cm to 195cm.'
    },
    {
      title: 'Mobile Round / Tripod Base (移动轮盘/三脚架结构)',
      image: '/assets/images/official-detail-bwe6-1.jpg',
      desc: 'Heavy cast circular base with 5 mute lockable casters or lightweight foldable telescopic aluminum tripod.'
    },
    {
      title: 'Magnetic Dry-Erase Panel (磁性烤漆白板面板)',
      image: '/assets/images/official-detail-bwv8-2.jpg',
      desc: 'Multi-layer high-durability coated magnetic steel panel, easily wiped clean with zero ghosting.'
    }
  ];

  const boardDetailGallery = [
    {
      title: 'ABS Plastic Safety Corners (防撞圆弧包角特写)',
      image: '/assets/images/official-detail-bwv8-1.jpg',
      desc: 'Injection-molded rounded ABS corners with concealed screw covers for school and office impact safety.'
    },
    {
      title: 'Galvanized Zinc Steel Backing (镀锌防锈钢背板)',
      image: '/assets/images/official-detail-bwv8-2.jpg',
      desc: 'Galvanized anti-corrosion zinc backing sheet bonded with 7-layer rigid core for permanent flatness.'
    },
    {
      title: 'Flush Wall Mounting Installation (隐形角码挂扣安装方式)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Includes 2 to 4 wall-mounting hangers and masonry expansion screws supporting horizontal or vertical hanging.'
    },
    {
      title: 'Detachable Marker Pen Tray (可拆卸铝合金笔槽)',
      image: '/assets/images/detail-whiteboard-corner-hook.jpg',
      desc: 'Slide-in anodized aluminum pen holder with smooth protective edge caps.'
    }
  ];

  const showcaseDetailGallery = [
    {
      title: 'Cylinder Security Lock & Keys (双钥匙锁具特写)',
      image: '/assets/images/official-detail-bwa1-1.jpg',
      desc: 'Precision zinc-alloy cylinder cam lock with 2 nickel-plated security keys to prevent unauthorized tampering.'
    },
    {
      title: 'Sliding / Casement Door Frame (平开与推拉玻璃门结构)',
      image: '/assets/images/official-detail-bwa1-2.jpg',
      desc: 'Available with 1, 2, or 3 door leaves in casement or sliding configurations with automotive tempered glass.'
    },
    {
      title: 'Weatherproof EPDM Rubber Seals (耐候密封条与排水设计)',
      image: '/assets/images/detail-frame-spec.jpg',
      desc: 'Perimeter rubber compression gasket seals out rain, dust, and outdoor moisture.'
    },
    {
      title: 'Concealed Wall Anchor Installation (隐蔽式打孔固定)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Pre-drilled internal anchor points for tamper-proof wall mounting in public corridors.'
    }
  ];

  const desktopDetailGallery = [
    {
      title: 'Pencil-Polished Safety Edges (圆润打磨安全边角)',
      image: '/assets/images/detail-abs-corner.jpg',
      desc: 'Precision bevel-polished safety corners and edges ensure safe tactile handling on office and student desks.'
    },
    {
      title: 'Desktop Invisible Stand & Hardware (桌面支架特写)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Heavy-gauge iron or acrylic desktop stand with non-slip silicone pads for stable positioning.'
    },
    {
      title: 'Storage & Accessories Layout (配件收纳布局)',
      image: '/assets/images/detail-whiteboard-corner-hook.jpg',
      desc: 'Includes magnetic dry-erase liquid chalk pens, microfiber cloths, and integrated organizers.'
    }
  ];

  // Official Products Scraped from http://www.gd-jinbowen.com/protype.php
  const products = [
    // 1. Whiteboard Easel (sort1=2)
    {
      id: 'bw-e6',
      category: 'easel',
      categoryName: 'Whiteboard Easel',
      name: 'BW-E6 Whiteboard Easel (Mobile Double-Sided Rolling Whiteboard)',
      code: 'BW-E6',
      image: '/assets/images/official-bw-e6.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Easel Stand Color',
      variants: [
        { name: 'White Stand / Whiteboard', image: '/assets/images/official-bw-e6.jpg', badge: 'White' },
        { name: 'Black Stand / Whiteboard', image: '/assets/images/hero-mobile-whiteboard.jpg', badge: 'Black' },
        { name: 'Silver Grey Stand', image: '/assets/images/double-sided-rolling-whiteboard.jpg', badge: 'Silver' }
      ],
      detailGallery: easelDetailGallery,
      features: [
        'Fits Whiteboard Length from 60cm to 90cm (Width Adjustable)',
        '360° Rotatable Double-Sided Board with Precision Angle Lock',
        'Available Easel Colors: Black, White, Silver Grey',
        'Mobile Structure with 4 Smooth-Glide Foot-Braked Casters'
      ],
      specs: {
        'Compatible Board Size': 'Fits 60cm to 90cm whiteboard lengths',
        'Easel Frame Material': 'Heavy-gauge tubular steel with electrostatic powder coating',
        'Adjustment': 'Width adjustable shelf with quick-lock tightening knobs',
        'Available Colors': 'Black, White, Silver Grey',
        'Packing Specification': '1 pc/box, 5 pcs/ctn (Meas: 82.5x15x40cm = 0.050 CBM)'
      }
    },
    {
      id: 'bw-e3',
      category: 'easel',
      categoryName: 'Whiteboard Easel',
      name: 'BW-E3 Whiteboard Easel (Heavy-Duty Mobile Stand)',
      code: 'BW-E3',
      image: '/assets/images/official-bw-e3.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Stand Finish',
      variants: [
        { name: 'Satin Silver Stand', image: '/assets/images/official-bw-e3.jpg', badge: 'Silver' },
        { name: 'Industrial Black Stand', image: '/assets/images/hero-mobile-whiteboard.jpg', badge: 'Black' }
      ],
      detailGallery: easelDetailGallery,
      features: [
        'Heavy-Duty Mobile Rolling Easel with Lockable Casters',
        'Universal Support for Single & Double-Sided Writing Boards',
        'Reinforced Crossbar Architecture for High-Stability Use',
        'Quick-Assembly Knock-Down Structure for Compact Export Packing'
      ],
      specs: {
        'Compatible Lengths': 'Supports 90cm to 150cm whiteboard lengths',
        'Wheel Spec': 'Industrial 2-inch dual-wheel mute casters with individual locks',
        'Finish': 'Scratch-resistant baked enamel powder coating',
        'Accessories': 'Full-width aluminum pen tray and mounting brackets included'
      }
    },

    // 2. Flip Chart Stand (sort1=1)
    {
      id: 'bw-e7',
      category: 'flipchart',
      categoryName: 'Flip Chart Stand',
      name: 'BW-E7 Flip Chart Stand (Mobile Lockable Presentation Stand)',
      code: 'BW-E7',
      image: '/assets/images/official-bw-e7.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Stand Option',
      variants: [
        { name: 'Silver Mobile Flip Chart Stand', image: '/assets/images/official-bw-e7.jpg', badge: 'Silver' },
        { name: 'Black Stand Edition', image: '/assets/images/flip-chart-easel-stand.jpg', badge: 'Black' }
      ],
      detailGallery: flipchartDetailGallery,
      features: [
        'Fits Whiteboard Length from 90cm to 240cm',
        'Mobile and Lockable with 5 Silent Heavy-Duty Wheels',
        'Universal Spring-Loaded Top Clamp for Presentation Paper Pads',
        'Full-Length Aluminum Pen Tray Attached to Base Frame'
      ],
      specs: {
        'Board Range': 'Fits length of whiteboard from 90cm to 240cm',
        'Mobility': 'Mobile base with 5 omnidirectional locking casters',
        'Clamp System': 'Spring-loaded paper clamp with adjustable hanging hooks',
        'Packing': '1 pc/box, 5 pcs/ctn (Knock-down flat packing)'
      }
    },
    {
      id: 'bw-e10',
      category: 'flipchart',
      categoryName: 'Flip Chart Stand',
      name: 'BW-E10 Flip Chart Stand (360° Rotatable Mobile Board)',
      code: 'BW-E10',
      image: '/assets/images/official-bw-e10.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Base Option',
      variants: [
        { name: 'Round Mobile Base (Silver)', image: '/assets/images/official-bw-e10.jpg', badge: 'Silver' },
        { name: 'Executive Black Base', image: '/assets/images/round-base-flipchart.jpg', badge: 'Black' }
      ],
      detailGallery: flipchartDetailGallery,
      features: [
        'Plate Belt 360° Rotation Function with Angle Locking',
        'Mobile Base with 5 Lockable Mute Wheels',
        'Includes 1pc Pen Tray, 1pc Eraser and 3pcs Magnets',
        'Length 90-240cm, Height Customizable per Customer Request'
      ],
      specs: {
        'Rotation': 'Full 360-degree board rotation with angle lock mechanism',
        'Board Length': '90cm to 240cm (Height customizable)',
        'Included Set': '1pc pen tray, 1pc magnetic eraser, 3pcs colorful magnets',
        'Base': 'Heavy circular platform preventing tripping hazards'
      }
    },
    {
      id: 'bw-e17',
      category: 'flipchart',
      categoryName: 'Flip Chart Stand',
      name: 'BW-E17 Flip Chart Stand (Telescopic Tripod Presentation Easel)',
      code: 'BW-E17',
      image: '/assets/images/official-bw-e17.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Leg Finish',
      variants: [
        { name: 'Silver Telescopic Tripod', image: '/assets/images/official-bw-e17.jpg', badge: 'Silver' },
        { name: 'Black Powder-Coated Stand', image: '/assets/images/flip-chart-easel-stand.jpg', badge: 'Black' }
      ],
      detailGallery: flipchartDetailGallery,
      features: [
        'Stepless Height-Adjustable Telescopic Legs (105cm - 185cm)',
        'Universal Flip Chart Paper Clamp with Sliding Hooks',
        'Lightweight Aluminum Construction for Fast Transport & Setup',
        'Fold-Flat Design for Convenient Storage in Compact Spaces'
      ],
      specs: {
        'Board Dimension': '70 x 100 cm (approx. 28" x 40")',
        'Height Adjustment': '105 cm to 185 cm stepless adjustment range',
        'Structure': 'Foldable 3-leg aluminum tripod with anti-slip rubber feet',
        'Surface Spec': 'Magnetic lacquered steel, dry-wipeable with marker magnets'
      }
    },

    // 3. Magnetic Writing Board (sort1=3)
    {
      id: 'bw-v8',
      category: 'magnetic-board',
      categoryName: 'Magnetic Writing Board',
      name: 'BW-V8 Magnetic Writing Board (Aluminum Frame & ABS Corners)',
      code: 'BW-V8',
      image: '/assets/images/official-bw-v8.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Frame & Corner Caps',
      variants: [
        { name: 'Silver Aluminum Frame / Grey ABS Corners', image: '/assets/images/official-bw-v8.jpg', badge: 'Silver' },
        { name: 'Black Anodized Frame / Black Corners', image: '/assets/images/detail-whiteboard-corner-hook.jpg', badge: 'Black' }
      ],
      detailGallery: boardDetailGallery,
      features: [
        'Anodized Aluminum Frame with Impact-Resistant ABS Safety Corners',
        'Surface: Imported Painted Steel Sheet or Porcelain Enamel Steel',
        'Back Side: Galvanized Zinc Steel Sheet for Permanent Anti-Rust Flatness',
        'Core Infill: Honeycomb Board, 7-Layer Cardboard, MDF or Foam Board'
      ],
      specs: {
        'Standard Dimensions': '90x60cm, 120x90cm, 150x100cm, 180x120cm, 240x120cm (Custom sizes available)',
        'Writing Surface': 'Imported painted steel sheet or porcelain enamel steel',
        'Frame Thickness': '1.2mm heavy-gauge anodized aluminum profile with ABS safety corners',
        'Core Infill': 'Honeycomb board, 7-layer strong cardboard, MDF, or foam board',
        'Backing Material': 'Galvanized zinc steel anti-corrosion backing sheet',
        'Included Accessories': '1pc pen holder, 2-4pcs wall-mounted hangers, 1pc eraser, 3pcs magnets',
        'Structure Options': 'Single side or double sides available'
      }
    },
    {
      id: 'bw-v1',
      category: 'magnetic-board',
      categoryName: 'Magnetic Writing Board',
      name: 'BW-V1 Magnetic Writing Board (Patented Corner Profile)',
      code: 'BW-V1',
      image: '/assets/images/official-bw-v1.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Surface & Frame',
      variants: [
        { name: 'Silver Aluminum / Magnetic White', image: '/assets/images/official-bw-v1.jpg', badge: 'White' },
        { name: 'Green Chalkboard Surface', image: '/assets/images/official-bw-v2.jpg', badge: 'Green' }
      ],
      detailGallery: boardDetailGallery,
      features: [
        'Patented Corner Fitting System with Concealed Screw Covers',
        'High Magnetic Reception Suitable for Heavy Magnetic Accessories',
        'Multi-Layer Anti-Scratch Coating Erases Cleanly with Zero Residue',
        'Galvanized Zinc Steel Back Protects Against Warping in High Humidity'
      ],
      specs: {
        'Dimensions': 'Any standard and custom sizes available upon request',
        'Frame': 'Patented aluminum extruded profile with safety corners',
        'Hangers': 'Sliding adjustable wall-mounting brackets included',
        'Packaging': 'Individual shrink-wrap or cardboard box packing'
      }
    },
    {
      id: 'bw-v2',
      category: 'magnetic-board',
      categoryName: 'Magnetic Writing Board',
      name: 'BW-V2 Magnetic Writing Board (Architectural Narrow Bezel)',
      code: 'BW-V2',
      image: '/assets/images/official-bw-v2.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Frame Finish',
      variants: [
        { name: 'Silver Matte Finish', image: '/assets/images/official-bw-v2.jpg', badge: 'Silver' },
        { name: 'Black Powder Coating', image: '/assets/images/official-bw-v8.jpg', badge: 'Black' }
      ],
      detailGallery: boardDetailGallery,
      features: [
        'Modern Narrow Bezel Design for Modern Conference Rooms & Classrooms',
        'Heavy-Duty Aluminum Extrusion with Full-Length Marker Tray',
        'High-Density Rigid Paper Honeycomb Core Prevents Dents and Bubbles',
        'Supports Both Horizontal and Vertical Wall-Mounted Orientation'
      ],
      specs: {
        'Sizes': 'Standard 60x45cm up to 300x120cm conference sizes',
        'Core': 'Rigid anti-warp honeycomb board core',
        'Accessories': '2-4 wall mounting hooks, pen tray, eraser & magnets',
        'Compliance': 'BSCI audited factory production, REACH compliant'
      }
    },

    // 4. Notice Board (sort1=4)
    {
      id: 'bw-v1-nb',
      category: 'notice-board',
      categoryName: 'Notice Board',
      name: 'BW-V1 Notice Board (Natural Cork / Fabric Surface)',
      code: 'BW-V1 (Notice)',
      image: '/assets/images/official-bw-nb1.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Infill Surface',
      variants: [
        { name: 'Natural Cork Surface', image: '/assets/images/official-bw-nb1.jpg', badge: 'Cork' },
        { name: 'Fabric Felt Surface', image: '/assets/images/official-bw-nb2.jpg', badge: 'Felt' }
      ],
      detailGallery: boardDetailGallery,
      features: [
        'Notice Board with Aluminum Frame and ABS Safety Corners',
        'Surface Material: Natural Cork Sheet or Color Fabric Felt',
        'Core Materials: 7-Layer Strong Cardboard, LDF, Foam or Honeycomb Board',
        'Back Side: Fabric Sheet, Cork Sheet, Cardboard or Paper Backing'
      ],
      specs: {
        'Available Dimensions': '90x60cm, 120x90cm, 150x100cm, 180x120cm (Custom sizes available)',
        'Surface Choice': '100% natural self-healing cork or acoustic fabric felt',
        'Frame': 'Anodized aluminum alloy frame with injection ABS corners',
        'Accessories': '2pcs or 4pcs wall-mounted hangers, 5pcs push pins',
        'Structure': 'Single side or double sides available'
      }
    },
    {
      id: 'bw-v2-nb',
      category: 'notice-board',
      categoryName: 'Notice Board',
      name: 'BW-V2 Notice Board (Acoustic Felt Bulletin Board)',
      code: 'BW-V2 (Notice)',
      image: '/assets/images/official-bw-nb2.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Felt Color',
      variants: [
        { name: 'Grey Acoustic Felt', image: '/assets/images/official-bw-nb2.jpg', badge: 'Grey' },
        { name: 'Blue Felt Surface', image: '/assets/images/official-bw-nb1.jpg', badge: 'Blue' }
      ],
      detailGallery: boardDetailGallery,
      features: [
        'Non-Fading Acoustic Fabric Surface Firmly Holds Push Pins & Notes',
        'Sturdy Anodized Aluminum Perimeter Frame with Corner Caps',
        'Rigid Lightweight Sandwich Core Keeps Pinboard Permanently Flat',
        'Ideal for Schools, Office Corridors, Staff Rooms & Community Bulletin'
      ],
      specs: {
        'Dimensions': '60x45cm to 240x120cm available',
        'Surface': 'Premium dense non-woven acoustic bulletin felt',
        'Mounting': 'Concealed corner-hole mounting or external sliding brackets',
        'Packaging': 'Individually boxed or shrink-wrapped with master carton'
      }
    },

    // 5. Showcase (sort1=7)
    {
      id: 'bw-a1',
      category: 'showcase',
      categoryName: 'Showcase',
      name: 'BW-A1 Showcase (Lockable Aluminum Frame Display Case)',
      code: 'BW-A1',
      image: '/assets/images/official-bw-a1.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Frame & Infill Color',
      variants: [
        { name: 'Satin Silver Frame / Whiteboard', image: '/assets/images/official-bw-a1.jpg', badge: 'Silver' },
        { name: 'Matte Black Frame / Whiteboard', image: '/assets/images/official-bw-c3.jpg', badge: 'Black' },
        { name: 'Silver Frame / Cork Infill', image: '/assets/images/official-bw-b1.jpg', badge: 'Cork' }
      ],
      detailGallery: showcaseDetailGallery,
      features: [
        'Indoor Showcase with Heavy-Duty Aluminum Frame',
        'Inside Can Be: White Board, Green Chalk Board, Cork Board or Fabric Board',
        'Showcase Comes with Precision Cylinder Lock and 2 Keys',
        'Door Style: Casement Door or Sliding Door (1, 2, or 3 Door Leaves)'
      ],
      specs: {
        'Door Configurations': 'Casement swinging door or sliding door (1 leaf, 2 leaves, or 3 leaves)',
        'Inside Options': 'Whiteboard, green chalkboard, black board, cork board, or fabric board',
        'Frame Colors': 'Silver, Black anodized aluminum alloy',
        'Security System': 'Zinc-alloy cylinder lock with 2 keys included',
        'Available Dimensions': 'Any sizes are fully customizable according to client requests'
      }
    },
    {
      id: 'bw-b1',
      category: 'showcase',
      categoryName: 'Showcase',
      name: 'BW-B1 Showcase (Outdoor Weatherproof Enclosed Notice Case)',
      code: 'BW-B1',
      image: '/assets/images/official-bw-b1.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Frame Coating',
      variants: [
        { name: 'Silver Weatherproof Casing', image: '/assets/images/official-bw-b1.jpg', badge: 'Silver' },
        { name: 'Black Weatherproof Casing', image: '/assets/images/official-bw-a1.jpg', badge: 'Black' }
      ],
      detailGallery: showcaseDetailGallery,
      features: [
        'Outdoor Weatherproof Design with Perimeter EPDM Rubber Moisture Seals',
        'Shatter-Resistant Tempered Glass Door with Continuous Piano Hinge',
        'Pin-Friendly Natural Cork or Magnetic Whiteboard Interior',
        'Concealed Internal Mounting Holes Deter Vandalism in Public Spaces'
      ],
      specs: {
        'Sizes': 'Standard 36"x24", 48"x36", 60"x36" or custom architectural dimensions',
        'Glazing': '3.2mm automotive-grade tempered safety glass',
        'Weatherproofing': 'Perimeter compression rubber gasket and drainage weep holes',
        'Lock': 'Weather-sealed cam lock with 2 security keys'
      }
    },
    {
      id: 'bw-c3',
      category: 'showcase',
      categoryName: 'Showcase',
      name: 'BW-C3 Showcase (Commercial Sliding Glass Display Case)',
      code: 'BW-C3',
      image: '/assets/images/official-bw-c3.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Door Style',
      variants: [
        { name: 'Sliding Double Glass Doors', image: '/assets/images/official-bw-c3.jpg', badge: 'Sliding' },
        { name: 'Single Casement Swing Door', image: '/assets/images/official-bw-a1.jpg', badge: 'Swing' }
      ],
      detailGallery: showcaseDetailGallery,
      features: [
        'Dual Sliding Tempered Glass Doors on Precision Ball-Bearing Bottom Tracks',
        'Push-Button Ratchet Cylinder Lock for Secure Commercial Operation',
        'Deep 50mm Interior Clearance Accommodates Multi-Layer Thick Posters',
        'Anodized Silver Aluminum Extruded Casing with Rounded Corners'
      ],
      specs: {
        'Door Type': 'Double bypass sliding tempered glass panels with ground finger pulls',
        'Interior Clearance': '50mm depth between surface and glass',
        'Surface': 'High-density natural cork or magnetic whiteboard back',
        'Mounting': 'Concealed heavy-gauge wall anchor brackets included'
      }
    },

    // 6. Magnetic Glass Writing Board (sort1=8)
    {
      id: 'bw-v16',
      category: 'glass-board',
      categoryName: 'Magnetic Glass Writing Board',
      name: 'BW-V16 Magnetic Glass Writing Board (Frameless Architectural Glass)',
      code: 'BW-V16',
      image: '/assets/images/official-bw-v16.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Glass Tint',
      variants: [
        { name: 'Pure White Frosted Glass', image: '/assets/images/official-bw-v16.jpg', badge: 'White' },
        { name: 'Executive Black Glass', image: '/assets/images/desktop-glass-whiteboard.jpg', badge: 'Black' }
      ],
      detailGallery: desktopDetailGallery,
      features: [
        '4mm High-Clarity Tempered Safety Glass with Polished Pencil Edges',
        'Non-Porous Glass Surface Never Stains, Ghosts, or Dents',
        'Galvanized Metal Backing Accepts Heavy-Duty Neodymium Magnets',
        'Stainless Steel Pass-Through Standoff Mounting Hardware Included'
      ],
      specs: {
        'Glass Material': '4mm shatter-resistant ultra-clear tempered glass',
        'Edge Finish': 'Precision CNC ground round pencil polished edges',
        'Mounting Kit': 'Solid stainless steel architectural pass-through standoffs',
        'Dimensions': '60x45cm, 90x60cm, 120x90cm, 150x100cm, 180x120cm, 240x120cm'
      }
    },
    {
      id: 'bw-dt',
      category: 'glass-board',
      categoryName: 'Magnetic Glass Writing Board',
      name: 'BW-DT Magnetic Glass Writing Board (Desktop Glass Memo Pad with Storage)',
      code: 'BW-DT',
      image: '/assets/images/official-bw-dt.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Chassis Color',
      variants: [
        { name: 'White ABS Chassis / White Glass', image: '/assets/images/official-bw-dt.jpg', badge: 'White' },
        { name: 'Black Chassis Edition', image: '/assets/images/desktop-glass-whiteboard.jpg', badge: 'Black' }
      ],
      detailGallery: desktopDetailGallery,
      features: [
        'Smooth Tempered Glass Writing Surface Fits Perfectly in Front of Keyboards',
        'Slide-Out Storage Drawer with Partition Compartments for Office Stationery',
        'Integrated Top Groove for Holding Smartphones, Tablets, and Dry-Erase Markers',
        'Non-Skid Silicone Feet Ensure Stable Writing without Slipping on Desks'
      ],
      specs: {
        'Dimensions': '45 x 20 x 5 cm (Desktop footprint)',
        'Writing Surface': '4mm ultra-clear tempered glass with polished edges',
        'Drawer Material': 'Durable ABS chassis with molded divider compartments',
        'Packaging': 'Full-color mail-order retail box with protective EPE foam'
      }
    },

    // 7. Iron Desktop Writing Board (sort1=13)
    {
      id: 'bw-d1',
      category: 'desktop-iron',
      categoryName: 'Iron Desktop Writing Board',
      name: 'BW-D1 Iron Desktop Writing Board (Freestanding Metal Memo Board)',
      code: 'BW-D1',
      image: '/assets/images/official-bw-d1.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Powder Coat Finish',
      variants: [
        { name: 'Matte White Powder Coat', image: '/assets/images/official-bw-d1.jpg', badge: 'White' },
        { name: 'Matte Black Powder Coat', image: '/assets/images/official-bw-d2.jpg', badge: 'Black' }
      ],
      detailGallery: desktopDetailGallery,
      features: [
        'Durable Electrostatic Powder-Coated Iron Construction',
        'Dual-Sided Magnetic Writing Surface Accepts All Standard Magnets',
        'Stable Integrated Angled Base Sits Firmly on Student Desks and Counters',
        'Smooth Dry-Erase Surface for Daily Reminders, To-Do Lists & Task Planning'
      ],
      specs: {
        'Material': 'High-gauge cold-rolled iron sheet with electro-deposition coating',
        'Structure': 'One-piece bent metal design with self-standing counterweight base',
        'Dimensions': 'Compact desktop sizes (approx. 25x18cm / 30x21cm)',
        'Applications': 'Offices, reception counters, student study desks, retail price signs'
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

  const handleOpenSpecs = (product) => {
    setSelectedSpecProduct(product);
    setActiveDetailIdx(0);
  };

  return (
    <section id="products" className="py-14 md:py-24 bg-white border-b border-border" data-component="product-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
            <Layers className="w-4 h-4" />
            <span>Official Factory Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            Whiteboards & Display Systems
          </h2>
          <p className="text-secondary text-sm mt-3">
            Authentic manufacturing models directly from Heshan Jinbowen factory catalog. Select models below to inspect specifications and color finishes.
          </p>
        </div>

        {/* Filter Tabs (Official Categories from protype.php) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-border overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded transition-all whitespace-nowrap cursor-pointer ${
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
          {filteredProducts.map((product) => {
            const activeVariantIdx = selectedVariants[product.id] ?? 0;
            const currentVariant = product.variants?.[activeVariantIdx];
            const currentDisplayImage = currentVariant?.image || product.image;

            return (
              <article
                key={product.id}
                className="bg-white border border-border hover:border-slate-400 transition-colors duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center p-3 border-b border-border">
                    <img
                      src={currentDisplayImage}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-primary px-2 py-0.5 rounded border border-border">
                      {product.categoryName}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-primary/80 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      {product.code}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    {/* Color Options Selector */}
                    {product.variants && product.variants.length > 0 && (
                      <div className="my-2.5 bg-slate-50/80 p-2 rounded border border-slate-200/80">
                        <div className="text-[11px] text-slate-600 mb-1.5 flex items-center justify-between">
                          <span className="font-medium text-slate-700 truncate mr-1">
                            {product.variantLabel || 'Color / Finish'}:{' '}
                            <span className="font-bold text-accent">
                              {currentVariant?.name}
                            </span>
                          </span>
                          <span className="text-[9px] text-slate-400 font-mono flex-shrink-0">
                            {product.variants.length} opts
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                          {product.variants.map((v, vIdx) => {
                            const isSelected = activeVariantIdx === vIdx;
                            return (
                              <button
                                key={vIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedVariants((prev) => ({ ...prev, [product.id]: vIdx }));
                                }}
                                className={`flex-shrink-0 rounded border p-0.5 transition-all bg-white flex flex-col items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? 'border-accent ring-2 ring-accent/30 shadow-xs'
                                    : 'border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100'
                                }`}
                                style={{ width: '46px', height: '52px' }}
                                title={v.name}
                              >
                                <div className="w-full h-7 bg-slate-100/60 overflow-hidden rounded-xs flex items-center justify-center">
                                  <img
                                    src={v.thumbnail || v.image}
                                    alt={v.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <span className="text-[8.5px] font-semibold text-slate-700 truncate w-full text-center px-0.5 leading-none">
                                  {v.badge || v.name.split(' ')[0]}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Commercial Terms Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2.5 text-[11px]">
                      <span className="bg-slate-100 text-secondary px-1.5 py-0.5 rounded font-medium">
                        MOQ: {product.moq.split(' ')[0]}
                      </span>
                      <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-medium">
                        {product.leadTime}
                      </span>
                    </div>

                    <p className="text-xs text-secondary line-clamp-1 mb-2">
                      {product.features[0]}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-3 sm:p-4 pt-0 border-t border-slate-100 grid grid-cols-2 gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenSpecs(product)}
                    className="w-full py-2 px-2 bg-slate-50 hover:bg-slate-100 text-primary text-[11px] font-semibold rounded border border-border text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sliders className="w-3 h-3 text-slate-500" />
                    <span>Specs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelect(product)}
                    className="w-full py-2 px-2 bg-accent hover:bg-accent-hover text-white text-[11px] font-semibold rounded text-center transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <span>Select RFQ</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>

      {/* Engineering Spec Sheet & Detail Gallery Modal */}
      {selectedSpecProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl p-5 sm:p-7 relative">
            <button
              type="button"
              onClick={() => setSelectedSpecProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-secondary cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-1">
              <span>Official Factory Specification & Technical Data</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-primary mb-5">
              {selectedSpecProduct.name}
            </h3>

            {/* Product Engineering Details & Installation Gallery */}
            {selectedSpecProduct.detailGallery && selectedSpecProduct.detailGallery.length > 0 && (
              <div className="mb-6 bg-slate-50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-accent" />
                    <span>Product Details & Installation Methods (工艺细节与安装方式)</span>
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Click tabs below to inspect
                  </span>
                </div>

                {/* Featured Detail View */}
                {selectedSpecProduct.detailGallery[activeDetailIdx] && (
                  <div className="bg-white border border-border rounded-md overflow-hidden mb-3">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-slate-900 flex items-center justify-center p-2">
                      <img
                        src={selectedSpecProduct.detailGallery[activeDetailIdx].image}
                        alt={selectedSpecProduct.detailGallery[activeDetailIdx].title}
                        className="max-h-full w-auto object-contain"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                        {selectedSpecProduct.detailGallery[activeDetailIdx].title}
                      </div>
                    </div>
                    <div className="p-3 bg-white border-t border-slate-100">
                      <p className="text-xs text-secondary leading-relaxed">
                        <strong className="text-primary font-semibold">
                          {selectedSpecProduct.detailGallery[activeDetailIdx].title}:
                        </strong>{' '}
                        {selectedSpecProduct.detailGallery[activeDetailIdx].desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Detail Thumbnails Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedSpecProduct.detailGallery.map((det, dIdx) => {
                    const isSelected = activeDetailIdx === dIdx;
                    return (
                      <button
                        key={dIdx}
                        type="button"
                        onClick={() => setActiveDetailIdx(dIdx)}
                        className={`p-1.5 rounded border text-left transition-all bg-white flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'border-accent ring-2 ring-accent/30 shadow-2xs'
                            : 'border-border hover:border-slate-400 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="w-10 h-10 rounded bg-slate-100 flex-shrink-0 overflow-hidden flex items-center justify-center p-0.5">
                          <img
                            src={det.image}
                            alt={det.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] sm:text-[11px] font-bold text-primary truncate leading-tight">
                            {det.title.split('(')[0].trim()}
                          </div>
                          <div className="text-[9px] text-slate-500 truncate mt-0.5">
                            Inspect view
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Spec Table */}
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <div className="bg-slate-100/70 px-4 py-2 border-b border-border text-xs font-bold text-primary uppercase tracking-wider">
                Official Factory Technical Data
              </div>
              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-border">
                  {Object.entries(selectedSpecProduct.specs).map(([key, val]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="px-4 py-2.5 font-semibold text-secondary w-1/3 bg-slate-50/70 border-r border-border">
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
                className="px-4 py-2 text-xs font-semibold text-secondary hover:text-primary rounded cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSelect(selectedSpecProduct);
                  setSelectedSpecProduct(null);
                }}
                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded flex items-center gap-1.5 cursor-pointer shadow-sm"
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
