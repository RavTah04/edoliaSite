// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll immédiatement vers le haut
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // ou 'smooth' pour une animation douce
    });
    
    // Solution de secours pour certains navigateurs
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]); // Se déclenche à chaque changement d'URL

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;