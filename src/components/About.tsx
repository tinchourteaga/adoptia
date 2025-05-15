import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const About: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-3B7FD9/20 to-1AC0C6/20 rounded-xl transform -rotate-2"></div>
              <img 
                src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy dog with adopter" 
                className="rounded-xl shadow-lg relative z-10 w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.story.content1')}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.story.content2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('about.story.content3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;