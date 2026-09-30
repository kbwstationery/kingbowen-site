import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock, Download, PhoneCall, Sparkles, AlertCircle } from 'lucide-react';

export default function RfqFunnel({ selectedProductFromMatrix }) {
  const [selectedProducts, setSelectedProducts] = useState(['Mobile Rolling Whiteboards']);
  const [volumeTier, setVolumeTier] = useState('Trial Batch (50 - 200 pcs)');
  const [customNeeds, setCustomNeeds] = useState(['Custom Logo / Silkscreen']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If a product was selected from the Matrix, add or set it
  useEffect(() => {
    if (selectedProductFromMatrix) {
      if (!selectedProducts.includes(selectedProductFromMatrix)) {
        setSelectedProducts(prev => [selectedProductFromMatrix, ...prev]);
      }
    }
  }, [selectedProductFromMatrix]);

  const productOptions = [
    'Mobile Rolling Whiteboards',
    'Flip Chart Stands & Easels',
    'Wall-Mounted Magnetic Boards',
    'Glass Whiteboards & Desktop Pads',
    'Enclosed Notice Cases & Showcases',
    'Custom OEM/ODM Solution'
  ];

  const volumeOptions = [
    'Trial Batch (50 - 200 pcs)',
    'Partial Container (200 - 500 pcs)',
    '20ft Container (~1,000 pcs)',
    '40ft HQ Container (~2,500 pcs)',
    'Long-Term OEM Supply Agreement'
  ];

  const customOptions = [
    'Custom Logo / Silkscreen',
    'Custom Frame Profile / Color',
    'Custom Grid / Schedule Printing',
    'ISTA-3A Drop-Tested Packaging',
    'Standard Factory Catalog Specs'
  ];

  const toggleProduct = (item) => {
    if (selectedProducts.includes(item)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(p => p !== item));
      }
    } else {
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  const toggleCustomNeed = (item) => {
    if (customNeeds.includes(item)) {
      setCustomNeeds(customNeeds.filter(c => c !== item));
    } else {
      setCustomNeeds([...customNeeds, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const generatedId = `RFQ-KBW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="rfq-inquiry" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-primary text-white border-t border-slate-800" data-component="rfq-funnel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: B2B Commitments & Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-on-dark mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Direct Factory Sourcing Inquiry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Request Complete 2026 Catalog, Wholesale Pricing & Evaluation Samples
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Receive our comprehensive engineering spec sheets, volume FOB/CIF pricing tiers, and customized packaging options. Dedicated senior trade managers assist your project every step of the way.
              </p>

              {/* Commitments List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-accent-on-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">4-Hour Fast Quotation SLA</div>
                    <div className="text-xs text-slate-300">Detailed formal quote with FOB, CIF, or DDP pricing provided within 4 business hours.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">Free Quality Evaluation Sample</div>
                    <div className="text-xs text-slate-300">Standard model sample provided free for verification (courier freight collect).</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-accent-on-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">Strict NDA & IP Protection</div>
                    <div className="text-xs text-slate-300">Your proprietary CAD drawings, brand logos, and regional markets remain 100% confidential.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Factory Quick Line */}
            <div className="p-4 rounded border border-white/10 bg-white/5 text-xs text-slate-300 space-y-2">
              <div className="text-white font-bold flex items-center justify-between">
                <span>Heshan City Jinbowen Industrial Export Office</span>
                <span className="text-emerald-400 font-mono">ONLINE</span>
              </div>
              <div>Email: <a href="mailto:export@kingbowen.com" className="text-accent-on-dark underline">export@kingbowen.com</a></div>
              <div>Direct Phone / WhatsApp: <a href="https://wa.me/8618127527882" target="_blank" rel="noopener noreferrer" className="text-accent-on-dark underline">+86 757 25521281 / +86 18127527882</a></div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl border border-slate-200">
              
              {isSubmitted ? (
                /* Success State */
                (<div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Inquiry Received Successfully!
                  </h3>
                  <div className="inline-block bg-slate-100 px-3 py-1.5 rounded text-xs font-mono font-semibold text-secondary">
                    Inquiry Reference: <span className="text-accent font-bold">{inquiryId}</span>
                  </div>
                  <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-primary">{formData.name || 'Valued Partner'}</span>. Our Senior International Sales Director has received your specifications and will deliver your formal pricing and PDF catalog to <span className="font-semibold text-primary">{formData.email}</span> within 4 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', company: '', country: '', phone: '', message: '' });
                      }}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-secondary text-xs font-semibold rounded"
                    >
                      Submit Another Requirement
                    </button>
                    <a
                      href="https://wa.me/8613800000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded flex items-center gap-1.5 shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                  </div>
                </div>)
              ) : (
                /* Form Fields */
                (<form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Product Series Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                      1. Select Product Categories of Interest <span className="text-accent">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {productOptions.map((opt) => {
                        const isSelected = selectedProducts.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => toggleProduct(opt)}
                            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-primary text-white shadow-2xs'
                                : 'bg-slate-100 text-secondary hover:bg-slate-200 border border-slate-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {/* Step 2: Order Volume Tier */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                      2. Estimated Order Volume / Batch Size
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {volumeOptions.map((v) => (
                        <button
                          type="button"
                          key={v}
                          onClick={() => setVolumeTier(v)}
                          className={`p-2.5 rounded text-left text-xs font-semibold border transition-all ${
                            volumeTier === v
                              ? 'border-accent bg-blue-50/60 text-accent font-bold'
                              : 'border-slate-200 bg-white text-secondary hover:bg-slate-50'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Step 3: Customization Needs */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                      3. Customization & OEM Requirements
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {customOptions.map((c) => {
                        const isSelected = customNeeds.includes(c);
                        return (
                          <button
                            type="button"
                            key={c}
                            onClick={() => toggleCustomNeed(c)}
                            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-slate-800 text-white'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : ''}{c}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {/* Step 4: Contact Information */}
                  <div className="pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                      4. Your Contact & Destination Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Corporate Work Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Destination Country / Discharge Port *"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="mb-3.5">
                      <input
                        type="text"
                        placeholder="WhatsApp / Phone Number (For urgent quote notifications)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Project Details, Specific Dimensions, Target In-Hand Date, or Special Requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-hidden"
                      ></textarea>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-bold text-sm rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit RFQ & Request 2026 Wholesale Catalog</span>
                        </>
                      )}
                    </button>
                    <div className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero Spam Guarantee • Information used exclusively for quotation delivery</span>
                    </div>
                  </div>
                </form>)
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
