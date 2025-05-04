import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Video from './Video';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    min-height: 100svh;
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
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  
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
  gap: 1.5rem;
  
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
      <Video
        videoSrc="/assets/video/t.jet.v.3.maxquality.mp4"
        enableOnMobile={true}
      />
      <WaveEffect />
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '4rem',
            lineHeight: '1.2',
            fontWeight: '800',
            color: '#FF9500',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            marginBottom: '1rem',
            position: 'relative',
            willChange: 'transform, opacity'
          }}
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeOut'
            }}
            style={{
              willChange: 'transform, opacity'
            }}
          >
            {t('hero.title')}
          </motion.span>
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
              ease: 'easeOut'
            }}
          />
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <motion.p
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.6',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
              maxWidth: '800px',
              textAlign: 'center'
            }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            style={{
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, #FF9500, #FFD700)',
              marginBottom: '1rem'
            }}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
          className="primary-button"
          onClick={scrollToNextSection}
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
            transition: 'all 0.3s ease'
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
              duration: 0.5,
              ease: 'easeInOut'
            }}
          />
        </motion.button>
        
        <ScrollDown
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToNextSection}
        >
          <ScrollDownIcon />
          <span>{t('hero.scrollDown')}</span>
        </ScrollDown>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;