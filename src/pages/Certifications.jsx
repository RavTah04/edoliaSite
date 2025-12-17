import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, X, ChevronUp, Shield } from 'lucide-react';

const data = [
  {
    id: 1,
    name: 'USDA Organic',
    org: 'Département de l\'Agriculture des États-Unis',
    img: '/USDA-Organic-logo.png',
    description: 'Norme de certification biologique établie par le Département de l\'Agriculture des États-Unis (USDA). Garantit que les produits agricoles sont cultivés et transformés en respectant des normes rigoureuses de l\'agriculture biologique, excluant l\'utilisation de pesticides chimiques, d\'engrais synthétiques et d\'organismes génétiquement modifiés (OGM).',
    details: [
      'Exclusion des pesticides chimiques',
      'Absence d\'engrais synthétiques',
      'Interdiction des OGM',
      'Méthodes agricoles durables',
      'Traçabilité complète',
      'Contrôles réguliers par l\'USDA'
    ],
    color: 'green',
    product: 'Vanilles et produits biologiques'
  },
  {
    id: 2,
    name: 'Global G.A.P.',
    org: 'Good Agricultural Practices',
    img: '/global-gapCertification-logo.png',
    description: 'Norme internationale reconnue dans le domaine agricole établissant des critères pour garantir la sécurité alimentaire, la durabilité environnementale, la traçabilité des produits et le bien-être animal.',
    details: [
      'Sécurité alimentaire garantie',
      'Durabilité environnementale',
      'Bien-être animal respecté',
      'Traçabilité des produits',
      'Responsabilité sociale',
      'Audits indépendants réguliers'
    ],
    color: 'blue',
    product: 'Litchis et produits agricoles'
  },
  {
    id: 3,
    name: 'Ecocert',
    org: 'Certification Biologique Internationale',
    img: '/ecocert-logo.png',
    description: 'Norme internationale de certification biologique garantissant que les produits sont cultivés et transformés selon des normes strictes de l\'agriculture biologique. Cette certification atteste que les produits sont d\'origine biologique, exempts de résidus chimiques et respectueux de l\'environnement.',
    details: [
      'Origine biologique vérifiée',
      'Exempt de résidus chimiques',
      'Respectueux de l\'environnement',
      'Contrôles réguliers',
      'Reconnaissance internationale',
      'Normes strictes de production'
    ],
    color: 'emerald',
    product: 'Vanilles Madagascar'
  },
  {
    id: 4,
    name: 'Bio CE',
    org: 'Certification Biologique Européenne',
    img: '/logo-certifie-fr-bio-agriculture.jpg',
    description: 'Certification attestant que les produits sont d\'origine biologique, exempts de résidus chimiques et respectueux de l\'environnement selon les normes européennes. Les consommateurs peuvent avoir confiance en la qualité biologique des aliments qu\'ils consomment.',
    details: [
      'Normes biologiques européennes',
      'Protection de la santé humaine',
      'Préservation de l\'environnement',
      'Qualité biologique garantie',
      'Confiance consommateur',
      'Conformité aux standards CE'
    ],
    color: 'yellow',
    product: 'Produits biologiques'
  }, 
  {
    id: 5,
    name: 'Agriculture Biologique UE',
    org: 'Certification Biologique Européenne',
    img: '/logo-certifie-agriculture-biologique.jpg',
    description: 'Certification européenne pour l\'agriculture biologique qui garantit une production respectant des normes rigoureuses de culture et de transformation. Cette certification assure aux consommateurs que les produits sont cultivés sans pesticides chimiques, sans OGM et dans le respect de la biodiversité.',
    details: [
      'Sans pesticides chimiques',
      'Sans organismes génétiquement modifiés (OGM)',
      'Respect de la biodiversité et des écosystèmes',
      'Traçabilité complète du champ à l\'assiette',
      'Contrôles réguliers par des organismes indépendants',
      'Engagement envers des pratiques agricoles durables'
    ],
    color: 'purple',
    product: 'Tous nos produits agricoles'
  }
];

const colorConfig = {
  green: { 
    border: 'border-green-500/30', 
    bg: 'bg-green-500/10', 
    text: 'text-green-400', 
    lightBg: 'bg-green-50',
    gradient: 'from-green-500/20 to-green-400/10',
    iconBg: 'bg-green-500/20'
  },
  blue: { 
    border: 'border-blue-500/30', 
    bg: 'bg-blue-500/10', 
    text: 'text-blue-400', 
    lightBg: 'bg-blue-50',
    gradient: 'from-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20'
  },
  emerald: { 
    border: 'border-emerald-500/30', 
    bg: 'bg-emerald-500/10', 
    text: 'text-emerald-400', 
    lightBg: 'bg-emerald-50',
    gradient: 'from-emerald-500/20 to-emerald-400/10',
    iconBg: 'bg-emerald-500/20'
  },
  yellow: { 
    border: 'border-yellow-500/30', 
    bg: 'bg-yellow-500/10', 
    text: 'text-yellow-400', 
    lightBg: 'bg-yellow-50',
    gradient: 'from-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20'
  },
  purple: { 
    border: 'border-purple-500/30', 
    bg: 'bg-purple-500/10', 
    text: 'text-purple-400', 
    lightBg: 'bg-purple-50',
    gradient: 'from-purple-500/20 to-purple-400/10',
    iconBg: 'bg-purple-500/20'
  }
};

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openModal = (cert) => {
    setActiveCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowScrollTop(false);
    setTimeout(() => {
      setActiveCert(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Gestion du scroll dans le modal
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setShowScrollTop(contentRef.current.scrollTop > 100);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, [isModalOpen]);

  // Scroll vers le haut
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Fermer avec Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16 max-w-4xl"
      >
        <p className="text-gray-300 text-sm py-2">Certifications de EDOLIA Madagascar</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          NOS CERTIFICATIONS
        </h2>
        <p className="text-gray-300 text-lg">
          Pour les consommateurs, les certifications jouent un rôle crucial dans le choix des produits. 
          Elles offrent une garantie de qualité, 
          de sécurité alimentaire et de respect de l’environnement.
        </p>
      </motion.div>

      {/* Ligne des certifications */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 py-8">
          {data.map((item) => {
            const colors = colorConfig[item.color];
            const isActive = activeCert?.id === item.id;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Carte de certification */}
                <div 
                  className={`relative w-28 h-28 md:w-32 md:h-32 cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                  onClick={() => openModal(item)}
                >
                  {/* Cercle principal */}
                  <div className={`relative w-full h-full rounded-full border-2 ${colors.border} ${colors.lightBg} overflow-hidden transition-all duration-300 group-hover:border-white/40`}>
                    
                    {/* LOGO AU CENTRE (remplace l'icône) */}
                    <div className={`absolute inset-0 flex items-center justify-center ${colors.iconBg} p-2`}>
                      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Texte au survol */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                      <div className="text-center px-2">
                        <div className="text-xs font-bold text-white px-3 py-1.5 rounded-lg bg-black/70">
                          DÉTAILS
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Titre */}
                  <div className="mt-4 text-center">
                    <h3 className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {item.product}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL COMPACT AVEC SCROLL INTERNE */}
      <AnimatePresence>
        {isModalOpen && activeCert && (
          <>
            {/* Overlay flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50"
              onClick={closeModal}
            />

            {/* Modal container - Hauteur réduite */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300
                }}
                className="relative w-full max-w-md md:max-w-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const colors = colorConfig[activeCert.color];

                  return (
                    <div className="relative bg-gradient-to-br from-gray-900 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden max-h-[75vh]">
                      
                      {/* Bouton fermer - TOUJOURS VISIBLE */}
                      <button
                        onClick={closeModal}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 z-30 shadow-lg hover:scale-110"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>

                      {/* Contenu avec scroll interne */}
                      <div 
                        ref={contentRef}
                        className="overflow-y-auto h-full max-h-[65vh]"
                      >
                        <div className="p-5 md:p-6">
                          {/* En-tête compacte avec logo */}
                          <div className="flex items-start gap-4 mb-6">
                            <div className={`relative flex-shrink-0 ${colors.iconBg} p-2 rounded-xl`}>
                              <div className="w-14 h-14 flex items-center justify-center">
                                <img
                                  src={activeCert.img}
                                  alt={activeCert.name}
                                  className="w-12 h-12 object-contain"
                                />
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xl font-bold text-white mb-1 truncate">{activeCert.name}</h4>
                              <p className="text-gray-300 text-sm truncate">{activeCert.org}</p>
                              <div className="mt-2 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                <span className="text-xs text-gray-400">Produit :</span>
                                <span className="text-xs font-medium text-white truncate">{activeCert.product}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description compacte */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Award className={`w-5 h-5 ${colors.text}`} />
                              <h5 className="font-semibold text-white">Description</h5>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {activeCert.description}
                              </p>
                            </div>
                          </div>

                          {/* Avantages en liste simple */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <h5 className="font-semibold text-white">Avantages clés</h5>
                            </div>
                            <div className="space-y-2">
                              {activeCert.details.map((detail, idx) => (
                                <div
                                  key={idx}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${colors.bg} border ${colors.border}`}
                                >
                                  <div className={`w-2 h-2 rounded-full ${colors.text} mt-1.5 flex-shrink-0`} />
                                  <span className="text-gray-200 text-sm flex-1">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Footer fixe en bas */}
                          <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-gray-300">Certification active</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs text-emerald-400 font-medium">En vigueur</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bouton scroll vers le haut */}
                      {showScrollTop && (
                        <button
                          onClick={scrollToTop}
                          className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
                        >
                          <ChevronUp className="w-4 h-4 text-white" />
                        </button>
                      )}

                      {/* Indicateur de scroll */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-center mt-12 text-gray-400 text-sm max-w-2xl py-8 px-4"
      >
        <p>Cliquez sur une certification pour voir les détails complets</p>
      </motion.div>
    </section>
  );
}