import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sous-menu des produits
  const productSubmenu = [
    { label: 'Voir tous nos produits', path: '/produits' },
    { label: 'Litchis', path: '/produits/litchis' },
    { label: 'Riz Hybride', path: '/produits/riz-hybride' },
    { label: 'Fertilisant / Taroka', path: '/produits/fertilisant' },
    { label: 'Lingots blancs', path: '/produits/lingots-blancs' },
    { label: 'Pois du cap', path: '/produits/pois-du-cap' },
    { label: 'Clou de girofle', path: '/produits/clou-de-girofle' },
  ];

  const navItems = [
    { 
      label: 'Accueil', 
      path: '/',
      hasDropdown: false
    },
    { 
      label: 'À Propos', 
      path: '/a-propos',
      hasDropdown: false
    },
    { 
      label: 'Nos Produits', 
      path: '/produits',
      hasDropdown: true,
      submenu: productSubmenu
    },
    { 
      label: 'Certifications', 
      path: '/certifications',
      hasDropdown: false
    },
  ];

  // Keep header static on scroll — no scroll listener (stable appearance)

  const handleProductsClick = (e) => {
    e.preventDefault();
    navigate('/produits');
  };

  const handleMouseEnter = () => {
    setIsProductsDropdownOpen(true);

    // Warm-up: prefetch the Products page chunk so navigation feels instant
    import('../../pages/Products').catch(() => {});

    // Prefetch a few critical images (honey logo and featured thumbnails)
    ['/logo-miellerie-des-pangalanes-vf.png', '/Vanille.png', '/miel.png'].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleMouseLeave = () => {
    setIsProductsDropdownOpen(false);
  };

  // Centralized navigation helper to close menus and navigate
  const handleNavigate = (path) => {
    setIsProductsDropdownOpen(false);
    setIsMenuOpen(false);
    navigate(path);
  };

  // Static header appearance (no change on scroll)
  const headerZIndex = 'z-40';
  const headerStyle = 'bg-black/30 backdrop-blur-xl border-b border-white/10 transition-all duration-300';

  const textColor = 'text-white';
  const logoFilter = '';

  return (
    <header className={`fixed top-0 left-0 w-full ${headerZIndex} ${headerStyle}`}>
      <div className="section-padding max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche - SANS LIEN */}
          <div className="flex items-center space-x-2">
            <div className="w-40 flex items-center justify-center">
              <img 
                src="/logo-edolia.png" 
                alt="edolia" 
                loading="eager"
                style={{ filter: logoFilter }}
                className="transition-filter duration-300 cursor-default"
              />
            </div>
          </div>

          {/* Navigation et FR à droite */}
          <div className="flex items-center space-x-8">
            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                  onFocus={item.hasDropdown ? handleMouseEnter : undefined}
                  onKeyDown={(e) => { if (e.key === 'Escape') setIsProductsDropdownOpen(false); }}
                >
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={handleProductsClick}
                        className={`flex items-center space-x-1 transition-all duration-300 font-medium hover:scale-105 ${
                          location.pathname.includes('/produits') || location.pathname === item.path
                            ? 'text-primary font-semibold'
                            : textColor
                        } hover:text-primary`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isProductsDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isProductsDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 py-3 px-3 z-50"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid grid-cols-3 gap-2">
                            {/* Left column: Miel teaser (logo + types + CTA) */}
                            <div className="col-span-1 flex flex-col items-center border-r border-gray-100 pr-3">
                              <img src="/logo-miellerie-des-pangalanes-vf.png" alt="Miel" loading="eager" className="w-60 h-30 object-contain rounded-md mb-3" />
                              <div className="text-sm font-medium text-gray-800 mb-2">Types de miel</div>
                              <ul className="text-sm text-gray-600 space-y-0.5 mb-3">
                                <li>● Miel de Litchi</li>
                                <li>● Miel de Niaouli</li>
                                <li>● Miel de Mokarana</li>
                                <li>● Miel Polyfloral</li>
                              </ul>
                              <button
                                onClick={() => handleNavigate('/produits/miel')}
                                className="mt-auto px-4 py-2 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600 transition-colors"
                                aria-label="En savoir plus sur le miel"
                              >
                                Je veux savoir
                              </button>
                            </div>

                            {/* Right column: existing submenu list */}
                            <div className="col-span-2">
                              <div className="grid grid-cols-1">
                                {item.submenu.map((subItem) => (
                                  <button
                                    key={subItem.label}
                                    onClick={() => handleNavigate(subItem.path)}
                                    className="w-full text-left block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`transition-all duration-300 font-medium hover:scale-105 ${
                        location.pathname === item.path
                          ? 'text-primary font-semibold'
                          : textColor
                      } hover:text-primary`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact button (desktop) */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-red-700 active:scale-95 transition-all duration-300 text-sm"
            >
              Contact
            </Link>

            {/* Menu hamburger mobile */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} className={textColor} />
              ) : (
                <Menu size={24} className={textColor} />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown z-50">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-2">
              {/* Contact button (mobile, prominent) */}
              <Link
                to="/contact"
                className="block w-full text-center py-3 px-4 mb-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      {/* Bouton mobile "Nos Produits" */}
                      <Link
                        to="/produits"
                        className={`w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-between transition-all duration-300 font-medium ${
                          location.pathname.includes('/produits') || location.pathname === item.path
                            ? 'bg-gray-50 text-primary font-semibold'
                            : 'text-gray-700 hover:text-primary'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <span>{item.label}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsProductsDropdownOpen(!isProductsDropdownOpen);
                          }}
                          className="p-1"
                        >
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              isProductsDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </Link>
                      
                      {/* Sous-menu mobile */}
                      {isProductsDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-0.5">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.label}
                              onClick={() => handleNavigate(subItem.path)}
                              className="w-full text-left block py-1.5 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium ${
                        location.pathname === item.path
                          ? 'bg-gray-50 text-primary font-semibold'
                          : 'text-gray-700 hover:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;