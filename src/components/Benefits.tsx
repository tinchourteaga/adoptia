import React from 'react';
import { Clock, Brain, Users, PawPrint } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Benefits: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('benefits.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-3B7FD9/20 transition-colors duration-300">
                <Clock size={32} className="text-3B7FD9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.saveTime.title')}</h3>
                <p className="text-gray-700">
                  {t('benefits.saveTime.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-3B7FD9/20 transition-colors duration-300">
                <Brain size={32} className="text-3B7FD9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.decision.title')}</h3>
                <p className="text-gray-700">
                  {t('benefits.decision.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-3B7FD9/20 transition-colors duration-300">
                <PawPrint size={32} className="text-3B7FD9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.match.title')}</h3>
                <p className="text-gray-700">
                  {t('benefits.match.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-3B7FD9/10 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-3B7FD9/20 transition-colors duration-300">
                <Users size={32} className="text-3B7FD9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.community.title')}</h3>
                <p className="text-gray-700">
                  {t('benefits.community.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-3B7FD9/20 to-1AC0C6/20 rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy people with their adopted pets" 
                className="rounded-xl shadow-lg relative z-10 w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;