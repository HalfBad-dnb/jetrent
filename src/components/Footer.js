import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWater, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
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
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
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
            <span>JET ADVENTURES</span>
          </Logo>
          <FooterText>
            Experience the ultimate thrill on the water with our premium jet ski rentals. 
            Established in 2010, we've been providing unforgettable water adventures.
          </FooterText>
          <SocialLinks>
            <SocialLink 
              href="https://facebook.com" 
              whileHover={{ scale: 1.1, backgroundColor: '#3b5998' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              whileHover={{ scale: 1.1, backgroundColor: '#1da1f2' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink 
              href="https://instagram.com" 
              whileHover={{ scale: 1.1, backgroundColor: '#e1306c' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink 
              href="https://youtube.com" 
              whileHover={{ scale: 1.1, backgroundColor: '#ff0000' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/">Home</a></FooterLink>
            <FooterLink><a href="#fleet">Our Fleet</a></FooterLink>
            <FooterLink><a href="#pricing">Pricing</a></FooterLink>
            <FooterLink><a href="#testimonials">Testimonials</a></FooterLink>
            <FooterLink><a href="#contact">Contact Us</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>Services</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/services/rentals">Jet Ski Rentals</a></FooterLink>
            <FooterLink><a href="/services/tours">Guided Tours</a></FooterLink>
            <FooterLink><a href="/services/events">Group Events</a></FooterLink>
            <FooterLink><a href="/services/training">Training Sessions</a></FooterLink>
            <FooterLink><a href="/services/corporate">Corporate Packages</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn
          variants={variants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FooterTitle>Contact Info</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>123 Beach Front, Coastal City, CA 94111</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>(555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@jetadventures.com</span>
            </ContactItem>
          </ContactInfo>
          <FooterText>
            <strong>Opening Hours:</strong><br />
            Mon-Fri: 9:00 AM - 6:00 PM<br />
            Weekends: 8:00 AM - 8:00 PM
          </FooterText>
        </FooterColumn>
      </FooterTop>
      
      <FooterBottom>
        <Copyright>
          © {currentYear} Jet Adventures. All rights reserved.
        </Copyright>
        
        <FooterNav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
          <a href="/faq">FAQ</a>
        </FooterNav>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
