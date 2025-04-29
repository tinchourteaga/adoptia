import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="relative flex">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full w-full">
                <div className="bg-3B7FD9 rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('howItWorks.step1.title')}</h3>
                <p className="text-gray-700 text-center">
                  {t('howItWorks.step1.description')}
                </p>
              </div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <ArrowRight size={24} className="text-3B7FD9" />
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full w-full">
                <div className="bg-3B7FD9 rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('howItWorks.step2.title')}</h3>
                <p className="text-gray-700 text-center">
                  {t('howItWorks.step2.description')}
                </p>
              </div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <ArrowRight size={24} className="text-3B7FD9" />
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full w-full">
                <div className="bg-3B7FD9 rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('howItWorks.step3.title')}</h3>
                <p className="text-gray-700 text-center">
                  {t('howItWorks.step3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;