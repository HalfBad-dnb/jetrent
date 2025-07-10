import React from 'react';
import { useTranslation } from 'react-i18next';
import './Styles/Navbar.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`language-option ${i18n.language === 'lt' ? 'active' : ''}`}
        onClick={() => changeLanguage('lt')}
      >
        LT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
