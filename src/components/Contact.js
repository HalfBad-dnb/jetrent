import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin: 0 auto 3rem;
  color: #ffffff;
  position: relative;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 90%;
  display: block;
  left: auto;
  transform: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #0396FF, #0D47A1);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding: 0 10px;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #0396FF 0%, #0D47A1 100%);
  border-radius: 15px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(13, 71, 161, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/wave-pattern.png');
    opacity: 0.05;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const ContactInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const ContactDetails = styled.div`
  position: relative;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const ContactItemText = styled.span`
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    word-break: break-word;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #FF9500;
  }
`;

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2
      } 
    }
  }
};

const ContactContainer = styled.div`
  position: relative;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer id="contact">
      <ContactSection>
        <motion.div 
          variants={variants.container}
          initial="hidden"
          animate="visible"
        >
          <SectionTitle>{t('contact.title', 'Contact Us')}</SectionTitle>
          
          <Container>
            <ContactInfo>
              <ContactInfoTitle>{t('contact.infoTitle', 'Get in Touch')}</ContactInfoTitle>
              <ContactInfoText>{t('contact.infoText', 'We would love to hear from you! Whether you have questions about our services, want to make a reservation, or just want to say hello, please feel free to contact us.')}</ContactInfoText>
              
              <ContactDetails>
                <ContactItem
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaMapMarkerAlt />
                  <ContactItemText>Kuršių marios, Kuršmarės, seniau vadintos Prūsų jūra</ContactItemText>
                </ContactItem>
                
                <ContactItem
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  <ContactItemText>+370 600 00000</ContactItemText>
                </ContactItem>
                
                <ContactItem
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  <ContactItemText>info@jetrent.lt</ContactItemText>
                </ContactItem>
              </ContactDetails>
              
              <SocialLinks>
                <SocialLink
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </SocialLink>
                
                <SocialLink
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </SocialLink>
              </SocialLinks>
            </ContactInfo>
          </Container>
        </motion.div>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;