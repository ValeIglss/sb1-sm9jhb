import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.slogan': 'You hunt, we bring it home',
    'hero.subtitle': 'Exceptional handling of hunting trophies with worldwide expertise',
    'hero.discover': 'Discover Our Services',
    'hero.contact': 'Contact Us',
    'services.title': 'Premium Services',
    'services.subtitle': 'Unparalleled expertise in handling hunting trophies with precision',
    'services.exceptional': 'Exceptional Service',
    'services.request': 'Begin Your Experience',
    'process.title': 'Our Process',
    'process.subtitle': 'A refined approach ensuring your trophies receive the best treatment they deserve',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'hero.slogan': 'Tú cazas, nosotros te lo traemos',
    'hero.subtitle': 'Gestión excepcional de trofeos de caza con experiencia internacional',
    'hero.discover': 'Descubre nuestros servicios',
    'hero.contact': 'Contactar',
    'services.title': 'Servicios Premium',
    'services.subtitle': 'Experiencia inigualable en la gestión de trofeos de caza con precisión',
    'services.exceptional': 'Servicio Excepcional',
    'services.request': 'Inicia tu Experiencia',
    'process.title': 'Nuestro Proceso',
    'process.subtitle': 'Un enfoque refinado que garantiza que tus trofeos reciban el tratamiento exclusivo que se merecen',
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}