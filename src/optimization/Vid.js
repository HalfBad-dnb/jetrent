import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

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
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });

      video.addEventListener('error', (error) => {
        setIsLoading(false);
        setHasError(true);
        console.error('Video error:', error);
      });

      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .catch(error => {
            console.log('Autoplay prevented:', error);
            // For iOS, try to play on first user interaction
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
              const playVideoOnce = () => {
                video.play()
                  .catch(e => console.log('iOS play error:', e));
                
                document.removeEventListener('touchstart', playVideoOnce);
              };
              
              document.addEventListener('touchstart', playVideoOnce, { once: true });
            }
          });
      }
    }
  }, []);

  return (
    <HeroSection id="hero">
      <VideoContainer>
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '20px',
            borderRadius: '8px',
            color: 'white'
          }}>
            Loading video...
          </div>
        )}
        {hasError && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '20px',
            borderRadius: '8px',
            color: 'white'
          }}>
            Error loading video
          </div>
        )}
        <BackgroundVideo
          ref={videoRef}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video/optimized/t.jet.v.4.web.optimized.small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
      </VideoContainer>
      <WaveEffect />
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          {t('hero.button')}
        </motion.button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;