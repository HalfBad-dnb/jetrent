import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin: 0 auto 2rem;
  color: #FF9500;
  position: relative;
  display: block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 90%;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
  padding: 0 1rem;
  
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

  @media (max-width: 992px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
  }
`;

const ContactInfo = styled.div`
  padding: 3rem 2.5rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  
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
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #FF9500;
  position: relative;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const ContactInfoText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  margin: 0 auto 2.5rem;
  position: relative;
  max-width: 90%;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  
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

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.25rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  margin: 0 auto 1.25rem;
  max-width: 450px;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  
  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
    gap: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const ContactItemText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  word-break: break-all;
  display: inline-block;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    word-break: break-word;
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
          <SectionTitle>{t('contact.title', 'Contact Us').toUpperCase()}</SectionTitle>
          
          <Container>
            <ContactInfo>
              <ContactInfoTitle>{t('contact.infoTitle', 'Get in Touch')}</ContactInfoTitle>
              <ContactInfoText>{t('contact.infoText', 'We would love to hear from you! Whether you have questions about our services, want to make a reservation, or just want to say hello, please feel free to contact us.')}</ContactInfoText>
              
              <ContactDetails>
                <ContactItem 
                  as="a"
                  href="tel:+37061470086"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhone />
                  <ContactItemText>+370 614 70086</ContactItemText>
                </ContactItem>
                
                <ContactItem
                  as="a"
                  href="mailto:info@jetrent.lt"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEnvelope />
                  <ContactItemText>info@jetrent.lt</ContactItemText>
                </ContactItem>
              </ContactDetails>
              
              <ContactDetails>
                <ContactItem 
                  as="a"
                  href="https://facebook.com/tadas.rudzinskis"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFacebook />
                  <ContactItemText>T-Jet-Rent</ContactItemText>
                </ContactItem>
                
                <ContactItem
                  as="a"
                  href="https://instagram.com/tadas_greitai?locale=en%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaInstagram />
                  <ContactItemText>tadas_jet_rent</ContactItemText>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>
          </Container>
        </motion.div>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;