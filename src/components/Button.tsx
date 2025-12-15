import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  className = '',
  style,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer no-underline gap-2";

  const variants = {
    primary: "bg-mud text-bg-paper border border-mud hover:bg-mud/90",
    secondary: "bg-mangrove text-bg-paper border border-mangrove hover:bg-mangrove/90",
    outline: "bg-transparent text-mud border border-mud hover:bg-mud hover:text-bg-paper",
    ghost: "bg-transparent text-mud border border-transparent hover:bg-mud/10"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;

