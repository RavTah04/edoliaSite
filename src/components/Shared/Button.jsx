import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  iconPosition = 'right',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-700 shadow-md hover:shadow-lg focus:ring-primary',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
    outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:border-primary hover:text-primary focus:ring-primary',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="mr-2 w-5 h-5" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="ml-2 w-5 h-5" />
      )}
      {!Icon && variant === 'primary' && (
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;