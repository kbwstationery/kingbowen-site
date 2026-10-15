import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Layers, Sliders, X } from 'lucide-react';
import { products, categories } from '../data/products';

export default function ProductMatrix({ onSelectedForContact, limit, showTabs = true, heading = 'Product Matrix', headingTag = 'h2' }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [activeSpecProduct, setActiveSpecProduct] = useState(null);

  const baseProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);
  const filteredProducts = limit ? baseProducts.slice(0, limit) : baseProducts;

  const handleContact = (product) => {
    if (onSelectedForContact) onSelectedForContact(product.name);
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  const closeSpecsModal = () => setActiveSpecProduct(null);

  return (
    <section id="products" className="py-14 md:py-24 bg-[#fbfbfa] border-b border-border" data-component="product-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
            <Layers className="w-4 h-4" /> Official Catalog
          </div>
          {React.createElement(headingTag, { className: 'text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-3' }, heading)}
          <p className="text-sm text-secondary">Direct from the Heshan City Jinbowen factory floor — every model is manufactured in-house.</p>
        </div>

        {/* Category Tabs */}
        {showTabs && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-secondary border-border hover:border-primary hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group relative flex flex-col bg-white border border-border overflow-hidden" data-component="product-card">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Link to={`/products/${product.slug}`} aria-label={product.name}>
                  <img
                    src={product.image}
                    alt={`${product.name} — ${product.categoryName}`}
                    className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-br-md uppercase tracking-wider">
                  {product.categoryName}
                </div>
                {product.code && (
                  <div className="absolute bottom-0 right-0 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-tl-md">
                    {product.code}
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <Link to={`/products/${product.slug}`} className="text-sm sm:text-base font-bold text-primary leading-snug mb-1.5 group-hover:text-accent transition-colors">
                  {product.name}
                </Link>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-secondary mb-2">
                  {product.moq && <span className="font-medium">MOQ: {product.moq}</span>}
                  {product.leadTime && <span className="font-medium">Lead: {product.leadTime}</span>}
                </div>

                <ul className="text-[11px] text-secondary space-y-0.5 mb-3 flex-1">
                  {(product.features || []).slice(0, 2).map((f, i) => (
                    <li key={i} className="flex items-start gap-1 leading-tight">
                      <span className="text-accent mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-0 border-t border-slate-100 grid grid-cols-2 gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveSpecProduct(product)}
                    className="text-[11px] font-bold text-primary border border-border px-2 py-2 rounded-md hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1"
                  >
                    <Sliders className="w-3 h-3" /> Specs
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContact(product)}
                    className="text-[11px] font-bold text-white bg-primary px-2 py-2 rounded-md hover:bg-[#334247] transition-colors"
                  >
                    Select RFQ
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-[#334247] transition-colors"
            >
              View all {products.length} products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Specs Modal */}
        {activeSpecProduct && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeSpecsModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="spec-modal-title"
          >
            <div
              className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeSpecsModal}
                aria-label="Close specifications modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-primary" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{activeSpecProduct.categoryName}</span>
                  <h3 id="spec-modal-title" className="text-2xl sm:text-3xl font-bold text-primary mt-2">{activeSpecProduct.name}</h3>
                  {activeSpecProduct.code && (
                    <p className="text-sm text-secondary mt-1 font-mono">Model: {activeSpecProduct.code}</p>
                  )}
                </div>

                <div className="bg-slate-50 rounded-lg p-4 sm:p-6 mb-6 border border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Official Factory Technical Data Sheet</h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(activeSpecProduct.specs || {}).map(([key, val]) => (
                      <div key={key}>
                        <dt className="text-xs font-semibold text-primary">{key}</dt>
                        <dd className="text-xs text-secondary mt-0.5">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/products/${activeSpecProduct.slug}`}
                    onClick={closeSpecsModal}
                    className="flex-1 bg-slate-100 text-primary font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    View full page <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => { closeSpecsModal(); handleContact(activeSpecProduct); }}
                    className="flex-1 bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#334247] transition-colors"
                  >
                    Request quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
