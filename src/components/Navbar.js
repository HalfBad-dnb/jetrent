import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import LanguageSwitcher from "./LanguageSwitcher";
import "./Styles/Navbar.css";

// Add icons to the library
library.add(faBars, faTimes);

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(event) {
      // If click is inside the menu or on the menu button, do nothing
      if (menuRef.current?.contains(event.target) || 
          event.target.closest('.mobile-menu-btn')) {
        return;
      }
      // If click is outside the menu, close it
      setIsMenuOpen(false);
    }

    // Add event listeners
    document.addEventListener('click', handleClickOutside, true);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isMenuOpen]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const scrollPosition = window.scrollY + 100; // Start detection slightly below header
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // At the very top of the page
      if (scrollPosition < windowHeight * 0.3) {
        setActiveSection('home');
        return;
      }

      // Near the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Check sections with dynamic thresholds
      const sections = [
        { id: 'fleet', threshold: 0.4 },
        { id: 'services', threshold: 0.4 },
        { id: 'map', threshold: 0.3 },
        { id: 'contact', threshold: 0.2 }
      ];

      for (const { id, threshold } of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          const scrollThreshold = windowHeight * threshold;
          
          if (
            scrollPosition >= elementTop - scrollThreshold &&
            scrollPosition < elementTop + elementHeight - scrollThreshold
          ) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when route changes and set initial active section
  useEffect(() => {
    setIsMenuOpen(false);
    
    // Set initial active section from hash if present
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setActiveSection(sectionId);
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Should match your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        // Add a small delay to ensure the menu is closed before scrolling
        requestAnimationFrame(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          window.history.pushState({}, '', `#${sectionId}`);
        });
      }
    }
  };

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout to ensure the page has rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent scrolling on back/forward navigation
          window.history.replaceState({}, document.title);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location.state]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="menu-items">
          <a 
            href="/" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              } else {
                navigate('/');
              }
            }}
          >
            {t('nav.home')}
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
              setActiveSection('services');
            }}
          >
            {t('nav.activities')}
          </a>
          <a 
            href="#fleet" 
            className={`nav-link ${activeSection === 'fleet' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('fleet');
              setActiveSection('fleet');
            }}
          >
            {t('nav.fleet')}
          </a>
          <a 
            href="#map" 
            className={`nav-link ${activeSection === 'map' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('map');
            }}
          >
            {t('nav.map')}
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            {t('nav.contact')}
          </a>
        </div>
        
        <div className="desktop-social-icons">
          <a href="https://facebook.com/profile.php?id=61576732776125" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={18} />
          </a>
          <a href="https://www.instagram.com/jetrent.lt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
          <a href="tel:+37012345678" className="phone-number" aria-label="Phone">
            <FaPhoneAlt size={16} />
          </a>
          <a href="#map" className="map-icon" aria-label="Map location" onClick={(e) => {
            e.preventDefault();
            scrollToSection('map');
          }}>
            <FaMapMarkerAlt size={16} />
          </a>
        </div>
        
        <div className="header-right">
          <div className="desktop-language-switcher">
            <LanguageSwitcher />
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(prev => !prev);
            }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={isMenuOpen ? 'times' : 'bars'} />
          </button>
        </div>
      </div>
      
      <div 
        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
        ref={menuRef}
      >
        <div className="mobile-menu-content">
          <button 
            className="nav-link mobile-nav-button"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              } else {
                navigate('/');
              }
              setIsMenuOpen(false);
            }}
          >
            {t('nav.home')}
          </button>
          <button 
            className="nav-link mobile-nav-button"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('services');
              setActiveSection('services');
            }}
          >
            {t('nav.activities')}
          </button>
          <button 
            className="nav-link mobile-nav-button"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('fleet');
              setActiveSection('fleet');
            }}
          >
            {t('nav.fleet')}
          </button>
          <button 
            className="nav-link mobile-nav-button"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('map');
            }}
          >
            {t('nav.map')}
          </button>
          <button 
            className="nav-link mobile-nav-button"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('contact');
            }}
          >
            {t('nav.contact')}
          </button>
          
          {/* Mobile Language Switcher */}
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
