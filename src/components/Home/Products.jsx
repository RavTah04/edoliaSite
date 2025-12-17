import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const featuredProducts = [
    { id: 1, name: 'Vanille', image: 'Vanille.webp', slug: 'vanille' },
    { id: 2, name: 'Litchis de Madagascar', image: 'https://vanille-naturelle.com/wp-content/uploads/2023/05/7xm.xyz479607-e1684416740845-768x865.jpg', slug: 'litchis' },
    { id: 3, name: 'Riz hybride', image: 'RizHybride.png', slug: 'riz-hybride' },
    { id: 4, name: 'Girofle de Madagascar', image: 'girofle-product.jpg', slug: 'clou-de-girofle' },
    { id: 5, name: 'Miel', image: 'miel.png', slug: 'miel' },
    { id: 6, name: 'Fertilisants Naturels', image: 'engrais-product.jpeg', slug: 'fertilisant' },
  ];

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const initials = (title) => {
    if (!title) return '';
    const words = title.split(/\s+/).filter(Boolean);
    const letters = (words[0]?.[0] || '') + (words[1]?.[0] || words[0]?.[1] || '');
    return letters.toUpperCase();
  };

  const updateArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      // Initial check
      updateArrowVisibility();
      
      // Check on resize
      window.addEventListener('resize', updateArrowVisibility);
      
      return () => {
        container.removeEventListener('scroll', updateArrowVisibility);
        window.removeEventListener('resize', updateArrowVisibility);
      };
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* fond décoratif subtil */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-red-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] rounded-full bg-red-500/10 blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="section-padding py-12 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-white uppercase">
              Nos produits
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300">Nous avons produits bio de qualité supérieure, cultiver avec soin à Madagascar.</p>
        </div>

        {/* Conteneur avec indicateurs de scroll */}
        <div className="relative">
          {/* Flèche gauche */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-black/70 hover:border-white/40 transition-all duration-300 shadow-lg"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* ligne horizontale défilante */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
          >
            <div className="flex gap-8 py-6 md:py-8">
              {featuredProducts.map((product, idx) => (
                <div key={product.id} className="flex-none w-44 md:w-56">
                  <Link to={`/produits/${product.slug}`} className="group relative block">
                    {/* halo animé */}
                    <div className="absolute inset-0 -z-10 grid place-items-center">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent blur-2xl group-hover:blur-[42px] transition-all duration-500"></div>
                    </div>

                    {/* particules décoratives */}
                    <div className="pointer-events-none absolute -inset-3 -z-10">
                      <span className="absolute left-2 top-6 w-1.5 h-1.5 rounded-full bg-red-400/70 animate-ping"></span>
                      <span className="absolute right-4 bottom-8 w-2 h-2 rounded-full bg-red-500/60 animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }}></span>
                      <span className="absolute left-8 bottom-4 w-1 h-1 rounded-full bg-red-300/70 animate-ping" style={{ animationDelay: `${idx * 0.15}s` }}></span>
                    </div>

                    {/* avatar circulaire avec effet 3D */}
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:scale-[1.04] group-hover:rotate-[1.5deg] group-hover:shadow-[0_20px_60px_rgba(239,68,68,0.25)] [transform-style:preserve-3d]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-hover:[transform:translateZ(8px)]"
                        loading="lazy"
                      />
                      {/* lueur interne */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                    </div>

                    {/* étiquette avec 2 lettres du titre */}
                    <div className="absolute -top-2 -right-2">
                      <div className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider border border-white/15 backdrop-blur-md shadow-lg shadow-red-900/20 group-hover:bg-white/15 group-hover:border-white/25 transition-colors">
                        {initials(product.name)}
                      </div>
                    </div>

                    {/* titre avec animation soulignement */}
                    <div className="text-center mt-4">
                      <h3 className="inline-block text-sm md:text-base font-semibold tracking-tight relative">
                        <span className="relative z-10 group-hover:text-red-400 transition-colors duration-300">
                          {product.name}
                        </span>
                        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche droite */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-black/70 hover:border-white/40 transition-all duration-300 shadow-lg"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Indicateurs de scroll en bas (visible sur mobile et desktop) */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="text-xs text-gray-400 font-medium">
              <span className="inline-flex items-center">
                <span className="mr-2">Faites glisser pour voir plus</span>
              </span>
            </div>
          </div>
        </div>

        {/* bouton voir tous les produits */}
        <div className="text-center mt-6">
          <Link to="/produits" className="inline-flex items-center px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors" aria-label="Voir tous les produits">
            Voir tous les produits
          </Link>
        </div>
      </div>

      {/* styles additionnels pour animations fines */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .group:hover .floaty { animation: floaty 2.4s ease-in-out infinite; }

        /* Hide native scrollbars for the horizontal product row */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
          height: 0;
        }

        /* Style pour l'indicateur de défilement */
        .scroll-smooth {
          scroll-behavior: smooth;
        }

        /* Indicateur visuel sur le côté droit (dégradé) */
        .scroll-indicator-right::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 60px;
          background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.3));
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Products;