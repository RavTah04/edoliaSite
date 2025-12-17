import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const PoisDuCap = ({ product, onClose }) => {
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
  const introText = "Les pois du cap, également connus sous le nom de pois d’Angole ou pois dolique, sont une plante cultivée à Madagascar pour leurs grandes gousses comestibles et leurs graines nutritives. Ces légumineuses grimpantes sont appréciées pour leur teneur élevée en protéines.";

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
<section className="space-y-6">
  {/* Processus de Culture */}
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100">
        <span className="font-bold text-amber-800">2</span>
      </div>
      <h2 className="font-bold text-lg text-gray-900">Processus de Culture</h2>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <ol className="list-decimal ml-5 space-y-2 text-sm">
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Préparation du sol : Le sol est préparé en ameublissant la terre et en éliminant les mauvaises herbes, 
            assurant ainsi un environnement propice à la croissance des plants de pois du Cap.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Plantation des graines : Les graines de pois du Cap sont 
            plantées à une profondeur appropriée dans le sol,
            en veillant à respecter l'espacement recommandé entre les plants.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Arrosage régulier : Les plants de pois du Cap ont besoin d'un arrosage 
            régulier pour assurer leur hydratation et favoriser leur développement sain.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Tuteurage des plantes grimpantes : Les variétés grimpantes de pois du 
            Cap nécessitent un système de soutien, tel que des treillis ou des tuteurs, 
            pour les aider à grimper et à se développer de manière verticale.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Désherbage : Le désherbage est essentiel pour éliminer les mauvaises 
            herbes compétitrices et permettre aux plants de pois du 
            Cap de bénéficier pleinement des nutriments et de l'espace disponibles.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Utilisation d'un paillis : L'application d'un paillis autour des plants 
            de pois du Cap aide à maintenir l'humidité du sol, réduit la croissance 
            des mauvaises herbes et protège les racines des variations de température.
          </p> 
        </li>
        <li className='text-gray-600'> 
          <p className='text-gray-600 text-sm'>
            Récolte des gousses tendres : 
            Les gousses de pois du Cap sont récoltées lorsque les graines à l'intérieur atteignent
            une taille appropriée et sont encore tendres, assurant ainsi une texture crémeuse fondante.
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
      <h2 className="font-bold text-gray-900">Méthodes de Récolte et de Transformation</h2>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-lg text-gray-700">
        La récolte du pois du cap de Madagascar est réalisée avec minutie pour préserver
        la qualité et la fraîcheur des graines. Les agriculteurs récoltent les gousses de
        pois du cap à maturité, en s'assurant qu'elles ont atteint leur pleine maturité 
        et que les graines à l'intérieur sont bien développées. Après la récolte, 
        les gousses sont soigneusement traitées pour extraire les graines, 
        qui sont ensuite soumises à des méthodes de transformation spécifiques. 
        Ces techniques de transformation incluent le séchage, 
        le triage et le conditionnement, garantissant ainsi des pois du cap de Madagascar de première qualité, 
        prêts à être appréciés dans diverses préparations culinaires.
      </p>
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

export default PoisDuCap;