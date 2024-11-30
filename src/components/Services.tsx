import React from 'react';
import { Trophy, FileCheck, Scale, Plane, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, language } = useLanguage();
  
  const services = {
    en: [
      {
        icon: <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Elite Trophy Handling",
        description: "Bespoke import/export services with meticulous attention to detail and white-glove treatment for your prestigious trophies",
        highlight: "Exclusive Service"
      },
      {
        icon: <FileCheck className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Premier Documentation",
        description: "Comprehensive management of CITES permits and customs clearance, handled by our expert team of international trade specialists",
        highlight: "Expert Processing"
      },
      {
        icon: <Scale className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Regulatory Excellence",
        description: "Impeccable compliance with international regulations, ensuring smooth and legitimate trophy transportation",
        highlight: "Full Compliance"
      },
      {
        icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Secure Transport",
        description: "State-of-the-art security measures and premium insurance coverage for complete peace of mind",
        highlight: "Maximum Protection"
      },
      {
        icon: <Plane className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Global Reach",
        description: "Worldwide premium shipping network with dedicated handlers ensuring your trophy's safe journey",
        highlight: "International Service"
      },
      {
        icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Concierge Support",
        description: "24/7 dedicated concierge service providing real-time updates and personalized assistance",
        highlight: "Always Available"
      }
    ],
    es: [
      {
        icon: <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Gestión Élite de Trofeos",
        description: "Servicios personalizados de importación/exportación con meticulosa atención al detalle y trato exclusivo para sus trofeos prestigiosos",
        highlight: "Servicio Exclusivo"
      },
      {
        icon: <FileCheck className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Documentación Premium",
        description: "Gestión integral de permisos CITES y despacho aduanero, a cargo de nuestro equipo experto de especialistas en comercio internacional",
        highlight: "Proceso Experto"
      },
      {
        icon: <Scale className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Excelencia Regulatoria",
        description: "Cumplimiento impecable con las normativas internacionales, garantizando un transporte fluido y legítimo de trofeos",
        highlight: "Cumplimiento Total"
      },
      {
        icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Transporte Seguro",
        description: "Medidas de seguridad de última generación y cobertura de seguro premium para una total tranquilidad",
        highlight: "Máxima Protección"
      },
      {
        icon: <Plane className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Alcance Global",
        description: "Red de envío premium a nivel mundial con gestores dedicados que garantizan el viaje seguro de su trofeo",
        highlight: "Servicio Internacional"
      },
      {
        icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Soporte de Concierge",
        description: "Servicio de concierge dedicado 24/7 que ofrece actualizaciones en tiempo real y asistencia personalizada",
        highlight: "Siempre Disponible"
      }
    ]
  };

  const currentServices = services[language];

  return (
    <section id="services" className="py-16 sm:py-24 bg-primary-dark/95 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark to-primary-dark" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="luxury-border rounded-full">
              <div className="bg-primary-dark px-6 sm:px-8 py-1.5 sm:py-2 rounded-full">
                <span className="text-primary-gold uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
                  {t('services.exceptional')}
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium mb-6 sm:mb-8">{t('services.title')}</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentServices.map((service, index) => (
            <div key={index} className="luxury-border rounded-xl">
              <div className="glass-effect p-6 sm:p-8 rounded-xl h-full">
                <div className="mb-6 text-primary-gold transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-xs font-semibold tracking-wider text-primary-gold/80 mb-2 block uppercase">
                  {service.highlight}
                </span>
                <h3 className="text-xl sm:text-2xl font-medium mb-4 text-primary-gold">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="luxury-border inline-block rounded-xl w-full sm:w-auto">
            <a 
              href="#contact"
              className="flex justify-center items-center px-8 sm:px-12 py-4 sm:py-5 bg-primary-dark text-primary-gold rounded-xl font-medium text-lg hover:bg-primary-dark/80 transition-colors w-full sm:w-auto"
            >
              {t('services.request')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}