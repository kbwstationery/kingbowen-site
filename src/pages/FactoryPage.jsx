import React from 'react';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import FactoryTour from '../components/FactoryTour';
import RfqFunnel from '../components/RfqFunnel';

const SITE = 'https://www.kingbowen.com';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Honeycomb Panel Roller Gluing — PUR Lamination Line',
  description: 'Automatic adhesive spraying and honeycomb panel roller gluing on the Kingbowen continuous PUR lamination line.',
  thumbnailUrl: `${SITE}/assets/images/factory-workshop-1.jpg`,
  contentUrl: `${SITE}/assets/videos/honeycomb-gluing.mp4`
};

export default function FactoryPage() {
  return (
    <>
      <Seo
        title="Whiteboard Factory Tour | 19,000 m² BSCI & ISO 9001 Facility | Kingbowen"
        description="Tour the Kingbowen manufacturing facility in Heshan City, Guangdong: 19,000+ m² production base, raw material panel fabrication, precision cutting, continuous PUR lamination, standardized assembly and final QC & export packing."
        canonicalPath="/factory"
      />
      <JsonLd data={videoSchema} />
      <section className="bg-[#fbfbfa] border-b border-border py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">Factory Tour</div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">Inside the Kingbowen whiteboard factory</h1>
          <p className="mt-3 text-secondary max-w-2xl">A 19,000+ m² vertically integrated facility in Heshan City, Guangdong — from raw material panel fabrication to final QC and export packing.</p>
        </div>
      </section>
      <FactoryTour />
      <RfqFunnel />
    </>
  );
}
