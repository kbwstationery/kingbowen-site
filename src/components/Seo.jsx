import { useEffect } from 'react';

function setMeta(selector, attr, content) {
  if (typeof document === 'undefined' || !content) return;
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, content);
}

export default function Seo({ title, description, canonicalPath }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    if (canonicalPath) {
      setMeta('link[rel="canonical"]', 'href', `https://www.kingbowen.com${canonicalPath}`);
      setMeta('meta[property="og:url"]', 'content', `https://www.kingbowen.com${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);
  return null;
}
