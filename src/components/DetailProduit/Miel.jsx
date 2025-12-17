// Miel.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { X } from 'lucide-react';

const Miel = ({ product, onClose }) => {
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

  const varieties = [
    {
      name: "Miel de Litchi",
      description: ""
    },
    {
      name: "Miel de Niaouli",
      description: ""
    },
    {
      name: "Miel de Mokarana",
      description: ""
    },
    {
      name: "Miel Polyfloral",
      description: ""
    }
  ];

  const introText = "Relance d'une filière apicole durable sur la côte Est de Madagascar.";

  const technicalSpecs = {
    Localisation: "Manakara – Côte Est de Madagascar",
    RégionsIntervention: " Atsimo Atsinanana, Vatovavy, Fitovinanay",
    extraction: "2 tonnes/jour",
    Équipements: "Ligne complète d'extraction professionnelle (marque ICKO)"
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
            <p className="mb-4 text-gray-900 text-sm"> Bien que l'usine ait été à l'arrêt depuis 2015, elle dispose aujourd'hui d'une infrastructure fonctionnelle et conforme aux standards de qualité, 
              permettant une relance rapide et maîtrisée de l'activité.</p>
            <div className="mt-4 text-gray-900">
              <h4 className="font-semibold mb-2">Une miellerie professionnelle opérationnelle</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li className='text-gray-600'><strong>Localisation :</strong> {technicalSpecs.Localisation}</li>
                <li className='text-gray-600'><strong>Régions d'intervention :</strong> {technicalSpecs.RégionsIntervention}</li>
                <li className='text-gray-600'><strong>Capacité d'extraction :</strong> {technicalSpecs.extraction}</li>
                <li className='text-gray-600'><strong>Équipements :</strong> {technicalSpecs.Équipements}</li>
              </ul>
              <p className="mt-4 text-gray-900 text-sm">Une modernisation progressive des équipements est prévue dans le cadre du financement PIC / Banque mondiale.</p>
            </div>
          </div>
        </div>

        {/* Origine et Terroir */}
        <section>
            <p className="mb-4 text-gray-900 text-sm">Ce projet s'inscrit dans une dynamique de redynamisation durable de la filière apicole régionale, en partenariat étroit avec les apiculteurs locaux et la Plateforme Miel Régionale,
               dans une logique de création de valeur partagée.</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">1</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Objectif </h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-lg leading-relaxed mb-4 text-gray-800">
              Relancer une production de miel de haute qualité conforme aux normes 
              internationales, afin de valoriser le miel du Sud-Est malgache à travers 
              une unité d'extraction moderne et l'implication directe des apiculteurs locaux.
            </p>
            
            <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">Augmenter durablement les volumes de production,</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">
                  garantir la qualité et la traçabilité du miel,</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={16} />
                <span className="text-sm text-gray-800">
                  renforcer les capacités économiques des communautés 
                  d'apiculteurs grâce à un modèle d'agrégation agricole structuré,
                   en vue d'une intégration progressive sur les marchés nationaux et internationaux.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Axes stratégiques et Notre vision - En lignes */}
        <section className="space-y-6">
          {/* Axes stratégiques */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100">
                <span className="font-bold text-amber-800">2</span>
              </div>
              <h2 className="font-bold text-gray-900">Axes stratégiques</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <ol className="list-decimal ml-5 space-y-3 text-sm">
                <li className='text-gray-600'>
                  <span className="font-medium text-gray-900">Accroissement de la production</span>
                  <p className="text-gray-600 mt-1 text-xs">Montée en puissance progressive, avec un passage de 96 381 kg en année 1 à 139 556 kg en année 2.</p>
                </li>
                <li className='text-gray-600'>
                  <span className="font-medium text-gray-900">Qualité et traçabilité</span>
                  <p className="text-gray-600 mt-1 text-xs">Mise en place de systèmes de contrôle qualité et de traçabilité conformes aux standards internationaux,
                    appuyés par une feuille de route de certifications (dont Ecocert).</p>
                </li>
                <li className='text-gray-600'>
                  <span className="font-medium text-gray-900">Développement des communautés locales</span>
                  <p className="text-gray-600 mt-1 text-xs">Structuration et accompagnement de 203 apiculteurs partenaires, dotés d'outils modernes,
                    de formations continues et d'un appui technique de proximité.</p>
                </li>
                <li className='text-gray-600'>
                  <span className="font-medium text-gray-900">Positionnement du miel du Sud-Est</span>
                  <p className="text-gray-600 mt-1 text-xs">Valorisation du miel du Sud-Est de Madagascar sur les marchés premium internationaux,
                    tout en consolidant une présence sur le marché national.</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Notre vision */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-amber-800">3</span>
              </div>
              <h2 className="font-bold text-gray-900">Notre vision</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Développer une filière apicole moderne, inclusive et exportatrice, valorisant la biodiversité locale, le savoir-faire des apiculteurs malgaches et répondant aux exigences
                des marchés internationaux en matière de qualité, de traçabilité et de durabilité.
              </p>
            </div>
          </div>
        </section>

         {/*Un modèle d'agrégation agricole structuré - Grille 2x2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-amber-800">4</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Un modèle d'agrégation agricole structuré</h2>
          </div>
          
          {/* Grille 2x2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Case 1 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">La Miellerie des Pangalanes opère selon un modèle 
                d'agrégation agricole conforme à la réglementation malgache, associant :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Apiculteurs partenaires (coopératives & associations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Plateforme Miel Régionale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Miellerie des Pangalanes – opérateur technique et industriel</span>
                </li>
              </ul>
            </div>
            
            {/* Case 2 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">Nos engagements :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Appui technique de proximité (techniciens apicoles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Fourniture de ruches modernes et équipements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Formation continue (qualité, hygiène, traçabilité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Achat du miel à prix bord champ compétitif</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Paiement rapide et transparent</span>
                </li>
              </ul>
            </div>
            
            {/* Case 3 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">Opportunités à saisir :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Expertise des producteurs locaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Infrastructure de miellerie existante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Relations établies avec les producteurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Soutien des organisations internationales de développement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Région du Sud Est de Madagascar : favorable à l'apiculture</span>
                </li>
              </ul>
            </div>
            
            {/* Case 4 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm">Qualité, traçabilité & certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Traçabilité complète de la ruche au lot final</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Suivi digital des apiculteurs et des récoltes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-800">Démarche progressive de certifications internationales</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nos variétés */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-amber-800">5</span>
            </div>
            <h2 className="font-bold text-gray-900">Nos variétés</h2>
          </div>
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              <span className="font-bold text-sm text-gray-700 mb-3">Formats :</span> Seaux (3 kg, 5 kg, 22 kg), Fûts (25 kg, 30 kg, 75 kg, 290 kg)
            </p>
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

        {/* Impact et durabilités */}
        <section className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Impact & durabilité</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Apiculture sans résidus chimique</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Protection des écosystèmes mellifères</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">40 % de femmes, 60 % de jeunes dans la filière</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Transition énergétique progressive (solaire)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Reboisement d'espèces mellifères</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Plus de 203 apiculteurs partenaires</span>
            </li>
          </ul>
        </section>

        {/* Partenariats */}
        <section className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Partenariats & marchés</h3>
          <p className="text-gray-700 text-sm max-w-3xl mx-auto">
            Nous développons des partenariats avec :
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Acheteurs internationaux de miel premium</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Distributeurs & épiceries fines</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Hôtellerie & restauration</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={16} />
              <span className="text-sm text-gray-800">Marques privées (private label)</span>
            </li>
          </ul>
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

export default Miel;