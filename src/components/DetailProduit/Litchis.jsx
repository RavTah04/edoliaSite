// Vanille.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const Litchis = ({ product, onClose }) => {
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
    "Sélection des variétés adaptées",
    "Préparation du sol",
    "Plantation des litchis",
    "Soins et entretien",
    "Récolte à maturité",
    "Transformation et emballage"
  ];

  const introText = "Les litchis de Madagascar sont cultivés dans les régions ensoleillées. Récoltés à la main à maturité, ils offrent une chair juteuse et sucrée. Leur saveur exotique et leur texture délicate font des litchis de Madagascar une expérience gustative incomparable.";

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
          <h3 className="text-2xl font-bold text-gray-900">{product.name || 'Litchis'}</h3>
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
              Les litchis de Madagascar sont cultivés dans les régions côtières de la grande île. 
              Le terroir unique du pays confère aux litchis une saveur distinctive. 
              Grâce à des pratiques agricoles durables et à des contrôles de qualité rigoureux, 
              Edolia assure la transformation et l'exportation de ces délicieux fruits dans le monde entier, 
              contribuant ainsi au développement économique de la région.
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
                <h2 className="font-bold text-gray-900">Culture</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-lg text-gray-700 mb-3">Les étapes clés du processus de culture :</p>
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
                <h2 className="font-bold text-gray-900">Récolte & Transformation​</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-lg text-gray-700 mb-3">
                  Edolia applique des méthodes de récolte et de transformation rigoureuses pour les litchis de Madagascar. 
                  Des équipes spécialisées récoltent les litchis à maturité optimale, en veillant à leur préservation. 
                  Les fruits sont ensuite acheminés vers les installations de transformation de Edolia, où ils sont triés, lavés et emballés avec précision. 
                  Grâce à des contrôles de qualité stricts, 
                  seuls les litchis de la plus haute qualité sont sélectionnés pour garantir une expérience gustative exceptionnelle.
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
                <h2 className="font-bold text-gray-900">Nos variétés</h2>
            </div>
            <div className="mt-4 text-gray-900">
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li className='text-gray-600'><strong>Litchis primeurs :</strong> <p className='text-gray-600'>par avion (litchis à maturité précoce, avant l'ouverture de la campagne/saison officielle)</p></li>
                <li className='text-gray-600'><strong>Litchis frais égrenés :</strong> <p className='text-gray-600'>bio par avion (certification ECOCERT)</p></li>
                <li className='text-gray-600'><strong>Litchis frais branchés :</strong> <p className='text-gray-600'>(longueur de grappe supérieure à 15 cm) et égrenés (pédoncule supérieur à 5 mm) par avion</p></li>
                <li className='text-gray-600'><strong>Litchis soufrés égrenés :</strong> <p className='text-gray-600'>par avion et par bateau (traitement à l'anhydride sulfureux)</p></li>
              </ul>
            </div>
       <div className="mt-4 bg-gray-50 rounded-lg p-4">
  <div className="grid md:grid-cols-2 gap-4">
    {/* Ligne 1 - Cases 1 et 2 côte à côte */}
    <div className="grid grid-cols-2 gap-4 md:col-span-2">
      {/* Case 1 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lg mb-2">Litchis primeurs</h5>
        <p className="text-gray-700 text-sm">
          Lorsque les litchis de Madagascar atteignent leur maturité précoce, 
          ils sont récoltés avec précaution par des agriculteurs expérimentés. 
          Ces fruits sont sélectionnés avec soin pour garantir leur fraîcheur et leur qualité optimale.
          Ils sont ensuite rapidement transportés vers des installations de transformation spécialement équipées. Les litchis sont triés, 
          nettoyés et emballés de manière à préserver leur texture délicate et leur goût exquis. Le respect de la chaîne du froid est essentiel pour préserver leur fraîcheur. 
          Les litchis primeurs de Madagascar sont expédiés rapidement vers les marchés internationaux,
          permettant aux consommateurs de déguster ces délicieux fruits dans leur état prime,
          avec leur douceur et leur arôme caractéristiques préservés.
        </p>
      </div>
      
      {/* Case 2 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lg mb-2">Litchis frais égrenés bio</h5>
        <p className="text-gray-700 text-sm">
          Une fois que les litchis atteignent leur maturité optimale, ils sont soigneusement récoltés.
          Les fruits sont ensuite acheminés vers des installations de transformation, où ils sont épluchés et débarrassés de leurs pépins avec une grande précision. 
          Ce processus permet d'obtenir des litchis frais égrenés d'une texture parfaite et d'un goût exquis. Après la transformation, 
          les litchis frais égrenés bio sont emballés de manière à préserver leur fraîcheur et leur intégrité nutritionnelle.
        </p>
      </div>
    </div>
    
    {/* Ligne 2 - Cases 3 et 4 côte à côte */}
    <div className="grid grid-cols-2 gap-4 md:col-span-2">
      {/* Case 3 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lg mb-2">Litchis frais branchés</h5>
        <p className="text-gray-700 text-sm">
          Les fruits sont cueillis en conservant leur branche d'origine, 
          ce qui maintient leur fraîcheur et leur aspect esthétique attrayant. 
          Les litchis frais branchés sont ensuite acheminés vers des installations de traitement spécialisées, où ils sont triés, nettoyés et emballés avec précaution. 
          Grâce à des pratiques de manipulation et d'emballage appropriées, les litchis frais branchés sont préservés dans un état optimal jusqu'à leur arrivée sur les marchés locaux et internationaux. 
          Les consommateurs peuvent ainsi profiter de la beauté et de la fraîcheur des litchis, 
          en appréciant leur goût délicieux tout en ayant une expérience visuelle agréable grâce à la présence de la branche.
        </p>
      </div>
      
      {/* Case 4 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h5 className="font-semibold text-gray-900 text-lg mb-2">Litchis soufrés égrenés​</h5>
        <p className="text-gray-700 text-sm">
          Une fois récoltés à leur maturité optimale, les litchis sont soigneusement triés et sélectionnés.
          Ensuite, ils sont soumis à un traitement de soufrage, qui consiste à exposer les fruits à une quantité contrôlée de dioxyde de soufre.
          Ce traitement aide à prévenir la dégradation de la couleur, à réduire la croissance bactérienne et à prolonger la durée de conservation des litchis. 
          Après le traitement, les litchis sont égrenés avec précision pour retirer les pépins, garantissant une expérience de consommation pratique et agréable. 
          Les litchis soufrés égrenés sont ensuite emballés dans des conditions optimales pour maintenir leur fraîcheur et leur qualité, prêts à être commercialisés sur les marchés locaux et internationaux. 
          Les consommateurs peuvent ainsi profiter de litchis délicieux et pratiques, tout en bénéficiant d'une durée de conservation plus longue grâce au traitement de soufrage.
        </p>
      </div>
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

export default Litchis;