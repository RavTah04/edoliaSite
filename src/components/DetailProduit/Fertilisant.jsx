// Miel.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const Fertilisant = ({ product, onClose }) => {
  const scrollRef = useRef(null);
  const [canScrollTop, setCanScrollTop] = useState(false);
  const [canScrollBottom, setCanScrollBottom] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atTop = el.scrollTop <= 8;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
    setCanScrollTop(!atTop);
    setCanScrollBottom(!atBottom);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="relative bg-white text-gray-900 rounded-xl p-6 md:p-8">
      {/* scroll indicators */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-6 transition-opacity duration-200 ease-in-out ${canScrollTop ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-full bg-gradient-to-b from-white/95 to-transparent"></div>
      </div>
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-6 transition-opacity duration-200 ease-in-out ${canScrollBottom ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-full bg-gradient-to-t from-white/95 to-transparent"></div>
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{product.name || 'Vanille'}</h3>
          <p className="text-sm italic text-gray-600">De Madagascar</p>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
          <X className="w-4 h-4 text-gray-800" />
        </button>
      </div>

      <div ref={scrollRef} onScroll={checkScroll} className="max-h-[60vh] overflow-auto no-scrollbar space-y-6 text-gray-800">
        {/* Contenu complet du modal */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-32 flex-shrink-0 mx-auto sm:mx-0">
            <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="w-full h-auto object-cover rounded-md shadow-sm" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                Bio
              </span>
            </div>
            
            <p className="mb-4 text-gray-900 text-lg">
              Le Fertilisant Taroka est un produit organique de haute qualité conçu pour 
              répondre aux besoins de l’agriculture conventionnelle ainsi que de l’agriculture 
              biologique, conformément au Règlement CE 834/2007. 
              Sa composition organique permet de nourrir les plantes de manière naturelle,
               favorisant ainsi des récoltes abondantes et de qualité supérieure.
            </p>
          </div>
        </div>

        {/* Description */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">1</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Description </h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-lg leading-relaxed mb-4 text-gray-800">
              Le Taroka est un levain bactérien puissant fixé sur un support organique végétal.
               Il est scientifiquement élaboré à partir de souches microbiennes sélectionnées. 
               Ce produit de couleur brune foncée contient une population microbienne riche en substances bénéfiques. 
               Une fois incorporé dans le sol, il favorise la croissance des plantes. Le Taroka est disponible en deux variantes : 
              le Taroka simple pour les cultures de feuilles et le Taroka phosphaté pour les cultures de grains ou de fruits.
            </p>
          </div>
        </section>


         {/*Un modèle d'agrégation agricole structuré - Grille 2x2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">2</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Processus de production</h2>
          </div>
          
          {/* Grille 2x2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Case 1 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">COMPOSTAGE :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">
                    Réception, contrôle et stockage des matières organiques, dont le ferment de base importé 
                    d’une usine installée dans la région parisienne et les déchets végétaux locaux.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">
                    Procédé de compostage d’au moins 5 mois comprenant l’oxygénation par retournement,
                     l’hygiénisation et le tamisage pour obtenir un amendement organique stable.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">
                    L’amendement organique est utilisé comme base dans la fabrication du fertilisant biologique Taroka.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Case 2 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">FABRICATION :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Unité de fabrication par mélange avec une capacité de 30 tonnes/jour.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Tamisage et mélange du produit obtenu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Équipe de travail d’une centaine de personnes pour produire 10 000 tonnes de Taroka par an.</span>
                </li>
              </ul>
            </div>
            
            {/* Case 3 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">CONDITIONNEMENT :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Deux unités d’ensachage : sacs de 5 kg et sacs de 50 kg soudés horizontalement.</span>
                </li>
              </ul>
            </div>
            
            {/* Case 4 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">ÉTIQUETAGE :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">L’étiquetage avec les dosages garantis pour 
                    chaque formule est réalisé par impression d’encre sur les sacs.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Périodicité et méthode d'utilisation */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-amber-800">3</span>
            </div>
            <h2 className="font-bold text-gray-900">Périodicité et méthode d'utilisation</h2>
          </div>
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <p className="text-lg text-gray-700 mb-3">
              Le fertilisant Taroka peut être utilisé tout au long de la période de végétation, 
              y compris pendant la contre-saison, pour régénérer le sol en préparation de la prochaine saison de culture. 
              Lors de la préparation du sol, il est recommandé de mélanger le Taroka avec de la 
              terre pour faciliter l’épandage. Pendant le semis, le repiquage et la plantation, 
              le Taroka doit être enfoui à au moins 10 cm de profondeur dans le trou ou le sillon.
               Pendant l’entretien des cultures établies, tel que le sarclage et le buttage, 
               il est important de conserver le Taroka à l’abri du soleil. 
               Il est recommandé de mettre en place le Taroka au moins une semaine avant le semis, le repiquage ou la plantation.
            </p>
          </div>
        </section>

        <div className="mt-4 text-center">
          <button onClick={onClose} className="px-6 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Fermer</button>
        </div>
      </div>

      {/* Animated down-arrow indicator when more content is available */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-3 transition-opacity duration-200 ease-in-out ${canScrollBottom ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
        <div className="w-8 h-8 text-gray-600 flex items-center justify-center animate-bounce-down">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes bounceDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-bounce-down { animation: bounceDown 1.2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Fertilisant;