import React, { useState } from 'react';
import { ArrowRight, Layers, Sliders, X, Image as ImageIcon, ZoomIn, CheckCircle2 } from 'lucide-react';

export default function ProductMatrix({ onSelectProductForRfq }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);

  const categories = [
    { id: 'all', name: 'All Categories (16)' },
    { id: 'mobile', name: 'Mobile Rolling Boards' },
    { id: 'flipchart', name: 'Flip Chart & Easels' },
    { id: 'wall', name: 'Wall-Mounted Boards' },
    { id: 'glass', name: 'Glass & Desktop Boards' },
    { id: 'notice', name: 'Notice Cases & Showcases' },
  ];

  // Shared Engineering Detail Galleries (Sourced directly from Kingbowen factory specs & Alibaba links)
  const whiteboardDetailGallery = [
    {
      title: 'ABS Plastic Safety Corners (防撞包角特写)',
      image: '/assets/images/detail-abs-corner.jpg',
      desc: 'Injection-molded rounded ABS plastic corners with concealed mounting holes for student safety and edge protection.'
    },
    {
      title: 'Flush Wall Mounting Installation (隐藏式挂钩安装)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Heavy-duty concealed brackets and expansion anchors supporting quick horizontal or vertical flush wall installation.'
    },
    {
      title: 'Frame Section & Detachable Pen Tray (边框与可拆笔托)',
      image: '/assets/images/detail-whiteboard-corner-hook.jpg',
      desc: '1.2mm thick anodized aluminum extrusion with full-length slide-in marker tray and protective end caps.'
    },
    {
      title: 'Frame Cross-Section & Honeycomb Core (边框型材剖面)',
      image: '/assets/images/detail-frame-spec.jpg',
      desc: '15mm structural aluminum profile bonded with high-density anti-warp honeycomb core for permanent surface flatness.'
    }
  ];

  const mobileDetailGallery = [
    {
      title: '360° Mute Casters & Foot Brake (脚轮与刹车锁紧)',
      image: '/assets/images/detail-mobile-stand.jpg',
      desc: 'Heavy-duty 2-inch dual-wheel nylon mute casters with individual foot pedal locks for effortless mobility and stability.'
    },
    {
      title: 'ABS Safety Corner & Locking Bar (包角与旋转锁)',
      image: '/assets/images/detail-whiteboard-corner-hook.jpg',
      desc: 'Impact-resistant rounded safety corners with precision spring-loaded board flipping and locking mechanism.'
    },
    {
      title: 'Tubular Steel Stand Assembly (钢架组装与连接结构)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Reinforced crossbeam with heavy-gauge steel stand, electrostatic baked anti-scratch finish, and quick-assemble hardware.'
    },
    {
      title: 'Frame Profile & Double-Sided Core (双面型材结构)',
      image: '/assets/images/detail-frame-spec.jpg',
      desc: 'Heavy-gauge anodized aluminum perimeter frame housing double-sided baked magnetic steel dry-erase panels.'
    }
  ];

  const noticeDetailGallery = [
    {
      title: 'Cylinder Security Lock & Keys (双钥匙安全锁具特写)',
      image: '/assets/images/detail-corner-lock.jpg',
      desc: 'Precision zinc-alloy cylinder cam lock with 2 nickel-plated security keys to prevent unauthorized flyer tampering.'
    },
    {
      title: 'Concealed Wall Anchor Installation (隐藏式墙面打孔安装)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'Pre-drilled internal corner mounting holes allow concealed anchor bolt fastening completely flush to masonry or drywall.'
    },
    {
      title: 'Weatherproof Gasket & Aluminum Casing (耐候密封胶条与铝框)',
      image: '/assets/images/detail-frame-spec.jpg',
      desc: 'EPDM perimeter compression rubber seals block rain, dust, and moisture for durable outdoor and corridor performance.'
    },
    {
      title: 'Continuous Stainless Piano Hinge (不锈钢连续平开铰链)',
      image: '/assets/images/detail-showcase-lock.png',
      desc: 'Full-length heavy-duty piano hinge ensures smooth door swinging and long-term structural alignment without sagging.'
    }
  ];

  const desktopDetailGallery = [
    {
      title: 'Pencil-Polished Safety Edges (圆润打磨安全边角)',
      image: '/assets/images/detail-abs-corner.jpg',
      desc: 'Precision bevel-polished safety corners and edges ensure safe tactile handling on office and student desks.'
    },
    {
      title: 'Desktop Invisible Stand & Hardware (桌面隐形支架特写)',
      image: '/assets/images/detail-mounting-installation.jpg',
      desc: 'High-clarity acrylic easel stands and non-slip silicone pads provide stable, vibration-free desk positioning.'
    },
    {
      title: 'Accessories & Pen Clip Setup (配件与笔夹布局)',
      image: '/assets/images/detail-whiteboard-corner-hook.jpg',
      desc: 'Includes magnetic dry-erase liquid chalk pens, microfiber cloths, and integrated organizers.'
    }
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
      variantLabel: 'Stand & Frame Finish',
      variants: [
        { name: 'White Stand / Silver Frame', image: '/assets/images/double-sided-rolling-whiteboard.jpg', badge: 'White' },
        { name: 'Black Stand / Black Frame', image: '/assets/images/hero-mobile-whiteboard.jpg', badge: 'Black' }
      ],
      detailGallery: mobileDetailGallery,
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
      variantLabel: 'Stand & Height System',
      variants: [
        { name: 'White Stand / Dual Locking Knobs', image: '/assets/images/kbw-x7.jpg', badge: 'White' },
        { name: 'Heavy Industrial Silver Frame', image: '/assets/images/double-sided-rolling-whiteboard.jpg', badge: 'Silver' }
      ],
      detailGallery: mobileDetailGallery,
      features: [
        'Stepless Height-Adjustable Frame (48"x60" / Multi-Size)',
        'Reinforced Crossbeam for High-Stability Commercial Use',
        'Scratch-Resistant Electrostatic Baked Finish',
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
      name: 'Professional Presentation Flip Chart Easel with Telescopic Tripod',
      code: 'KBW-FC-70100',
      image: '/assets/images/flip-chart-easel-stand.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Stand & Leg Finish',
      variants: [
        { name: 'Silver Telescopic Tripod Legs', image: '/assets/images/flip-chart-easel-stand.jpg', badge: 'Silver' },
        { name: 'Black Powder-Coated Stand', image: '/assets/images/round-base-flipchart.jpg', badge: 'Black' }
      ],
      detailGallery: mobileDetailGallery,
      features: [
        'Universal Pad Clamp for Standard Flip Chart Paper Pads',
        'Height Adjustable Legs (105cm - 185cm)',
        'Full-Width Pen Tray Attached to Base Frame',
        'Lightweight Aluminum Construction for Easy Transport'
      ],
      specs: {
        'Board Size': '70 x 100 cm (approx. 28" x 40")',
        'Height Range': '105 cm to 185 cm stepless adjustment',
        'Clamp Design': 'Spring-loaded steel clamp with adjustable hanging hooks',
        'Leg Mechanism': 'Quick-release lever locks on all 3 telescopic legs',
        'Surface Spec': 'Magnetic lacquered steel, dry-wipeable with marker magnets'
      }
    },
    {
      id: 'kbw-round-flipchart',
      category: 'flipchart',
      categoryName: 'Flip Chart & Easel',
      name: 'Mobile Round-Base Executive Flip Chart with Five Lockable Casters',
      code: 'KBW-RB-10070',
      image: '/assets/images/round-base-flipchart.jpg',
      moq: '50 pcs',
      leadTime: '20-25 Days',
      variantLabel: 'Base Color & Frame',
      variants: [
        { name: 'Silver Grey Mobile Base', image: '/assets/images/round-base-flipchart.jpg', badge: 'Silver' },
        { name: 'Executive Black Base', image: '/assets/images/flip-chart-easel-stand.jpg', badge: 'Black' }
      ],
      detailGallery: mobileDetailGallery,
      features: [
        'Heavy Cast-Iron Circular Base for Maximum Anti-Tip Stability',
        'Five Smooth-Rolling Mute Wheels with Foot Lock Latches',
        'Magnetic Steel Writing Surface with Integrated Paper Clamp',
        'Circular Base Allows Foot Room Without Tripping Hazard'
      ],
      specs: {
        'Board Size': '100 x 70 cm (approx. 40" x 28")',
        'Base Diameter': '68 cm heavy-gauge cast iron circular platform',
        'Height Range': '160 cm to 195 cm vertical adjustment column',
        'Paper Compatibility': 'Universal hole-punch spacing for all global flip chart pads',
        'Certifications': 'BSCI factory audited, ISO 9001 quality verified'
      }
    },
    {
      id: 'kbw-wall-slim',
      category: 'wall',
      categoryName: 'Wall-Mounted Board',
      name: 'Ultra-Slim Architectural Wall-Mounted Magnetic Whiteboard',
      code: 'KBW-WALL-9060',
      image: '/assets/images/wall-mounted-magnetic-whiteboard.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Frame & Corner Caps',
      variants: [
        { name: 'Silver Frame / Grey Corners', image: '/assets/images/wall-mounted-magnetic-whiteboard.jpg', badge: 'Silver' },
        { name: 'Black Frame / Black Corners', image: '/assets/images/detail-whiteboard-corner-hook.jpg', badge: 'Black' }
      ],
      detailGallery: whiteboardDetailGallery,
      features: [
        'Minimalist 10mm Ultra-Slim Bezel Profile',
        'Concealed Corner-Fixing System with Safety ABS Caps',
        'Scratch-Resistant Porcelain Enamel or Coated Steel Surface',
        'Supports Both Landscape and Portrait Wall Installation'
      ],
      specs: {
        'Available Dimensions': '90x60cm, 120x90cm, 150x100cm, 180x120cm, 240x120cm',
        'Frame Finish': 'Satin silver anodized aluminum or matte black powder-coat',
        'Corner Caps': 'ABS engineering plastic with concealed fixing screw covers',
        'Mounting Kit': 'Includes zinc-plated wall brackets, masonry plugs & screws',
        'Pen Tray': 'Detachable 30cm clip-on anodized aluminum tray'
      }
    },
    {
      id: 'kbw-desktop-glass',
      category: 'glass',
      categoryName: 'Glass & Desktop Board',
      name: 'Tempered Glass Desktop Whiteboard with Storage Drawer',
      code: 'KBW-GLASS-DESK',
      image: '/assets/images/desktop-glass-whiteboard.jpg',
      moq: '50 pcs',
      leadTime: '15-20 Days',
      variantLabel: 'Glass & Chassis Color',
      variants: [
        { name: 'Pure White Glass / White Base', image: '/assets/images/desktop-glass-whiteboard.jpg', badge: 'White' },
        { name: 'Ultra-Clear Glass / Black Base', image: '/assets/images/desktop-glass-whiteboard.jpg', badge: 'Black' }
      ],
      detailGallery: desktopDetailGallery,
      features: [
        'High-End Non-Porous Tempered Glass Surface That Never Stains',
        'Built-in Multi-Compartment Storage Drawer for Office Supplies',
        'Angled Ergonomic Writing Surface Fits Between Keyboard & Monitor',
        'Top Channel Groove Holds Tablets, Smartphones & Markers'
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
      variantLabel: 'Lighting Spectrum & Stand',
      variants: [
        { name: 'RGB 7-Color Dynamic Rainbow', image: '/assets/images/product-led-acrylic-board.jpg', badge: 'RGB' },
        { name: 'Warm White Ambient Glow', image: '/assets/images/product-led-acrylic-board.jpg', badge: 'Warm' }
      ],
      detailGallery: desktopDetailGallery,
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
      variantLabel: 'Frame Finish & Infill',
      variants: [
        { name: 'Satin Silver Aluminum Frame', image: '/assets/images/enclosed-notice-board.png', badge: 'Silver' },
        { name: 'Matte Black Aluminum Frame', image: '/assets/images/glass-door-showcase.jpg', badge: 'Black' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Frame Anodizing Finish',
      variants: [
        { name: 'Satin Silver Anodized Aluminum', image: '/assets/images/glass-door-showcase.jpg', badge: 'Silver' },
        { name: 'Matte Black Aluminum Enclosure', image: '/assets/images/enclosed-notice-board.png', badge: 'Black' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Stand Style & Finish',
      variants: [
        { name: 'Silver 360° Rotating Stand (2-Pack)', image: '/assets/images/product-mini-desktop-whiteboard.jpg', badge: 'Silver' },
        { name: 'Compact Magnetic Lapboard Pack', image: '/assets/images/product-mini-lapboard-portable.jpg', badge: 'Slim' }
      ],
      detailGallery: desktopDetailGallery,
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
      variantLabel: 'Corner & Frame Spec',
      variants: [
        { name: 'Silver Aluminum / Grey Corners', image: '/assets/images/product-mini-lapboard-portable.jpg', badge: 'Silver' },
        { name: 'Desktop Stand Combo Edition', image: '/assets/images/product-mini-desktop-whiteboard.jpg', badge: 'Stand' }
      ],
      detailGallery: desktopDetailGallery,
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
      variantLabel: 'Casing Color & Seal',
      variants: [
        { name: 'Matte Black Weatherproof Frame', image: '/assets/images/product-notice-cork-outdoor.jpg', badge: 'Black' },
        { name: 'Silver Anodized Weatherproof Frame', image: '/assets/images/product-notice-silver-cork.jpg', badge: 'Silver' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Frame & Infill Finish',
      variants: [
        { name: 'Silver Anodized Frame / Cork', image: '/assets/images/product-notice-silver-cork.jpg', badge: 'Silver' },
        { name: 'Matte Black Frame / Cork', image: '/assets/images/product-notice-cork-outdoor.jpg', badge: 'Black' },
        { name: 'Grey Acoustic Felt Infill', image: '/assets/images/product-notice-grey-felt.jpg', badge: 'Grey' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Finish & Slide-Out System',
      variants: [
        { name: 'Brushed Silver / Grey Felt + Whiteboard', image: '/assets/images/product-notice-slideout-whiteboard.jpg', badge: 'Silver' },
        { name: 'Matte Black Anodized / Grey Felt', image: '/assets/images/product-notice-grey-felt.jpg', badge: 'Black' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Illumination & Frame',
      variants: [
        { name: 'Edge-Lit Concealed LED (Silver Frame)', image: '/assets/images/product-notice-led-illuminated.jpg', badge: 'LED' },
        { name: 'Standard Non-Illuminated Natural Cork', image: '/assets/images/product-notice-silver-cork.jpg', badge: 'Std' }
      ],
      detailGallery: noticeDetailGallery,
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
      variantLabel: 'Door & Frame Option',
      variants: [
        { name: 'Silver Frame / Clear Acrylic Door', image: '/assets/images/product-notice-acrylic-door.jpg', badge: 'Silver' },
        { name: 'Heavy-Duty Glass Door Option', image: '/assets/images/product-notice-silver-cork.jpg', badge: 'Glass' }
      ],
      detailGallery: noticeDetailGallery,
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
            <span>Product collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            Whiteboards for every space
          </h2>
          <p className="text-secondary text-sm mt-3">
            Compare mobile, wall-mounted, flip chart, glass and notice-board models with multiple color and frame finishes.
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
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-border">
                    <img
                      src={currentDisplayImage}
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
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    {/* Amazon-Style Variant & Color Options Selector */}
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
              <span>Engineering Specification & Product Details</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-primary mb-5">
              {selectedSpecProduct.name}
            </h3>

            {/* Product Engineering Details & Installation Gallery (From Alibaba & Factory Specs) */}
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
                Technical Data Sheet
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
