import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function RfqFunnel({ selectedProductFromMatrix }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', product: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (selectedProductFromMatrix) {
      setFormData((current) => ({ ...current, product: selectedProductFromMatrix }));
    }
  }, [selectedProductFromMatrix]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Kingbowen inquiry — ${formData.product || 'Whiteboard products'}`);
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Product: ${formData.product || 'Not specified'}`,
      '',
      formData.message
    ].join('\n'));
    window.location.href = `mailto:kbwstationery@kbwstationery.com?subject=${subject}&body=${body}`;
    setStatus('Your email draft has been prepared. Please review and send it in your email app.');
  };

  return (
    <section id="rfq-inquiry" className="py-14 md:py-24 bg-primary text-white" data-component="rfq-funnel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Direct factory inquiry</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">Tell us what you need.</h2>
          <p className="mt-4 text-white/75 max-w-md">Share the product, quantity and customization requirements. We will prepare the relevant catalog and quotation.</p>

          <div className="mt-8 space-y-3 text-sm">
            <a href="mailto:kbwstationery@kbwstationery.com" className="min-h-12 flex items-center gap-3 border-t border-white/15 pt-3 hover:text-white/75">
              <Mail className="w-5 h-5" /> kbwstationery@kbwstationery.com
            </a>
            <a href="https://wa.me/8618127527882" target="_blank" rel="noopener noreferrer" className="min-h-12 flex items-center gap-3 border-t border-white/15 pt-3 hover:text-white/75">
              <MessageCircle className="w-5 h-5" /> WhatsApp: +86 18127527882
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white text-primary p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="text-sm font-semibold">Name
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-2 w-full min-h-12 px-3 border border-border bg-white text-primary outline-none focus:ring-2 focus:ring-accent" />
              </label>
              <label className="text-sm font-semibold">Work email
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-2 w-full min-h-12 px-3 border border-border bg-white text-primary outline-none focus:ring-2 focus:ring-accent" />
              </label>
              <label className="text-sm font-semibold">Company
                <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="mt-2 w-full min-h-12 px-3 border border-border bg-white text-primary outline-none focus:ring-2 focus:ring-accent" />
              </label>
              <label className="text-sm font-semibold">Product
                <input value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} placeholder="Model or category" className="mt-2 w-full min-h-12 px-3 border border-border bg-white text-primary outline-none focus:ring-2 focus:ring-accent" />
              </label>
            </div>
            <label className="block text-sm font-semibold">Requirements
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Quantity, dimensions, logo, packaging or delivery needs" className="mt-2 w-full p-3 border border-border bg-white text-primary outline-none focus:ring-2 focus:ring-accent" />
            </label>
            <button type="submit" className="w-full sm:w-auto min-h-12 px-6 bg-accent text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors">
              Prepare email request
              <ArrowRight className="w-4 h-4" />
            </button>
            {status && <p role="status" className="text-sm text-secondary">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
