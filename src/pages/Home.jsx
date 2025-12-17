import Hero from '../components/Home/Hero';
import Products from '../components/Home/Products';
import Features from '../components/Home/Features';
import { Link } from 'react-router-dom';
import { Mail, Phone, Calendar, Globe, Shield,CheckCircle, Award } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      {/* Section "Découvrez Nos Produits Certifiés" */}
            <section className=" bg-neutral-950 text-white">
              <div className="section-padding">
                {/* Certification marquee */}
                <div className="animate-fade-in">
                  <div className="cert-marquee marquee" role="region" aria-label="Certification message en défilement" tabIndex={0}>
                    <div className="marquee-track">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="marquee-item cert-marquee-item">
                          <span className="font-semibold">Nos produits sont certifiés par <span className="text-red-400">Ecocert</span>, agriculture biologique</span>
                          <span>Cette certification garantit que nos produits sont cultivés et produits selon des méthodes durables et respectueuses de l’environnement, répondant aux normes les plus élevées en matière de qualité et de sécurité alimentaire.</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
      {/* Section "Pourquoi choisir Edolia" — design révisé (deux colonnes) */}
            <section className="relative z-20 bg-neutral-950 text-white">
              <div className="section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  {/* Texte et points clefs */}
                  <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                      Pourquoi choisir <span className="text-red-600">Edolia</span>?
                    </h2>
                    <p className="text-lg max-w-2xl mb-6">
                      Nous combinons expertise technique, contrôle qualité et logistique maîtrisée pour offrir
                      des produits agricoles certifiés, traçables et adaptés à vos marchés.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-md">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Qualité Certifiée</h4>
                          <p className="text-sm">Normes internationales et contrôle rigoureux.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Traçabilité Totale</h4>
                          <p className="text-sm">Suivi complet de la production à la livraison.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Solutions Durables</h4>
                          <p className="text-sm">Approche responsable et relation long terme.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white shadow-md">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Confiance & Service</h4>
                          <p className="text-sm">Support dédié et engagements clairs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link to="/a-propos" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-colors">
                        Découvrir EDOLIA
                      </Link>
                    </div>

                  </div>

                  {/* Image / visuel à droite */}
                  <div className="relative animate-slide-up-fade">
                    <div>
                      <img src="mes-produits-exporter.png" alt="Logistique et qualité" loading="lazy" className="w-full h-100 object-cover" />
                    </div>

                    {/* Decoration */}
                    <div className="pointer-events-none absolute -left-6 -bottom-6 w-40 h-40 rounded-xl bg-red-600/8 blur-3xl" />
                    <div className="pointer-events-none absolute -right-8 top-6 w-36 h-36 rounded-xl bg-amber-400/6 blur-3xl" />
                  </div>
                </div>
              </div>
            </section>
            
            <Features />
            
              {/* Section Contact */}
            <section className="py-10 bg-neutral-950 text-white">
              <div className="section-padding">
                <div className="mt-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-8 shadow-xl animate-scale-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Besoin d'un devis rapide ou d'informations ?
                      </h3>
                      <p className="text-red-100 leading-relaxed">
                        Contactez-nous pour évaluer vos besoins et établir une proposition sur mesure
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Email direct</p>
                          <p className="font-bold text-gray-900">contact@edolia-mada.com</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Téléphone</p>
                          <a 
                            href="tel:+261384214866"
                            className="font-bold text-gray-900 hover:text-red-400 transition-colors text-lg"
                          >
                            +261 38 42 148 66
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Prendre contact avec nos équipes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
      
    </>
  );
};

export default Home;