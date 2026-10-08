import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10" data-component="footer-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/images/logo-bowen.png" alt="Kingbowen" className="h-9 w-auto bg-white p-1" />
              <span className="font-bold tracking-[0.08em]">KINGBOWEN</span>
            </div>
            <p className="mt-4 text-sm text-white/65 max-w-sm">Writing board systems for offices, schools and commercial distributors.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/65">
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#applications" className="hover:text-white">In use</a>
              <a href="#factory-tour" className="hover:text-white">Factory</a>
              <a href="#rfq-inquiry" className="hover:text-white">Inquiry</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />No.71, Third Industrial Zone, Hecheng Town, Heshan City, Jiangmen City, Guangdong Province, China</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:kbwstationery@kbwstationery.com" className="hover:text-white">kbwstationery@kbwstationery.com</a></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="https://wa.me/8618127527882" target="_blank" rel="noopener noreferrer" className="hover:text-white">+86 18127527882</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/45 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Heshan City Jinbowen Industrial Technology Co., Ltd.</span>
          <span>kingbowen.com</span>
        </div>
      </div>
    </footer>
  );
}
