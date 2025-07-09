import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import "./i18n";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Activities from "./components/pages/service_pages/Activities";
import Rent from "./components/pages/service_pages/Rent";
import Travel from "./components/pages/service_pages/Travel";

import GlobalStyle from "./styles";



// Styled Components
const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background-color: #000;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  /* Prevent iOS overscroll bounce */
  overscroll-behavior: none;
  
  /* Better mobile viewport handling */
  @supports (-webkit-touch-callout: none) {
    /* iOS specific styles */
    height: -webkit-fill-available;
  }
`;

// Fallback image component


const VideoBackground = styled.video`
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  top: 0;
  left: 0;
`;

const FallbackWrapper = styled.div.attrs(({ $bgImage, $isVisible }) => ({
  style: {
    backgroundImage: $bgImage ? `url(${$bgImage})` : 'none',
    opacity: $isVisible ? 1 : 0,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.5s
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  z-index: 2;
`;


const VideoBackgroundComponent = () => {
  const [videoError, setVideoError] = useState(false);
  const videoPath = "/assets/VideoBackround/background_video.mp4";
  const fallbackImage = "/assets/VideoBackround/background.jpg";
  
  // On video error, show fallback image
  if (videoError) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: '#1a1a1a'
      }}>
        <img 
          src={fallbackImage} 
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={(e) => {
            e.target.style.opacity = 0;
          }}
        />
      </div>
    );
  }

  return (
    <VideoBackground 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="auto"
      onError={() => setVideoError(true)}
    >
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>
  );
};

const MainContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll to section when location state contains scrollTo
  useLayoutEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout to ensure the component is rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Clear the state to prevent scrolling on re-renders
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location, navigate]);
  
  return (
    <>
      <VideoBackgroundComponent />
      <AppContainer>
        <Navbar />
        <Hero />
        <Services />
        <Fleet />
        <Map />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
};

const ActivitiesPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Activities />
        <Footer />
      </AppContainer>
    </>
  );
};

const RentPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Rent />
        <Footer />
      </AppContainer>
    </>
  );
};

const TravelPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Travel />
        <Footer />
      </AppContainer>
    </>
  );
};

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <>
            <ScrollToTop />
            <MainContent />
          </>
        } />
        <Route path="/activities" element={
          <>
            <ScrollToTop />
            <ActivitiesPage />
          </>
        } />
        <Route path="/rent" element={
          <>
            <ScrollToTop />
            <RentPage />
          </>
        } />
        <Route path="/travel" element={
          <>
            <ScrollToTop />
            <TravelPage />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
