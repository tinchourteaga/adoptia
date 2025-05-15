import React from 'react';
import { companyValues } from '../data';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'heart':
      return <Heart size={24} className="text-3B7FD9" />;
    case 'shield':
      return <Shield size={24} className="text-3B7FD9" />;
    case 'sparkles':
      return <Sparkles size={24} className="text-3B7FD9" />;
    case 'users':
      return <Users size={24} className="text-3B7FD9" />;
    default:
      return <Heart size={24} className="text-3B7FD9" />;
  }
};

const Mission: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('mission.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('mission.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {companyValues.map((value, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {getIcon(value.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t(value.title)}</h3>
              <p className="text-gray-700">{t(value.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;