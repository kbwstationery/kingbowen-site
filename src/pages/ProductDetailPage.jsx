import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Factory, Package, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { getProductBySlug, getProductsByCategory, categories } from '../data/products';
import RfqFunnel from '../components/RfqFunnel';

const SITE = 'https://www.kingbowen.com';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <Seo title="Product not found | Kingbowen" canonicalPath="/products" />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-primary">Product not found</h1>
          <p className="mt-3 text-secondary">The product you are looking for is not available.</p>
          <Link to="/products" className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-[#334247] transition-colors">
            Back to all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </>
    );
  }

  const cat = categories.find((c) => c.id === product.category);
  const catSlug = cat ? cat.slug : product.category;
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  const title = `${product.name} (${product.code}) | Kingbowen`;
  const description = `${product.name}, model ${product.code} — a ${product.categoryName.toLowerCase()} manufactured in-house by Kingbowen. ${product.features?.[0] || ''} MOQ ${product.moq}, lead time ${product.leadTime}. BSCI & ISO 9001:2015 audited factory.`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE}/products/${product.slug}#product`,
    name: product.name,
    sku: product.code,
    brand: { '@type': 'Brand', name: 'Kingbowen' },
    manufacturer: { '@id': `${SITE}/#organization` },
    image: `${SITE}${product.image}`,
    category: product.categoryName,
    description,
    additionalProperty: Object.entries(product.specs || {}).map(([k, v]) => ({
      '@type': 'PropertyValue', name: k, value: v
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
      { '@type': 'ListItem', position: 3, name: product.categoryName, item: `${SITE}/categories/${catSlug}` },
      { '@type': 'ListItem', position: 4, name: product.name }
    ]
  };

  return (
    <>
      <Seo title={title} description={description} canonicalPath={`/products/${product.slug}`} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-xs text-secondary">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/products" className="hover:text-primary">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to={`/categories/${catSlug}`} className="hover:text-primary">{product.categoryName}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-primary font-semibold">{product.code}</li>
        </ol>
      </nav>

      {/* Product detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="bg-white border border-border p-6 sm:p-10 flex items-center justify-center">
            <img
              src={product.image}
              alt={`${product.name} — ${product.categoryName} by Kingbowen`}
              className="max-h-[480px] w-auto object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
              {product.categoryName}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary tracking-tight">{product.name}</h1>
            <p className="mt-2 text-sm text-secondary font-mono">Model: {product.code}</p>

            <p className="mt-5 text-secondary leading-relaxed">{description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {product.moq && (
                <span className="inline-flex items-center gap-2 text-sm bg-slate-50 border border-border px-3 py-2 rounded-lg">
                  <Package className="w-4 h-4 text-accent" /> MOQ: {product.moq}
                </span>
              )}
              {product.leadTime && (
                <span className="inline-flex items-center gap-2 text-sm bg-slate-50 border border-border px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-accent" /> Lead time: {product.leadTime}
                </span>
              )}
              <span className="inline-flex items-center gap-2 text-sm bg-slate-50 border border-border px-3 py-2 rounded-lg">
                <Factory className="w-4 h-4 text-accent" /> Made in-house
              </span>
            </div>

            {/* Features */}
            {product.features?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Key features</h2>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="text-accent mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs */}
            <div className="mt-8 bg-slate-50 border border-border rounded-lg p-5 sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Technical specifications</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {Object.entries(product.specs || {}).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-semibold text-primary">{k}</dt>
                    <dd className="text-xs text-secondary mt-0.5">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#334247] transition-colors"
            >
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-primary mb-6">More {product.categoryName} models</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((rp) => (
                <Link key={rp.id} to={`/products/${rp.slug}`} className="group bg-white border border-border overflow-hidden hover:border-primary transition-colors">
                  <div className="aspect-square bg-slate-50 flex items-center justify-center p-4">
                    <img src={rp.image} alt={rp.name} className="max-h-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-snug">{rp.name}</p>
                    <p className="text-xs text-secondary mt-1 font-mono">{rp.code}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <RfqFunnel selectedProductFromMatrix={product.name} />
    </>
  );
}
