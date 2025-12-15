import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Artists', path: '/artists' },
    { name: 'DigiMela', path: '/digimela' },
    { name: 'Gurukul', path: '/gurukul' },
    { name: 'About', path: '/about' },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-bg-paper/95 backdrop-blur-md py-4 border-b border-mud/10'
        : 'bg-transparent py-8 border-transparent'
      }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-2xl font-heading font-bold text-mud tracking-tighter group">
          <div className="w-10 h-10 bg-mangrove rounded-full flex items-center justify-center text-tiger group-hover:scale-110 transition-transform duration-300">
            <Music size={20} />
          </div>
          <span>Sundargaan</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-heading font-medium tracking-wide uppercase text-sm relative transition-colors duration-300 ${isActive(link.path) ? 'text-mangrove' : 'text-text-primary hover:text-mangrove'
                }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-tiger rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-mud hover:text-mangrove transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-paper p-8 border-b border-clay shadow-deep flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-heading font-semibold text-center transition-colors ${isActive(link.path) ? 'text-mangrove' : 'text-text-primary hover:text-mangrove'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

