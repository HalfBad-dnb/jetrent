import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: max(1rem, env(safe-area-inset-top)) max(1.5rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1.5rem, env(safe-area-inset-left));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), background-color 0.3s ease;
  min-height: 60px;

  @media (max-width: 768px) {
    padding: max(0.75rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(0.75rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  }

  @media (max-width: 480px) {
    padding: max(0.5rem, env(safe-area-inset-top)) max(0.75rem, env(safe-area-inset-right)) max(0.5rem, env(safe-area-inset-bottom)) max(0.75rem, env(safe-area-inset-left));
  }

  &.hide {
    transform: translateY(-100%);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

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
    gap: 1.25rem;
  }
`;

const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  text-decoration: none;
  margin-left: 1rem;
  transition: color 0.3s ease;
  gap: 0.5rem;

  &:hover {
    color: #FF9500;
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
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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

const MenuItem = styled(motion(Link))`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${props => props.active === 'true' ? 'color: #FF9500;' : ''}

  &:hover {
    color: #FF9500;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.active === 'true' ? '70%' : '0'};
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #FF9500;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 70%;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    ${props => props.active === 'true' ? 'background-color: rgba(255, 149, 0, 0.1);' : ''}

    &::after {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  touch-action: manipulation;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 44px;
    height: 44px;
    margin-left: 0.5rem;
  }
`;

const MenuLine = styled(motion.div)`
  width: 100%;
  height: 3px;
  background-color: white;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform;

  @media (max-width: 768px) {
    height: 4px;
  }
`;

const MobileMenu = styled(motion.div)`
  display: ${({ visible }) => visible === 'true' ? 'flex' : 'none'};
  touch-action: manipulation;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: calc(60px + env(safe-area-inset-top));
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.15);
    z-index: 99;
    padding: 1rem 0;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transform: translateY(${({ visible }) => visible === 'true' ? '0' : '-100%'});
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;

const MobileMenuItem = styled(motion.div)`
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const scrollToSection = (sectionId, navigate) => {
  if (window.location.pathname !== '/') {
    navigate('/');
    // Small delay to allow the home page to load
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  } else {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Don't hide navbar if mobile menu is open
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: t('navbar.home'), link: 'home' },
    { name: t('navbar.fleet'), link: 'fleet' },
    { name: t('navbar.map'), link: 'map' },
    { name: t('navbar.contact'), link: 'contact' },
  ];

  return (
    <>
      <Nav className={showNav || mobileMenuOpen ? '' : 'hide'}>
        <NavbarContainer>
          <MenuItems>
            {menuItems.map((item, i) => (
              item.isRoute ? (
                <MenuItem
                  key={i}
                  as={Link}
                  to={`/${item.link}`}
                  active={location.pathname === `/${item.link}` ? 'true' : 'false'}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </MenuItem>
              ) : (
                <MenuItem
                  key={i}
                  as={Link}
                  to="/"
                  active={location.pathname === '/' ? 'true' : 'false'}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.link, navigate);
                    setMobileMenuOpen(false);
                  }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item.name}
                </MenuItem>
              )
            ))}
          </MenuItems>

          <LanguageSwitcherWrapper>
            <LanguageSwitcher />
          </LanguageSwitcherWrapper>

          <SocialIcons>
            <a href="https://facebook.com/profile.php?id=61576732776125" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com/tadas_jet_rent/?locale=en%2F" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
              <FaInstagram size={24} />
            </a>
            <PhoneNumber href="tel:+37061470086">
              <FaPhoneAlt size={20} />
            </PhoneNumber>
          </SocialIcons>

          <LocationIndicator onClick={() => scrollToSection('map')} style={{ order: 4 }}>
            <LocationIcon />
            <LocationText>{t('Klaipėda')}</LocationText>
          </LocationIndicator>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <MenuLine animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 9 : 0 }} />
            <MenuLine animate={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <MenuLine animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -9 : 0 }} />
          </MobileMenuButton>
        </NavbarContainer>
      </Nav>

      <MobileMenu 
        visible={mobileMenuOpen.toString()}
      >
        {menuItems.map((item, index) => (
          <MobileMenuItem
            key={index}
            className="hover"
            as={item.isRoute ? Link : 'div'}
            to={item.isRoute ? `/${item.link}` : '#'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (item.isRoute) {
                navigate(`/${item.link}`);
              } else {
                scrollToSection(item.link, navigate);
              }
              setMobileMenuOpen(false);
            }}
          >
            {item.name}
          </MobileMenuItem>
        ))}
        <MobileMenuItem
          className="hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontWeight: '700', color: '#FF9500' }}
          onClick={() => {
            scrollToSection('contact');
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
