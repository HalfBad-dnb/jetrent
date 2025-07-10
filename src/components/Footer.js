import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaWater, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  margin-top: 5rem;
  z-index: 1;
`;

const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 10px;
    font-size: 2rem;
    color: #FF9500;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #FF9500;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #FF9500;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s;
    display: inline-block;
    
    &:hover {
      color: #FF9500;
    }
    
    &::before {
      content: '›';
      margin-right: 8px;
      color: #FF9500;
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: #FF9500;
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const SocialIcon = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['whileHover', 'whileTap'].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);

  &.facebook {
    &:hover {
      background-color: #3b5998;
    }
  }

  &.twitter {
    &:hover {
      background-color: #1da1f2;
    }
  }

  &.instagram {
    &:hover {
      background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    }
  }

  &.youtube {
    &:hover {
      background-color: #ff0000;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const FooterNav = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
    
    &:hover {
      color: #FF9500;
    }
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5,
      } 
    })
  };

  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn
          variants={variants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Logo>
            <FaWater />
            <span>{t('hero.title').toUpperCase()}</span>
          </Logo>
          <FooterText>
            {t('footer.companyDescription', 'Experience the ultimate thrill on the water with our premium jet ski rentals. Established in 2010, we\'ve been providing unforgettable water adventures.')}
          </FooterText>
          <SocialLinks>
            <a href="https://www.facebook.com/profile.php?id=61576732776125" target="_blank" rel="noopener noreferrer">
              <SocialIcon 
                className="facebook" 
                whileHover={{ scale: 1.1, backgroundColor: '#3b5998' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaFacebookF />
              </SocialIcon>
            </a>
            <a href="https://www.instagram.com/tadas_jet_rent/" target="_blank" rel="noopener noreferrer">
              <SocialIcon 
                className="instagram" 
                whileHover={{ 
                  scale: 1.1, 
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' 
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaInstagram />
              </SocialIcon>
            </a>
            <a href="https://www.youtube.com/@T-Jet-Rent" target="_blank" rel="noopener noreferrer">
              <SocialIcon 
                className="youtube" 
                whileHover={{ scale: 1.1, backgroundColor: '#ff0000' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaYoutube />
              </SocialIcon>
            </a>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>{t('footer.quickLinks', 'Quick Links').toUpperCase()}</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/">{t('footer.home')}</a></FooterLink>
            <FooterLink><a href="#fleet">{t('footer.fleet')}</a></FooterLink>
            <FooterLink><a href="#contact">{t('footer.contact')}</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>{t('footer.services', 'SERVICES')}</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/activities">{t('footer.waterActivities')}</a></FooterLink>
            <FooterLink><a href="/rent">{t('footer.jetSkiRental')}</a></FooterLink>
            <FooterLink><a href="/travel">{t('footer.guidedTours')}</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>{t('footer.contactInfo', 'CONTACT INFO')}</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>{t('contact.location', 'Kuršių marios, Kuršmarės, seniau vadintos Prūsų jūra')}</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>{t('contact.phone', '+370 614 70086')}</span>
            </ContactItem>
          </ContactInfo>
        </FooterColumn>
      </FooterTop>
      
      <FooterBottom>
        <Copyright>
          &copy; {currentYear} Jet Adventures. {t('footer.rights')}
        </Copyright>
        
        <FooterNav>
          <a href="/privacy">{t('footer.privacy')}</a>
          <a href="/terms">{t('footer.terms')}</a>
          <a href="/cookies">{t('footer.cookies', 'Cookie Policy')}</a>
          <a href="/faq">{t('footer.faq')}</a>
        </FooterNav>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
