import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Lazy initialize scroll animations to avoid blocking main bundle
    import('../../utils/scrollAnimations')
      .then((mod) => {
        if (mod && typeof mod.initScrollAnimations === 'function') {
          mod.initScrollAnimations();
        }
        if (mod && typeof mod.initKeyboardScroll === 'function') {
          mod.initKeyboardScroll();
        }
      })
      .catch(() => {
        // ignore
      });
  }, []);

  // Ensure only the layout <main> is scrollable to avoid double scrollbars
  useEffect(() => {
    const docEl = document.documentElement;
    const prevHtmlOverflow = docEl.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlHeight = docEl.style.height;
    const prevBodyHeight = document.body.style.height;

    // Make html/body full-height and hide their scrollbars — main will handle scrolling
    docEl.style.height = '100%';
    document.body.style.height = '100%';
    docEl.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      docEl.style.overflow = prevHtmlOverflow || '';
      document.body.style.overflow = prevBodyOverflow || '';
      docEl.style.height = prevHtmlHeight || '';
      document.body.style.height = prevBodyHeight || '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow fade-in relative z-10 overflow-auto min-h-0 no-scrollbar" style={{ paddingTop: 'var(--header-height)', paddingBottom: '6rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;