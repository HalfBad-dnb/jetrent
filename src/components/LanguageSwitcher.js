import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: ${props => props.isActive ? '#FF9500' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#ccc'};
  border: ${props => props.isActive ? 'none' : '1px solid #ccc'};
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isActive ? '#FF9500' : 'rgba(255, 149, 0, 0.2)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton 
        isActive={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        {t('language.en')}
      </LanguageButton>
      <LanguageButton 
        isActive={i18n.language === 'lt'} 
        onClick={() => changeLanguage('lt')}
      >
        {t('language.lt')}
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
