import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Products', to: '/products' },
  { name: 'Factory', to: '/factory' },
  { name: 'OEM / ODM', to: '/oem-odm' },
  { name: 'Certifications', to: '/certifications' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef(null);

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

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border" data-component="site-header">
      <div className="hidden md:block bg-[#f2f3f1] border-b border-border text-xs text-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <span>BSCI & ISO 9001:2015 audited manufacturer</span>
          <a href="mailto:kbwstationery@kbwstationery.com" className="hover:text-primary underline-offset-4 hover:underline">kbwstationery@kbwstationery.com</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Kingbowen home">
          <img src="/assets/images/logo-bowen.png" alt="Kingbowen" className="h-9 w-auto object-contain" />
          <span className="font-bold tracking-[0.08em] text-primary">KINGBOWEN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.to} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="min-h-11 px-4 bg-primary text-white text-sm font-bold inline-flex items-center gap-2 hover:bg-[#334247] transition-colors">
            Get a quote
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </Link>
          <button ref={triggerRef} type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-11 h-11 inline-flex items-center justify-center text-primary border border-border" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-border px-4 py-4 shadow-lg" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.to} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `min-h-12 flex items-center px-3 text-base font-semibold border-b border-border last:border-b-0 ${isActive ? 'text-accent' : 'text-primary'}`}>
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="min-h-12 flex items-center px-3 text-base font-semibold text-accent">
            Get a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
