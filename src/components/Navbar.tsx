import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-3B7FD9 font-bold text-2xl">Adoptia</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href === '#' ? '/' : item.href}
              className={`text-sm font-medium transition duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-gray-800 hover:text-3B7FD9' : 'text-white hover:text-white/80'
              }`}
            >
              {t(`nav.${item.label.toLowerCase()}`)}
            </Link>
          ))}
          <LanguageSelector />
          <button className="bg-3B7FD9 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition duration-300 flex items-center">
            <LogIn size={16} className="mr-2" />
            {t('nav.signIn')}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition duration-300 ${
              scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-6 animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href === '#' ? '/' : item.href}
                className="text-gray-800 hover:text-3B7FD9 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.label.toLowerCase()}`)}
              </Link>
            ))}
            <button className="bg-3B7FD9 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-sm font-medium transition duration-300 flex items-center justify-center">
              <LogIn size={16} className="mr-2" />
              {t('nav.signIn')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;