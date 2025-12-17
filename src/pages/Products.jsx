import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ChevronDown, X } from 'lucide-react';
import Vanille from '../components/DetailProduit/Vanille';
import Litchis from '../components/DetailProduit/Litchis';
import LingotsBlancs from '../components/DetailProduit/LingotsBlancs';
import PoisDuCap from '../components/DetailProduit/PoisDuCap';
import RizHybride from '../components/DetailProduit/RizHybride';
import Fertilisant from '../components/DetailProduit/Fertilisant';
import ClouDeGirofle from '../components/DetailProduit/ClouDeGirofle';
import Miel from '../components/DetailProduit/Miel';

const Products = () => {
  const location = useLocation();
  const [activeProduct, setActiveProduct] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsContent, setDetailsContent] = useState(null);
  const autoSlideRef = useRef(null);
  const detailsRef = useRef(null);
  const thumbsRef = useRef(null);
  const mainRef = useRef(null);

  // Données des produits
  const products = [
    {
      id: 1,
      slug: 'vanille',
      number: '1',
      name: 'Vanille',
      scientificName: 'Vanilla planifolia',
      description: 'Vanille Bourbon de Madagascar, sélectionnée à la main pour ses gousses charnues et son arôme profond et rond.',
      longDescription: 'La vanille naturelle de Madagascar est un trésor gustatif issu de la précieuse orchidée Vanilla planifolia, cultivée dans les riches terres de Madagascar. Connue pour son arôme envoûtant et sa saveur exquise, cette vanille est réputée dans le monde entier.',
      image: '/Vanille.png',
      background: '/Carre-de-Vanille-Gourmet-Vanille-Noire.webp',
      category: 'Épices',
      origin: 'Madagascar (région SAVA)',
      grade: 'Bourbon – Grade A',
      size: '18–22 cm',
      moisture: '25–30% (optimale)',
      packaging: 'Tubes verre scellés / Sacs scellés sous vide'
    },
    {
      id: 2,
      slug: 'litchis',
      number: '2',
      name: 'Litchis',
      subtitle: 'Fruit Exotique Premium',
      description: 'Cultivés dans les régions ensoleillées de Madagascar, ces litchis sont récoltés à la main à maturité, garantissant une chair juteuse et sucrée. Leur saveur exotique et leur texture délicate font des litchis de Madagascar une expérience gustative incomparable.',
      longDescription: 'Les litchis de Madagascar sont récoltés dans les régions tropicales où le climat et le sol leur confèrent une saveur unique. Chaque fruit est sélectionné pour sa taille, sa couleur rose vif et son arôme floral caractéristique.',
      image: '/litchis.png',
      background: 'https://vanille-naturelle.com/wp-content/uploads/2023/05/7xm.xyz479607-e1684416740845-768x865.jpg',
      category: 'Fruits',
      details: [
        'Récolte : Manuelle à parfaite maturité',
        'Calibre : 25-30 mm de diamètre',
        'Conservation : 2-3 jours à température ambiante',
        'Conditionnement : Cagettes ventilées',
        'Saison : Novembre à Janvier',
        'Saveur exotique et unique',
        'Texture juteuse et délicate',
        'Arôme floral caractéristique',
        'Cultivé en agriculture responsable',
        'Exportation sous atmosphère contrôlée'
      ],
      color: 'from-pink-900 to-rose-700',
      titleColor: 'from-red-400 to-red-600'
    },
    
    {
      id: 3,
      slug: 'lingots-blancs',
      number: '3',
      name: 'Haricots blancs',
      subtitle: 'Le Lingot Blanc',
      description: 'Connus sous le nom de « Lingot Blanc », ces haricots se distinguent par leur peau lisse, leur forme uniforme et leur texture crémeuse. Le Lingot Blanc est apprécié pour sa saveur délicate et sa polyvalence culinaire.',
      longDescription: 'Les haricots blancs de Madagascar, ou Lingots Blancs, sont cultivés sur les hauts plateaux. Leur culture traditionnelle et leur récolte manuelle garantissent une qualité exceptionnelle et une saveur authentique.',
      image: '/haricot-blanc.jpg',
      background: '/haricot-blanc.jpg',
      category: 'Légumineuses',
      details: [
        'Variété : Lingot Blanc traditionnel',
        'Taille : Calibre uniforme 8-9 mm',
        'Temps de cuisson : 60-90 minutes',
        'Conditionnement : Sacs de 25 kg',
        'Conservation : 24 mois au sec',
        'Peau lisse et brillante',
        'Forme régulière et uniforme',
        'Texture crémeuse à la cuisson',
        'Saveur délicate et neutre',
        'Riche en protéines végétales'
      ],
      color: 'from-gray-900 to-gray-700',
      titleColor: 'text-white'
    },
    {
      id: 4,
      slug: 'pois-du-cap',
      number: '4',
      name: 'Pois du cap',
      subtitle: 'Kabaro - Traditionnel',
      description: 'Ces pois, également connus sous le nom de « Kabaro », sont appréciés pour leur saveur délicate, leur texture tendre et leur valeur nutritionnelle. Récoltés à maturité, nos pois du Cap sont soigneusement sélectionnés pour garantir leur qualité supérieure.',
      longDescription: 'Les pois du Cap, ou Kabaro, sont une spécialité malgache cultivée selon des méthodes traditionnelles. Leur saveur unique et leur texture crémeuse en font un ingrédient de choix pour de nombreuses recettes locales.',
      image: '/pois-du-cap-kabaro-768x512.jpg',
      background: '/pois-du-cap-kabaro-768x512.jpg',
      category: 'Légumineuses',
      details: [
        'Appellation : Kabaro traditionnel',
        'Taille : 5-6 mm de diamètre',
        'Temps de cuisson : 45-60 minutes',
        'Conditionnement : Sacs de 50 kg',
        'Conservation : 18 mois au sec',
        'Saveur délicate et unique',
        'Texture tendre et crémeuse',
        'Haute valeur nutritionnelle',
        'Culture traditionnelle',
        'Récolte manuelle sélective'
      ],
      color: 'from-green-900 to-emerald-700',
      titleColor: 'text-white'
    },
    {
      id: 5,
      slug: 'riz-hybride',
      number: '5',
      name: 'Riz hybride',
      subtitle: 'Innovation Agricole',
      description: 'Le riz hybride est une variété croisée de riz sauvage et de riz cultivé. En collaboration avec le gouvernement chinois, le riz hybride a été introduit et testé à Madagascar en 2007, offrant des rendements exceptionnels.',
      longDescription: 'Le riz hybride de Madagascar résulte d\'un programme de recherche en collaboration avec des experts chinois. Cette variété offre des rendements supérieurs tout en conservant l\'authenticité du riz malgache.',
      image: '/riz-hybride.jpg',
      background: '/RizHybride.png',
      category: 'Céréales',
      details: [
        'Type : Hybride long grain',
        'Rendement : 8-10 tonnes/ha',
        'Cycle : 120-130 jours',
        'Conditionnement : Sacs de 50 kg',
        'Conservation : 12 mois au sec',
        'Grains longs et fins',
        'Texture moelleuse après cuisson',
        'Saveur authentique',
        'Résistance aux maladies',
        'Adaptation au climat malgache'
      ],
      color: 'from-red-900 to-red-700',
      titleColor: 'text-white'
    },
    {
      id: 6,
      slug: 'fertilisant',
      number: '6',
      name: 'Fertilisant \'Taroka\'',
      subtitle: 'Naturel et Efficace',
      description: 'Le Fertilisant Taroka est un produit organique de haute qualité conçu pour répondre aux besoins de l\'agriculture conventionnelle ainsi que de l\'agriculture biologique, conformément au Règlement CE 834/2007.',
      longDescription: 'Le Fertilisant Taroka est élaboré à partir de matières premières naturelles malgaches. Sa formulation équilibrée nourrit les plantes de manière durable tout en respectant l\'environnement et les sols.',
      image: '/engrais-product.jpeg',
      background: '/Fertilisant-Taroka-Stoi-768x540.jpg',
      category: 'Intrants agricoles',
      details: [
        'Type : Engrais organique complet',
        'Composition : NPK 5-3-4 + oligo-éléments',
        'Certification : Règlement CE 834/2007',
        'Conditionnement : Sacs de 25 kg',
        'Application : Toutes cultures',
        '100% naturel et biologique',
        'Améliore la structure du sol',
        'Stimule la croissance racinaire',
        'Augmente la résistance aux stress',
        'Compatible avec l\'agriculture durable'
      ],
      color: 'from-brown-900 to-red-700',
      titleColor: 'text-white'
    },
    {
      id: 7,
      slug: 'clou-de-girofle',
      number: '7',
      name: 'Clous de Girofle Entiers',
      subtitle: 'Épice Royale',
      description: 'Le Clous de Girofle Entiers Madagascar réputée pour ses vertus thérapeutiques, la fleur de girofle se présente sous la forme d\'un bouton floral entouré de 4 sépales.',
      longDescription: 'Les clous de girofle de Madagascar sont récoltés manuellement sur des arbres matures. Leur séchage naturel préserve leurs huiles essentielles et leurs propriétés aromatiques et médicinales.',
      image: '/girofle-product.jpg',
      background: '/girofle-product.jpg',
      category: 'Épices',
      details: [
        'Qualité : Boutons entiers non cassés',
        'Taille : 10-15 mm de longueur',
        'Teneur en huile : 15-20%',
        'Conditionnement : Sacs de 30 kg',
        'Conservation : 36 mois au sec',
        'Arôme intense et chaud',
        'Propriétés thérapeutiques',
        'Riche en eugénol naturel',
        'Séchage traditionnel au soleil',
        'Qualité supérieure garantie'
      ],
      color: 'from-purple-900 to-red-700',
      titleColor: 'text-white'
    }, 
    {
      id: 8,
      slug: 'miel',
      number: '3',
      name: 'Miellerie des Pangalanes',
      subtitle: 'Miel',
      description: 'Miel de haute qualité conforme aux normes internationales. ' +
        'Implantée à Manakara, la Miellerie des Pangalanes est une unité industrielle de transformation du miel, au cœur de l\'une des zones mellifères les plus riches de Madagascar.',
      longDescription: ' ',
      image: '/miel.png',
      background: '/Fond-miel-et-litchis.jpg',
      category: ' ',
      color: 'from-gray-900 to-gray-700',
      titleColor: 'text-white'
    },
  ];
  useEffect(() => {
    // Nettoyage seulement
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);
  // Navigation clavier: flèches gauche/droite pour prev/next
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProduct, isTransitioning]);
  // Sync with route slug (ex: /produits/litchis)
  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    const slug = parts.length > 1 ? parts[1] : null; // e.g. 'litchis'
    if (slug) {
      const idx = products.findIndex((p) => p.slug === slug);
      if (idx !== -1 && idx !== activeProduct) {
        // make a smooth transition
        setDirection(idx > activeProduct ? 'next' : 'prev');
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveProduct(idx);
          setIsTransitioning(false);
        }, 300);
      }
    }
  }, [location.pathname]);

  // Scroll / focus when modal details open, and lock body scroll
  useEffect(() => {
    if (showDetails && detailsRef.current) {
      const t = setTimeout(() => {
        // ensure the modal's inner scroller is at top and focused for keyboard users
        detailsRef.current.scrollTop = 0;
        detailsRef.current.focus();
      }, 80);

      // lock background scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [showDetails]);

  // Close modal on Escape key
  useEffect(() => {
    if (!showDetails) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeDetails();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showDetails]);

  // When active product changes, ensure its thumbnail is visible (centered)
  useEffect(() => {
    if (!thumbsRef.current) return;
    const activeEl = thumbsRef.current.querySelector(`[data-index="${activeProduct}"]`);
    if (activeEl && typeof activeEl.scrollIntoView === 'function') {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else if (activeEl && thumbsRef.current.scrollTo) {
      // fallback: calculate and center manually
      const container = thumbsRef.current;
      const rect = activeEl.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      const offset = rect.left - cRect.left - (cRect.width / 2) + (rect.width / 2);
      container.scrollTo({ left: container.scrollLeft + offset, behavior: 'smooth' });
    }
  }, [activeProduct]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    
    // Close modal if open
    if (showDetails) {
      closeDetails();
    }
    
    setTimeout(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    
    // Close modal if open
    if (showDetails) {
      closeDetails();
    }
    
    setTimeout(() => {
      setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleSelect = (index) => {
    if (isTransitioning || index === activeProduct) return;
    setDirection(index > activeProduct ? 'next' : 'prev');
    setIsTransitioning(true);
    
    // Close modal if open
    if (showDetails) {
      closeDetails();
    }
    
    setTimeout(() => {
      setActiveProduct(index);
      // navigate to the product-specific route
      const slug = products[index]?.slug;
      if (slug) navigate(`/produits/${slug}`);
      setIsTransitioning(false);
    }, 300);
  };

  const handleToggleDetails = (product) => {
    if (showDetails && detailsContent?.id === product.id) {
      // Si les détails sont ouverts pour ce produit, on les ferme
      setShowDetails(false);
      setDetailsContent(null);
    } else {
      // Sinon, on ouvre les détails pour ce produit
      setDetailsContent(product);
      setShowDetails(true);
    }
  };

  // Simple close for modal details (no scroll)
  const closeDetails = () => {
    setShowDetails(false);
    setDetailsContent(null);
  };

  // Back-compat helper: close details and scroll to top (used by some flows)
  const closeDetailsAndScrollTop = () => {
    closeDetails();
    // give a short delay to allow closing animation and then scroll
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  const navigate = useNavigate();
  const currentProduct = products[activeProduct];
  const isShowingDetailsForCurrent = showDetails && detailsContent?.id === currentProduct.id;

  // Update URL when activeProduct changes (keep browser history)
  useEffect(() => {
    const slug = currentProduct?.slug;
    if (slug) {
      const target = `/produits/${slug}`;
      if (!location.pathname.endsWith(slug)) {
        navigate(target, { replace: false });
      }
    }
  }, [activeProduct]);

  return (
    <div className="min-h-0 text-white">
      {/* Fond dynamique qui change avec chaque produit */}
      <div className="fixed inset-0 -z-20 transition-all duration-1000">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeProduct ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${product.background}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Overlay sombre pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
          </div>
        ))}
      </div>

      <main ref={mainRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 min-h-screen" aria-hidden={showDetails}>
        {/* Titre principal - EN BLANC */}
        <div className="text-center mb-6 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Nos produits
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-2 rounded-full"></div>
          <p className="text-gray-200 max-w-xl mx-auto text-sm">
            Découvrez notre sélection de produits agricoles premium de Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-center h-full">
          {/* Left - Large visual + thumbnails (no frames, circular) */}
          <div className="col-span-2">
            <div className="p-0">
              <div className="w-full flex items-center justify-center mb-3">
                <img src={currentProduct.image} alt={currentProduct.name} loading="eager" decoding="async" fetchpriority="high" className={`w-44 h-44 md:w-72 md:h-72 object-cover rounded-full transition-transform duration-500 ${isTransitioning ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`} />
              </div>

              {/* Thumbnails: single horizontal line, scrollable */}
              <div ref={thumbsRef} className="thumb-list-row flex gap-3 items-center py-2 overflow-x-auto touch-pan-x">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    data-index={idx}
                    onClick={() => handleSelect(idx)}
                    aria-current={idx === activeProduct}
                    className={`thumb-item-row ${idx === activeProduct ? 'active' : idx === ((activeProduct + 1) % products.length) ? 'next' : 'inactive'}`}
                  >
                    <img src={p.image} alt={p.name} loading="lazy" className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Smaller description */}
          <div className="col-span-1">
            <div className="p-4 h-full text-white bg-transparent">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{currentProduct.name}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 mb-4 rounded-full"></div>
              <h3 className="text-lg font-semibold text-white mb-3">{currentProduct.subtitle}</h3>

              <p className="text-white text-sm leading-relaxed mb-6">{currentProduct.description}</p>

              <div className="flex flex-col gap-3">
                <button onClick={() => handleToggleDetails(currentProduct)} className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium">{isShowingDetailsForCurrent ? 'Masquer les détails' : 'Voir les détails'}</button>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-white">Produit {currentProduct.number} sur {products.length}</div>
              </div>

            </div>
          </div>
        </div>

        {/* Global nav buttons at page edges for Prev/Next */}
        <button aria-label="Précédent" onClick={handlePrev} className="global-nav-left fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white z-30">
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button aria-label="Suivant" onClick={handleNext} className="global-nav-right fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white z-30">
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Modal overlay for product details */}
        {showDetails && detailsContent && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[var(--header-height)]">
            <div className="absolute inset-0 bg-black/60" onClick={closeDetails} aria-hidden="true" />

            <div className="relative w-full max-w-4xl mx-4 my-6" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Détails: ${detailsContent.name}`}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div ref={detailsRef} tabIndex={-1} className="max-h-[calc(100vh - var(--header-height) - 4rem)] overflow-auto no-scrollbar p-6 text-gray-900">
                  {/* Choose a dedicated component if available */}
                  {(() => {
                    const components = {
                      'vanille': Vanille,
                      'litchis': Litchis,
                      'lingots-blancs': LingotsBlancs,
                      'pois-du-cap': PoisDuCap,
                      'riz-hybride': RizHybride,
                      'fertilisant': Fertilisant,
                      'clou-de-girofle': ClouDeGirofle,
                      'miel': Miel,
                    };
                    const Comp = components[detailsContent.slug];
                    if (Comp) return <Comp product={detailsContent} onClose={closeDetails} isModal />;

                    // Generic fallback
                    return (
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{detailsContent.name}</h3>
                            <p className="text-sm italic text-gray-600">{detailsContent.scientificName}</p>
                          </div>
                          <button onClick={closeDetails} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300">
                            <X className="w-4 h-4 text-gray-800" />
                          </button>
                        </div>

                        <div className="mt-6 text-gray-800">
                          <p className="mb-4">{detailsContent.longDescription}</p>
                          <h4 className="font-semibold mb-2">Caractéristiques</h4>
                          <ul className="list-disc ml-5 space-y-1">
                            {detailsContent.details.map((d,i) => <li key={i}>{d}</li>)}
                          </ul>
                        </div>

                        <div className="mt-6 text-right">
                          <button onClick={closeDetails} className="px-4 py-2 bg-black text-white rounded-md font-medium">Fermer les détails</button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Styles et animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expand {
          from {
            opacity: 0;
            transform: scale(0.95);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: scale(1);
            max-height: 1000px;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-expand {
          animation: expand 0.4s ease-out forwards;
        }

        /* Horizontal thumbnail row styles: single-line horizontal scroller with snap */
        .thumb-list-row {
          display: flex;
          gap: .75rem;
          padding-bottom: .25rem;
          overflow-x: auto;
          flex-wrap: nowrap;
          -webkit-overflow-scrolling: touch;
          align-items: center;
          justify-content: flex-start;
          scroll-snap-type: x mandatory;
          /* hide native scrollbars while keeping scrolling functional */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .thumb-list-row::-webkit-scrollbar { display: none; height: 0; }
        .thumb-item-row {
          flex: 0 0 auto;
          scroll-snap-align: center;
          border-radius: 999px;
          overflow: hidden;
          transition: transform 320ms cubic-bezier(.2,.9,.2,1), filter 260ms ease, opacity 260ms ease;
          transform-origin: center center;
          background: transparent;
          padding: 0;
        }
        .thumb-item-row img { display: block; width: 56px; height: 56px; object-fit: cover; border-radius: 999px; }
        @media (min-width: 768px) {
          .thumb-item-row img { width: 80px; height: 80px; }
        }
        .thumb-item-row.inactive {
          transform: scale(.82);
          filter: blur(4px) brightness(.7);
          opacity: .6;
        }
        .thumb-item-row.next {
          transform: scale(.92);
          filter: blur(2.5px) brightness(.82);
          opacity: .85;
        }
        .thumb-item-row.active {
          transform: scale(1.12);
          filter: none;
          opacity: 1;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          z-index: 10;
        }

        @media (prefers-reduced-motion: reduce) {
          .thumb-item-row, .thumb-item-row img { transition: none !important; transform: none !important; filter: none !important; opacity: 1 !important; }
        }

        /* Effet de parallaxe pour le fond fixe */
        .fixed {
          background-attachment: fixed !important;
        }
        
        /* Amélioration de la performance des animations */
        .transition-all {
          will-change: transform, opacity;
        }
        
        /* Optimisation du scroll (avoid global smooth scroll for perf) */
        /* Localized smooth behavior is handled where needed */
      `}</style>
    </div>
  );
};

export default Products;