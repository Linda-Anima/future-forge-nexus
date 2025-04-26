import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sharkoo', href: '/sharkoo' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-montserrat font-bold text-xl text-blue-700">
            Elevate<span className="text-blue-500">IO</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-700 hover:bg-blue-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-blue-700 hover:bg-blue-600 text-white w-full">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
