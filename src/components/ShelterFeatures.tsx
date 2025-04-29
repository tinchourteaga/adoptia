import React from 'react';
import { ClipboardList, Users, LineChart, MessageSquare, Bell, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const ShelterFeatures: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('shelterFeatures.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('shelterFeatures.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <ClipboardList size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.management.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.management.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Users size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.matching.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.matching.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <LineChart size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.analytics.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.analytics.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <MessageSquare size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.communication.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.communication.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Bell size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.alerts.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.alerts.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Calendar size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('shelterFeatures.events.title')}</h3>
            <p className="text-gray-700">
              {t('shelterFeatures.events.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShelterFeatures;