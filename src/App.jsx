import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FactoryTour from './components/FactoryTour';
import ProductMatrix from './components/ProductMatrix';
import ApplicationScenarios from './components/ApplicationScenarios';
import RfqFunnel from './components/RfqFunnel';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp, PhoneCall } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <ProductMatrix onSelectProductForRfq={setSelectedProduct} />
        <ApplicationScenarios />
        <FactoryTour />
        <RfqFunnel selectedProductFromMatrix={selectedProduct} />
      </main>
      <Footer />

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a href="https://wa.me/8618127527882" target="_blank" rel="noopener noreferrer" aria-label="Contact Kingbowen on WhatsApp" className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
          <PhoneCall className="w-5 h-5" />
        </a>
        <a href="#rfq-inquiry" aria-label="Open wholesale inquiry form" className="w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
          <MessageSquare className="w-5 h-5" />
        </a>
        {showBackToTop && (
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="w-12 h-12 bg-white text-primary border border-border rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
