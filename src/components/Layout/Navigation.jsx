import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { label: 'Accueil', path: '/' },
    // { label: 'Produits', path: '/produits' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className="nav-link text-lg"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;