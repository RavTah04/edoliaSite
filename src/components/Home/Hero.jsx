import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollObserver from '../ScrollObserver';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  // Local images from public folder for mosaic
  const images = [
    '/engrais-product.jpeg',
    '/RizHybride.png',
    '/Fond-miel-et-litchis.jpg',
    '/Fertilisant-Taroka-Stoi-768x540.jpg',
    '/pois-du-cap-kabaro-768x512.jpg',
    '/Carre-de-Vanille-Gourmet-Vanille-Noire.webp',
    '/litchis.png',
    '/miel.png',
    '/girofle-product.jpg',
  ];

  return (
    <section
      className="relative h-dvh w-full overflow-hidden bg-black"
      style={{ marginTop: 'calc(var(--header-height) * -1)' }}
    >
      {/* Ensure content area accounts for fixed header height */}
      <div className="absolute inset-0" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Ambient background gradients (extra dark for stronger contrast) */}
        <div className="absolute inset-0 z-5">
          <div className="absolute -inset-8 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(243, 138, 138, 0.16),transparent)]" />
          <div className="absolute -inset-16 bg-[radial-gradient(50%_50%_at_70%_80%,rgba(32, 31, 31, 0.14),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/85 to-black" />
        </div>

        {/* Mosaic scrolling image background (3 rows, no gaps anywhere, larger tiles) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Row 1 - left to right */}
          <div className="absolute left-[-50%] w-[400%] flex" style={{ top: '0%', height: '33.333%', animation: 'mosaicLeft 85s linear infinite', opacity: 0.26 }}>
            {[...images, ...images].map((src, i) => (
              <div key={`r1-${i}`} className="group h-full overflow-hidden">
                <div className="h-full w-[80vh] md:w-[100vh] lg:w-[80vh] bg-cover bg-center transition duration-300 filter brightness-80 group-hover:brightness-120" style={{ backgroundImage: `url(${src})` }} />
              </div>
            ))}
          </div>
          {/* Row 2 - right to left */}
          <div className="absolute left-[-50%] w-[400%] flex" style={{ top: '33.333%', height: '33.333%', animation: 'mosaicRight 100s linear infinite', opacity: 0.25 }}>
            {[...images, ...images].map((src, i) => (
              <div key={`r2-${i}`} className="group h-full overflow-hidden">
                <div className="h-full w-[80vh] md:w-[100vh] lg:w-[80vh] bg-cover bg-center transition duration-300 filter brightness-80 group-hover:brightness-120" style={{ backgroundImage: `url(${src})` }} />
              </div>
            ))}
          </div>
          {/* Row 3 - left to right */}
          <div className="absolute left-[-50%] w-[400%] flex" style={{ top: '66.666%', height: '33.333%', animation: 'mosaicLeft 90s linear infinite', opacity: 0.24 }}>
            {[...images, ...images].map((src, i) => (
              <div key={`r3-${i}`} className="group h-full overflow-hidden">
                <div className="h-full w-[80vh] md:w-[100vh] lg:w-[80vh] bg-cover bg-center transition duration-300 filter brightness-80 group-hover:brightness-120" style={{ backgroundImage: `url(${src})` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="section-padding relative z-10 w-full h-full flex items-center justify-center">
          <ScrollObserver>
            <div className={`w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-700`}> 

              <h1 className="text-white uppercase font-bold leading-tight tracking-tight text-[clamp(2.5rem,7vw,4rem)]">
                L'Excellence Naturelle de Madagascar
              </h1>

              <p className="mt-6 text-white/70 text-[clamp(1rem,2vw,0.25rem)] max-w-3xl">
                Export B2B de produits agricoles premium, du terroir malagasy vers les marchés mondiaux.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produits"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#8B0000] text-white font-medium hover:bg-[#a30c0c] active:scale-95 transition-transform"
                >
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-colors"
                >
                  Devenir partenaire
                </Link>
              </div>
            </div>
          </ScrollObserver>
        </div>

        {/* Decorative bottom gradient (mask) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* Keyframes for lines and mosaic */}
      <style>
        {`
          @keyframes slideLine { 0% { transform: translateX(-20%); opacity: .2 } 50% {opacity:.6} 100% { transform: translateX(20%); opacity: .2 } }
          @keyframes mosaicLeft { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
          @keyframes mosaicRight { 0% { transform: translateX(0) } 100% { transform: translateX(50%) } }
        `}
      </style>
    </section>
  );
};

export default Hero;
