import { Shield, Target, Users, TrendingUp, CheckCircle, Award } from 'lucide-react';
import ScrollObserver from '../ScrollObserver';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Qualité & Authenticité',
      description: 'Sélection rigoureuse des produits et contrôle constant de la qualité à chaque étape de production.',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Target,
      title: 'Transparence & Traçabilité',
      description: 'Chaîne d’approvisionnement entièrement maîtrisée, du producteur au client final.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Durabilité & Impact local',
      description: 'Contribution au développement des communautés agricoles et préservation des savoir-faire traditionnels.',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Ambition & Innovation',
      description: 'Vision stratégique combinée à l innovation pour répondre aux besoins du marché international.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Fiabilité & Excellence',
      description: 'Entreprise moderne adossée à 20 ans d expérience via le groupe STOI.',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Award,
      title: 'Expertise & Partenariat',
      description: 'Relation de confiance avec nos partenaires pour des collaborations durables et réussies.',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <ScrollObserver>
      <section className="py-20 bg-neutral-950 text-white overflow-hidden">
        <div className="section-padding">
          {/* Header mis à jour */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
              Ce qui fait <span className="text-red-400 font-semibold">Notre Différence</span>
            </h2>

            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Des principes solides qui guident chaque décision et action dans notre chaîne de valeur.
            </p>
          </div>

          {/* Reel-style features (horizontal, autoplay, visible without vertical scroll) */}
          <div className="relative">
            <div className="reel" aria-hidden="false">
              <div className="reel-track">
                {features.concat(features).map((feature, index) => (
                  <div key={`f-${index}`} className="reel-item group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transform-gpu transition-transform duration-500 group-hover:scale-105`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 max-w-[18rem] leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient edges to mask reel */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent" />
          </div>

          {/* Stats row compact */}
          <div className="mt-12">
            <div className="flex justify-center gap-12 items-center flex-wrap">
              {[{ value: '20', label: "Ans d'Expérience", suffix: '+' }, { value: '50+', label: 'Partenaires', suffix: '' }, { value: '100%', label: 'Traçabilité', suffix: '' }, { value: '24/7', label: 'Support Client', suffix: '' }].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                    <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">{stat.value}</span>{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                <span className="text-red-400 font-semibold">EDOLIA</span> - Une expertise au service de l'excellence agricole et de la distribution internationale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollObserver>
  );
};

export default Features;