import React from 'react';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import TrustBar from '../components/TrustBar';
import ProductMatrix from '../components/ProductMatrix';
import RfqFunnel from '../components/RfqFunnel';
import { products } from '../data/products';

const SITE = 'https://www.kingbowen.com';

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Kingbowen Whiteboard Products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/products/${p.slug}`,
    name: p.name
  }))
};

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Whiteboard Products | Easels, Flip Charts, Notice Boards | Kingbowen"
        description="Browse Kingbowen's full catalog of 16 factory-manufactured whiteboard models: whiteboard easels, flip chart stands, magnetic writing boards, notice boards, showcases, glass boards and desktop boards. OEM/ODM available."
        canonicalPath="/products"
      />
      <JsonLd data={itemListSchema} />
      <TrustBar />
      <ProductMatrix heading="Whiteboard Products" headingTag="h1" />
      <RfqFunnel />
    </>
  );
}
