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
      <FactoryTour />
      <RfqFunnel />
    </>
  );
}
