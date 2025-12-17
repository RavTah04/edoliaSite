import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Certifications = lazy(() => import('./pages/Certifications'));
const ContactTest = lazy(() => import('./tests/ContactTest'));
import SplashScreen from './components/Shared/SplashScreen';
// import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Disable scroll while splash is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let canceled = false;
    const minVisible = 2000; // ensure the wordmark has time to animate (ms)
    const start = performance.now();

    const hideNow = () => {
      if (canceled) return;
      setShowSplash(false);
      document.body.style.overflow = originalOverflow;
    };

    const scheduleHide = () => {
      const elapsed = performance.now() - start;
      if (elapsed >= minVisible) {
        hideNow();
      } else {
        // ensure a minimum visible time so the 'EDOLIA' animation completes
        setTimeout(() => {
          hideNow();
        }, Math.max(0, Math.round(minVisible - elapsed)));
      }
    };

    // Hide as soon as page is interactive / idle; keep a small max timeout to avoid blocking
    if (document.readyState === 'complete') {
      requestAnimationFrame(scheduleHide);
    } else {
      window.addEventListener('load', scheduleHide, { once: true });
      if ('requestIdleCallback' in window) {
        // try to hide during idle time shortly after load
        window.requestIdleCallback(scheduleHide, { timeout: 1200 });
      }
    }

    // Fallback max delay
    const fallback = setTimeout(scheduleHide, 3000);

    return () => {
      canceled = true;
      clearTimeout(fallback);
      window.removeEventListener('load', scheduleHide);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <Router>
      {/* <ScrollToTop /> */}
      {showSplash && <SplashScreen />}
      <div aria-hidden={showSplash} style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 400ms ease' }}>
        <Suspense fallback={<div style={{minHeight: '100vh'}} />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Use a param to match both /produits and /produits/:slug */}
              <Route path="/produits/:slug?" element={<Products />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* test Contact */}
              <Route path="/test-contact" element={<ContactTest />} />

              <Route path="/certifications" element={<Certifications />} />
              <Route path="/gammes-produits" element={<Products />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;