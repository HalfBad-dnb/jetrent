import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './Styles/Hero.css';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 100svh;
  }
`;

const HeroContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  margin-top: 60px; /* Height of the fixed header */
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem 4rem;
    margin-top: 0;
    min-height: 100vh;
  }
`;

const WaveEffect = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: url('/wave.svg');
  background-size: cover;
  z-index: 0;
  
  @media (max-width: 768px) {
    height: 100px; /* Smaller wave effect on mobile */
  }
`;

const ScrollDown = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  
  &:hover {
    color: #FF9500;
  }
`;

const ScrollDownIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
  }
`;

const HeroContent = styled.div`
  color: #fff;
  text-align: center;
  max-width: 1000px;
  z-index: 1;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  gap: 1.5rem;
  margin-top: 40px; /* Added margin to lower the content */
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    // Try to find the next section
    const nextSection = document.querySelector('#hero').nextElementSibling;
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to a reasonable scroll distance if no next section found
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <HeroSection id="hero">
      <WaveEffect />
      <HeroContainer>
        <HeroContent>
        <div style={{ position: 'relative', width: '100%' }}>
          <motion.div
            style={{
              overflow: 'hidden',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            <motion.h1
              initial={{ 
                opacity: 0, 
                x: -100,
                filter: 'blur(10px)'
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                filter: 'blur(0)'
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                filter: {
                  duration: 1,
                  ease: 'easeOut'
                }
              }}
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                lineHeight: '1.2',
                fontWeight: '800',
                color: '#FF9500',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                margin: '0 auto 1rem',
                position: 'relative',
                willChange: 'transform, opacity, filter',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                padding: '0 1rem',
                boxSizing: 'border-box'
              }}
              className="hero-title"
            >
              {t('hero.title').toUpperCase()}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #FF9500, #FFD700)',
                  transform: 'translateX(-100%)',
                  willChange: 'transform'
                }}
                animate={{
                  transform: 'translateX(0)'
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: 0.3
                }}
              />
            </motion.h1>
          </motion.div>
        </div>
        </HeroContent>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto 0 5vh',
          width: '100%',
          maxWidth: '500px',
          gap: '1.5rem'
        }}>
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              width: '100%',
              maxWidth: '90%',
              margin: '0 auto',
              padding: '0 1rem',
              boxSizing: 'border-box',
              textAlign: 'center',
              lineHeight: '1.5',
              wordBreak: 'break-word',
              hyphens: 'auto'
            }}
          >
            {t('hero.subtitle')}
          </motion.div>
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'linear-gradient(90deg, #FF9500, #FFD700)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '30px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)'
              },
              '&:active': {
                transform: 'scale(0.95)'
              },
              boxSizing: 'border-box'
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 1
            }}>
              {t('hero.button')}
            </span>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.5s ease'
              }}
              animate={{
                transform: 'translateX(100%)'
              }}
              transition={{
                duration: 1.5,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          </motion.button>
          <ScrollDown 
            onClick={scrollToNextSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('hero.scrollDown')}
            <ScrollDownIcon />
          </ScrollDown>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;