// Vanille.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const ClouDeGirofle = ({ product, onClose }) => {
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

  const introText = "Issu d’un arbre, le giroflier, le clou de girofle n’est autre que le bouton des fleurs de l’arbre. C’est une épice qui possède une saveur piquante et chaude.";

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
            <p className="mb-4 text-gray-900 text-lg">Les clous de girofle sont utilisés pour leurs vertus médicinales et culinaires.</p>
          </div>
        </div>

        {/* Origine et Terroir */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">1</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Clous de Girofle Entiers - CG3</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
             <ul className="list-disc ml-5 text-sm space-y-1">
                <li className='text-gray-600'> <p className='text-gray-600'> <strong>Appellation :</strong> CG3</p></li>
                <li className='text-gray-600'><p className='text-gray-600'> <strong>Nom Botanique : </strong> Syzygium aromaticum</p></li>
                <li className='text-gray-600'><p className='text-gray-600'><strong>Origine : </strong>  Madagascar</p></li>
                <li className='text-gray-600'><p className='text-gray-600'><strong>Culture : </strong> Sauvage</p></li>
              </ul>
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
                <h2 className="font-bold text-gray-900">Spécifications</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-3">Les étapes clés du processus de culture :</p>
               <ol className="list-decimal ml-5 space-y-2 text-sm">
                  <li className='text-gray-600'> Couleur — Marron à brun foncé </li>
                  <li className='text-gray-600'> Humidité — Supérieur à 12 % </li>
                  <li className='text-gray-600'> Clous de Girofle Entiers (&gt; 1cm) — &gt; 80 %  </li>
                  <li className='text-gray-600'> Tiges — &lt; 2 % </li>
                  <li className='text-gray-600'> Clous de Girofle Bébés — &lt; 7 % </li>
                  <li className='text-gray-600'> Clous de Girofle Sans Tête — &lt; 11 %</li>
                </ol>
              </div>
            </div>

            {/* Méthodes de Récolte et de Transformation */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-800">3</span>
                </div>
                <h2 className="font-bold text-gray-900 ">Logistique​</h2>
              </div>
              <div className="overflow-x-auto mt-4">
  <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-50">
        <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">Emballage</th>
        <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">Marquage</th>
        <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">Poids net</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Nouveau sac en jute</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Marquage sur demande</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">50 kg</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Conteneur 20′</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">220 sacs – 50 kg</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">11,000 kg</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Conteneur 40′</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">500 sacs – 50 kg</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">25,000 kg</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
          </div>
        </section>

        {/* Logistique */}
        <section>
          <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-800">4</span>
                </div>
                <h2 className="font-bold text-gray-900 ">Contaminants</h2>
            </div>
            
       <div className="mt-4 bg-gray-50 rounded-lg p-4">
  <div className="grid md:grid-cols-2 gap-4">
    {/* Ligne 1 - Cases 1 et 2 côte à côte */}
    <div className="grid grid-cols-2 gap-4 md:col-span-2">
      {/* Case 1 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="overflow-x-auto mt-4">
  <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-50">
        <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">Standards</th>
        <th className="py-3 px-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">Target values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Matières étrangères (bois, plastique, caillou, coquille, verre, métal…)</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">Aucune</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Matières végétales étrangères (poudre et pétales)</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">&lt; 1%</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800">Insectes (entiers ou en partie)</td>
        <td className="py-3 px-4 border border-gray-300 text-sm text-gray-800 font-medium">Aucune</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
      
      {/* Case 2 */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm">
          <span className="text-gray-900 font-bold">Stockage :</span> Conserver uniquement dans un endroit frais et sec, 
          loin de toute source de chaleur et de la lumière directe du soleil.
        </p>
        <p className="text-gray-700 text-sm">
          <span className="text-gray-900 font-bold">Durée de conservation : </span> 3 ans après la date d’emballage.
        </p>
        <p className="text-gray-700 text-sm">
          <span className="text-gray-900 font-bold">Le produit n’a subi aucune modification génétique, n’a pas été ionisé et ne contient aucun composant nano-particulaire ni ionisé.</span>
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

export default ClouDeGirofle;