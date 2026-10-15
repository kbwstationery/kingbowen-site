import React from 'react';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductMatrix from '../components/ProductMatrix';
import ApplicationScenarios from '../components/ApplicationScenarios';
import FactoryTour from '../components/FactoryTour';
import Faq, { faqs } from '../components/Faq';
import RfqFunnel from '../components/RfqFunnel';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Kingbowen | Commercial Whiteboard Manufacturer & OEM/ODM Supplier"
        description="Factory-direct whiteboard manufacturer in Heshan City, Guangdong. Mobile easels, flip chart stands, magnetic writing boards, notice boards and showcases. BSCI & ISO 9001:2015 audited. OEM/ODM for EU & US distributors."
        canonicalPath="/"
      />
      <JsonLd data={faqSchema} />
      <Hero />
      <TrustBar />
      <ProductMatrix limit={8} showTabs={false} />
      <ApplicationScenarios />
      <FactoryTour />
      <Faq />
      <RfqFunnel />
    </>
  );
}
