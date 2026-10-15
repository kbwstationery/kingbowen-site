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
      <RfqFunnel />
    </>
  );
}
