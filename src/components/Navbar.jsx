import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'In use', href: '#applications' },
    { name: 'Factory', href: '#factory-tour' }
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border" data-component="site-header">
      <div className="hidden md:block bg-[#f2f3f1] border-b border-border text-xs text-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <span>BSCI & ISO 9001:2015 audited manufacturer</span>
          <a href="mailto:kbwstationery@kbwstationery.com" className="hover:text-primary underline-offset-4 hover:underline">kbwstationery@kbwstationery.com</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[76px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Kingbowen home">
          <img src="/assets/images/logo-bowen.png" alt="Kingbowen" className="h-9 w-auto object-contain" />
          <span className="font-bold tracking-[0.08em] text-primary">KINGBOWEN</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#rfq-inquiry" className="min-h-11 px-4 bg-primary text-white text-sm font-bold inline-flex items-center gap-2 hover:bg-[#334247] transition-colors">
            Get a quote
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </a>
          <button ref={triggerRef} type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-11 h-11 inline-flex items-center justify-center text-primary border border-border" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-border px-4 py-4 shadow-lg" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="min-h-12 flex items-center px-3 text-base font-semibold text-primary border-b border-border last:border-b-0">
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
