import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWater, FaArrowDown } from 'react-icons/fa';

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
`;

const HeroContent = styled.div`
  color: #fff;
  text-align: center;
  max-width: 1000px;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 700px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
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
`;

const ScrollDownIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  svg {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`;

const WaterIcon = styled(FaWater)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #BBDEFB;
`;

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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

  const scrollVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <HeroSection id="home">
      <HeroOverlay />
      <WaveEffect />
      <HeroContent>
        <WaterIcon />
        <Title 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          JET ADVENTURES
        </Title>
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Experience the ultimate thrill of riding the waves with our premium jet ski rentals. Perfect for beginners and adrenaline junkies alike.
        </Subtitle>
        <Button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          Book Now
        </Button>
      </HeroContent>
      <ScrollDownIndicator 
        onClick={scrollDown}
        variants={scrollVariants}
        initial="initial"
        animate="animate"
      >
        Scroll Down
        <FaArrowDown />
      </ScrollDownIndicator>
    </HeroSection>
  );
};

export default Hero;
