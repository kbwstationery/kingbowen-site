import React from 'react';
import Seo from '../components/Seo';
import RfqFunnel from '../components/RfqFunnel';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Request a Quote | Contact Kingbowen Whiteboard Factory"
        description="Contact Kingbowen for whiteboard OEM/ODM quotes. Share your product, quantity and customization requirements. Email kbwstationery@kbwstationery.com or WhatsApp +86 18127527882."
        canonicalPath="/contact"
      />
      <section className="bg-[#fbfbfa] border-b border-border py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">Contact</div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">Request a quote from the factory</h1>
          <p className="mt-3 text-secondary max-w-2xl">Tell us the product, quantity and customization requirements. We will prepare the relevant catalog and quotation.</p>
        </div>
      </section>
      <RfqFunnel />
    </>
  );
}
