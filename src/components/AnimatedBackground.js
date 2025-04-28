import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const waveAnimation1 = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.8);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

const waveAnimation2 = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(1.2);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

const waveAnimation3 = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.6);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

const waveAnimation4 = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(1.4);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -999;
  overflow: hidden;
  background: linear-gradient(180deg, #001220 0%, #001f3f 100%);
`;

const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  min-height: 150px;
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat-x;
  background-position: 0 bottom;
  transform-origin: center bottom;
`;

const Wave1 = styled(Wave)`
  z-index: 15;
  opacity: 0.5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-size: 50% 100px;
  animation: ${css`${waveAnimation1} 25s linear infinite`};
`;

const Wave2 = styled(Wave)`
  z-index: 10;
  opacity: 0.75;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-size: 50% 120px;
  animation: ${css`${waveAnimation2} 20s linear infinite`};
`;

const Wave3 = styled(Wave)`
  z-index: 5;
  opacity: 0.3;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-size: 50% 80px;
  animation: ${css`${waveAnimation3} 30s linear infinite`};
`;

const Wave4 = styled(Wave)`
  z-index: 5;
  opacity: 0.2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-size: 50% 60px;
  animation: ${css`${waveAnimation4} 15s linear infinite`};
`;

// Animated particles for a dynamic effect
const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const particleAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

// Base particle component without animation
const ParticleBase = styled.div`
  position: absolute;
  display: block;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`;

// Pre-styled particle component with props passed as regular style attributes
const AnimatedParticle = styled(ParticleBase)`
  animation: ${css`${particleAnimation}`} var(--duration) linear infinite;
  animation-delay: var(--delay);
`;

const AnimatedBackground = () => {
    // Generate random particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 25; i++) {
      const size = Math.random() * 20 + 5;
      const positionLeft = Math.random() * 100;
      const positionTop = Math.random() * 100;
      const duration = Math.random() * 20 + 20;
      const delay = Math.random() * 10;
      
      particles.push(
        <AnimatedParticle 
          key={i}
          style={{
            left: `${positionLeft}%`,
            top: `${positionTop}%`,
            width: `${size}px`,
            height: `${size}px`,
            '--duration': `${duration}s`,
            '--delay': `${delay}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <BackgroundContainer>
      <Particles>
        {renderParticles()}
      </Particles>
      <WavesContainer>
        <Wave1 />
        <Wave2 />
        <Wave3 />
        <Wave4 />
      </WavesContainer>
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
