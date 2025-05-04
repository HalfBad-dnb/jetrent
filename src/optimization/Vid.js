import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Video from '../components/Video';

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
  return (
    <HeroSection id="hero">
      <Video
        videoSrc="/assets/video/t.jet.v.3.maxquality.mp4"
        onLoadStart={() => console.log('Video loaded')}
        onError={(error) => console.error('Video error:', error)}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        enableOnMobile={true}
      />
      <WaveEffect />
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {t('hero.button')}
        </motion.button>
        
        <ScrollDown
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ScrollDownIcon />
          <span>{t('hero.scrollDown')}</span>
        </ScrollDown>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;