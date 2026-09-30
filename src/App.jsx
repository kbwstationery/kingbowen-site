import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FactoryTour from './components/FactoryTour';
import ProductMatrix from './components/ProductMatrix';
import EngineeringOem from './components/EngineeringOem';
import ApplicationScenarios from './components/ApplicationScenarios';
import BuyerBenefits from './components/BuyerBenefits';
import RfqFunnel from './components/RfqFunnel';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp, PhoneCall } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral text-foreground">
      {/* Top Navbar */}
      <Navbar onSelectProduct={handleSelectProduct} />
      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 4-Column Credential Trust Bar (BSCI & ISO9001) */}
        <TrustBar />

        {/* Real Factory Tour & Production Evidence Gallery */}
        <FactoryTour />

        {/* Core Product Matrix & Specs */}
        <ProductMatrix onSelectProductForRfq={handleSelectProduct} />

        {/* 30-Year OEM/ODM Engineering Precision */}
        <EngineeringOem />

        {/* Real Commercial Application Environments */}
        <ApplicationScenarios />

        {/* Distributor & Buyer Benefits */}
        <BuyerBenefits />

        {/* High-Conversion RFQ & Sample Funnel */}
        <RfqFunnel selectedProductFromMatrix={selectedProduct} />
      </main>
      {/* Industrial Footer */}
      <Footer />
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        {/* WhatsApp Fast Connect */}
        <a
          href="https://wa.me/8618127527882"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
          title="Direct WhatsApp with Export Director"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        {/* Quick RFQ Floating Button */}
        <a
          href="#rfq-inquiry"
          className="w-11 h-11 sm:w-12 sm:h-12 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
          title="Instant RFQ Inquiry"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 sm:w-12 sm:h-12 bg-white text-primary border border-border rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-slate-600" />
          </button>
        )}
      </div>
    </div>
  );
}
