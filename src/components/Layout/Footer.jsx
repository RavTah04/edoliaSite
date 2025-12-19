import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const productLinks = [
      {name: 'Vanille', slug: 'vanille' },
      {name: 'Litchis de Madagascar', slug: 'litchis' },
      { name: 'Riz hybride', slug: 'riz-hybride' },
      { name: 'Girofle de Madagascar', slug: 'clou-de-girofle' },
      { name: 'Miel', slug: 'miel' },
      { name: 'Fertilisants Naturels', slug: 'fertilisant' },
    ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Leaf className="text-primary" size={28} /> */}
              <div className="w-20 flex items-center justify-center">
                <img src="/logo-edolia.png" alt="edolia" />
              </div>
              {/* <h3 className="text-1xl font-bold text-white">
                edolia
              </h3> */}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fournisseur premium de produits naturels biologiques de Madagascar, 
              engagé en faveur d'une agriculture durable et du commerce équitable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Nos Produits', 'À Propos', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Accueil' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors inline-block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Produits</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.slug ? `/produits/${product.slug}` : '/produits'}
                    className="text-gray-400 hover:text-primary transition-colors inline-block py-1"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">
                  Immeuble STOI Ankorondrano Village des jeux,<br />
                  Antananarivo 101, Madagascar
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={18} />
                <a href="tel:+261384214866" className="text-gray-400 hover:text-primary transition-colors">
                  +261 38 42 148 66
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={18} />
                <a href="mailto:contact@edolia-mada.com?subject=Demande%20d'information&body=Bonjour,%0A%0AJe%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.%0A%0ACordialement,"
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 group"
                    > contact@edolia-mada.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Edolia. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Conditions générales
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center mt-4">
            Certification biologique • Commerce équitable • Emballages écologiques
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;