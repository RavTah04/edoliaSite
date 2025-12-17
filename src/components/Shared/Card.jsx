const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        ${hover ? 'transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;