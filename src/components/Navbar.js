import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

const Nav = styled(m.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${({ isScrolled }) => isScrolled ? 'rgba(3, 150, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(10px)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  a {
    color: white;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF9500;
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
    order: 3;
    margin-left: auto;
  }
`;

const LocationText = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`;

const LocationIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF9500;
  }
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  font-size: 1.2rem;
`;

const LanguageSwitcherWrapper = styled.div`
  margin-left: auto;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const MenuItems = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(m.div)`
  color: white;
  margin-left: 2rem;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }

  &.hover {
    scale: 1.05;
  }

  &.tap {
    scale: 0.95;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    margin-left: auto;
  }
  
  @media (max-width: 480px) {
    width: 26px;
    height: 18px;
  }
`;

const MenuLine = styled(m.div)`
  width: 100%;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const MobileMenu = styled(m.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: #0396FF;
    padding: 1rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  
  @media (max-width: 480px) {
    top: 65px;
    padding: 0.75rem 0;
  }
`;

const MobileMenuItem = styled(m.div)`
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }

  &.hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const scrollToSection = (sectionId) => {
  const element = document.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: t('navbar.home'), link: '#' },
    { name: t('navbar.fleet'), link: '#fleet' },
    { name: t('navbar.map'), link: '#map' },
    { name: t('navbar.testimonials'), link: '#testimonials' },
    { name: t('navbar.contact'), link: '#contact' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      } 
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      } 
    }
  };

  return (
    <>
      <Nav 
        className={isScrolled ? 'scrolled' : ''}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <NavbarContainer>
          <MenuItems>
            <MenuItem
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('hero')}
            >
              {t('navbar.home')}
            </MenuItem>
            <MenuItem
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('fleet')}
            >
              {t('navbar.fleet')}
            </MenuItem>
            <MenuItem
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('testimonials')}
            >
              {t('navbar.testimonials')}
            </MenuItem>
            <MenuItem
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('contact')}
            >
              {t('navbar.contact')}
            </MenuItem>
          </MenuItems>
          <LanguageSwitcherWrapper>
            <LanguageSwitcher />
          </LanguageSwitcherWrapper>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
              <FaInstagram size={20} />
            </a>
          </SocialIcons>
          <LocationIndicator 
            style={{ order: 4 }}
            onClick={() => scrollToSection('map')}
            cursor="pointer"
          >
            <LocationIcon />
            <LocationText>{t('location')}</LocationText>
          </LocationIndicator>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <MenuLine animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 9 : 0 }} />
            <MenuLine animate={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <MenuLine animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -9 : 0 }} />
          </MobileMenuButton>
        </NavbarContainer>
      </Nav>
      
      <MobileMenu
          variants={mobileMenuVariants}
          initial="hidden"
          animate={mobileMenuOpen ? "visible" : "hidden"}
        >
          {menuItems.map((item, index) => (
            <MobileMenuItem 
              key={index}
              className="hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                if (item.link === '#') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const element = document.querySelector(item.link);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
                setMobileMenuOpen(false);
              }}
            >
              <a href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.name}
              </a>
            </MobileMenuItem>
          ))}
          <MobileMenuItem 
            className="hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontWeight: '700', color: '#FF9500' }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
              setMobileMenuOpen(false);
            }}
          >
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t('hero.button')}
            </a>
          </MobileMenuItem>
        </MobileMenu>
    </>
  );
};

export default Navbar;
