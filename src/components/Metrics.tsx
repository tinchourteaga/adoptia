import React from 'react';
import { Heart, Building2, Wand2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Metrics: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-3">{t('metrics.adoptions.number')}</div>
              <h4 className="text-2xl font-bold text-white">{t('metrics.adoptions.title')}</h4>
              <p className="text-blue-100 font-medium">{t('metrics.adoptions.subtitle')}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-6">
                <Wand2 size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-3">{t('metrics.compatibility.number')}</div>
              <h4 className="text-2xl font-bold text-white">{t('metrics.compatibility.title')}</h4>
              <p className="text-blue-100 font-medium">{t('metrics.compatibility.subtitle')}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-6">
                <Building2 size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-3">{t('metrics.shelters.number')}</div>
              <h4 className="text-2xl font-bold text-white">{t('metrics.shelters.title')}</h4>
              <p className="text-blue-100 font-medium">{t('metrics.shelters.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;