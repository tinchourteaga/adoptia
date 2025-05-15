import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Adoptia</h3>
            <p className="text-gray-400 mb-6 max-w-xs">
            {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.about')}</a></li>
              <li><a href="#mission" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.mission')}</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.team')}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.testimonials')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">{t('footer.quickLinks.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.resources.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.resources.guide')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.resources.faq')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.resources.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.resources.support')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">{t('footer.resources.partners')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">
            {t('footer.newsletter.description')}
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-3B7FD9"
              />
              <button
                type="submit"
                className="w-full bg-3B7FD9 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition duration-300"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition duration-300">{t('footer.policies.privacy')}</a>
              <a href="#" className="hover:text-white transition duration-300">{t('footer.policies.terms')}</a>
              <a href="#" className="hover:text-white transition duration-300">{t('footer.policies.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;