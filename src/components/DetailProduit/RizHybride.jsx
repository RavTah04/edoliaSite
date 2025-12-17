// Vanille.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const RizHybride = ({ product, onClose }) => {
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

  const introText = "La Chine est le leader mondial dans le développement et l’exportation du riz hybride. Cette technologie a été introduite par Yuan Longping, considéré comme le “père du riz hybride”, qui a développé la première variété commerciale dans les années 1970. Depuis, la Chine a largement diffusé cette innovation, notamment en Afrique et à Madagascar.";

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
            <p className="mb-4 text-gray-900 text-lg">
                Le riz hybride est une variété croisée de riz sauvage et de riz cultivé. 
                En collaboration avec le gouvernement chinois, le riz hybride a été introduit et 
                testé à Madagascar en 2007 avec la participation de la Hunan Academy of Agricultural Sciences. 
                Plusieurs initiations aux techniques de production ont été prodiguées 
                ainsi que des recherches pour adapter le riz aux conditions climatiques locales.
            </p>
          </div>
        </div>

        {/* Origine et Terroir */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">1</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Caractéristiques du riz hybride :</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-lg leading-relaxed mb-4 text-gray-800">
             Cycle de culture : Variétés à cycle court, permettant une récolte plus rapide 
             et une meilleure adaptation aux conditions climatiques variables.
            </p>
            <ul>
                <li className='text-gray-600'>Rendement élevé : Potentiel de production de 7 à 12 tonnes par hectare,
                     selon les conditions agronomiques et les pratiques culturales.
                </li>
                <li className='text-gray-600'>Adaptabilité : Convient à divers régimes hydriques, du pluvial strict à l’irrigation contrôlée.</li>
            </ul>
          </div>
        </section>

        {/* Processus de Culture et Méthodes de Récolte */}
<section className="space-y-6">
  {/* Processus de Culture */}
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100">
        <span className="font-bold text-amber-800">2</span>
      </div>
      <h2 className="font-bold text-lg text-gray-900">Pratiques culturales recommandées :</h2>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <ol className="list-decimal ml-5 space-y-2 text-sm">
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Préparation du sol : Labour et nivellement pour assurer une bonne répartition de l’eau et une implantation optimale des plants.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Semis : Utilisation de semences pré-germées, avec un repiquage en lignes espacées de 15 à 20 cm pour favoriser une croissance uniforme.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Fertilisation : Application d’engrais selon les doses recommandées pour soutenir le développement végétatif et la formation des grains.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Gestion de l’eau : Maintien d’un niveau d’eau approprié, en évitant les excès ou les déficits hydriques, pour optimiser le rendement.
          </p> 
        </li>
      </ol>
    </div>
  </div>

  {/* Méthodes de Récolte et de Transformation */}
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
        <span className="font-bold text-amber-800">3</span>
      </div>
      <h2 className="font-bold text-gray-900">Bilan des expérimentations</h2>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-lg text-gray-700">
        Les essais ont démontré que le riz hybride s’adapte bien aux conditions de Madagascar, avec des rendements largement supérieurs au riz conventionnel. Grâce aux formations techniques et aux recherches d’adaptation, ces variétés offrent un potentiel de production
        prometteur pour améliorer la sécurité alimentaire du pays.
      </p>
    </div>
    <div>
        <p className="text-sm text-gray-700 mb-3">Voici quelques-uns des principaux sites d'essai :</p>
            <ul className="list-none space-y-2">
            <li className="flex items-start">
                <span className="inline-block w-2 h-0.5 bg-gray-500 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Région Atsimo Andrefana</span>
            </li>
            <li className="flex items-start">
                <span className="inline-block w-2 h-0.5 bg-gray-500 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Région SAVA</span>
            </li>
            <li className="flex items-start">
                <span className="inline-block w-2 h-0.5 bg-gray-500 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Région Vatovavy Fitovinany, Itasy, Bongolava et Amoron' i Mania</span>
            </li>
            <li className="flex items-start">
                <span className="inline-block w-2 h-0.5 bg-gray-500 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Mahitsy</span>
            </li>
            </ul>
        <p className="text-sm text-gray-700">Grace à ces expérimentations, ces variétés de semences ont démontré des rendements impressionnants de 7 à 12 tonnes/ha, contre 2 à 3 tonnes/ha pour le riz conventionnel.</p>
    </div>
  </div>

  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
        <span className="font-bold text-amber-800">4</span>
      </div>
      <h2 className="font-bold text-gray-900">Initiatives gouvernementales :</h2>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-lg text-gray-700">
        En février 2025, le gouvernement malgache a lancé un programme ambitieux visant à 
        vulgariser la culture du riz hybride sur 50 000 hectares à travers 14 régions du pays. Cette initiative comprend la distribution gratuite de semences et d’intrants agricoles aux agriculteurs, ainsi que la mise 
        en place d’usines locales de production d’engrais pour soutenir la filière rizicole.
      </p>
    </div>
    <div>
        <p className="text-sm text-gray-700 mb-3">Variétés de semences hybride :</p>
            <ul className="list-disc ml-5 space-y-2">
            <li className="text-sm text-gray-700">Weichu 901</li>
            <li className="text-sm text-gray-700">Weichu 902-3</li>
            <li className="text-sm text-gray-700">Yuan's 8</li>
            </ul>
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

export default RizHybride;