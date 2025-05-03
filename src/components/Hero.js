import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
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
    height: 100svh; /* Use small viewport height for mobile */
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
  
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
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin: 0 auto 1rem;
  font-weight: 800;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  text-align: center;
  display: block;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    max-width: 95%;
  }
  
  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
    max-width: 100%;
    padding: 0;
    line-height: 1.2;
  }
  
  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin: 0 auto 2rem;
  max-width: 700px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    max-width: 100%;
    line-height: 1.4;
    padding: 0 10px;
  }
`;

const Button = styled(motion.button)`
  background: #FF9500;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 20px rgba(255, 149, 0, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(255, 149, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.75rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }
`;


const Hero = () => {
  const { t } = useTranslation();

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
      } 
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6,
        ease: "easeOut" 
      } 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };


  return (
    <HeroSection id="home">
      <HeroOverlay />
      <WaveEffect />
      <HeroContent>
        <Title 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {t('hero.title')}
        </Title>
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          {t('hero.subtitle')}
        </Subtitle>
        <Button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          {t('hero.button')}
        </Button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
