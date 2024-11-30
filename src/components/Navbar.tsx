import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

// Filter for #AF8954
const logoFilter = 'brightness(0) saturate(100%) invert(63%) sepia(14%) saturate(1111%) hue-rotate(356deg) brightness(94%) contrast(86%)';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-primary-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center -my-2">
            <img 
              src="https://i.postimg.cc/JtL7YJdj/Logo-camel-sin-texto-ni-fondo.png" 
              alt="ImportHunt Mascot" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              style={{ filter: logoFilter }}
            />
            <img 
              src="https://i.postimg.cc/GtR6ZQd3/Logo-camel-sin-fondo-copy.png" 
              alt="ImportHunt" 
              className="h-5 sm:h-6 object-contain -ml-1"
              style={{ filter: logoFilter }}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-sm text-white hover:text-primary-gold transition-colors">
                {t('nav.services')}
              </a>
              <a href="#contact" className="text-sm text-white hover:text-primary-gold transition-colors">
                {t('nav.contact')}
              </a>
            </div>
            
            <LanguageToggle />
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-primary-dark/95 backdrop-blur-sm border-t border-primary-gold/10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="#services" 
              className="block px-3 py-2 text-base text-white hover:bg-primary-dark/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base text-white hover:bg-primary-dark/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}