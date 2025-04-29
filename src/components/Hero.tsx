import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute -top-80 -right-80 w-[800px] h-[800px] rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute -bottom-80 -left-80 w-[800px] h-[800px] rounded-full bg-teal-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 pt-20 md:pt-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up whitespace-pre-line">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl animate-fade-in-up animation-delay-200">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <button className="bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full px-8 py-3 transition duration-300 flex items-center">
                <span>{t('hero.findMatch')}</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="border border-white text-white hover:bg-white/10 font-medium rounded-full px-8 py-3 transition duration-300">
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 animate-fade-in-up animation-delay-600">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-2xl transform rotate-3"></div>
              <img 
                src="src/assets/couple_with_cat_2.png"
                alt="Happy adopted dog with family" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;