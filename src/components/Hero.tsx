import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Filter for #AF8954
const logoFilter = 'brightness(0) saturate(100%) invert(63%) sepia(14%) saturate(1111%) hue-rotate(356deg) brightness(94%) contrast(86%)';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[100svh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/80 to-primary-dark/70" />
      </div>
      
      <div className="relative min-h-[100svh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20 md:py-0">
          <div className="flex items-center gap-1 mb-8 animate-fade-in">
            <div className="luxury-border rounded-full">
              <div className="bg-primary-dark/90 p-3 sm:p-4 rounded-full">
                <img 
                  src="https://i.postimg.cc/JtL7YJdj/Logo-camel-sin-texto-ni-fondo.png" 
                  alt="ImportHunt Mascot" 
                  className="h-14 w-14 sm:h-20 sm:w-20 object-contain"
                  style={{ filter: logoFilter }}
                />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/GtR6ZQd3/Logo-camel-sin-fondo-copy.png" 
                alt="ImportHunt" 
                className="h-16 sm:h-24 object-contain -ml-2"
                style={{ filter: logoFilter }}
              />
              <div className="absolute inset-0 blur-xl opacity-20">
                <img 
                  src="https://i.postimg.cc/GtR6ZQd3/Logo-camel-sin-fondo-copy.png" 
                  alt=""
                  className="h-16 sm:h-24 object-contain -ml-2"
                  style={{ filter: logoFilter }}
                />
              </div>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl md:text-5xl font-medium mb-6 sm:mb-8 text-primary-gold animate-slide-up leading-tight">
            {t('hero.slogan')}
          </p>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl text-gray-200 animate-fade-in-delay leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 animate-fade-in-delay-2">
            <div className="luxury-border rounded-xl w-full sm:w-auto">
              <a 
                href="#services"
                className="bg-primary-dark text-primary-gold px-8 sm:px-12 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group font-medium text-base sm:text-lg hover:bg-primary-dark/80 w-full sm:w-auto"
              >
                {t('hero.discover')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="luxury-border rounded-xl w-full sm:w-auto">
              <a 
                href="#contact"
                className="bg-primary-dark text-primary-gold px-8 sm:px-12 py-4 sm:py-5 rounded-xl flex items-center justify-center transition-colors font-medium text-base sm:text-lg hover:bg-primary-dark/80 w-full sm:w-auto"
              >
                {t('hero.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}