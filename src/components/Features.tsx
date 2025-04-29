import React from 'react';
import { Bot, Search, MessageSquare, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Features: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Bot size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.ai.title')}</h3>
            <p className="text-gray-700">
              {t('features.ai.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <Search size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.search.title')}</h3>
            <p className="text-gray-700">
              {t('features.search.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <MessageSquare size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.connection.title')}</h3>
            <p className="text-gray-700">
              {t('features.connection.description')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-3B7FD9" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.resources.title')}</h3>
            <p className="text-gray-700">
              {t('features.resources.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;