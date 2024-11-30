import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-16 bg-primary-dark text-white relative">
      <div className="absolute inset-0 bg-gradient-luxury opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="luxury-border rounded-full">
              <div className="bg-primary-dark px-6 py-1.5 rounded-full">
                <span className="text-primary-gold uppercase tracking-[0.2em] text-sm font-semibold">
                  {t('contact.title')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="luxury-border rounded-xl">
              <div className="glass-effect p-4 sm:p-6 rounded-xl space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 sm:p-3 bg-primary-gold/10 rounded-lg">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Phone</p>
                    <p className="text-sm sm:text-base text-primary-gold">+34 648 53 44 36</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 sm:p-3 bg-primary-gold/10 rounded-lg">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Email</p>
                    <p className="text-sm sm:text-base text-primary-gold break-all">operations@importhunt.es</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="luxury-border rounded-xl">
              <form className="glass-effect p-4 sm:p-6 rounded-xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('contact.name')}
                    className="luxury-input col-span-1 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder={t('contact.email')}
                    className="luxury-input col-span-1 text-sm sm:text-base"
                  />
                </div>
                <textarea
                  placeholder={t('contact.message')}
                  rows={4}
                  className="luxury-input w-full resize-none text-sm sm:text-base"
                ></textarea>
                <div className="luxury-border rounded-lg w-full">
                  <button
                    type="submit"
                    className="w-full bg-primary-dark text-primary-gold py-3 rounded-lg hover:bg-primary-dark/80 transition-colors font-medium text-sm sm:text-base"
                  >
                    {t('contact.send')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}