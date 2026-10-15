import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import FactoryPage from './pages/FactoryPage';
import OemPage from './pages/OemPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import { products, categories, getProductsByCategory } from './data/products';

const SITE = 'https://www.kingbowen.com';

// Route elements consumed by App.jsx (react-router). Param routes use :slug.
export const routeElements = [
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:slug', element: <ProductDetailPage /> },
  { path: '/categories/:slug', element: <CategoryPage /> },
  { path: '/factory', element: <FactoryPage /> },
  { path: '/oem-odm', element: <OemPage /> },
  { path: '/certifications', element: <CertificationsPage /> },
  { path: '/contact', element: <ContactPage /> }
];

function productTitle(p) { return `${p.name} (${p.code}) | Kingbowen`; }
function productDescription(p) {
  return `${p.name}, model ${p.code} — a ${p.categoryName.toLowerCase()} manufactured in-house by Kingbowen. ${p.features?.[0] || ''} MOQ ${p.moq}, lead time ${p.leadTime}. BSCI & ISO 9001:2015 audited factory.`;
}
function categoryTitle(c) { return `${c.name} Manufacturer | Kingbowen`; }
function categoryDescription(c) {
  const n = getProductsByCategory(c.id).length;
  return `${c.name} from Kingbowen — ${n} factory-direct models. OEM/ODM whiteboard manufacturer, BSCI & ISO 9001:2015 audited. MOQ from 50 units, 15–25 day lead time.`;
}

// Concrete routes for prerender + sitemap. Title/description match each page's <Seo>.
export const prerenderRoutes = [
  {
    path: '/',
    title: 'Kingbowen | Commercial Whiteboard Manufacturer & OEM/ODM Supplier',
    description: 'Factory-direct whiteboard manufacturer in Heshan City, Guangdong. Mobile easels, flip chart stands, magnetic writing boards, notice boards and showcases. BSCI & ISO 9001:2015 audited. OEM/ODM for EU & US distributors.'
  },
  {
    path: '/products',
    title: 'Whiteboard Products | Easels, Flip Charts, Notice Boards | Kingbowen',
    description: "Browse Kingbowen's full catalog of 16 factory-manufactured whiteboard models: whiteboard easels, flip chart stands, magnetic writing boards, notice boards, showcases, glass boards and desktop boards. OEM/ODM available."
  },
  ...products.map((p) => ({ path: `/products/${p.slug}`, title: productTitle(p), description: productDescription(p) })),
  ...categories.filter((c) => c.slug).map((c) => ({ path: `/categories/${c.slug}`, title: categoryTitle(c), description: categoryDescription(c) })),
  {
    path: '/factory',
    title: 'Whiteboard Factory Tour | 19,000 m² BSCI & ISO 9001 Facility | Kingbowen',
    description: 'Tour the Kingbowen manufacturing facility in Heshan City, Guangdong: 19,000+ m² production base, raw material panel fabrication, precision cutting, continuous PUR lamination, standardized assembly and final QC & export packing.'
  },
  {
    path: '/oem-odm',
    title: 'OEM / ODM Whiteboard Manufacturing | Kingbowen',
    description: 'Kingbowen provides full OEM/ODM whiteboard manufacturing: bespoke dimensions, custom aluminum frame profiles and anodized finishes, laser logo engraving, silk-screen grid printing and ISTA-3A drop-tested retail packaging.'
  },
  {
    path: '/certifications',
    title: 'Certifications & Compliance | ISO 9001, BSCI, REACH | Kingbowen',
    description: 'Kingbowen holds ISO 9001:2015 quality management certification and passes BSCI social compliance audits. All products use REACH and RoHS compliant raw materials with ISTA-3A drop-tested export packaging.'
  },
  {
    path: '/contact',
    title: 'Request a Quote | Contact Kingbowen Whiteboard Factory',
    description: 'Contact Kingbowen for whiteboard OEM/ODM quotes. Share your product, quantity and customization requirements. Email kbwstationery@kbwstationery.com or WhatsApp +86 18127527882.'
  }
];

export { SITE };
