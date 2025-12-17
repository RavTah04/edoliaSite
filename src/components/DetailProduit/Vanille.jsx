// Vanille.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const Vanille = ({ product, onClose }) => {
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
    "Pollinisation manuelle des fleurs.",
    "Maturité des gousses et collecte.",
    "Échaudage des gousses.",
    "Étuvage des gousses.",
    "Séchage au soleil.",
    "Séchage à l'ombre.",
    "Affinage.",
    "Mise en malle.",
    "Classement.",
    "Mesurage.",
    "Mise en botte.",
    "Jaugeage.",
    "Stockage."
  ];

  const varieties = [
    {
      name: "Vanille Noire Premium et Gourmet",
      description: "Gousses longues et charnues : nos Premium (17 cm et plus) et Gourmet (13–16 cm) offrent des arômes riches et ronds, avec une teneur en eau maîtrisée (max ~38%) et une couleur brun chocolat idéale pour applications fines."
    },
    {
      name: "Vanille Rouge",
      description: "La Vanille Rouge (Red Vanilla) présente des gousses brun-roux, souvent souples, avec des profils aromatiques allant de la vanille pure à des notes de cuir, pruneaux ou fruits rouges, selon les sous-types."
    },
    {
      name: "Courtes et Cuts",
      description: "Les cuts sont des morceaux de gousses (ou gousses courtes) pratiques et économiques, offrant une saveur concentrée et une grande polyvalence en usage industriel et culinaire."
    }
  ];

  const introText = "La vanille naturelle de Madagascar est un trésor gustatif issu de la précieuse orchidée Vanilla planifolia, cultivée dans les riches terres de Madagascar. Connue pour son arôme envoûtant et sa saveur exquise, cette vanille est réputée dans le monde entier.";

  const technicalSpecs = {
    category: "Épices",
    origin: "Madagascar (région SAVA)",
    grade: "Bourbon – Grade A",
    size: "18–22 cm",
    packaging: "Tubes verre scellés / Sacs scellés sous vide"
  };

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
            <div className="mt-4 text-gray-900">
              <h4 className="font-semibold mb-2">Fiche technique</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li className='text-gray-600'><strong>Catégorie :</strong> {technicalSpecs.category}</li>
                <li className='text-gray-600'><strong>Origine :</strong> {technicalSpecs.origin}</li>
                <li className='text-gray-600'><strong>Grade :</strong> {technicalSpecs.grade}</li>
                <li className='text-gray-600'><strong>Taille :</strong> {technicalSpecs.size}</li>
                <li className='text-gray-600'><strong>Conditionnement :</strong> {technicalSpecs.packaging}</li>
              </ul>
            </div>
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
              Originaire des terres tropicales, le vanillier prospère dans un climat chaud et humide où
              les températures restent stables. Des périodes de sécheresse peuvent favoriser la
              floraison et la maturation des gousses, mais la culture demande généralement des
              précipitations régulières et une hygrométrie élevée. Un ombrage léger protège les plants
              des excès de lumière et participe à la qualité aromatique. À Madagascar, la région
              SAVA offre ces conditions optimales, de la côte jusqu'à environ 700 mètres d'altitude.
            </p>
            
            <h3 className="font-semibold mb-2">Caractéristiques du Terroir</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Climat tropical chaud et humide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Précipitations régulières et hygrométrie élevée</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Températures stables favorisant la maturation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Ombrage léger pour un meilleur développement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Altitude typique: 0–700 mètres</span>
              </li>
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
                <h2 className="font-bold text-gray-900">Processus de Culture</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-lg text-gray-700 mb-3">La culture de la vanille repose sur des pratiques traditionnelles et un suivi rigoureux :</p>
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
                <p className="text-lg text-gray-700 mb-3">La récolte et la transformation suivent des étapes précises pour garantir la qualité :</p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-800">
                  <li className='text-gray-600'>Ramassage manuel des gousses à maturité pour préserver l'intégrité.</li>
                  <li className='text-gray-600'>Tri et classement selon longueur, souplesse et teneur en eau.</li>
                  <li className='text-gray-600'>Procédés d'échaudage/étuvage puis séchage (soleil/ombre) et affinage prolongé.</li>
                  <li className='text-gray-600'>Contrôles qualité (vanilline, humidité) et traçabilité par lot.</li>
                  <li className='text-gray-600'>Conditionnement adapté pour l'export et le stockage longue durée.</li>
                </ul>
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
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h4 className="text-lg text-gray-600 font-semibold mb-2">Vanille Naturelle Bio</h4>
          <p className="text-sm text-gray-700 mb-3">Notre Vanille Bourbon certifiée provient de Vanilla planifolia cultivée dans la région SAVA. Elle se distingue par un parfum riche, des notes fruitées et la présence de cristaux de vanilline, signes d'une qualité supérieure.</p>
          <div className="grid md:grid-cols-3 gap-3">
            {varieties.map((v, idx) => (
              <div key={`mini-${idx}`} className="bg-white p-3 rounded-md border border-gray-200 text-xs">
                <h5 className="text-gray-800 font-semibold">{v.name}</h5>
                <p className="text-gray-700 mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Certification Section */}
        <section className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Label Vanille Bourbon Certifié</h3>
          <p className="text-gray-700 text-sm max-w-3xl mx-auto">
            Cette vanille se distingue par son goût caractéristique, alliant harmonieusement des notes de 
            vanille et de fruits, ainsi que par son parfum riche et envoûtant. Sa qualité exceptionnelle 
            est reconnue grâce à la présence de cristaux de vanilline en surface.
          </p>
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

export default Vanille;