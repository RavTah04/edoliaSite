// Vanille.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const LingotsBlancs = ({ product, onClose }) => {
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

  const processSteps = [
    "Sélection des meilleures variétés ",
    "La préparation du sol pour assurer une bonne fertilité",
    "La plantation des graines dans des conditions optimales, l’entretien attentif des cultures pour favoriser une croissance saine, la protection contre les ravageurs et les maladies",
    "La récolte à maturité, leur triage soigneux pour éliminer les impuretés",
    "Le nettoyage et le conditionnement",
    "L’exportation des haricots blancs vers les marchés internationaux"
  ];

  const introText = "Connus sous le nom de « Lingot Blanc » (Phaseolus vulgaris), ces haricots se distinguent par leur peau lisse, leur forme uniforme et leur texture crémeuse. Le Lingot Blanc est apprécié pour sa saveur délicate et sa polyvalence culinaire. Connue pour son arôme envoûtant et sa saveur exquise, cette vanille est réputée dans le monde entier.";

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
            <p className="mb-4 text-gray-900 text-lg">{introText}</p>
          </div>
        </div>

        {/* Origine et Terroir */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">1</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Origine et Terroir</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-lg leading-relaxed mb-4 text-gray-800">
              Les sols riches de Madagascar et le climat tropical offrent des conditions idéales pour la croissance de cette légumineuse. 
              Edolia joue un rôle clé dans la sélection des meilleures variétés de haricots blancs, leur production selon des normes de qualité élevées, 
              ainsi que dans la logistique et l’exportation vers les marchés internationaux.
               Le haricot blanc de Madagascar produit par EDOLIA offre aux consommateurs une expérience culinaire authentique et satisfaisante.
            </p>
          </div>
        </section>

        {/* Processus de Culture et Méthodes de Récolte */}
        <section>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Processus de Culture */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-800">2</span>
                </div>
                <h2 className="font-bold text-gray-900">Processus de Culture</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <ol className="list-decimal ml-5 space-y-2 text-sm">
                    {processSteps.map((step, index) => (
                      <li className='text-gray-600' key={index}>{step}</li>
                    ))}
                 </ol>
              </div>
            </div>

            {/* Méthodes de Récolte et de Transformation */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-800">3</span>
                </div>
                <h2 className="font-bold text-gray-900 ">Méthodes de Récolte et de Transformation</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-lg text-gray-700 mb-3">
                    Lorsque les haricots blancs atteignent leur maturité optimale, 
                    ils sont récoltés en veillant à ne pas endommager les grains. 
                    Les haricots sont ensuite triés pour éliminer les impuretés et soigneusement nettoyés. 
                    Après cela, ils sont soumis à un processus de transformation qui peut inclure le blanchiment, 
                    le séchage ou d’autres traitements pour améliorer leur durée de conservation et leur qualité. 
                    Edolia accorde une attention particulière à la préservation des caractéristiques gustatives et nutritionnelles des haricots blancs tout au long du processus. 
                    Une fois transformés, les haricots blancs sont emballés dans des conditions optimales pour préserver leur fraîcheur et leur qualité.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* Nos variétés */}
        <section>
          <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-800">4</span>
                </div>
                <h2 className="font-bold text-gray-900 ">Nos variétés</h2>
            </div>
        <div className="grid md:grid-cols-2 gap-4">
    {/* Ligne 1 - Cases 1 et 2 côte à côte */}
    <div className="grid grid-cols-2 gap-4 md:col-span-2">
      {/* Case 1 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lg mb-2">VARIÉTÉ RI 5-2, RI 5-3</h5>
        <p className="text-gray-700 text-sm">
          Le Lingot Blanc, connu sous les variétés RI 5-2 et RI 5-3, 
          est un haricot blanc de grande taille et de forme allongée, d’une longueur supérieure à 13 mm.
           Ces variétés, 100% bio, se caractérisent par une chair aérée, 
           un goût riche et une facilité de cuisson. Les grains, d’une couleur blanche à blanc cassé, sont brillants et présentent un calibre moyen de 180 à 260 grains pour 100 g. Cultivé dans les régions des hauts plateaux de Madagascar, à une altitude de 400 à 1200 mètres, le Lingot Blanc a une saison de production allant de mars à avril. Avec une productivité moyenne et un rendement élevé de 1200 à 1500 kg/ha, cette variété est adaptée aux conditions agroclimatiques du sud-ouest, nord-ouest, moyen est et hauts plateaux. 
          Cependant, elle est sensible aux maladies et demande un sol moyennement fertile.
        </p>
      </div>
      
      {/* Case 2 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lgmb-2">VARIÉTÉ RANJONOMBY</h5>
        <p className="text-gray-700 text-sm">
          Le Lingot Blanc, également connu sous le nom de variété Ranjonomby, 
          est un haricot blanc de grande taille et de forme allongée. 
          Cette variété 100% bio se distingue par sa chair aérée, 
          son goût riche et sa facilité de cuisson. 
          Les grains, d’une couleur blanche à blanc cassé, sont brillants et de taille supérieure à 13 mm. Le Lingot Blanc pousse dans les hauts plateaux de Madagascar, à une altitude de 400 à 1200 mètres, avec une période de production allant de mars à avril. Sa productivité moyenne et son rendement élevé font de cette variété une option attrayante pour les agriculteurs. 
          Cependant, il est sensible aux maladies et nécessite un sol moyennement fertile.

        </p>
      </div>
    </div>
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

export default LingotsBlancs;