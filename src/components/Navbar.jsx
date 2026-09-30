import React, { useState } from 'react';
import { Layers, PhoneCall, ArrowRight, Menu, X, ShieldCheck, Mail, Factory } from 'lucide-react';

export default function Navbar({ onSelectProduct }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Factory Tour', href: '#factory-tour' },
    { name: 'OEM Capabilities', href: '#engineering' },
    { name: 'Certifications', href: '#trust-bar' },
    { name: 'Applications', href: '#applications' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border transition-all">
      {/* Top micro bar for global B2B trade facts & AI-structured metadata */}
      <div className="bg-primary text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-on-dark" />
              <span>BSCI & ISO 9001:2015 Audited Manufacturer</span>
            </span>
            <span className="text-slate-500">•</span>
            <span>19,000+ m² Standardized Production Facility</span>
            <span className="text-slate-500">•</span>
            <span>Direct Export to 50+ Global Markets</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:kbwstationery@:kbwstationery.com" className="hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>kbwstationery@kbwstationery.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Fast 4-Hour Response Guarantee
            </span>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo with Real Bowen Logo Image */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 px-2 py-1 rounded bg-slate-50 border border-slate-200 flex items-center justify-center">
              <img
                src="/assets/images/logo-bowen.png"
                alt="Kingbowen Official Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-primary leading-none">
                KINGBOWEN
              </span>
              <span className="text-[10px] uppercase tracking-widest text-secondary mt-0.5 font-medium">Visual Systems • Est. 1993</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/8618127527882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-secondary hover:text-primary border border-border rounded hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="#rfq-inquiry"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded shadow-sm hover:shadow transition-all"
            >
              <span>Instant Wholesale RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#rfq-inquiry"
              className="sm:hidden px-3 py-1.5 bg-accent text-white text-xs font-semibold rounded"
            >
              Get RFQ
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-secondary hover:text-primary hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-slate-50 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a
              href="#rfq-inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-accent text-white font-semibold rounded text-sm shadow-sm"
            >
              Request Wholesale Catalog & RFQ
            </a>
            <a
              href="mailto:export@kingbowen.com"
              className="w-full text-center py-2.5 border border-border text-secondary font-medium rounded text-sm hover:bg-slate-50"
            >
              Email: export@kingbowen.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
