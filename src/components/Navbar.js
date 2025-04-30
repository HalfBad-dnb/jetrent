import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: ${({ scrolled }) => scrolled ? 'rgba(3, 150, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  
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
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

// Logo container removed

// LogoImage component removed as we're using SVG logo now

const MenuItems = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.a)`
  color: white;
  margin-left: 2rem;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
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
  }
  
  @media (max-width: 480px) {
    width: 26px;
    height: 18px;
  }
`;

const MenuLine = styled(motion.div)`
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 5px;
`;

const MobileMenu = styled(motion.div)`
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
  }
  
  @media (max-width: 480px) {
    top: 65px;
    padding: 0.75rem 0;
  }
`;

const MobileMenuItem = styled(motion.a)`
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
  
  @media (max-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const BookNowButton = styled(motion.button)`
  background-color: #FF9500;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 2rem;
  box-shadow: 0 5px 15px rgba(255, 149, 0, 0.3);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
        scrolled={scrolled}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo removed */}
        
        <MenuItems>
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (item.link === '#') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {item.name}
            </MenuItem>
          ))}
          <BookNowButton
            as="a"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.button')}
          </BookNowButton>
        </MenuItems>
        
        <NavbarContainer>
          <LanguageSwitcher />
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
              as="div"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
              {item.name}
            </MobileMenuItem>
          ))}
          <MobileMenuItem 
            as="div"
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            style={{ fontWeight: '700', color: '#FF9500' }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
              setMobileMenuOpen(false);
            }}
          >
            {t('hero.button')}
          </MobileMenuItem>
        </MobileMenu>
    </>
  );
};

export default Navbar;
