import React from 'react';
import { Layers, Mail, Phone, MapPin, Globe, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-12 border-t border-slate-800" data-component="footer-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Company Profile & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-accent text-white flex items-center justify-center font-bold text-base shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  KINGBOWEN
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5 font-medium">
                  Heshan City Jinbowen Industrial Technology
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">Established in 1993 with 30 years of manufacturing heritage. Operating a 19,000+ m² standardized production base in Guangdong, specialized in precision-engineered writing boards, flip charts, architectural magnetic systems, and display cases.</p>

            <div className="flex items-center gap-4 pt-2">
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-accent-on-dark flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>BSCI Audited</span>
              </div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <span>100+ Patents</span>
              </div>
            </div>
          </div>

          {/* Col 3: Product Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Mobile Rolling Whiteboards</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Flip Chart Stands & Easels</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Wall-Mounted Magnetic Boards</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Tempered Glass Desktop Pads</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Enclosed Cork Bulletin Showcases</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Custom Institutional Boards</a></li>
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              OEM/ODM Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#engineering" className="hover:text-white transition-colors">Aluminum Extrusion Customization</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Custom Frame Colors & Anodizing</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Precision Laser Logo Engraving</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">ISTA-3A Drop-Tested Packaging</a></li>
              <li><a href="#rfq-inquiry" className="hover:text-white transition-colors">Free Evaluation Sample Program</a></li>
              <li><a href="#trust-bar" className="hover:text-white transition-colors">Factory Audit & Compliance</a></li>
            </ul>
          </div>

          {/* Col 5: Factory Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Global Export Division
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-on-dark flex-shrink-0 mt-0.5" />
                <span>No.71,Third Industrial Zone, Hecheng Town, Heshan City, Jiangmen City, Guangdong Province, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-on-dark flex-shrink-0" />
                <a href="mailto:kbwstationery@kbwstationery.com" className="hover:text-white transition-colors">kbwstationery@kbwstationery.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-on-dark flex-shrink-0" />
                <span>WhatsApp / Tel: +86 18127527882</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-accent-on-dark flex-shrink-0" />
                <a href="https://jinbowen.en.alibaba.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
                  Alibaba Verified Store
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2003 - 2026 Heshan City Jinbowen Industrial Technology Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Domain: kingbowen.com</span>
            <span>•</span>
            <a href="#rfq-inquiry" className="hover:text-slate-300">Privacy Policy & NDA</a>
            <span>•</span>
            <a href="#rfq-inquiry" className="hover:text-slate-300">Commercial Terms (FOB/CIF/DDP)</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
