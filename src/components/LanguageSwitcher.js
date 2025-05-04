import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const LanguageButton = styled.button.attrs({
  '$active': props => props.active
})`
  background: ${props => props.$active ? '#FF9500' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#ccc'};
  border: ${props => props.$active ? '2px solid #FF9500' : '1px solid #ccc'};
  padding: 2px 6px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: ${props => props.$active ? '600' : 'normal'};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? '#FF9500' : 'rgba(255, 149, 0, 0.2)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 2px 4px;
    border-radius: 12px;
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
        $active={i18n.language === 'en' ? 'true' : undefined} 
        onClick={() => changeLanguage('en')}
      >
        {t('language.en')}
      </LanguageButton>
      <LanguageButton 
        $active={i18n.language === 'lt' ? 'true' : undefined} 
        onClick={() => changeLanguage('lt')}
      >
        {t('language.lt')}
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
