import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routeElements } from './routes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-secondary">The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 inline-block bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-[#334247] transition-colors">
        Back to home
      </a>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-[#334247] transition-colors"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-primary antialiased" data-component="app-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {routeElements.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
