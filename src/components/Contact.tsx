import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-3B7FD9 focus:border-3B7FD9 transition duration-200"
                      placeholder={t('contact.form.placeholder.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-3B7FD9 focus:border-3B7FD9 transition duration-200"
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-3B7FD9 focus:border-3B7FD9 transition duration-200"
                      placeholder={t('contact.form.placeholder.message')}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-3B7FD9 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition duration-300 flex items-center justify-center"
                  >
                    <span>{t('contact.form.submit')}</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-3B7FD9/10 rounded-full p-3 mr-4">
                    <Mail size={24} className="text-3B7FD9" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('contact.email.title')}</h4>
                    <p className="text-gray-700 mb-2">
                    {t('contact.email.subtitle')}
                    </p>
                    <a href="mailto:info@adoptia.org" className="text-3B7FD9 hover:underline">info@adoptia.org</a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-3B7FD9/10 rounded-full p-3 mr-4">
                    <MessageSquare size={24} className="text-3B7FD9" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('contact.chat.title')}</h4>
                    <p className="text-gray-700 mb-4">
                    {t('contact.chat.subtitle')}
                    </p>
                    <button className="bg-3B7FD9 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 text-sm transition duration-300">
                    {t('contact.chat.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;