import { Target, Globe, Shield, Users, TrendingUp, CheckCircle, Award, Package, History } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MadagascarMap from '../assets/madagascar.svg';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images spécifiques pour vos produits
  const productImages = [
    "/miel.png", // miel
    "/litchis.png", // litchis
    "/girofle-product.jpg", // Girofle
    "/engrais-product.jpeg", // Engrais naturels
    "Carre-de-Vanille-Gourmet-Vanille-Noire.webp", // Vanille
    "/riz-hybride.jpg" // Riz hybride
  ];

  // Animation pour changer les images automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [productImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - FOND SOMBRE AVEC ANIMATION */}
      <section className="relative overflow-hidden bg-neutral-950 text-white py-24">
        {/* Effets de particules animées */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="section-padding relative z-10 text-center">
          <div className="inline-flex items-center px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-semibold">Depuis 2023</span>
          </div>
          
          {/* Animation pour "Qui sommes-nous ?" */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-red-500 pr-1">
              Qui sommes-nous ?
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight animate-slide-up-fade">
            Edolia — L'excellence agricole de Madagascar au service du monde
          </h2>
          
          <p className="text-xl opacity-95 max-w-4xl mx-auto leading-relaxed animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
            Une entreprise dynamique spécialisée dans l'exportation, la distribution et la commercialisation 
            de produits agricoles premium. Nous connectons les terres fertiles de Madagascar aux marchés 
            internationaux grâce à un modèle B2B fiable et traçable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center space-x-3 text-red-600 font-semibold mb-4">
                <Target size={28} />
                <span className="text-xl">Notre Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Valoriser les richesses agricoles tropicales
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Mettre en valeur les richesses agricoles de Madagascar ainsi que d'autres régions tropicales 
                  en fournissant des produits d'exception.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 pl-6 py-4 rounded-r-lg animate-pulse-red">
                  <p className="font-semibold text-gray-800 mb-2">Nos produits phares :</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Engrais naturels', 'Riz hybride', 'Girofle', 'Vanille', 'Litchis', 'Miel', 'Fertilisant / Taroka', 'Lingots blancs', 'Poids du cap'].map((product, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}></div>
                        <span className="text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Nous nous engageons pour une agriculture durable, respectueuse des producteurs 
                  et des écosystèmes locaux.
                </p>
              </div>
            </div>

            {/* Galerie de produits animée - VOS PRODUITS SPÉCIFIQUES */}
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] perspective-1000">
                {/* Container pour le carousel */}
                <div className="relative w-full h-full">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100 rotate-0' 
                          : 'opacity-0 scale-110 rotate-2'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Produit ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Overlay avec nom du produit */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="text-white text-xl font-bold">
                          {['Miel de Madagascar', 'Litchis Frais', 'Girofle de Madagascar', 'Engrais Naturels', 'Vanille Bourbon', 'Riz Hybride'][index]}
                        </h4>
                      </div>
                    </div>
                  ))}
                  
                  {/* Indicateurs de navigation */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-red-500 w-10' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
                
                {/* Effet de bordure 3D */}
                <div className="absolute inset-0 border-2 border-red-500/20 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Badge animé */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-2xl max-w-xs animate-float border border-gray-100">
                <div className="flex items-center space-x-4">
                  <Package className="text-red-600 animate-icon-bounce" size={32} />
                  <div>
                    <p className="font-bold text-gray-900 text-xl animate-pulse-red">6+</p>
                    <p className="text-sm text-gray-600">Produits Premium</p>
                  </div>
                </div>
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-shimmer-red"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire - Nouveau design avec timeline animée */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Nouveau design pour l'image à gauche */}
<div className="relative order-2 lg:order-1 animate-slide-in-left">
  <div className="relative rounded-2xl overflow-hidden h-[550px] perspective-1000">
    {/* Fond avec image de carte de Madagascar locale */}
    <div className="absolute inset-0">
      {/* Image de carte de Madagascar locale en fond */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/Carte-Madagascar.png" 
          alt="Carte de Madagascar" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200/80 via-gray-200/80 to-black/70"></div> */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={MadagascarMap} 
          alt="Carte de Madagascar" 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 opacity-30 pointer-events-none z-0" 
        />
        <div className="relative">
          <div className="relative">
            <div className="w-72 h-72 border-2 border-red-500/50 rounded-full animate-pulse backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-red-500 text-white">
                  Notre Territoire
                </h3>
                <p className="text-gray-200 text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  Madagascar • Terres Fertiles
                </p>
              </div>
            </div>
          </div>
          
          {/* Points de production animés avec effet lumineux
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60" style={{ animationDelay: '0.9s' }}></div> */}
          
          {/* Lignes de connexion avec effet glow */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M144,72 Q216,108 288,144" 
              stroke="rgba(239, 68, 68, 0.6)" 
              strokeWidth="1.5" 
              fill="none"
              strokeDasharray="4,4"
              filter="url(#glow)"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                from="0" 
                to="8" 
                dur="2s" 
                repeatCount="indefinite"
              />
            </path>
            <path 
              d="M216,216 Q180,180 144,216" 
              stroke="rgba(239, 68, 68, 0.6)" 
              strokeWidth="1.5" 
              fill="none"
              strokeDasharray="4,4"
              filter="url(#glow)"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                from="0" 
                to="8" 
                dur="2.5s" 
                repeatCount="indefinite"
                begin="0.5s"
              />
            </path>
            
            {/* Filtre pour l'effet glow
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs> */}
          </svg>
        </div>
      </div>
      
      {/* Timeline visuelle */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex justify-between items-center">
          {['2018', '2020', '2022', '2023'].map((year, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${index === 3 ? 'bg-red-500' : 'bg-gray-400'} mb-2`}></div>
              <div className="h-8 w-0.5 bg-gray-500 mb-2"></div>
              <span className="text-xs text-gray-200">{year}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm text-gray-200 font-medium">Évolution de notre expertise</span>
        </div>
      </div>
      
      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div> */}
    </div>
    
    {/* Badge animé */}
    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-600 to-red-700 text-white p-4 rounded-xl shadow-xl animate-float z-30">
      <div className="flex items-center space-x-2">
        <History className="w-5 h-5" />
        <span className="font-bold">Notre Histoire</span>
      </div>
    </div>
  </div>
  
  {/* Timeline visuelle */}
  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-slide-up-fade z-30">
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
          <History className="text-white" size={24} />
        </div>
        <div className="absolute -inset-2 border-2 border-red-300 rounded-lg animate-ping opacity-30"></div>
      </div>
      <div>
        <p className="font-bold text-gray-900">20+ ans</p>
        <p className="text-sm text-gray-600">Héritage STOI</p>
      </div>
    </div>
  </div>
</div>

            {/* Histoire Content - Texte original */}
            <div className="space-y-8 order-1 lg:order-2 animate-slide-in-right">
              <div className="inline-flex items-center space-x-3 text-red-400 font-semibold mb-4">
                <History size={28} className="animate-pulse-red" />
                <span className="text-xl">Notre Parcours</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Un héritage, <span className="text-red-400">une vision</span>
              </h2>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-300 rounded-full"></div>
                  <p className="text-gray-300 text-lg leading-relaxed pl-6">
                    Edolia a été fondée par <span className="font-semibold text-red-400">Ny Andry Rabetsitonta</span>, 
                    diplômé en export management de l'ESCE, avec la vision de connecter efficacement 
                    les producteurs locaux aux marchés internationaux.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-200 rounded-full"></div>
                  <p className="text-gray-300 text-lg leading-relaxed pl-6">
                    Forte de l'expertise du groupe <span className="font-semibold text-red-400">STOI </span> 
                    (20+ ans d'expérience), Edolia bénéficie d'un savoir-faire solide, 
                    d'un réseau établi et d'une compréhension fine des réalités du terrain.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 border border-red-900/30 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                  <p className="font-semibold text-gray-200 italic">
                    "Notre force : combiner innovation et héritage pour offrir des produits 
                    fiables, tracés et conformes aux standards internationaux."
                  </p>
                </div>
              </div>
              
              {/* Stats inline */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { value: '2023', label: 'Fondation' },
                  { value: '20+', label: "Ans d\'expertise" },
                  { value: '6+', label: 'Produits' },
                  { value: '100%', label: 'Traçabilité' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
                    <div>
                      <span className="font-bold text-white">{stat.value}</span>
                      <span className="text-gray-400 text-sm ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Découvrez Nos Produits Certifiés" */}
      <section className=" bg-neutral-950 text-white">
        <div className="section-padding">
          {/* Processus B2B */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 animate-slide-up-fade">
              Notre Processus B2B <span className="text-red-400">Simplifié</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up-fade">
              {[
                {
                  step: "1",
                  title: "Sourcing",
                  description: "Sélection dans notre réseau de producteurs professionnels et vérification des fournisseurs (1-4 semaines).",
                  icon: "🔍",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "2",
                  title: "Contrôle Qualité",
                  description: "Inspections rigoureuses et validation des spécifications de la commande (3-5 jours).",
                  icon: "✅",
                  color: "from-green-500 to-green-600"
                },
                {
                  step: "3",
                  title: "Logistique",
                  description: "Organisation optimale du transport avec un suivi en temps réel (1-4 semaines).",
                  icon: "🚚",
                  color: "from-amber-500 to-amber-600"
                },
                {
                  step: "4",
                  title: "Livraison",
                  description: "Mise à disposition de vos produits, où que vous soyez dans le monde (2-7 jours, délai moyen).",
                  icon: "📦",
                  color: "from-red-500 to-red-600"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-500 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                        {item.icon}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-lg font-bold">{item.step}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    
                    {/* Timeline connecteur */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-gray-800 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full group-hover:bg-red-500 transition-all duration-500"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Effet de lueur au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs - Design moderne pour exportation agricole */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ce qui fait Notre Excellence
            </h2>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Les principes fondamentaux qui guident chaque décision et action dans notre chaîne d'exportation
            </p>
          </div>

          {/* Grille de valeurs moderne avec animations */}
          <div className="relative">
            {/* Éléments décoratifs en arrière-plan */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: Shield,
                  title: 'Qualité & Authenticité',
                  description: 'Sélection rigoureuse des produits et contrôle constant à chaque étape.',
                  color: 'from-red-500 to-red-600',
                  bgColor: 'bg-red-50',
                  delay: 0
                },
                {
                  icon: Globe,
                  title: 'Transparence & Traçabilité',
                  description: 'Chaîne d\'approvisionnement maîtrisée, du producteur au client.',
                  color: 'from-blue-500 to-blue-600',
                  bgColor: 'bg-blue-50',
                  delay: 100
                },
                {
                  icon: Users,
                  title: 'Durabilité & Impact local',
                  description: 'Contribution au développement des communautés agricoles.',
                  color: 'from-emerald-500 to-emerald-600',
                  bgColor: 'bg-emerald-50',
                  delay: 200
                },
                {
                  icon: CheckCircle,
                  title: 'Ambition & Fiabilité',
                  description: 'Une entreprise moderne adossée à 20 ans d\'expérience STOI.',
                  color: 'from-amber-500 to-amber-600',
                  bgColor: 'bg-amber-50',
                  delay: 300
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative animate-slide-up-fade"
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  {/* Carte principale */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full">
                    {/* Numéro de valeur animé */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-lg">0{index + 1}</span>
                      <div className="absolute -inset-2 border-2 border-gray-300 rounded-full animate-ping opacity-30"></div>
                    </div>
                    
                    {/* Icon avec effet de lueur */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 rounded-2xl ${value.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <value.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {/* Effet de lueur */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                    
                    {/* Ligne décorative */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marchés cibles */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 animate-slide-up-fade">
              Nos Marchés Cibles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { region: 'Europe', markets: 'Marchés premium', color: 'from-blue-400 to-blue-600', icon: '🇪🇺' },
                { region: 'Afrique', markets: 'Croissance rapide', color: 'from-green-400 to-green-600', icon: '🌍' },
                { region: 'Asie', markets: 'Opportunités émergentes', color: 'from-orange-400 to-orange-600', icon: '🌏' }
              ].map((target, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-up-fade"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${target.color} flex items-center justify-center mb-4 mx-auto animate-float`}>
                    <span className="text-2xl">{target.icon}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">{target.region}</h4>
                  <p className="text-gray-600">{target.markets}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="section-padding text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up-fade">
              Participez à notre aventure
            </h2>
            
            <p className="text-xl mb-8 opacity-95 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              Producteur, distributeur, importateur ou partenaire stratégique, 
              rejoignez notre réseau pour exporter l'excellence malgache vers le monde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-heartbeat hover:animate-none"
              >
                Devenir partenaire
              </Link>
              
              <Link
                to="/produits"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Découvrir nos produits
              </Link>
            </div>
            
            <p className="mt-8 text-sm opacity-80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Ensemble, construisons des ponts durables entre Madagascar et le monde.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;