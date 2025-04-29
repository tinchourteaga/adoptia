import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n';
import { useLocation } from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
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
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className={`bg-transparent text-sm font-medium focus:outline-none cursor-pointer transition duration-300 ${
        scrolled || !isHome ? 'text-gray-800' : 'text-white'
      }`}
    >
      <option value="en" className="text-gray-800">EN</option>
      <option value="es" className="text-gray-800">ES</option>
    </select>
  );
};

export default LanguageSelector;