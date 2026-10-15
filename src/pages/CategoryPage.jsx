import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { getCategoryBySlug, getProductsByCategory } from '../data/products';
import RfqFunnel from '../components/RfqFunnel';

const SITE = 'https://www.kingbowen.com';

const CATEGORY_BLURB = {
  easel: 'Freestanding whiteboard easels with adjustable-height A-frame and tripod stands for offices, training rooms and classrooms.',
  flipchart: 'Mobile flip chart stands with height-adjustable frames and rolling bases for meeting rooms and collaborative workspaces.',
  'magnetic-board': 'Wall-mounted magnetic writing boards with aluminium frames and lacquered steel surfaces for offices and schools.',
  'notice-board': 'Cork, felt and combination notice boards for pinning announcements in offices, schools and public spaces.',
  showcase: 'Lockable glass and aluminium display showcases for notices, certificates and safety information.',
  'glass-board': 'Magnetic glass writing boards with a premium floating-glass finish for modern offices and executive spaces.',
  'desktop-iron': 'Compact iron desktop writing boards and lapboards for personal notes, planning and on-the-go writing.'
};

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category || category.id === 'all') {
    return (
      <>
        <Seo title="Category not found | Kingbowen" canonicalPath="/products" />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-primary">Category not found</h1>
          <Link to="/products" className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-[#334247] transition-colors">
            Back to all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </>
    );
  }

  const items = getProductsByCategory(category.id);
  const blurb = CATEGORY_BLURB[category.id] || `${category.name} manufactured by Kingbowen.`;
  const title = `${category.name} Manufacturer | Kingbowen`;
  const description = `${category.name} from Kingbowen — ${items.length} factory-direct models. OEM/ODM whiteboard manufacturer, BSCI & ISO 9001:2015 audited. MOQ from 50 units, 15–25 day lead time.`;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.name,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}/products/${p.slug}`,
      name: p.name
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
      { '@type': 'ListItem', position: 3, name: category.name }
    ]
  };

  return (
    <>
      <Seo title={title} description={description} canonicalPath={`/categories/${category.slug}`} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-xs text-secondary">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/products" className="hover:text-primary">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-primary font-semibold">{category.name}</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">{category.name}</h1>
          <p className="mt-4 text-secondary leading-relaxed">{blurb} {items.length} factory-direct models are available, all manufactured in-house at our Heshan City facility.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((p) => (
            <Link key={p.id} to={`/products/${p.slug}`} className="group bg-white border border-border overflow-hidden hover:border-primary transition-colors">
              <div className="aspect-square bg-slate-50 flex items-center justify-center p-4">
                <img src={p.image} alt={`${p.name} — ${category.name}`} className="max-h-full object-contain group-hover:scale-105 transition-transform" loading="lazy" />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-snug">{p.name}</p>
                <p className="text-xs text-secondary mt-1 font-mono">{p.code}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 text-[11px] text-secondary">
                  {p.moq && <span>MOQ: {p.moq}</span>}
                  {p.leadTime && <span>Lead: {p.leadTime}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RfqFunnel />
    </>
  );
}
